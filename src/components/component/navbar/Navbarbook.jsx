import { Box, Typography } from "@mui/material";

import Grid from "@mui/material/Grid2";
import { useState, useRef } from "react";

import book1 from "../../../assets/book1.png";
import stars from "../../../assets/logo/stars.svg";
import arrowLeft from "../../../assets/logo/arrowLeft.svg";
import arrowRight from "../../../assets/logo/arrowRight.svg";
import paperbookeffect from "../../../assets/logo/paperbookeffect.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Loading1 from "../loading/loading";
const Navbarbook = ({ gridcount, setgridcount, newbooks, loading , titlenav , setshowbooknav  }) => {
  const swiperRef = useRef(null);
  const handleSlideToCenter = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index, 1000); // انتقال به اسلاید مورد نظر با انیمیشن
      swiperRef.current.update(); // به روز رسانی Swiper برای اطمینان از انیمیشن صحیح
    }
  };
  const [centerIndex, setCenterIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCenterIndex(swiper.realIndex); // ایندکس اسلاید مرکزی
  };
  return (
    <>
      <Grid
        size={gridcount.grid1}
        sx={{ marginTop: "30px", transition: ".7s"  }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight={600}>
              {titlenav}
          </Typography>
          <Box>
            <Box
              component="img"
              src={arrowRight}
              onClick={() => swiperRef.current?.slideNext()}
              sx={{
                padding: "10px",
                border: "1px solid rgba(220, 218, 206, 1)",
                borderRadius: "100%",
              }}
            />
            <Box
              component="img"
              src={arrowLeft}
              onClick={() => swiperRef.current?.slidePrev()}
              sx={{
                padding: "10px",
                border: "1px solid rgba(220, 218, 206, 1)",
                borderRadius: "100%",
                marginLeft: "20px",
              }}
            />
          </Box>
        </Box>

        {loading==404? <h1 style={{textAlign:"center" }}>داده ای  برای چاپ موجود نیست 😓🤷‍♂️</h1> :""}
        {loading==401? <h1 style={{textAlign:"center" }}>لطفا ثبت نام یا ورود کنید 😊✌️</h1> :
        <Swiper
          style={{
            height: "400px",
            marginTop: "-30px",
            transition: ".7s",
          }}
          slidesPerView={gridcount.grid1 == 12 ? 5 : 3}
          spaceBetween={108}
          centeredSlides={true}
          pagination={{ clickable: false }}
          navigation={false}
          loop={true}
          dir="rtl"
          speed={1000}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
        >
          {loading ==200  ?  newbooks.map((book, index) => (
            <SwiperSlide
              key={index}
              onClick={() =>{ handleSlideToCenter(index) ; window.scrollTo({ top: 0, behavior: 'smooth' }) ;}}
              style={{
                margin: "auto",
                position: "relative",
                top: centerIndex === index ? "0px" : "48px",
                width: centerIndex === index ? "224px" : "192px",
                height: centerIndex === index ? "389px" : "341px",
                transition: "height  width .7s",
              }}
            >
              
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  direction: "ltr",
                  position: "relative",
                  width: "100%",
                  transition: ".7s",
                }}
                onClick={() => {
                  setgridcount({ grid1: 7, grid2: 5 });
                  setshowbooknav(book.id)
                  
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: centerIndex === index ? "224px" : "192px",
                    height: centerIndex === index ? "389px" : "341px",
                    transition: ".3s",
                  }}
                  style={{ direction: "rtl" , position:"relative" }}
                >
                  <Box
                    component="div"
                    
                    sx={{
                      width: centerIndex === index ? "224px" : "192px",
                      height: centerIndex === index ? "322px" : "276px",
                      background:`url(${book.image_url})`,
                      backgroundRepeat:"no-repeat",
                      backgroundPosition:"center",
                      backgroundSize:"cover",
                      transition: ".3s",
                      borderRadius: "5px",
                      position:"relative",
                      zIndex:"1",
                      overflow:"hidden"
                    }}
                  >
                     <Box  component="div" sx={{transition: ".3s", position:"absolute" , boxShadow:"-5px 0 21px 10px" , height:"100%" , width:"0px" , background:"red"}}></Box>
                    </ Box>
                  <Box
                  component="img"
                  src={paperbookeffect}
                
                  sx={{ transition: ".3s", position: "absolute",top:"0" , right:"7px" , zIndex: "0" ,  height: centerIndex === index ? "322px" : "276px" , transform:"translateX(15px)" }}
                  />

                  <Typography
                    variant="h6"
                    sx={{
                      width: "100%",
                      fontSize: "16px",
                      fontWeight: "500",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      marginTop:"10px"
                    }}
                  >
                    {book.title}
                  </Typography>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography variant="caption">
                        بهنام معافی مدنی
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="caption"
                        sx={{ color: "Red", fontSize: "12px" }}
                      >
                        {(book.rate).toFixed(1)}
                      </Typography>
                      <Box
                        component="img"
                        src={stars}
                        sx={{ width: "20px", height: "20px" }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          )): loading==401? "" : loading==404? "": [1,2,3,4,5,6].map((c,index)=> <SwiperSlide key={index} style={{
                margin: "auto",
                position: "relative",
                top: centerIndex === index ? "0px" : "48px",
                width: centerIndex === index ? "224px" : "192px",
                height: centerIndex === index ? "389px" : "341px",
                transition: ".7s",
              }} > <Loading1 /> </SwiperSlide>) }
        </Swiper>}

        
      </Grid>
    </>
  );
};

export default Navbarbook;
