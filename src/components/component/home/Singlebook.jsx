import {
  Box,
  Typography,
  Rating,
  Slide,
  Button,
  TextField,
} from "@mui/material";

import {
  getBook,
  getCommentsBook,
  addCommentsBook,
} from "../../../services/contactService";

import { useState, useEffect, useRef } from "react";

import paperbookeffect from "../../../assets/logo/paperbookeffect.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import save from "../../../assets/logo/save.svg";
import Loadingveiwbook1 from "../loading/Loadingveiwbook1";
import savefilled from "../../../assets/logo/savefilled.svg";
import share from "../../../assets/logo/share.svg";

import telegram from "../../../assets/logo/telegram.svg";
import twitter from "../../../assets/logo/twitter.svg";
import whatsappl from "../../../assets/logo/whatsappl.svg";
import symbols_save from "../../../assets/logo/symbols_save.svg";
import emoji from "../../../assets/logo/emoji.svg";
import { p } from "framer-motion/client";

const Singlebook = () => {
  const [comments, setcomments] = useState();
  const [book1, setbook] = useState();
  const [loadingbook, setloadingbook] = useState(true);
  const [loadingcomment, setloadingcomment] = useState(true);

  const [savedone, setsavedone] = useState(false);

  const { bookid } = useParams();

  const [handleemoji, sethandleemoji] = useState(false);

  const customEmojis = ["😀", "😂", "😍", "👍", "🔥", "💯", "✌️", "❤️"];
  const textFieldRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const handleEmojiClick = (emojiData) => {
    setInputValue((prev) => prev + emojiData); // اضافه کردن ایموجی به مقدار TextField
    // بستن انتخاب‌گر ایموجی بعد از انتخاب
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  };

  // const closesinglebook = async () => {
  //   setShow(false);

  //   // وقفه ۱ ثانیه‌ای
  //   // await new Promise(resolve => setTimeout(resolve, 2000));

  //   setviewsinglebook(false);
  //   console.log("asdo;ihvgjkksdmn");
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloadingbook(true);
        const { data: bookData } = await getBook(bookid);
        setbook(bookData);
        setloadingbook(false);
      } catch (err) {
        setloadingbook(true);
        console.log("error show book");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloadingcomment(true);
        const { data: commentsData } = await getCommentsBook(bookid);
        setcomments(commentsData);
        console.log(commentsData);
        setloadingcomment(false);
      } catch (err) {
        setloadingcomment(true);
        console.log("error show book:", err.message);
      }
    };
    fetchData();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // لینک مورد نظر برای اشتراک‌گذاری
  const shareLink = window.location.href;

  // تابع کپی کردن لینک
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    alert("لینک کپی شد!");
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          width: "calc(100% - 150px)",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          marginLeft: "150px",
        }}
      >
        {loadingbook ? (
          <Loadingveiwbook1 />
        ) : (
          <motion.div
            initial={{ y: 100, opacity: 0 }} // شروع از پایین و غیرقابل مشاهده
            animate={{ y: 0, opacity: 1 }} // انیمیشن به بالا و قابل مشاهده
            // انیمیشن بازگشت به پایین و ناپدید شدن
            transition={{ duration: 0.5 }} // مدت زمان انیمیشن
            style={{
              position: "relative",
              // height: "100%",
              // width: "100%",
              pointerEvents: "auto",
            }} // برای نمایش بهتر، موقعیت مطلق داده شده است
          >
            <Box
              component="div"
              sx={{
                width: "95%",
                bgcolor: "rgba(253, 252, 247, 1)",
                marginTop: "320px",
                display: "flex",
                justifyContent: "center",
                borderRadius: "6px",
                position: "relative",
              }}
            >
              <Box
                component="div"
                sx={{
                  position: "absolute",
                  top: "20px",
                  right: "70px",
                  zIndex: "400",
                  width: "40%",
                  height: "60px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "2px solid rgba(235, 233, 221, 1)",
                }}
              >
                <Box>
                  <Link to={`/home`}>
                    {" "}
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "rgba(235, 233, 221, 1)" }}
                    >
                      خروج
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Box
                    component="img"
                    src={share}
                    sx={{
                      width: 30,
                      height: 30,
                      padding: "10px",
                      borderRadius: "100%",
                      bgcolor: "rgba(235, 233, 221, 1)",
                      cursor: "pointer",
                      marginRight: "24px",
                    }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  />
                  <Box
                    component="img"
                    src={savedone ? savefilled : save}
                    sx={{
                      width: 30,
                      height: 30,
                      padding: "10px",
                      borderRadius: "100%",
                      bgcolor: "rgba(235, 233, 221, 1)",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setsavedone(!savedone);
                    }}
                  />
                </Box>
                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      key="animatedDiv"
                      initial={{ y: 0, opacity: 0 }} // شروع از پایین و غیرقابل مشاهده
                      animate={{ y: 0, opacity: 1 }} // انیمیشن به بالا و قابل مشاهده
                      exit={{ opacity: 0, y: 0 }} // انیمیشن بازگشت به پایین و ناپدید شدن
                      transition={{ duration: 0.5 }} // مدت زمان انیمیشن
                      style={{
                        position: "absolute",
                        pointerEvents: "auto",
                        zIndex: "-20",
                        left: "150px",
                        top: "5px",
                      }} // برای نمایش بهتر، موقعیت مطلق داده شده است
                    >
                      <Button
                        endIcon={<Box component="img" src={symbols_save} />}
                        onClick={copyLinkToClipboard}
                      ></Button>
                      <a
                        href={`https://telegram.me/share/url?url=${shareLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          endIcon={<Box component="img" src={telegram} />}
                        ></Button>
                      </a>
                      <a
                        href={`https://wa.me/?text=${shareLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          endIcon={<Box component="img" src={whatsappl} />}
                        ></Button>
                      </a>
                      <a
                        href={`https://twitter.com/share?url=${shareLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          endIcon={<Box component="img" src={twitter} />}
                        ></Button>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "-281px",
                  position: "absolute",
                  width: "95%",
                }}
              >
                <Box
                  sx={{
                    width: "265px",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      width: "265px",
                      height: "368px",
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
                        boxShadow: "0 0 16px 10px",
                        height: "100%",
                        width: "0px",
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
                      transform: "translateX(10px)",
                    }}
                  />
                </Box>
                <Box
                  component="div"
                  sx={{ marginTop: "28px", marginLeft: "55px" }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "36px", fontWeight: "600" }}
                  >
                    {book1.title}
                  </Typography>
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
                      marginTop: "15px",
                    }}
                  />
                  <Typography variant="h6" fontWeight={500} my={"15px"}>
                    نویسنده:{" "}
                    {book1.authors[0] ? book1.authors[0].author : "ناشناس"}
                  </Typography>
                  <Typography variant="h6" fontWeight={500}>
                    انتشارات: {book1.publisher}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  marginTop: "100px",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  توضیحات
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ width: "100%", fontSize: "14px", fontWeight: "400" }}
                >
                  {book1.description}
                </Typography>
                <Typography variant="h5" sx={{ marginTop: "15px" }}>
                  ثبت دیدگاه
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    marginTop: "15px",
                    position: "relative",
                  }}
                >
                  <TextField
                    inputRef={textFieldRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    multiline
                    rows={6}
                    placeholder="نظر خود را در مورد کتاب برای دیگران بیان کنید..."
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 1)",
                      border: " 1px solid rgba(220, 218, 206, 1)",

                      borderRadius: "12px",
                      width: "calc(100% - 180px)",
                      paddingRight: "180px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: "12px",
                          borderRight: "none",
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "none",
                        },
                        "& .MuiInputBase-input": {
                          color: "rgba(138, 138, 138, 1)",
                          fontSize: "16px",
                          fontWeight: "500",
                        },
                      },
                    }}
                  />
                  <Box
                    sx={{
                      width: "180px",
                      overflow: "hidden",
                      position: "absolute",
                      right: "-8px",
                      top: "10px",
                    }}
                  >
                    {customEmojis.map((emoji) => (
                      <span
                        key={emoji}
                        onClick={() => handleEmojiClick(emoji)}
                        style={{ cursor: "pointer", fontSize: "29px" }}
                      >
                        {emoji}
                      </span>
                    ))}
                  </Box>

                  <Rating
                    precision={1}
                    sx={{
                      position: "absolute",
                      right: "17px",
                      bottom: "57px",
                      "& .MuiRating-icon": {
                        padding: "3px",
                        borderRadius: "50%",
                      },
                      "& .MuiRating-iconFilled": {
                        color: "rgba(39, 41, 53, 1)",
                      },
                      "& .MuiRating-iconEmpty": {
                        color: "rgba(39, 41, 53, 1)",
                      },
                      marginTop: "15px",
                    }}
                  />
                  <Button
                    sx={{
                      width: "150px",
                      color: "white",
                      borderRadius: "8px",
                      backgroundColor: "rgba(39, 41, 53, 1)",
                      position: "absolute",
                      right: "17px",
                      bottom: "17px",
                    }}
                    onClick={() => {
                      inputValue != ""
                        ? addCommentsBook({
                            review: inputValue,
                            rating: 0,
                            book_id: parseInt(bookid),
                          })
                        : console.log("کامنت خالی");
                      setInputValue("");
                    }}
                  >
                    ثبت دیدگاه
                  </Button>
                </Box>
                <Box component="div" marginTop={"15px"}>
                  {/* <p>asdjfalkdjfadsf</p> */}

                  {loadingcomment ? (
                    <p>1</p>
                  ) : (
                    comments.map((c , index) => (
                      <Box sx={{marginTop:"20px"}} key={index}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box component="img" src={telegram} sx={{width:"50px" , height:"50px"}} />
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "500",
                              mx: "20px",
                            }}
                          >
                            {c.name}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{ fontSize: "14px", fontWeight: "400" , marginTop:"10px" , marginLeft:"70px" }}
                        >
                          {c.comment}
                        </Typography>
                      </Box>
                    ))
                  )}
                </Box>
              </Box>
            </Box>
          </motion.div>
        )}
      </Box>
    </>
  );
};

export default Singlebook;
