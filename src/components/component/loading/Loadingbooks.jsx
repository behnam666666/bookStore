
import Skeleton from '@mui/material/Skeleton';

const Loadingbooks = () =>{
    return(
        <>
        <Skeleton variant="rounded" animation="wave" width={"100%"} height={"70%"} sx={{bgcolor:"rgb(173, 172, 166)"}} />
         <Skeleton variant="rounded" animation="wave" width={"100%"} height={"5%"} sx={{bgcolor:"rgb(173, 172, 166)" , marginTop:"5px"}} />
         <Skeleton variant="rounded" animation="wave" width={"68%"} height={"5%"} sx={{bgcolor:"rgb(173, 172, 166)" , marginTop:"5px" ,marginRight:"4%", display:"inline-block"}} />

         <Skeleton variant="rounded" animation="wave" width={"28%"} height={"5%"} sx={{bgcolor:"rgb(173, 172, 166)" , marginTop:"5px", display:"inline-block"}} />

        </>
    )
}


export default Loadingbooks;