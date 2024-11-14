
;

import { Box, Avatar } from "@mui/material";

import noise from "../../../assets/logo/noise.png";



const Bookpaperright = ({children , w , h}) =>{
    return(
        <Box
        component="div"
        sx={{
          background: "rgba(0,0,0,0)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // borderRight: "1px solid #B0B0B0",
        }}
      >
        <Box
          sx={{
            width: `${w}px`,
          height: `${h}px`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "white",
            position: "relative",
            borderRadius: "14px 0 0 14px",
          }}
        >
          {children}
          <Box
            sx={{
              position: "absolute",
              right: "0",
              height: "100%",
              width: "8%",
              pointerEvents:"none"
            }}
            style={{
              background:
                "linear-gradient(90deg , rgba(0,0,0,0.2) 0% , rgba(255,255,255,0) 100%)",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              right: "0",
              height: "100%",
              width: "45%",
              pointerEvents:"none"
            }}
            style={{
              background:
                "linear-gradient(90deg , rgba(0,0,0,0.05) 0% , rgba(255,255,255,0) 100%)",
            }}
          ></Box>
          <Avatar
            src={noise}
            variant="square"
            sx={{
              position: "absolute",
              top: "0",
              bottom: "0",
              right: "0",
              left: "0",
              zIndex: "100",
              pointerEvents:"none",
              width: `${w}px`,
          height: `${h}px`,
            }}
          ></Avatar>
        </Box>
      </Box>
    )
}


export default Bookpaperright;