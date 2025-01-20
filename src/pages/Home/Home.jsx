import { initializeSocket, subscribeToEvent, disconnectSocket } from "@/Socket";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { GlobalContext } from "@/context/GlobalContext";
import { Typography } from "@mui/material";
import { Card1 } from "@/components/CARDS/Card1/Card1";
import { SkeletonCard } from "@/components/CARDS/SkelitonCard/SkelitonCard";
import { SignalChart } from "@/components/SignalCharts/SignalCharts";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
import { Card } from "@/components/ui/card";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Switch } from "@/components/ui/switch";
import { Graph2 } from "@/components/Graph2/Graph2";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { LoginModel } from "@/components/LoginModel/LoginModel";
const Home = () => {
  const { user, setUser } = React.useContext(GlobalContext);
  const [isAirplaneModeOn, setIsAirplaneModeOn] = useState(false);
  const [randomObject, setRandomObject] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  const [showNotification, setShowNotification] = useState(true);
  const [dataArray, setDataArray] = useState([]);
  const [isConnected, setIsConnected] = useState(true); // Track connection status
  const [msg, setmsg] = useState("");
  const showRedToast = () => {
    toast("This is a Red Signal!", {
      style: {
        backgroundColor: "red",
        color: "white",
      },
    });
  };
  const handleToggle = (checked) => {
    setIsAirplaneModeOn(checked);
    console.log("Airplane mode is", checked ? "ON" : "OFF");
  };

  useEffect(() => {

    if (isConnected && user) {
      const socket = initializeSocket(user.name);

      subscribeToEvent("message", (data) => {
        console.log("Random object received:", data);
        setRandomObject(data);
        setDataArray((prevData) => [...prevData, data]);
      });

      subscribeToEvent("getonlineuser", (users) => {
        console.log("Online users:", users);
        setOnlineUsers(users); // Update the online users list
      });

      return () => {
        disconnectSocket();
      };
    }
  }, [isConnected]);

  const handleDisconnect = () => {
    disconnectSocket();
    setIsConnected(false);
    setRandomObject(null);
  };

  const handleConnect = () => {
    setIsConnected(true);
  };
  useEffect(() => {
    if (randomObject && randomObject.signalColor == "red" && showNotification) {
      showRedToast();
    }
  }, [randomObject, showNotification]);
  useEffect(() => {
    if (showNotification) {
      setmsg("Notification enabled");
    } else {
      setmsg("Notification Dissabled");
    }
    const timeout = setTimeout(() => {
      setmsg("");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [showNotification]);
  useEffect(()=>{
    let res = localStorage.getItem("User");
    if(!user&&!res){
      setIsOpen(true)
    }else{
      setIsOpen(false)
      
    }
  },[user,isOpen])
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>


      <styles.outerContainer >
        <styles.leftContainer>
          <styles.leftTop>
            <styles.welcomeCard 
            
            >
              <div className="flex md:justify-between justify-center  ">
                <div>
                  <styles.WelcomeText variant="h4">Welcome Back!</styles.WelcomeText>
                  <styles.image
                    src={user && user.images?.imageUrl}
                    alt="image"
                  />
                </div>
                <div className="cursor-pointer flex items-end flex-col">
                  {showNotification ? (
                    <NotificationsIcon
                      color="red"
                      onClick={() => setShowNotification(false)}
                    />
                  ) : (
                    <NotificationsOffIcon
                      color="red"
                      onClick={() => setShowNotification(true)}
                    />
                  )}
                </div>
              </div>

              <styles.info>
                <Typography>Name:{user && user.name}</Typography>

                <Typography>Phone:{user && user.phone}</Typography>

                <Typography>Email:{user && user.email}</Typography>
                <p className="text-red-400">{msg !== "" && msg}</p>
              </styles.info>
            </styles.welcomeCard>
          </styles.leftTop>
          <styles.leftbottom>
            <Card className="w-full  p-3 overflow-y-auto ">
              <div className="flex items-center">
            
              <Switch
                id="airplane-mode"
            
                checked={isAirplaneModeOn}
                onCheckedChange={handleToggle}
              /> 
                <Typography variant="h6"     className="px-4">History/Online User</Typography>
              </div>

              <div className="max-h-[414px] ">
                {dataArray &&isAirplaneModeOn&&
                  [...dataArray].reverse().map((v, i) => (
                    <>
                      <div
                        key={i}
                        className={`p-2 border-${v.signalColor}-500 `}
                      >
                        <div className="flex gap-2 justify-between  ">
                          <p
                            style={{ background: ` ${v.signalColor}`, font: "bold",borderRadius:"5px",padding:"2px",color:"" }}
                          >
                            {v.signalColor}
                          </p>
                          <p>{v.timestamp}</p>
                        </div>
                      </div>
                      <hr />
                    </>
                  ))}

               {!isAirplaneModeOn&& <ul>
                  {onlineUsers &&
                    onlineUsers.map((username, index) => (
                      
                      <div key={index} className="flex items-center justify-start gap-3">


                
                        <styles.image2
                    src={username && username.image}
                    alt="image"
                  />
                          <li >{username.name}</li>
                      </div>
                    ))}
                </ul>}
              </div>
            </Card>
          </styles.leftbottom>
        </styles.leftContainer>
        <styles.rightContainer>
          <Typography typography="h4" className="p-2 text-center font-bold">
            <u>Current Signal Status</u>
          </Typography>
          <styles.rightTop>
            <SignalChart chartData={randomObject && randomObject.chartData} />

            {randomObject ? (
              <div className="flex flex-col justify-between gap-1">
                <Card1 props={randomObject && randomObject} />
                <div>
                  {isConnected ? (
                    <>
                      <Button onClick={handleDisconnect}>
                        Stop Connection
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={handleConnect}>Start Connection</Button>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <>
                <SkeletonCard />
                <div>
                  {isConnected ? (
                    <>
                      <Button onClick={handleDisconnect}>
                        Stop Connection
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={handleConnect}>Start Connection</Button>
                    </>
                  )}
                </div>
              </>
            )}
          </styles.rightTop>

          <styles.rightBottom>
            <Graph2 chartData={randomObject && randomObject.chartData} />
          </styles.rightBottom>
        </styles.rightContainer>
      </styles.outerContainer>

      <Toaster />

      <LoginModel setIsOpen={setIsOpen}/>
        </Dialog>
      );
};

export default Home;
