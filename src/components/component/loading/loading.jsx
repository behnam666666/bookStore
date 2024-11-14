
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';
const Loading1 = () =>{
    return(
        <>
        {/* <div style={{width:"300px" , height:"300px" , backgroundColor:"red", position:"relative"  , zIndex:"1001"}}></div> */}

        <Skeleton variant="rounded" animation="wave" width={"100%"} height={"70%"} sx={{bgcolor:"rgb(173, 172, 166)"}} />
         <Skeleton variant="rounded" animation="wave" width={"100%"} height={"5%"} sx={{bgcolor:"rgb(173, 172, 166)" , marginTop:"5px"}} />
         <Skeleton variant="rounded" animation="wave" width={"68%"} height={"5%"} sx={{bgcolor:"rgb(173, 172, 166)" , marginTop:"5px" ,marginRight:"4%", display:"inline-block"}} />

         <Skeleton variant="rounded" animation="wave" width={"28%"} height={"5%"} sx={{bgcolor:"rgb(173, 172, 166)" , marginTop:"5px", display:"inline-block"}} />

        
         
        </>
    )
}

export default Loading1;