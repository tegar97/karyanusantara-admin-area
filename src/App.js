import { Routes, Route, useLocation, Navigate ,useRoutes} from "react-router-dom";
import Home from "./pages/home/home";
import SideBar from "./pages/components/sidebar/sidebar";
import TopBar from "./pages/components/topbar/topbar";
import AddProduct from "./pages/product/add-product";
import Login from "./pages/login/login";
import React,{useEffect} from 'react'
import auth from "./api/auth";
import { populateProfile } from "./store/actions/users";
import { useDispatch, useSelector } from "react-redux";
import MemberRoute from "./routes/MemberRoute";
import GuestRoute from "./routes/GuestRoute";
import Cookie from 'js-cookie'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import routes from "./routers";
function App() {
  const route = useLocation()
    const dispatch = useDispatch();
  const usersToken = localStorage.getItem("token");

   useEffect(() => {
     let session = null;
     let sessionCookie = Cookie.get("token");

     if (sessionCookie) {
       session = localStorage.getItem("token");
       if (!session) {
         localStorage.setItem('token',sessionCookie)
       } else {
         if (session !== sessionCookie) {
              localStorage.setItem("token", sessionCookie);

         }
       }
       const loadUser = async () => {
         await auth
           .details(`Bearer ${sessionCookie}`)
           .then((details) => {
             dispatch(populateProfile(details.data.data.data));
           })
           .catch((err) => {
             auth.refresh(session).then((res) => {
               const newToken = res.data.data.access_token;
               localStorage.setItem("token", newToken);
               auth.details(`Bearer ${newToken}`).then((details) => {
                 dispatch(populateProfile(details.data.data.data));
               });
             });
           });
       };
       loadUser();
     }

   }, [dispatch]);
  
    const routing = useRoutes(routes(usersToken));
  return (
    <div className="relative ">
      <ToastContainer />

      {route.pathname == "/add-product" && <TopBar />}
      <div className=" flex relative ">
        {route.pathname == "/add-product" || route.pathname == "/login" ? (
          ""
        ) : (
          <div className="flex relative" style={{ width: 280 }}>
            <SideBar />
          </div>
        )}
        {routing}
      </div>
    </div>
  );
}



export default App;
