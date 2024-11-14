import { Box, Typography, Rating , Button } from "@mui/material";
import StyledBadge from "../../stylecomponents/StyledBadge";
import Grid from "@mui/material/Grid2";
import { useState, useRef, useEffect , } from "react";
import worldbook from "../../../assets/logo/worldbook.svg";
import paperplane from "../../../assets/logo/paperplane.svg";
import book1 from "../../../assets/book1.png";
import stars from "../../../assets/logo/stars.svg";
import arrowLeft from "../../../assets/logo/arrowLeft.svg";
import arrowRight from "../../../assets/logo/arrowRight.svg";
import openbook from "../../../assets/logo/openbook.png";
import paperbookeffect from "../../../assets/logo/paperbookeffect.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { getBook } from "../../../services/contactService";

import Loadingveiwbook1 from "../loading/Loadingveiwbook1";
const Homecontent = ({ gridcount, setgridcount, showbooknav  }) => {

  const [book1, setbook] = useState();
  const [loadingbook, setloadingbook] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (showbooknav) {
          console.log(showbooknav)
          setloadingbook(false);
          const { data: bookData } = await getBook(showbooknav);
          setbook(bookData);
          console.log(bookData);
          setloadingbook(true);
        }
      } catch (err) {
        setloadingbook(false);
        console.log("error show book" , err.message);
      }
    };
    fetchData();
  }, [showbooknav]);

  return (
    <>
      <Grid
        size={gridcount.grid1}
        sx={{
          height: "192px",
          bgcolor: "rgba(255, 255, 255, 0.26)",
          border: "1px solid rgba(220, 218, 206, 1)",
          borderRadius: "20px",
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: ".7s",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="div"
          sx={{ width: "550px", margin: "14px 0 14px 28px" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: "40px",
              marginBottom: "30px",
            }}
          >
            هر کتاب،دنیایی تازه برای کشف!
          </Typography>
          <Typography variant="caption" sx={{ fontSize: "14px" }}>
            به جایی خوش آمدید که عشق به کتاب را با هم تقسیم می‌کنیم! هر نظر شما
            به معرفی کتاب‌های بهتر کمک می‌کند و تجربه‌ای تازه برای دیگران
            می‌آفریند. کتاب‌هایی مناسب سلیقه‌تان پیدا کنید و به جمع خوانندگان ما
            بپیوندید!
          </Typography>
        </Box>
        <Box
          component="img"
          src={worldbook}
          sx={{
            transition: ".3s",
            transitionDelay: gridcount.grid1 == 12 ? ".4s" : "0s",
            marginRight: "28px",
            position: "absolute",
            right: "0",
            opacity: gridcount.grid1 == 12 ? "1" : "0",
          }}
        />
        <Box
          component="img"
          src={paperplane}
          sx={{
            transition: ".7s",
            marginRight: "28px",
            position: "absolute",
            width: "90px",
            height: "90px",
            right: gridcount.grid1 == 12 ? "-150px" : "20px",
            top: "55px",
            opacity: gridcount.grid1 == 12 ? "0" : "1",
          }}
        />

        {/* <Box component="img" src={paperplane} sx={{marginRight:"28px" }}></Box> */}
      </Grid>

      <Grid
        size={gridcount.grid2}
        sx={{
          bgcolor: "rgba(253, 252, 247, 1)",
          transition: ".7s",
          height: "100%",
          position: "absolute",
          right: "-25px",
          top: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        
          <Box sx={{ width: "100%" }}>
            <Box
              component="img"
              onClick={() => {
                setgridcount({ grid1: 12, grid2: 0 });
              }}
              src={arrowLeft}
              sx={{
                width: "30px",
                cursor: "pointer",
                position: "relative",
                zIndex: "10",
                height: "30px",
                top: "32px",
                left: "28px",
                opacity: gridcount.grid2 == 5 ? "1" : "0",
                transition: ".3s",
                transitionDelay: ".1s",
              }}
            />
            {/* <Box sx={{display:"flex" , justifyContent:"center", position:"relative" , overflow:"hidden" , width:"1000px" , marginTop:"100px"}}> */}
            
            {loadingbook ? ( <>
            <Box sx={{ width: "36vw", textAlign: "center" }}>
              <Typography variant="h5" marginTop={"100px"}>
                {book1.title}
              </Typography>
            </Box>
           
            <Box
              sx={{
                width: "36vw",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                position: "relative",
              }}
            >
              <Box
                component="div"
                sx={{
                  width: "18vw",
                  height: "24vw",
                  background: `url(${book1.imageurl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  borderRadius: "5px",
                  zIndex: "2",
                  overflow: "hidden",
                  boxShadow: "-4px 10px 30px -12px",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    position: "absolute",
                    boxShadow: "0 0 18px 10px",
                    height: "100%",
                    width: "0px",
                    background: "red",
                  }}
                ></Box>
              </Box>
              <Box
                component="img"
                src={paperbookeffect}
                sx={{
                  position: "absolute",
                  zIndex: "0",
                  height: "100%",
                  transform: "translateX(15px)",
                }}
              />
            </Box>

            <Box sx={{ width: "33vw", marginLeft: "1vw", marginTop: "20px" }}>
              <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Rating
                name="half-rating-read"
                defaultValue={book1.average_rating}
                precision={0.5}
                readOnly
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "rgba(222, 97, 100, 1)",
                  },
                  "& .MuiRating-iconEmpty": {
                    color: "rgba(222, 97, 100, 1)",
                  },
                }}
              />

                <Link to={`/home/${showbooknav}`} ><Button  variant="contained" sx={{bgcolor:"rgba(235, 233, 221, 1)"}} >مشاهده</Button></Link>

              </Box>
              
              <Typography variant="h6" fontWeight={500} marginTop={"10px"}>
                نویسنده: {book1.authors[0] ? book1.authors[0].author : "ناشناس"}
              </Typography>
              <Typography variant="h6" fontWeight={500} my={"10px"}>
                انتشارات: {book1.publisher}
              </Typography>
              <Typography variant="body2" textAlign={"center"}>
                {book1.description}
              </Typography>
            </Box>
            </>
        ) : (
          <Box sx={{width:"34vw", display:"flex" , justifyContent:"center" , marginTop:"200px"}} >
<Loadingveiwbook1 />

          </Box>
             
          // <Loadingveiwbook1 />
        )}
        </Box>
      </Grid>
      
    </>
  );
};

export default Homecontent;
