import { Box } from "@mui/material";

import loadingbook from "../../../assets/logo/loadingbook.webm"

const Loadingveiwbook1 =()=>{
    return(
        <>
        
            <Box component="video"  autoPlay loop   src={loadingbook}  sx={{width:"10vw"}}/>

        </>
    )
}

export default Loadingveiwbook1;