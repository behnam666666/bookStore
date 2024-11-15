import { Box, Typography, TextField, Slider, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import paperbookeffect from "../../../assets/logo/paperbookeffect.svg";
import search from "../../../assets/logo/search.svg";
import stars from "../../../assets/logo/stars.svg";
import { getBooks } from "../../../services/contactService";
import Pagination from "@mui/material/Pagination";

import Loadingveiwbook1 from "../loading/Loadingveiwbook1";
import Loadingbooks from "../loading/Loadingbooks";

function valuetext(value) {
  return `${value}°C`;
}

const Books = () => {
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
    } else {
      setValuepaperform([
        valuepaperform[0],
        Math.max(newValue[1], valuepaperform[0] + 50),
      ]);
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
    } else {
      setValuedateform([
        valuedateform[0],
        Math.max(newValue[1], valuedateform[0] + 50),
      ]);
    }
  };

  const navigatebooks = useNavigate();

  const [currentPage, setCurrentPage] = useState(1); // صفحه فعلی
  const itemsPerPage = 16; // تعداد آیتم‌های هر صفحه

  const [books, setbooks] = useState();
  const [statusbooks, setstatusbooks] = useState(404);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, status } = await getBooks();
        setbooks(data);

        setstatusbooks(status);
        console.log(status, data);
      } catch (err) {
        setstatusbooks(err.response.status);
        if (err.response) {
          const { status } = err.response;
          console.error(`error books: ${status}`);
        } else {
          console.error("error books:", err.message);
        }
      }
    };
    fetchData();
  }, []);

  let totalPages;
  let startIndex;
  let currentItems;
  if (statusbooks == 200) {
    // محاسبه تعداد کل صفحات
    totalPages = Math.ceil(books.length / itemsPerPage);

    // محاسبه آیتم‌های صفحه فعلی
    startIndex = (currentPage - 1) * itemsPerPage;
    currentItems = books.slice(startIndex, startIndex + itemsPerPage);

    // تغییر صفحه
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          width: "calc(100% - 150px)",
          height: "400px",
          marginLeft: "125px",
          marginTop: "30px",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }} // شروع از پایین و غیرقابل مشاهده
          animate={{ y: 0, opacity: 1 }} // انیمیشن به بالا و قابل مشاهده
          transition={{ duration: 0.5 }} // مدت زمان انیمیشن
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            pointerEvents: "auto",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            کتاب ها
          </Typography>

          <Grid container spacing={4} columns={16} sx={{ marginTop: "25px" }}>
            <Grid size={11} container>
              {statusbooks == 200
                ? currentItems.map((book1, index) => (
                    <Grid key={index} size={{ xs: 16, sm: 7, md: 5, lg: 4 }}>
                      {/* <Box sx={{width:"100%" , height:"300px", bgcolor:"red"}}>

                    </Box> */}

                      <Box
                        component="div"
                        onClick={() => {
                          navigatebooks(`/home/${book1.id}`);
                        }}
                        sx={{
                          width: "100%",
                          height: "280px",
                          display: "flex",
                          justifyContent: "center",
                          position: "relative",
                        }}
                      >
                        <Box
                          component="div"
                          sx={{
                            width: "100%",
                            height: "280px",
                            background: `url(${book1.image_url})`,
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
                            zIndex: "-1",
                            width: "100%",
                            height: "100%",
                            transform: "translateX(10px)",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          width: "100%",
                          fontSize: "16px",
                          fontWeight: "500",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          marginTop: "15px",
                        }}
                      >
                        {book1.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "5px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "rgba(138, 138, 138, 1)",
                            fontSize: "12px",
                          }}
                        >
                          {book1.price}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            sx={{
                              color: "rgba(138, 138, 138, 1)",
                              fontSize: "12px",
                              marginRight: "2px",
                            }}
                          >
                            ({book1.rates_count})
                          </Typography>
                          <Typography
                            sx={{ color: "Red", fontSize: "12px", mx: "1px" }}
                          >
                            {book1.rate.toFixed(1)}
                          </Typography>
                          <Box
                            component="img"
                            src={stars}
                            sx={{
                              width: "20px",
                              height: "20px",
                              position: "relative",
                              top: "-2px",
                            }}
                          />
                        </Box>
                      </Box>
                    </Grid>
                  ))
                : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((c, index) => (
                    <Grid
                      sx={{ height: "400px" }}
                      key={index}
                      size={{ xs: 16, sm: 7, md: 5, lg: 4 }}
                    >
                      <Loadingbooks />
                    </Grid>
                  ))}
            </Grid>
            <Grid
              size={5}
              sx={{
                height: "490px",
                bgcolor: "rgba(253, 252, 247, 1)",
                borderRadius: "12px",
                border: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
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
                

                <Button fullWidth sx={{backgroundColor:"rgba(44, 44, 44, 1)" , color:"white" , height:"46px" , borderRadius:"12px", marginTop:"30px"}}>اعمال فیلتر</Button>
              </Box>
            </Grid>

            <Grid size={11} sx={{ display: "flex", justifyContent: "center" }}>
              {statusbooks == 200 ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 3,
                    height: "100px",
                  }}
                >
                  <Pagination
                    showFirstButton
                    showLastButton
                    count={totalPages} // تعداد صفحات
                    page={currentPage} // صفحه فعلی
                    onChange={handlePageChange} // هندلر تغییر صفحه
                    shape="rounded"
                    color="secondary"
                    sx={{
                      "& .MuiPagination-ul": {
                        justifyContent: "center", // قرار دادن صفحات در وسط
                      },
                      "& .MuiPaginationItem-root": {
                        color: "rgba(44, 44, 44, 1)", // رنگ متن پیش‌فرض
                      },
                      "& .Mui-selected": {
                        backgroundColor: "rgba(44, 44, 44,1)",
                        // paddingTop:"5px",
                        color: "white", // رنگ متن صفحه انتخاب‌شده
                      },
                      "& .MuiPaginationItem-root:hover": {
                        // paddingTop:"5px",
                        backgroundColor: "gray", // بک‌گراند هنگام هاور
                      },
                    }}
                  />
                </Box>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </>
  );
};

export default Books;
