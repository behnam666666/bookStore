import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import SwiperCore, { Pagination, Navigation } from "swiper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbarfixed from "../navbar/Navbarfixed";

import Header from "./Header";

import Singlebook from "./Singlebook";

import Home from "./Home";
const Contentpage = ({ newbooks, loading }) => {
  const [showbooknav, setshowbooknav] = useState();
  const [viewsinglebook, setviewsinglebook] = useState(false);
  return (
    <>
      

      <Box
        component="div"
        sx={{
          width: "calc(100% - 145px)",
          marginLeft: "101px",
          padding: "0 22px",
          paddingTop: "22px",
          overflow: "hidden",
          position:"relative",
          top:"-90px"
        }}
      >
        <Grid container sx={{ position: "relative" }}>
            <motion.div
              initial={{ y: 100, opacity: 0 }} // شروع از پایین و غیرقابل مشاهده
              animate={{ y: 0, opacity: 1 }} // انیمیشن به بالا و قابل مشاهده
              transition={{ duration: 0.5 }} // مدت زمان انیمیشن
              
              style={{
                position: "relative",
                height: "100%",
                width: "100%",
                pointerEvents: "auto",
              }} // برای نمایش بهتر، موقعیت مطلق داده شده است
            >
              <Home
                newbooks={newbooks}
                loading={loading}
                showbooknav={showbooknav}
                setshowbooknav={setshowbooknav}
                
              />
            </motion.div>
        </Grid>
      </Box>
    </>
  );
};

export default Contentpage;
