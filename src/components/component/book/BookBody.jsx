import HTMLFlipBook from "react-pageflip";

import { Box } from "@mui/material";

const BookBody = ({children ,  w , h,book }) => {
  
  return (
    <>
      <Box
        sx={{
          width: `${w * 2 + 9}px`,
          height: `${h + 6}px`,
          bgcolor: "#ede6c8",
          display: "flex",
          justifyContent: "center",
          boxShadow:
            " 0px 16px 24px rgba(0,0,0,.2)  , inset 0px 0px 12px rgba(0, 0, 0, .5)",
          borderRadius: "14px",
        }}
      >
        <HTMLFlipBook
          ref={book}
          useMouseEvents={false}
          mobileScrollSupport={false}
          width={parseInt(w)}
          height={parseInt(h)}
          drawShadow={true}
          // showCover={true}
        >
        
              {children}
            
        </HTMLFlipBook>
      </Box>
    </>
  );
};

export default BookBody;
