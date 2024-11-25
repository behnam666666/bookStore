import MainLayout from "./components/layouts/MainLayout";

import { Route, Routes } from "react-router-dom";

import BookLoginSinup from "./components/component/first-page/BookLoginSinupp";
import { useState, useEffect } from "react";
import BookLoginAndSinup from "./components/component/LoginAndSinup/BookLoginAndSinup";
import Contentpage from "./components/component/home/Contentpage";
import { useNavigate, Outlet } from "react-router-dom";
import {
  singupUser,
  loginUser,
  getBooks,
  getnewBooks,
  getrecommendbooks,
} from "./services/contactService";
import Navbarfixed from "./components/component/navbar/Navbarfixed";
import Books from "./components/component/books/Books";

import Singlebook from "./components/component/home/Singlebook";
function App() {
  // const [databooks, setdatabooks] = useState({});
  const [newbooks, setnewbooks] = useState();
  const [statusnewbooks , setstatusnewbooks]= useState();
  const [recommendbook , setrecommendbook] = useState();
  const [statusrecommend , setstatusrecommend] = useState();
  const [loginsucces, setloginsucces] = useState(false);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  let sinupvalue = {
    user_id: 0,
    firstname: "",
    lastname: "",
    image: "",
    password: "",
    phone: "09987654323",
    email: "",
  };

  let loginvalue = {
    password: "",
    email: "",
  };

  const sinuphandle = (event) => {
    sinupvalue = {
      ...sinupvalue,
      [event.target.id]: event.target.value,
    };
  };
  const sinuphandle2 = () => {
    singupUser(sinupvalue);
  };
  const loginhandle = (event) => {
    loginvalue = {
      ...loginvalue,
      [event.target.id]: event.target.value,
    };
  };
  const loginhandle2 = async () => {
    const { status } = await loginUser(loginvalue);
    console.log("kir")
    console.log(status);
    if (status == 200) {
      setloginsucces(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(localStorage.getItem("token"));
        
         
          const { data, status } = await getnewBooks();
          setnewbooks(data);
          console.log("ketab new :" , newbooks)
          setstatusnewbooks(status)
      
        
      } catch (err) {
        setstatusnewbooks(err.response.status)
        if (err.response) {
          const { status } = err.response;
          console.error(`Request failed with status 89: ${status}`);
        } else {
          console.error("An error occurred 91:", err.message);
        }

        setloading(false);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
          const { data, status } = await getnewBooks();
          setnewbooks(data);
          console.log(newbooks);
          setstatusnewbooks(status)

        
      } catch (err) {
        setstatusnewbooks(err.response.status)

        if (err.response) {
          const { status } = err.response;
          console.error(`Request failed with status128: ${status}`);
        } else {
          console.error("An error occurred130:", err.message);
        }

        setloading(false);
      }
    };
    fetchData();
  }, [loginsucces]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
          const { data, status } = await getrecommendbooks();
          setrecommendbook(data);
          setstatusrecommend(status)
          console.log("recommend book :" , data);
          
      } catch (err) {
        setstatusrecommend(err.response.status)
        if (err.response) {
          const { status } = err.response;
          console.error(`recommend : ${status}`);
        } else {
          console.error("recommend:", err.message);
        }
      }
    };
    fetchData();
  }, [loginsucces]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
          const { data, status } = await getrecommendbooks();
          setrecommendbook(data);
          setstatusrecommend(status)
          console.log("recommend book :" , data);
          
      } catch (err) {
        setstatusrecommend(err.response.status)
        if (err.response) {
          const { status } = err.response;
          console.error(`recommend : ${status}`);
        } else {
          console.error("recommend:", err.message);
        }
      }
    };
    fetchData();
  }, []);


  return (
    <MainLayout>
      <Routes>
        <Route
          path="/"
          element={
            <BookLoginAndSinup
              sinuphandle={sinuphandle}
              sinuphandle2={sinuphandle2}
              loginhandle={loginhandle}
              loginhandle2={loginhandle2}
            />
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Navbarfixed />
              <Outlet />
            </>
          }
        >
          <Route
            path="books"
            element={
              <>
                <Books />
              </>
            }
          ></Route>
          <Route
            path=""
            element={
              <>
                <Contentpage newbooks={newbooks} statusnewbooks={statusnewbooks} recommendbook={recommendbook} statusrecommend={statusrecommend} />{" "}
              </>
            }
          ></Route>
          <Route
            path=":bookid"
            element={
              <>
                <Singlebook />
              </>
            }
          ></Route>
          
        </Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
