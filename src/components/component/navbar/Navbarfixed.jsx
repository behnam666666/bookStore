import {
    Box,
    Tabs,
    Tab,

  } from "@mui/material";
  import { useState, useRef } from "react";
  import HomeIcon from "../../../assets/logo/home.svg";
  import Books from "../../../assets/logo/books.svg";
  import Book from "../../../assets/logo/book.svg";
  import Setting from "../../../assets/logo/seting.svg";
  import Hamber from "../../../assets/logo/hamber.svg";
  import Save from "../../../assets/logo/save.svg";
  import logo from "../../../assets/logo/logo.png";
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  // import SwiperCore, { Pagination, Navigation } from "swiper";
  
import Header from "../home/Header";


const Navbarfixed = () =>{

  const [value, setValue] = useState(0);

  const tabProps = (index) => {
    return {
      id: `sidbar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    return(
        <>
          <Header />

                <Box
          width={100}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "90vh",
            position: "fixed",
            borderRight: 1,
            borderColor: "rgba(220, 218, 206, 1)",
            marginTop: "5vh",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Home Icon"
            sx={{ width: 40, height: 40 }}
          />
          <Tabs
            textColor="inherit"
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              // استایل خط فعال
              style: {
                backgroundColor: "rgba(222, 97, 100, 1)",
                width: "40px", // رنگ خط فعال
                height: "40px", // ارتفاع خط فعال
                borderRadius: "100%",
                marginLeft: "25px",
                marginTop: "5px",
                zIndex: "-1", // گوشه‌های گرد خط فعال
                // انیمیشن حرکت خط فعال
              },
            }}
            // role="navigation"
          >
            {/* <Box component="div" sx={{ width:"35px", height:"35px" , position:"absolute" , bgcolor:"rgba(222, 97, 100, 1)" , borderRadius:"100%" , marginLeft:"27px"}}></Box> */}
            <Tab
              icon={
                <Box
                  component="img"
                  src={HomeIcon}
                  alt="Home Icon"
                  sx={{ width: 24, height: 24 }}
                />
              }
              {...tabProps(0)}
            />
            <Tab
              icon={
                <Box
                  component="img"
                  src={Books}
                  alt="Home Icon"
                  sx={{ width: 24, height: 24 }}
                />
              }
              {...tabProps(1)}
            />
            {/* <Tab
              icon={
                <Box
                  component="img"
                  src={Book}
                  alt="Home Icon"
                  sx={{ width: 24, height: 24 }}
                />
              }
              {...tabProps(2)}
            /> */}
            <Tab
              icon={
                <Box
                  component="img"
                  src={Save}
                  alt="Home Icon"
                  sx={{ width: 24, height: 24 }}
                />
              }
              {...tabProps(2)}
            />
            <Tab
              icon={
                <Box
                  component="img"
                  src={Setting}
                  alt="Home Icon"
                  sx={{ width: 24, height: 24 }}
                />
              }
              {...tabProps(3)}
            />
          </Tabs>
          <Box
            component="img"
            src={Hamber}
            alt="Home Icon"
            sx={{ width: 30, height: 30 }}
          />
        </Box>
        </>
    )
}


export default Navbarfixed