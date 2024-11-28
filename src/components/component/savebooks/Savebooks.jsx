import { Box, Typography, TextField, Slider, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import paperbookeffect from "../../../assets/logo/paperbookeffect.svg";

import stars from "../../../assets/logo/stars.svg";
import { savebooks } from "../../../services/contactService";
import Pagination from "@mui/material/Pagination";

import Loadingbooks from "../loading/Loadingbooks";

const Savebooks = () => {


const navigatebooks = useNavigate();

  const [currentPage, setCurrentPage] = useState(1); // صفحه فعلی
  const itemsPerPage = 16; // تعداد آیتم‌های هر صفحه

  const [books, setbooks] = useState();
  const [statusbooks, setstatusbooks] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, status } = await savebooks();
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
          {statusbooks==404? <Typography variant="h4" fontWeight={700} >داده ای  برای چاپ موجود نیست 😓🤷‍♂️</Typography> :""}

            <Grid size={16} container sx={{display:"flex" , flexWrap:"warp" , justifyContent:"center"}}>

              {statusbooks==401? <Typography variant="h4" fontWeight={700} >لطفا ثبت نام یا ورود کنید 😊✌️</Typography> :  statusbooks == 200
                ? currentItems.map((book1, index) => (
                    <Box key={index} sx={{width:"192px"}} >
                     

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
                            // width: "100%",
                            height: "100%",
                            transform: "translateX(3px)",
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
                    </Box>
                  ))
                : statusbooks == -1 ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((c, index) => (
                    <Grid
                      sx={{ height: "400px" }}
                      key={index}
                      size={{ xs: 16, sm: 7, md: 5, lg: 4 }}
                    >
                      <Loadingbooks />
                    </Grid>
                  )) :""} 
            </Grid>
                
           
            <Grid size={16} sx={{ display: "flex", justifyContent: "center" }}>
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

export default Savebooks;
