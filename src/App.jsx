import MainLayout from "./components/layouts/MainLayout";

import { Route, Routes } from "react-router-dom";

import BookLoginSinup from "./components/component/first-page/BookLoginSinupp";
import { useState , useEffect } from "react";
import BookLoginAndSinup from "./components/component/LoginAndSinup/BookLoginAndSinup";
import Contentpage from "./components/component/home/Contentpage";
import { useNavigate , Outlet } from "react-router-dom";
import { singupUser , loginUser , getBooks ,getnewBooks } from "./services/contactService";
import Navbarfixed from "./components/component/navbar/Navbarfixed";

import Singlebook from "./components/component/home/Singlebook";
function App() {

  const [databooks , setdatabooks] = useState({});
  const [newbooks , setnewbooks] = useState()
  const [loginsucces, setloginsucces] = useState(false);
  const [loading , setloading] = useState(true);
  const navigate = useNavigate();
  let sinupvalue = {
    "user_id": 0,
    "firstname": "",
    "lastname": "",
    "image": "",
    "password": "",
    "phone": "09987654323",
    "email": ""
}

let loginvalue = {
  "password": "",
  "email": ""
}
 
  const sinuphandle =(event)=>{
    sinupvalue = {
      ...sinupvalue,
      [event.target.id]: event.target.value,
    };

  }
  const sinuphandle2 =()=>{

 
    singupUser(sinupvalue);
  }
  const loginhandle =(event)=>{
    loginvalue = {
      ...loginvalue,
      [event.target.id]: event.target.value,
    };

  }
  const loginhandle2 =async ()=>{
     const {status} = await loginUser(loginvalue);
    console.log(status);
    if(status==200){
      setloginsucces(true);
      navigate("/home");
    }  
  }



  useEffect(()=>{

    const fetchData = async () => {
      try {
        console.log(localStorage.getItem("token"))
        if(localStorage.getItem("token")){
          setloading(true);
          // const { data: booksData } = await getBooks();
          // setdatabooks(booksData);
          const { data: newbooksData ,status  } = await getBooks();
          setnewbooks([newbooksData[0],
            newbooksData[1],
            newbooksData[2],
            newbooksData[3],
            newbooksData[4],
            newbooksData[5],
            newbooksData[6],
            newbooksData[7],
            newbooksData[8],
            newbooksData[9]]);
          setloading(false);
        }
      
        
      } catch (err) {
       
        if (err.response) {
          const { status } = err.response;
          console.error(`Request failed with status 89: ${status}`);
        } else {
          console.error("An error occurred 91:", err.message);
        }

        setloading(false)
      }
    };
    fetchData();
  },[])
  useEffect(()=>{
    const fetchData = async () => {
     
      try {
        
        if(loginsucces){
          setloading(true)
          // const { data: booksData } = await getBooks();
          // setdatabooks(booksData);
          const { data: newbooksData ,status  } = await getBooks();
          setnewbooks([newbooksData[0],
            newbooksData[1],
            newbooksData[2],
            newbooksData[3],
            newbooksData[4],
            newbooksData[5],
            newbooksData[6],
            newbooksData[7],
            newbooksData[8],
            newbooksData[9]]);
          console.log(newbooks);
          setloading(false);
        }
      
        
      } catch (err) {
       
        if (err.response) {
          const { status } = err.response;
          console.error(`Request failed with status128: ${status}`);
        } else {
          console.error("An error occurred130:", err.message);
        }

        setloading(false)
      }
    };
    fetchData();
  },[loginsucces])



  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<BookLoginAndSinup sinuphandle={sinuphandle} sinuphandle2={sinuphandle2} loginhandle={loginhandle} loginhandle2={loginhandle2} />} />
        <Route path="/home" element={<><Navbarfixed /><Outlet/></>} >
          
          <Route path="" element={<><Contentpage newbooks={newbooks} loading={loading} /> </>}></Route>
          <Route path=":bookid" element={<><Singlebook/></>}></Route>
</ Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
