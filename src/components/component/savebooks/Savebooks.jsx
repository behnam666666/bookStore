import { motion } from "framer-motion";
import { Box , Typography } from "@mui/material";
const Savebooks = () => {
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
        ></motion.div>
      </Box>
    </>
  );
};

export default Savebooks;
