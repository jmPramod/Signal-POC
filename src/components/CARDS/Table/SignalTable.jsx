import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { AlertDestructive } from "./Alert"
import React from "react"
import { fetchHistory } from "@/utils/API.services"
import { AlertDemo } from "./NotAlert"
  

  export function TableDemo({props}) {
    console.log("hia");
    
    const [historyData,setHistoryData]=React.useState(null)
    React.useEffect(()=>{
    
      const fetchTopHistory=async()=>{
        try {
          let res=await  fetchHistory()
          if(res){
            console.log("res111",res.data);

            setHistoryData(res.data)
          }
          
        } catch (error) {
          console.log("res111 err",error);
          
        }
      
    
        
      }
      fetchTopHistory()
    },[props])
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Colour</TableHead>
            {/* <TableHead></TableHead>
            <TableHead></TableHead> */}
            <TableHead className="">TimeStamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {historyData&&historyData.map((invoice,ind) => (
            <TableRow key={ind}  
            // className={
              // invoice.signalColor === "red" ? "border-2 border-red-500" : ""
            // }
            
            >
              <TableCell className="font-medium">   {invoice.signalColor==="red"?  <AlertDestructive invoice={invoice.signalColor} />:<AlertDemo invoice={invoice.signalColor}/>}
              </TableCell>
              <TableCell className="font-medium">


              {invoice.signalColor==="red"?  <AlertDestructive invoice={invoice.timestamp} />:<AlertDemo invoice={invoice.timestamp}/>}
              </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          {/* <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow> */}
        </TableFooter>
      </Table>
    )
  }
  