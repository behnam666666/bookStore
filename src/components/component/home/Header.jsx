import { Box, Typography, TextField, Avatar } from "@mui/material";
import StyledBadge from "../../stylecomponents/StyledBadge";
import Grid from "@mui/material/Grid2";

import search from "../../../assets/logo/search.svg";
import osi from "../../../assets/logo/osi.png";
import alarm from "../../../assets/logo/alarm.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Header = () => {
  return (
    <>
    
        <Box
          component="div"
          sx={{
            width: "calc(100% - 145px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft:"120px",
            marginTop:"20px",
            position:"relative",
            zIndex:"10",
            // height:"50px"

          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={search}
              alt="Home Icon"
              sx={{
                marginRight: "-15px",
                position: "relative",
                zIndex: "1",
                width: 24,
                height: 24,
                backgroundColor: "rgba(255, 255, 255, 1)",
                padding: "6.5px",
                border: "1px solid rgba(220, 218, 206, 1)",
                borderRight: "none",
                borderRadius: "  12px 0 0 12px",
              }}
            />

            <TextField
              size="small"
              id="outlined-textarea"
              label="جستوجو"
              placeholder="جستجوی نام کتاب ، نویسنده ، نشر ،..."
              sx={{
                width: "275px",
                backgroundColor: "rgba(255, 255, 255, 1)",
                border: " 1px solid rgba(220, 218, 206, 1)",
                borderRadius: "12px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderRadius: "12px" },
                  "&:hover fieldset": {
                    borderColor: "rgba(220, 218, 206, 1)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(138, 138, 138, 1)",
                    borderWidth: 0,
                  },
                  "& input": {
                    color: "rgba(138, 138, 138, 1)",
                    fontSize: "14px",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(138, 138, 138, 1)", // تغییر رنگ label
                  fontSize: "14px",
                  "&.Mui-focused": {
                    color: "rgba(138, 138, 138, 1)", // تغییر رنگ label در حالت فوکوس
                    fontSize: "14px",
                  },
                },
              }}
            />
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              variant="dot"
            >
              <Avatar src={osi} sx={{ width: "46px", height: "46px" }} />
            </StyledBadge>

            <Typography
              variant="h6"
              margin="0 36px 0 12px"
              sx={{ fontWeight: "600" }}
            >
              Pooria Ostowar
            </Typography>
            <Box
              component="img"
              src={alarm}
              alt="Home Icon"
              sx={{ width: 24, height: 24 }}
            />
          </Box>
        </Box>
      
    </>
  );
};

export default Header;
