import { Box, Typography, TextField, Slider, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { useState } from "react";


import search from "../../../assets/logo/search.svg";
import plusIcon from "../../../assets/logo/plus.svg"


import { filterSearchapi } from "../../../services/contactService";


const Search =({filterSearch,setfilterSearch,fetchDatafilter})=>{


    
const [valuehistorical , setvaluehistorical] = useState(false);
const [valuechildish , setvaluechildish] = useState(false);
const [valuenovel , setvaluenovel] = useState(false);
const [valuefantasy , setvaluefantasy] = useState(false);
const [valuestory , setvaluestory] = useState(false);
const [valuecriminal , setvaluecriminal] = useState(false);
const [valuepoetry , setvaluepoetry] = useState(false);
const [valuecomic , setvaluecomic] = useState(false);
const [valueyoung , setvalueyoung] = useState(false);
const [valuenonfiction , setvaluenonfiction] = useState(false);



const handleSearchText = (event)=>{
    setfilterSearch( {...filterSearch, "search":event.target.value})
    console.log(filterSearch)
}


const handlegenres =(event)=>{
    console.log(event.currentTarget.id)
    setfilterSearch({
        ...filterSearch,
        genres: filterSearch.genres.includes(event.currentTarget.id)
          ? filterSearch.genres.filter((genre) => genre !== event.currentTarget.id) // اگر مقدار موجود بود، آن را حذف کن
          : [...filterSearch.genres, event.currentTarget.id] // اگر مقدار موجود نبود، آن را اضافه کن
      });
    console.log(filterSearch)
}


const handlesubmitsearch = ()=>{
    fetchDatafilter();
}











const [valuedateform, setValuedateform] = useState([1300, 2024]);
const [valuepaperform, setValuepaperform] = useState([0, 1000]);
const handleChangepaperform = (event, newValue, activeThumb) => {
  if (!Array.isArray(newValue)) {
    return;
  }

  if (activeThumb === 0) {
    setValuepaperform([
      Math.min(newValue[0], valuepaperform[1] - 50),
      valuepaperform[1],
    ]);
   setfilterSearch({...filterSearch, "min_pages":Math.min(newValue[0], valuepaperform[1] - 50) ,"max_pages": valuepaperform[1]})

  } else {
    setValuepaperform([
      valuepaperform[0],
      Math.max(newValue[1], valuepaperform[0] + 50),
    ]);
   setfilterSearch({...filterSearch, "min_pages":valuepaperform[0] ,"max_pages": Math.max(newValue[1], valuepaperform[0] + 50)})

  }

};

const handleChangedateform = (event, newValue, activeThumb) => {
  if (!Array.isArray(newValue)) {
    return;
  }

  if (activeThumb === 0) {
    setValuedateform([
      Math.min(newValue[0], valuedateform[1] - 50),
      valuedateform[1],
    ]);
   setfilterSearch({...filterSearch, "start_date":Math.min(newValue[0], valuedateform[1] - 50) ,"end_date": valuedateform[1]})

  } else {
    setValuedateform([
      valuedateform[0],
      Math.max(newValue[1], valuedateform[0] + 50),
    ]);
   setfilterSearch({...filterSearch, "start_date":valuedateform[0] ,"end_date":Math.max(newValue[1], valuedateform[0] + 50)})

  }
};



    return(
        <>
        <Grid
              size={5}
            >
                <Box component="div" sx={{ 
                bgcolor: "rgba(253, 252, 247, 1)",
                borderRadius: "12px",
                border: "none",
                display: "flex",
                justifyContent: "start",
                alignItems:"center",
                flexDirection:"column",
                width:"100%" , paddingBottom:"15px"}}>

               
              <Box sx={{ width: "90%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                >
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
                      backgroundColor: "rgba(253, 252, 247, 1)",
                      padding: "6.5px",
                      border: "2px solid rgba(220, 218, 206, 1)",
                      borderRight: "none",
                      borderRadius: "  12px 0 0 12px",
                    }}
                  />

                  <TextField
                  onChange={handleSearchText}
                    size="small"
                    id="outlined-textarea"
                    placeholder="جستجو روی فیلتر انجام شده،...."
                    sx={{
                      width: "100%",
                      backgroundColor: "rgba(253, 252, 247, 1)",
                      border: " 2px solid rgba(220, 218, 206, 1)",
                      borderRadius: "12px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderRadius: "12px" },
                        "&:hover fieldset": {
                          border: "none",
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
                <Typography variant="subtitle1" sx={{ margin: "20px 0 8px 0" }}>
                  دسته بندی:
                </Typography>
                <Box component="div" sx={{width:"100%"  , display:"flex" , flexWrap:"wrap" , gap:"5px"}}>
                  <Box id="history, historical fiction, biography" onClick={(event)=>{setvaluehistorical(!valuehistorical); handlegenres(event)}}  component="div" sx={{cursor:"pointer", borderRadius:"33px", border:valuehistorical?"1px solid rgba(44, 44, 44, 1)":"1px solid rgba(138, 138, 138, 1)", bgcolor:valuehistorical? "rgba(44, 44, 44, 1)":"rgba(253, 252, 247, 1)" , paddingX:"12px" , display:"flex", justifyContent:"center" , alignItems:"center" , height:"32px" , transition:".3s" }}>
                    <Typography sx={{fontSize:"16px" , fontWeight:"500" , color:valuehistorical?"rgba(253, 252, 247, 1)" : "rgba(138, 138, 138, 1)" , transition:".3s"}}>تاریخی</Typography>
                    <Box component="img" src={plusIcon} sx={{fontSize:"18px" , fontWeight:"500" ,filter:valuehistorical? "invert(1)":"invert(.6)" , marginLeft:"4px" , transition:".3s" , transform:valuehistorical?"rotate(45deg)" : "rotate(0deg)",transformOrigin:"center"}}></Box>
                  </Box>
                   <Box id="children" onClick={(event)=>{setvaluechildish(!valuechildish);handlegenres(event)}}  component="div" sx={{cursor:"pointer", borderRadius:"33px", border:valuechildish?"1px solid rgba(44, 44, 44, 1)":"1px solid rgba(138, 138, 138, 1)", bgcolor:valuechildish? "rgba(44, 44, 44, 1)":"rgba(253, 252, 247, 1)" , paddingX:"12px" , display:"flex", justifyContent:"center" , alignItems:"center" , height:"32px" , transition:".3s" }}>
                    <Typography sx={{fontSize:"16px" , fontWeight:"500" , color:valuechildish?"rgba(253, 252, 247, 1)" : "rgba(138, 138, 138, 1)" , transition:".3s"}}>کودکانه</Typography>
                    <Box component="img" src={plusIcon} sx={{fontSize:"18px" , fontWeight:"500" ,filter:valuechildish? "invert(1)":"invert(.6)" , marginLeft:"4px" , transition:".3s" , transform:valuechildish?"rotate(45deg)" : "rotate(0deg)",transformOrigin:"center"}}></Box>
                  </Box>
                 <Box id="romance" onClick={(event)=>{setvaluenovel(!valuenovel);handlegenres(event)}}  component="div" sx={{cursor:"pointer", borderRadius:"33px", border:valuenovel?"1px solid rgba(44, 44, 44, 1)":"1px solid rgba(138, 138, 138, 1)", bgcolor:valuenovel? "rgba(44, 44, 44, 1)":"rgba(253, 252, 247, 1)" , paddingX:"12px" , display:"flex", justifyContent:"center" , alignItems:"center" , height:"32px" , transition:".3s" }}>
                    <Typography sx={{fontSize:"16px" , fontWeight:"500" , color:valuenovel?"rgba(253, 252, 247, 1)" : "rgba(138, 138, 138, 1)" , transition:".3s"}}>رمان</Typography>
                    <Box component="img" src={plusIcon} sx={{fontSize:"18px" , fontWeight:"500" ,filter:valuenovel? "invert(1)":"invert(.6)" , marginLeft:"4px" , transition:".3s" , transform:valuenovel?"rotate(45deg)" : "rotate(0deg)",transformOrigin:"center"}}></Box>
                  </Box>
                   <Box id="fantasy, paranormal" onClick={(event)=>{setvaluefantasy(!valuefantasy);handlegenres(event)}}  component="div" sx={{cursor:"pointer", borderRadius:"33px", border:valuefantasy?"1px solid rgba(44, 44, 44, 1)":"1px solid rgba(138, 138, 138, 1)", bgcolor:valuefantasy? "rgba(44, 44, 44, 1)":"rgba(253, 252, 247, 1)" , paddingX:"12px" , display:"flex", justifyContent:"center" , alignItems:"center" , height:"32px" , transition:".3s" }}>
                    <Typography sx={{fontSize:"16px" , fontWeight:"500" , color:valuefantasy?"rgba(253, 252, 247, 1)" : "rgba(138, 138, 138, 1)" , transition:".3s"}}>فانتزی</Typography>
                    <Box component="img" src={plusIcon} sx={{fontSize:"18px" , fontWeight:"500" ,filter:valuefantasy? "invert(1)":"invert(.6)" , marginLeft:"4px" , transition:".3s" , transform:valuefantasy?"rotate(45deg)" : "rotate(0deg)",transformOrigin:"center"}}></Box>
                  </Box>
                  <Box id="fiction"  onClick={(event)=>{setvaluestory(!valuestory);handlegenres(event)}}  component="div" sx={{cursor:"pointer", borderRadius:"33px", border:valuestory?"1px solid rgba(44, 44, 44, 1)":"1px solid rgba(138, 138, 138, 1)", bgcolor:valuestory? "rgba(44, 44, 44, 1)":"rgba(253, 252, 247, 1)" , paddingX:"12px" , display:"flex", justifyContent:"center" , alignItems:"center" , height:"32px" , transition:".3s" }}>
                    <Typography sx={{fontSize:"16px" , fontWeight:"500" , color:valuestory?"rgba(253, 252, 247, 1)" : "rgba(138, 138, 138, 1)" , transition:".3s"}}>داستان</Typography>
                    <Box component="img" src={plusIcon} sx={{fontSize:"18px" , fontWeight:"500" ,filter:valuestory? "invert(1)":"invert(.6)" , marginLeft:"4px" , transition:".3s" , transform:valuestory?"rotate(45deg)" : "rotate(0deg)",transformOrigin:"center"}}></Box>
                  </Box>
               <Box id="mystery, thriller, crime" onClick={(event)=>{setvaluecriminal(!valuecriminal);handlegenres(event)}}  component="div" sx={{cursor:"pointer", borderRadius:"33px", border:valuecriminal?"1px solid rgba(44, 44, 44, 1)":"1px solid rgba(138, 138, 138, 1)", bgcolor:valuecriminal? "rgba(44, 44, 44, 1)":"rgba(253, 252, 247, 1)" , paddingX:"12px" , display:"flex", justifyContent:"center" , alignItems:"center" , height:"32px" , transition:".3s" }}>
                    <Typography sx={{fontSize:"16px" , fontWeight:"500" , color:valuecriminal?"rgba(253, 252, 247, 1)" : "rgba(138, 138, 138, 1)" , transition:".3s"}}>رازآلود ، جنایی</Typography>
                    <Box component="img" src={plusIcon} sx={{fontSize:"18px" , fontWeight:"500" ,filter:valuecriminal? "invert(1)":"invert(.6)" , marginLeft:"4px" , transition:".3s" , transform:valuecriminal?"rotate(45deg)" : "rotate(0deg)",transformOrigin:"center"}}></Box>
                  </Box>
                     <Box id="poetry" onClick={(event)=>{setvaluepoetry(!valuepoetry);handlegenres(event)}}  component="div" sx={{cursor:"pointer", borderRadius:"33px", border:valuepoetry?"1px solid rgba(44, 44, 44, 1)":"1px solid rgba(138, 138, 138, 1)", bgcolor:valuepoetry? "rgba(44, 44, 44, 1)":"rgba(253, 252, 247, 1)" , paddingX:"12px" , display:"flex", justifyContent:"center" , alignItems:"center" , height:"32px" , transition:".3s" }}>
                    <Typography sx={{fontSize:"16px" , fontWeight:"500" , color:valuepoetry?"rgba(253, 252, 247, 1)" : "rgba(138, 138, 138, 1)" , transition:".3s"}}>شعر</Typography>
                    <Box component="img" src={plusIcon} sx={{fontSize:"18px" , fontWeight:"500" ,filter:valuepoetry? "invert(1)":"invert(.6)" , marginLeft:"4px" , transition:".3s" , transform:valuepoetry?"rotate(45deg)" : "rotate(0deg)",transformOrigin:"center"}}></Box>
                  </Box>
                  <Box id="comics, graphic" onClick={(event)=>{setvaluecomic(!valuecomic);handlegenres(event)}}  component="div" sx={{cursor:"pointer", borderRadius:"33px", border:valuecomic?"1px solid rgba(44, 44, 44, 1)":"1px solid rgba(138, 138, 138, 1)", bgcolor:valuecomic? "rgba(44, 44, 44, 1)":"rgba(253, 252, 247, 1)" , paddingX:"12px" , display:"flex", justifyContent:"center" , alignItems:"center" , height:"32px" , transition:".3s" }}>
                    <Typography sx={{fontSize:"16px" , fontWeight:"500" , color:valuecomic?"rgba(253, 252, 247, 1)" : "rgba(138, 138, 138, 1)" , transition:".3s"}}>کمیک</Typography>
                    <Box component="img" src={plusIcon} sx={{fontSize:"18px" , fontWeight:"500" ,filter:valuecomic? "invert(1)":"invert(.6)" , marginLeft:"4px" , transition:".3s" , transform:valuecomic?"rotate(45deg)" : "rotate(0deg)",transformOrigin:"center"}}></Box>
                  </Box>
                  <Box id="young-adult" onClick={(event)=>{setvalueyoung(!valueyoung);handlegenres(event)}}  component="div" sx={{cursor:"pointer", borderRadius:"33px", border:valueyoung?"1px solid rgba(44, 44, 44, 1)":"1px solid rgba(138, 138, 138, 1)", bgcolor:valueyoung? "rgba(44, 44, 44, 1)":"rgba(253, 252, 247, 1)" , paddingX:"12px" , display:"flex", justifyContent:"center" , alignItems:"center" , height:"32px" , transition:".3s" }}>
                    <Typography sx={{fontSize:"16px" , fontWeight:"500" , color:valueyoung?"rgba(253, 252, 247, 1)" : "rgba(138, 138, 138, 1)" , transition:".3s"}}>جوان-بزرگسال</Typography>
                    <Box component="img" src={plusIcon} sx={{fontSize:"18px" , fontWeight:"500" ,filter:valueyoung? "invert(1)":"invert(.6)" , marginLeft:"4px" , transition:".3s" , transform:valueyoung?"rotate(45deg)" : "rotate(0deg)",transformOrigin:"center"}}></Box>
                  </Box>
                  <Box id="non-fiction" onClick={(event)=>{setvaluenonfiction(!valuenonfiction);handlegenres(event)}}  component="div" sx={{cursor:"pointer", borderRadius:"33px", border:valuenonfiction?"1px solid rgba(44, 44, 44, 1)":"1px solid rgba(138, 138, 138, 1)", bgcolor:valuenonfiction? "rgba(44, 44, 44, 1)":"rgba(253, 252, 247, 1)" , paddingX:"12px" , display:"flex", justifyContent:"center" , alignItems:"center" , height:"32px" , transition:".3s" }}>
                    <Typography sx={{fontSize:"16px" , fontWeight:"500" , color:valuenonfiction?"rgba(253, 252, 247, 1)" : "rgba(138, 138, 138, 1)" , transition:".3s"}}>غیرداستانی</Typography>
                    <Box component="img" src={plusIcon} sx={{fontSize:"18px" , fontWeight:"500" ,filter:valuenonfiction? "invert(1)":"invert(.6)" , marginLeft:"4px" , transition:".3s" , transform:valuenonfiction?"rotate(45deg)" : "rotate(0deg)",transformOrigin:"center"}}></Box>
                  </Box>
               
                  

                </Box>

                <Typography variant="subtitle1" sx={{ margin: "20px 0 8px 0" }}>
                  تاریخ انتشار:
                </Typography>
                <Box sx={{width:"100%" , display:"flex" , justifyContent:"center"}}>
                <Slider
                  min={1300}
                  max={2024}
                  step={50}
                  marks
                  getAriaLabel={() => "Temperature range"}
                  value={valuedateform}
                  onChange={handleChangedateform}
                  valueLabelDisplay="on"
                  //   getAriaValueText={valuetext}

                  sx={{
                    width:"calc(100% - 20px)",
                    color: "rgba(44, 44, 44, 1)", // رنگ اصلی اسلایدر
                    "& .MuiSlider-thumb": {
                      "&:hover, &:focus, &.Mui-active": {
                        boxShadow: "none", // حذف سایه هاور
                      },
                      backgroundColor: "rgba(44, 44, 44, 1)", // رنگ دستگیره
                      border: "none", // استایل دستگیره
                    },
                    "& .MuiSlider-track": {
                      height: "6px",
                      backgroundColor: "rgba(44, 44, 44, 1)", // رنگ خط پر شده
                    },
                    "& .MuiSlider-rail": {
                      height: "6px",

                      backgroundColor: "DarkBackground", // رنگ خط خالی
                    },
                    "& .MuiSlider-mark": {
                      backgroundColor: "rgba(44, 44, 44, 1)", // رنگ مارکرها
                      height: "2px",
                      width: "2px",
                      borderRadius: "50%",
                    },
                    "& .MuiSlider-markActive": {
                      backgroundColor: "white", // رنگ مارکر فعال
                    },
                    "& .MuiSlider-valueLabel": {
                      position: "relative",
                      top: "55px",
                      fontSize: "14px",
                      fontWeight: "600",
                      backgroundColor: "rgba(0,0,0,0)", // پس‌زمینه برچسب مقدار
                      color: "rgba(44, 44, 44, 1)", // رنگ متن برچسب
                    },
                  }}
                /></Box>


                <Typography variant="subtitle1" sx={{ margin: "25px 0 8px 0" }}>
                  تعداد صفحات
                </Typography>
                <Box sx={{width:"100%" , display:"flex" , justifyContent:"center"}}>
                <Slider
                  min={0}
                  max={1000}
                  step={50}
                  marks
                  getAriaLabel={() => "Temperature range"}
                  value={valuepaperform}
                  onChange={handleChangepaperform}
                  valueLabelDisplay="on"
                  //   getAriaValueText={valuetext}

                  sx={{
                    width:"calc(100% - 20px)",
                    color: "rgba(44, 44, 44, 1)", // رنگ اصلی اسلایدر
                    "& .MuiSlider-thumb": {
                      "&:hover, &:focus, &.Mui-active": {
                        boxShadow: "none", // حذف سایه هاور
                      },
                      backgroundColor: "rgba(44, 44, 44, 1)", // رنگ دستگیره
                      border: "none", // استایل دستگیره
                    },
                    "& .MuiSlider-track": {
                      height: "6px",
                      backgroundColor: "rgba(44, 44, 44, 1)", // رنگ خط پر شده
                    },
                    "& .MuiSlider-rail": {
                      height: "6px",

                      backgroundColor: "DarkBackground", // رنگ خط خالی
                    },
                    "& .MuiSlider-mark": {
                      backgroundColor: "rgba(44, 44, 44, 1)", // رنگ مارکرها
                      height: "2px",
                      width: "2px",
                      borderRadius: "50%",
                    },
                    "& .MuiSlider-markActive": {
                      backgroundColor: "white", // رنگ مارکر فعال
                    },
                    "& .MuiSlider-valueLabel": {
                      position: "relative",
                      top: "55px",
                      fontSize: "14px",
                      fontWeight: "600",
                      backgroundColor: "rgba(0,0,0,0)", // پس‌زمینه برچسب مقدار
                      color: "rgba(44, 44, 44, 1)", // رنگ متن برچسب
                    },
                  }}
                />


                </Box>
                

                <Button fullWidth onClick={handlesubmitsearch} sx={{backgroundColor:"rgba(44, 44, 44, 1)" , color:"white" , height:"46px" , borderRadius:"12px", marginTop:"30px"}}>اعمال فیلتر</Button>
              </Box>
              </Box>
            </Grid>
        </>
    )
}

export default Search