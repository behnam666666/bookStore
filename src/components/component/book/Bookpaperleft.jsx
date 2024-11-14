
import { Box, Avatar, Typography, TextField ,Button } from "@mui/material";
import noise from "../../../assets/logo/noise.png";


const Bookpaperleft = ({children , w , h}) => {
  return (
    <Box
      component="div"
      sx={{
        background: "rgba(0,0,0,0)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // borderLeft: "1px solid #B0B0B0",
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
          borderRadius: "0 14px 14px 0",
        }}
      >
    
        {children}


        <Box
          sx={{
            position: "absolute",
            left: "0",
            height: "100%",
            width: "8%",
            transform: "rotate(180deg)",
            pointerEvents: "none",
          }}
          style={{
            background:
              "linear-gradient(90deg , rgba(0,0,0,0.2) 0% , rgba(255,255,255,0) 100%)",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            left: "0",
            height: "100%",
            width: "45%",
            transform: "rotate(180deg)",
            pointerEvents: "none",
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
            pointerEvents: "none",
            width: `${w}px`,
            height:  `${h}px`,
          }}
        ></Avatar>
      </Box>
    </Box>
  );
};

export default Bookpaperleft;
