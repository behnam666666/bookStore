import { createTheme } from "@mui/material/styles";


//NOTE Create Custom Theme
export const theme = createTheme({
  direction: "rtl",
  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: "#bd93f9",
    },
    yellow: {
      main: "#EAD02A",
    },
    black:{
      main:"#000000",
    },
    grey:{
      main:"#5B5B5B"
    }
  },
  
  typography: {
    fontFamily: "IRANSansWeb , vazir",
  }
});
