import { io } from "socket.io-client"

const base_url="http://localhost:3500"

const socket=io(base_url,{
    query:{}
})
export const socketConnect=()=>{
    //if user vaild then allow connect
    // if(!user){}
    socket.connect()
}
export const disconnectSocket=()=>{

    // if(coonected){}
    socket.disconnect()
}