import { Box, Typography, TextField, Avatar } from "@mui/material";
import StyledBadge from "../../stylecomponents/StyledBadge";
import Grid from "@mui/material/Grid2";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import search from "../../../assets/logo/search.svg";
import osi from "../../../assets/logo/osi.png";
import logout from "../../../assets/logo/logout.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { getuser ,logoutUser } from "../../../services/contactService";
const Header = () => {
  const [userstatus, setuserstatus] = useState(401);
  const [userprofile, setuserprofile] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { status, data } = await getuser();

        console.log("status user :", data);
        setuserprofile(data);
        setuserstatus(status);
      } catch (err) {
        setuserstatus(err.response.status);
        if (err.response) {
          const { status } = err.response;
          console.error(`status user: ${status}`);
        } else {
          console.error("status user:", err.message);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Box
        component="div"
        sx={{
          width: "calc(100% - 145px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "120px",
          marginTop: "20px",
          position: "relative",
          zIndex: "10",
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
              backgroundColor: "rgba(240, 239, 230, 1)",
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
              backgroundColor: "rgba(240, 239, 230, 1)",
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
          {userstatus == 401 ? (
            ""
          ) : (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              variant="dot"
            >
              <Avatar src={osi} sx={{ width: "46px", height: "46px" }} />
            </StyledBadge>
          )}



            {userstatus == 401 ? (
              <Typography
              variant="h6"
              margin="0 36px 0 12px"
              sx={{ fontWeight: "500" }}
            >
              <Link to={`/`} style={{ color: "black", textDecoration: "none" }}>
                ورود
              </Link>
              </Typography>
            ) : (
              <>
              <Typography
            variant="h6"
            margin="0 12px 0 12px"
            sx={{ fontWeight: "500" }}
          >
              {userprofile.firstname} {userprofile.lastname}
              </Typography>
              <Box component="img" sx={{width:"30px" , height:"30px" , cursor:"pointer"}} src={logout} onClick={()=>{logoutUser();}} />
              </>
              
            )}
          


          
        </Box>
      </Box>
    </>
  );
};

export default Header;
