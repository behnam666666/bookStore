import { useFormik ,useField } from "formik";
import { Avatar, Typography, TextField, Button, Box } from "@mui/material";
import { useRef , useState , useEffect} from "react";
import Grid from "@mui/material/Grid2";
import sinup from "../../../assets/logo/sinup.svg";
import login from "../../../assets/logo/login.svg";
import soundbook from "../../../assets/logo/pageeffect.mp3";
import { grey } from "@mui/material/colors";

import Bookpaperleft from "../book/Bookpaperleft";
import Bookpaperright from "../book/Bookpaperright";
import BookBody from "../book/BookBody";
import logo from "../../../assets/logo/logo.png"
import { contactValidationSchemalogin , contactValidationSchemasinup } from "../../../validations/contactValidation";
const audio = new Audio(soundbook);

const BookLoginAndSinup = ({sinuphandle , sinuphandle2 ,loginhandle , loginhandle2}) => {

const [errlogin , setlogin]= useState(false);
const [errsinup , setsinup]= useState(false);



  useEffect(()=>{
    console.log("use")
  }
)


  const book = useRef();
  const playAudio = () => {
    audio.currentTime = 0;
    audio.play();
  };

  const formik = useFormik({
    initialValues: {
    email: "",
    password:""
  },
    onSubmit: (values) => {
      console.log("Form Values: ", values);
    },
    validationSchema: contactValidationSchemalogin,
  });

  const formiksinup = useFormik({
    initialValues: {
      firstname:"",
      lastname:"",
    email: "",
    password:"",
    confirmPassword:""
  },
    onSubmit: (values) => {
      // console.log("Form Values: ", values);
    },
    validationSchema: contactValidationSchemasinup,
  });
  const emailsinupRef = useRef(" ");
  const passworsinupdRef = useRef("");
  const namesinupRef = useRef(" ");
  const fullnamesinupdRef = useRef("");
  const confirmPasswordsinupRef = useRef(" ");

  const emailRef = useRef(" ");
  const passwordRef = useRef("");

  const handleEmailsinupChange = (event) => {
    emailsinupRef.current = event.target.value;
  };
  const handlenamesinupChange = (event) => {
    namesinupRef.current = event.target.value;
  };
  const handlefullnamesinupChange = (event) => {
    fullnamesinupdRef.current = event.target.value;
  };
  const handlepasswordsinupChange = (event) => {
    passworsinupdRef.current = event.target.value;
  };
  const handleconfirmpasswordsinupChange = (event) => {
    confirmPasswordsinupRef.current = event.target.value;
  };



  const handleEmailChange = (event) => {
    emailRef.current = event.target.value;
  };

  const handlePasswordChange = (event) => {
    passwordRef.current = event.target.value;
  };

  // تنظیم مقدار فرم در هنگام submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    // await formik.setFieldValue("password", passwordRef.current, false); // تنظیم مقدار جدید برای email
    await formik.setValues({
      email: emailRef.current,
      password: passwordRef.current,
    });

    if(passwordRef.current.length==0 ||passwordRef.current.length==null||emailRef.current.length==null||emailRef.current.length==0){
      formik.setTouched({
        email: true,
        password: true,
      });
      formik.setErrors({ ...formik.errors, password: "dddd" });
      console.log(" خطا");
      setlogin(true);
    }
    else{
      console.log("بدون خطا")
      formik.handleSubmit(); // سپس ارسال فرم بعد از اطمینان از به‌روزرسانی مقدار
      setlogin(false);  
    }
    
    const errors = await formik.validateForm();

    // بررسی وجود ارور
    if (Object.keys(errors).length == 0) {
      console.log("2بدون خطا");
      setlogin(false);
      loginhandle2();
    } else {
      console.log("2خطا");
      setlogin(true);
    }

  };

  const handlsinupeSubmit = async (event) => {
    event.preventDefault();
    // await formik.setFieldValue("password", passwordRef.current, false); // تنظیم مقدار جدید برای email
    await formiksinup.setValues({
      email: emailsinupRef.current,
      password: passworsinupdRef.current,
      firstname: namesinupRef.current,
      lastname : fullnamesinupdRef.current,
      password:passworsinupdRef.current,
      confirmPassword:confirmPasswordsinupRef.current
    });

    if(passworsinupdRef.current.length==0 ||passworsinupdRef.current.length==null||emailsinupRef.current.length==null||emailsinupRef.current.length==0||namesinupRef.current.length==null||namesinupRef.current.length==0||fullnamesinupdRef.current.length==null||fullnamesinupdRef.current.length==0||confirmPasswordsinupRef.current.length==null||confirmPasswordsinupRef.current.length==0){
      // formiksinup.setTouched({
      //   email: true,
      //   password: true,
      //   firstname: true,
      //   lastname : true,
      //   confirmPassword: true
      // });
      // formik.setErrors({ ...formik.errors, password: "dddd" });
      console.log(" خطا");
      setsinup(true);
      return
    }
    else{
      console.log("بدون خطا")
      formiksinup.handleSubmit(); // سپس ارسال فرم بعد از اطمینان از به‌روزرسانی مقدار
      setsinup(false);  
    }
    const errors = await formiksinup.validateForm();

    // بررسی وجود ارور
    if (Object.keys(errors).length == 0) {
      console.log("2بدون خطا");
      setsinup(false);
      sinuphandle2();
      book.current.pageFlip().flipPrev();
      playAudio();
    } else {
      console.log("2خطا");
      setsinup(true);
    }

  };

  return (
    <>
      <Box
        component="div"
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#EBE9DD",
          
        }}
      >

        <Avatar src={logo} sx={{marginBottom:"23px", width:"52px" , height:"52px"}} ></Avatar>
        <BookBody w={450} h={570} book={book}>
          <form  >
            <Bookpaperleft w={450} h={570}>
              <Grid
                container
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
                spacing={2}
              >
                <Grid size={{ xs: 10, md: 10, xl: 10 }} textAlign={"center"}>
                  {" "}
                  <Typography variant="h4" fontWeight={"bold"}>
                    ورود
                  </Typography>{" "}
                </Grid>
                <Grid size={{ xs: 10, md: 10, xl: 10 }}>
                  <TextField
                  
                  onChange={(event)=>{handleEmailChange(event);loginhandle(event)}}
                  inputRef={emailRef}
                  helperText={
                  formik.touched.email
                      ? formik.errors.email
                      : null
              }
              error={Boolean(
                  formik.touched.email &&
                      formik.errors.email
              )}
                  
                    id="email"
                    name="email"
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

                  inputRef={passwordRef}
                  helperText={

                  formik.touched.password
                      ? formik.errors.password
                      : null
              }
              error={Boolean(
                  formik.touched.password &&
                      formik.errors.password
              )}
                  
                  onChange={(event)=>{handlePasswordChange(event);loginhandle(event)}}
                    id="password"
                   name="password"
                    size="small"
                    label="رمز ورود*"
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
                <Grid size={{ xs: 10, md: 10, xl: 10 }}>
                <Typography variant="caption" sx={{display:errlogin?"inline-block":"none" , color:"red"}}>لطفا تمامی فیلد ها را پر کنید</Typography>

                </Grid>
                
                <Grid
                  size={{ xs: 10, md: 10, xl: 10 }}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Typography variant="body1" marginRight={"5px"}>
                    حساب ندارید؟
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#DE6164", cursor: "pointer" }}
                    onClick={() => {
                      book.current.pageFlip().flipNext();
                      playAudio();
                    }}
                  >
                    ثبت نام
                  </Typography>
                </Grid>
                <Grid size={{ xs: 10, md: 10, xl: 10 }} textAlign={"center"}>
                  <Button
                  onClick={handleSubmit}
                    type="submit"
                    variant="contained"
                    sx={{ bgcolor: "#272935", color: "white" }}
                    fullWidth
                  >
                     ورود
                  </Button>
                </Grid>
              </Grid>
            </Bookpaperleft>
          </form>

          <div>
            <Bookpaperright w={450} h={570}>
              <Avatar
                src={login}
                variant="square"
                sx={{ width: "77%", height: "61%" }}
              ></Avatar>
            </Bookpaperright>
          </div>
          <div>
            <Bookpaperleft w={450} h={570}>
              <Avatar
                src={sinup}
                variant="square"
                sx={{ width: "77%", height: "61%" }}
              ></Avatar>
            </Bookpaperleft>
          </div>

          <form onSubmit={handlsinupeSubmit} >
            <Bookpaperright w={450} h={570}>
              <Grid
                container
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
                spacing={2}
              >
                <Grid size={{ xs: 10, md: 10, xl: 10 }} textAlign={"center"}>
                  {" "}
                  <Typography variant="h4" fontWeight={"bold"}>
                    ثبت نام
                  </Typography>{" "}
                </Grid>
                <Grid size={{ xs: 5, md: 5, xl: 5 }}>
                  <TextField
                       onChange={(event)=>{handlenamesinupChange(event);sinuphandle(event)}}
                       inputRef={namesinupRef}
                       helperText={
                       formiksinup.touched.firstname
                           ? formiksinup.errors.firstname
                           : null
                   }
                   error={
                     Boolean(
                       formiksinup.touched.firstname &&
                           formiksinup.errors.firstname
                   )}
                   id="firstname"
                   name="firstname"
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
                       onChange={(event)=>{handlefullnamesinupChange(event);sinuphandle(event)}}
                       inputRef={fullnamesinupdRef}
                       helperText={
                       formiksinup.touched.lastname
                           ? formiksinup.errors.lastname
                           : null
                   }
                   error={
                     Boolean(
                       formiksinup.touched.lastname &&
                           formiksinup.errors.lastname
                   )}
                   id="lastname"
                   name="lastname"
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
                       onChange={(event)=>{handleEmailsinupChange(event);sinuphandle(event)}}
                       inputRef={emailsinupRef}
                       helperText={
                       formiksinup.touched.email
                           ? formiksinup.errors.email
                           : null
                   }
                   error={
                     Boolean(
                       formiksinup.touched.email &&
                           formiksinup.errors.email
                   )}
                id="email"
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
                  onChange={(event)=>{handlepasswordsinupChange(event);sinuphandle(event)}}
                  inputRef={passworsinupdRef}
                  helperText={
                  formiksinup.touched.password
                      ? formiksinup.errors.password
                      : null
              }
              error={
                Boolean(
                  formiksinup.touched.password &&
                      formiksinup.errors.password
              )}
              id="password"
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

                  onChange={(event)=>{handleconfirmpasswordsinupChange(event);}}
                  inputRef={confirmPasswordsinupRef}
                  helperText={
                  formiksinup.touched.confirmPassword
                      ? formiksinup.errors.confirmPassword
                      : null
              }
              error={Boolean(
                  formiksinup.touched.confirmPassword &&
                      formiksinup.errors.confirmPassword
              )}
                  id="confirmPassword"
                  name="confirmPassword"
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
                <Typography variant="caption" sx={{display:errsinup?"inline-block":"none" , color:"red"}}>لطفا تمامی فیلد ها را پر کنید</Typography>
                <Grid
                  size={{ xs: 10, md: 10, xl: 10 }}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Typography variant="body1" marginRight={"5px"}>
                    قبلا ثبت نام کرده اید؟
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#DE6164", cursor: "pointer" }}
                    onClick={() => {
                      book.current.pageFlip().flipPrev();
                      playAudio();
                    }}
                  >
                    ورود
                  </Typography>
                </Grid>
                <Grid size={{ xs: 10, md: 10, xl: 10 }} textAlign={"center"}>
                  <Button

                  onSubmit={handlsinupeSubmit}

                  type="submit"
                    variant="contained"
                    sx={{ bgcolor: "#272935", color: "white" }}
                    fullWidth
                  >
                    ساخت حساب
                  </Button>
                </Grid>
              </Grid>
            </Bookpaperright>
          </form>
        </BookBody>
      </Box>
    </>
  );
};

export default BookLoginAndSinup;
