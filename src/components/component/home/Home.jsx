
import { useState, useRef ,useEffect } from "react";

import { Slide } from "@mui/material";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import SwiperCore, { Pagination, Navigation } from "swiper";


import Homecontent from "./Homecontent";

import Navbarbook from "../navbar/Navbarbook";
import { position } from "stylis";
import zIndex from "@mui/material/styles/zIndex";
const Home = ({ newbooks, statusnewbooks ,showbooknav, setshowbooknav , recommendbook , statusrecommend  }) => {
  const [gridcount, setgridcount] = useState({
    grid1: 12,
    grid2: 0,
  });

  const [show , setshow] = useState(false);
  useEffect(()=>{
    setshow(true)
  })
 
  return (
    <>


      <Homecontent
      
        gridcount={gridcount}
        setgridcount={setgridcount}
        showbooknav={showbooknav}
        newbooks={newbooks}
        
      />


      
      
      <Navbarbook
        setshowbooknav={setshowbooknav}
        gridcount={gridcount}
        setgridcount={setgridcount}
        newbooks={newbooks}
        loading={statusnewbooks}
        titlenav={"کتاب های روز"}
      />
       <Navbarbook
        setshowbooknav={setshowbooknav}
        gridcount={gridcount}
        setgridcount={setgridcount}
        newbooks={recommendbook}
        loading={statusrecommend}
        titlenav={"پیشنهاد بر اساس سوابق"}
      />
      {/* <Navbarbook
        setshowbooknav={setshowbooknav}
        gridcount={gridcount}
        setgridcount={setgridcount}
        newbooks={newbooks}
        loading={loading}
        titlenav={"پیشنهاد بر اساس سوابق"}
      /> */} 
     
    </>
  );
};

export default Home;
