import React, { useContext, useState } from "react";
import { styles } from "./styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { login } from "@/utils/API.services";
import { GlobalContext } from "@/context/GlobalContext";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(GlobalContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const payload = {
      email: formValues.email,
      password: formValues.password,
    };

    let user = await login(payload);
    if (user && Object.keys(user?.data).length !== 0) {
      localStorage.setItem("User", JSON.stringify(user?.data));
      setUser(user?.data);
      navigate("/home");
    }
    setLoading(false);
  };
  // Animation for Login text (top to bottom)
// Animation for Login text (top to bottom)
const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 1 }, // Adding delay of 1 second
  },
};

  // Framer Motion animation variants
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const containerVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%", // Original width
      transition: {
        duration: 1, // Time for animation
        ease: "easeInOut",
      },
    },
  };
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <styles.outerContainer>
           <motion.div
       variants={containerVariants}
       initial="hidden"
       animate="visible"
       style={{
         display: "flex",
         background:"white",
         height:"100%",
        //  flexDirection: "column",
         alignItems: "center",
         justifyContent: "center",
         overflow: "hidden",
       }}
     >

      <styles.leftContainer>
        <styles.image src="carRoad.png" alt="img" />
      </styles.leftContainer>

      <styles.rightContainer>
        {/* Login Text Animation */}
        <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <Typography variant="h4">Login</Typography>
          </motion.div>      
          
           <styles.formEle action="" onSubmit={handleSubmit}>
          {/* Email Input with Animation */}
          <styles.emailAnimation
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 1 }}
          >
            <styles.inputField
              id="outlined-basic"
              variant="outlined"
              label="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </styles.emailAnimation>

          {/* Password Input with Animation */}
          <styles.passwordAnimation
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay:1 }}
          >
            <FormControl
              sx={{ background: "white", width: "100%" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formValues.password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </styles.passwordAnimation>

          {/* Button with Delayed Animation */}
          <styles.buttonAnimation
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, delay: 1.5 }} // Appears after 1 second
          >
            <Button type="submit">{!loading ? "Login" : "Logging..."}</Button>
       <Typography>Don't have an account yet? <u onClick={()=>{navigate("/sign-up")}} className="cursor-pointer">Sign up</u></Typography>
          </styles.buttonAnimation>
        </styles.formEle>
      </styles.rightContainer>

     </motion.div>
    </styles.outerContainer>
  );
};

export default Login;
