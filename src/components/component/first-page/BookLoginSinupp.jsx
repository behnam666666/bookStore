import HTMLFlipBook from "react-pageflip";

import { Box, Avatar, Typography, TextField ,Button } from "@mui/material";
import { useRef } from "react";
import Grid from "@mui/material/Grid2";
import sinup from "../../../assets/logo/sinup.svg";
import login from "../../../assets/logo/login.svg";
import noise from "../../../assets/logo/noise.png";
import  soundbook from "../../../assets/logo/pageeffect.mp3";

import { grey } from "@mui/material/colors";


const audio = new Audio(soundbook);

const BookLoginSinup = () => {

  const book = useRef();
  const playAudio = () => {
    audio.currentTime=0;
    audio.play();
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          bgcolor: "#f0eee2",
        }}
      >
        <Box
          sx={{
            width: "909px",
            height: "576px",
            bgcolor: "#ede6c8",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            boxShadow:
              " 0px 16px 24px rgba(0,0,0,.2)  , inset 0px 0px 12px rgba(0, 0, 0, .5)",
            borderRadius: "14px",
          }}
        >
          {/* <TextField label="ایمیل" color="black" sx={{color:"#000" , position:"absolute", zIndex:"500","& .MuiInputBase-input": { color: "#000" },}}   focused  fullWidth/> */}

          <HTMLFlipBook

            ref={book}
            useMouseEvents={false}
            mobileScrollSupport={false}
            width={450}
            height={570}
            drawShadow={true}

            // showCover={true}
          >
            <Box
              component="div"
              sx={{
                background: "rgba(0,0,0,0)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // borderLeft: "1px solid #B0B0B0",
              }}
            >
              <Box
                sx={{
                  width: "450px",
                  height: "570px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  bgcolor: "white",
                  position: "relative",
                  borderRadius: "0 14px 14px 0",
                }}
              >
                {/* <input type="text" placeholder="sghldjfdf" /> */}
                <Grid
                  container
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"start",
                    marginTop:"72px"
                  }}
                  spacing={2}
                >
                  <Grid size={{ xs: 10, md: 10, xl: 10 }} textAlign={"center"} > <Typography variant="h4" fontWeight={"bold"}>ورود</Typography> </Grid>
                  <Grid size={{ xs: 10, md: 10, xl: 10 }}>
                    <TextField
                    size="small"
                      label="ایمیل"
                      color="black"
                      sx={{
                        "& .MuiInputBase-input": { color: "#000" },
                        "& .MuiInputLabel-root": { color: grey[700] },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: grey[600] },
                          "&:hover fieldset": { borderColor: grey[900] },
                          "&.Mui-focused fieldset": { borderColor: grey[500] },
                        },
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    size={{ xs: 10, md: 10, xl: 10 }}
                    // sx={{ marginTop: "30px" }}
                  >
                    <TextField
                    size="small"
                      label="رمز ورود"
                      color="black"
                      sx={{
                        "& .MuiInputBase-input": { color: "#000" },
                        "& .MuiInputLabel-root": { color: grey[700] },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: grey[600] },
                          "&:hover fieldset": { borderColor: grey[900] },
                          "&.Mui-focused fieldset": { borderColor: grey[500] },
                        },
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid size={{ xs: 10, md: 10, xl: 10 }} display={"flex"} justifyContent={"center"}>
                    <Typography variant="body1" marginRight={"5px"}>حساب ندارید؟</Typography>
                    <Typography variant="body1" sx={{color:"#DE6164" , cursor:"pointer"}} onClick={()=>{book.current.pageFlip().flipNext();playAudio();}} >ثبت نام</Typography>
                  </Grid >
                  <Grid size={{ xs: 10, md: 10, xl: 10 }} textAlign={'center'}>
                    <Button variant="contained" sx={{bgcolor:"black.main", color:"white"}}  fullWidth>ساخت حساب</Button>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    position: "absolute",
                    left: "0",
                    height: "100%",
                    width: "36px",
                    transform: "rotate(180deg)",
                    pointerEvents: "none",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg , rgba(0,0,0,0.2) 0% , rgba(255,255,255,0) 100%)",
                  }}
                ></Box>
                <Box
                  sx={{
                    position: "absolute",
                    left: "0",
                    height: "100%",
                    width: "205px",
                    transform: "rotate(180deg)",
                    pointerEvents: "none",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg , rgba(0,0,0,0.05) 0% , rgba(255,255,255,0) 100%)",
                  }}
                ></Box>
                <Avatar
                  src={noise}
                  variant="square"
                  sx={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    right: "0",
                    left: "0",
                    zIndex: "100",
                    pointerEvents: "none",
                    width: "450px",
                    height: "570px",
                  }}
                ></Avatar>
              </Box>
            </Box>

            <Box
              component="div"
              sx={{
                background: "rgba(0,0,0,0)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // borderRight: "1px solid #B0B0B0",
              }}
            >
              <Box
                sx={{
                  width: "450px",
                  height: "570px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "white",
                  position: "relative",
                  borderRadius: "14px 0 0 14px",
                }}
              >
                <Avatar
                  src={login}
                  variant="square"
                  sx={{ width: "350px", height: "350px" }}
                ></Avatar>
                <Box
                  sx={{
                    position: "absolute",
                    right: "0",
                    height: "100%",
                    width: "36px",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg , rgba(0,0,0,0.2) 0% , rgba(255,255,255,0) 100%)",
                  }}
                ></Box>
                <Box
                  sx={{
                    position: "absolute",
                    right: "0",
                    height: "100%",
                    width: "205px",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg , rgba(0,0,0,0.05) 0% , rgba(255,255,255,0) 100%)",
                  }}
                ></Box>
                <Avatar
                  src={noise}
                  variant="square"
                  sx={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    right: "0",
                    left: "0",
                    zIndex: "100",
                    width: "450px",
                    height: "570px",
                  }}
                ></Avatar>
              </Box>
            </Box>

            <Box
              component="div"
              sx={{
                background: "rgba(0,0,0,0)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "450px",
                  height: "570px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "white",
                  position: "relative",
                  borderRadius: "0 14px 14px 0",
                }}
              >
                <Avatar
                  src={sinup}
                  variant="square"
                  sx={{ width: "350px", height: "350px" }}
                ></Avatar>
                <Box
                  sx={{
                    position: "absolute",
                    left: "0",
                    height: "100%",
                    width: "36px",
                    transform: "rotate(180deg)",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg , rgba(0,0,0,0.2) 0% , rgba(255,255,255,0) 100%)",
                  }}
                ></Box>
                <Box
                  sx={{
                    position: "absolute",
                    left: "0",
                    height: "100%",
                    width: "205px",
                    transform: "rotate(180deg)",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg , rgba(0,0,0,0.05) 0% , rgba(255,255,255,0) 100%)",
                  }}
                ></Box>
                <Avatar
                  src={noise}
                  variant="square"
                  sx={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    right: "0",
                    left: "0",
                    zIndex: "100",
                    width: "450px",
                    height: "570px",
                  }}
                ></Avatar>
              </Box>
            </Box>

            <Box
              component="div"
              sx={{
                background: "rgba(0,0,0,0)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "450px",
                  height: "570px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  bgcolor: "white",
                  position: "relative",
                  borderRadius: "14px 0 0 14px",
                }}
              >
                <Grid
                  container
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"start",
                    marginTop:"72px"
                  }}
                  spacing={2}
                >
                  <Grid size={{ xs: 10, md: 10, xl: 10 }} textAlign={"center"} > <Typography variant="h4" fontWeight={"bold"}>ثبت نام</Typography> </Grid>
                  <Grid size={{ xs: 5, md: 5, xl: 5 }}>
                    <TextField
                    size="small"
                      label="نام*"
                      color="black"
                      sx={{
                        "& .MuiInputBase-input": { color: "#000" },
                        "& .MuiInputLabel-root": { color: grey[700] },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: grey[600] },
                          "&:hover fieldset": { borderColor: grey[900] },
                          "&.Mui-focused fieldset": { borderColor: grey[500] },
                        },
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    size={{ xs: 5, md: 5, xl: 5 }}
                    // sx={{ marginTop: "30px" }}
                  >
                    <TextField
                    size="small"
                      label="نام خانوادگی*"
                      color="black"
                      sx={{
                        "& .MuiInputBase-input": { color: "#000" },
                        "& .MuiInputLabel-root": { color: grey[700] },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: grey[600] },
                          "&:hover fieldset": { borderColor: grey[900] },
                          "&.Mui-focused fieldset": { borderColor: grey[500] },
                        },
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    size={{ xs: 10, md: 10, xl: 10 }}
                    // sx={{ marginTop: "30px" }}
                  >
                    <TextField
                    size="small"
                      label="ایمیل*"
                      color="black"
                      sx={{
                        "& .MuiInputBase-input": { color: "#000" },
                        "& .MuiInputLabel-root": { color: grey[700] },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: grey[600] },
                          "&:hover fieldset": { borderColor: grey[900] },
                          "&.Mui-focused fieldset": { borderColor: grey[500] },
                        },
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    size={{ xs: 10, md: 10, xl: 10 }}
                    // sx={{ marginTop: "30px" }}
                  >
                    <TextField
                    size="small"
                      label="رمز عبور*"
                      color="black"
                      sx={{
                        "& .MuiInputBase-input": { color: "#000" },
                        "& .MuiInputLabel-root": { color: grey[700] },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: grey[600] },
                          "&:hover fieldset": { borderColor: grey[900] },
                          "&.Mui-focused fieldset": { borderColor: grey[500] },
                        },
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    size={{ xs: 10, md: 10, xl: 10 }}
                    // sx={{ marginTop: "30px" }}
                  >
                    <TextField
                    size="small"
                      label={"تکرار رمز عبور*"}
                      color="black"
                      sx={{
                        "& .MuiInputBase-input": { color: "#000" },
                        "& .MuiInputLabel-root": { color: grey[700] },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: grey[600] },
                          "&:hover fieldset": { borderColor: grey[900] },
                          "&.Mui-focused fieldset": { borderColor: grey[500] },
                        },
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid size={{ xs: 10, md: 10, xl: 10 }} display={"flex"} justifyContent={"center"}>
                    <Typography variant="body1" marginRight={"5px"}>قبلا ثبت نام کرده اید؟</Typography>
                    <Typography variant="body1" sx={{color:"#DE6164" , cursor:"pointer"}} onClick={()=>{book.current.pageFlip().flipPrev();playAudio();}} >ورود</Typography>
                  </Grid >
                  <Grid size={{ xs: 10, md: 10, xl: 10 }} textAlign={'center'}>
                    <Button variant="contained" sx={{bgcolor:"black.main", color:"white"}}  fullWidth>ساخت حساب</Button>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    position: "absolute",
                    right: "0",
                    height: "100%",
                    width: "36px",
                    pointerEvents: "none",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg , rgba(0,0,0,0.2) 0% , rgba(255,255,255,0) 100%)",
                      
                  }}
                ></Box>
                <Box
                  sx={{
                    position: "absolute",
                    right: "0",
                    height: "100%",
                    width: "205px",
                    pointerEvents: "none",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg , rgba(0,0,0,0.05) 0% , rgba(255,255,255,0) 100%)",
                  }}
                ></Box>
                <Avatar
                  src={noise}
                  variant="square"
                  sx={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    right: "0",
                    left: "0",
                    zIndex: "100",
                    width: "450px",
                    height: "570px",
                    pointerEvents: "none",
                  }}
                ></Avatar>
              </Box>
            </Box>
          </HTMLFlipBook>
        </Box>
      </Box>
    </>
  );
};

export default BookLoginSinup;
