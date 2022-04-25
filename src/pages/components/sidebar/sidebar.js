import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Sidebar } from './sidebar.styled'
import './../../../sidebar.css';
import { useSelector } from 'react-redux';
import { baseUrl } from '../../../constant/baseUrl';
import { useLocation } from 'react-router-dom';
import Cookie from 'js-cookie'
function SideBar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [expandedSetting, setExpandedSetting] = useState(false);
  const users = useSelector((state) => state.users);
  
  const logout = () => {
    localStorage.removeItem('token')
    Cookie.remove("token");
    window.location.reload();
  }

    return (
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <div className="user text-center pb-50 pe-30 flex flex-col items-center">
            <div
              className="bg-white  border border-gray-200 flex items-center justify-center"
              style={{ width: 90, height: 90, borderRadius: "100%" }}
            >
              <span className="text-4xl text-gray-700">
                {users?.name.charAt(0)}{" "}
              </span>
            </div>

            <h2 className="fw-bold text-xl color-palette-1 m-0">
              {users?.name}
            </h2>
            <p className="color-palette-2 m-0">{users?.email}</p>
          </div>
          <div className="menus">
            <Link to="/">
              <div
                className={`item mb-30 ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <svg
                  className="icon me-3 text-blue-100"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9033 14.7502H14.9033V21.7502H21.9033V14.7502Z"
                    stroke="#7E8CAC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9033 14.7502H3.90332V21.7502H10.9033V14.7502Z"
                    stroke="#7E8CAC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.9033 3.75024H14.9033V10.7502H21.9033V3.75024Z"
                    stroke="#7E8CAC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9033 3.75024H3.90332V10.7502H10.9033V3.75024Z"
                    stroke="#7E8CAC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="item-title ml-2">
                  <a href="" className="text-lg text-decoration-none">
                    Overview
                  </a>
                </p>
              </div>
            </Link>

            <Link to="/products">
              <div
                className={`item ${
                  location.pathname === "/products" ? "active mb-30" : "mb-30"
                }  `}
              >
                <svg
                  className="icon me-3"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.90332 2.41406L3.90332 6.41406V20.4141C3.90332 20.9445 4.11403 21.4532 4.48911 21.8283C4.86418 22.2033 5.37289 22.4141 5.90332 22.4141H19.9033C20.4338 22.4141 20.9425 22.2033 21.3175 21.8283C21.6926 21.4532 21.9033 20.9445 21.9033 20.4141V6.41406L18.9033 2.41406H6.90332Z"
                    stroke="#7E8CAC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.9033 10.4141C16.9033 11.4749 16.4819 12.4923 15.7317 13.2425C14.9816 13.9926 13.9642 14.4141 12.9033 14.4141C11.8425 14.4141 10.825 13.9926 10.0749 13.2425C9.32475 12.4923 8.90332 11.4749 8.90332 10.4141"
                    stroke="#7E8CAC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.90332 6.41406H21.9033"
                    stroke="#7E8CAC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="item-title ml-2 cursor-pointer">
                  <span className="text-lg text-decoration-none">Product</span>
                </p>
              </div>
            </Link>

            <div
              className={`item mb-30 ${
                location.pathname === "/umkm" ? "active" : ""
              }`}
            >
              <svg
                className="icon me-3"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.90332 2.41406L3.90332 6.41406V20.4141C3.90332 20.9445 4.11403 21.4532 4.48911 21.8283C4.86418 22.2033 5.37289 22.4141 5.90332 22.4141H19.9033C20.4338 22.4141 20.9425 22.2033 21.3175 21.8283C21.6926 21.4532 21.9033 20.9445 21.9033 20.4141V6.41406L18.9033 2.41406H6.90332Z"
                  stroke="#7E8CAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.9033 10.4141C16.9033 11.4749 16.4819 12.4923 15.7317 13.2425C14.9816 13.9926 13.9642 14.4141 12.9033 14.4141C11.8425 14.4141 10.825 13.9926 10.0749 13.2425C9.32475 12.4923 8.90332 11.4749 8.90332 10.4141"
                  stroke="#7E8CAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.90332 6.41406H21.9033"
                  stroke="#7E8CAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Link to="/umkm">
                <p className="item-title ml-2">
                  <span className="text-lg text-decoration-none">Umkm</span>
                </p>
              </Link>
            </div>
            <Link to="/category">
              <div className="item mb-30">
                <svg
                  className="icon me-3"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9033 11.9141C21.9068 13.234 21.5984 14.536 21.0033 15.7141C20.2978 17.1258 19.2131 18.3133 17.8708 19.1434C16.5285 19.9735 14.9816 20.4135 13.4033 20.4141C12.0835 20.4175 10.7814 20.1092 9.60332 19.5141L3.90332 21.4141L5.80332 15.7141C5.20825 14.536 4.89988 13.234 4.90332 11.9141C4.90393 10.3358 5.34393 8.78894 6.17404 7.44664C7.00415 6.10434 8.19157 5.01966 9.60332 4.31409C10.7814 3.71902 12.0835 3.41065 13.4033 3.41409H13.9033C15.9877 3.52908 17.9564 4.40885 19.4325 5.88495C20.9086 7.36105 21.7883 9.32974 21.9033 11.4141V11.9141Z"
                    stroke="#7E8CAC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="item-title ml-2">
                  <a href="" className="text-lg text-decoration-none">
                    Category
                  </a>
                </p>
              </div>
            </Link>

            <Link to="/subcategory">
              <div className="item mb-30">
                <svg
                  className="icon me-3"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9033 11.9141C21.9068 13.234 21.5984 14.536 21.0033 15.7141C20.2978 17.1258 19.2131 18.3133 17.8708 19.1434C16.5285 19.9735 14.9816 20.4135 13.4033 20.4141C12.0835 20.4175 10.7814 20.1092 9.60332 19.5141L3.90332 21.4141L5.80332 15.7141C5.20825 14.536 4.89988 13.234 4.90332 11.9141C4.90393 10.3358 5.34393 8.78894 6.17404 7.44664C7.00415 6.10434 8.19157 5.01966 9.60332 4.31409C10.7814 3.71902 12.0835 3.41065 13.4033 3.41409H13.9033C15.9877 3.52908 17.9564 4.40885 19.4325 5.88495C20.9086 7.36105 21.7883 9.32974 21.9033 11.4141V11.9141Z"
                    stroke="#7E8CAC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="item-title ml-2">
                  <a href="" className="text-lg text-decoration-none">
                    Sub Kategori
                  </a>
                </p>
              </div>
            </Link>

            <div className="item mb-30">
              <svg
                className="icon me-3"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2634 7.05396C20.5218 8.31274 21.3787 9.9164 21.7257 11.6621C22.0728 13.4079 21.8944 15.2173 21.2131 16.8617C20.5318 18.5061 19.3782 19.9115 17.8983 20.9003C16.4183 21.8891 14.6783 22.4169 12.8984 22.4169C11.1185 22.4169 9.37859 21.8891 7.89861 20.9003C6.41864 19.9115 5.26508 18.5061 4.58381 16.8617C3.90253 15.2173 3.72413 13.4079 4.07116 11.6621C4.41819 9.9164 5.27506 8.31274 6.53344 7.05396"
                  stroke="#7E8CAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.9033 2.41406V12.4141"
                  stroke="#7E8CAC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="item-title ml-2 cursor-pointer">
                <span onClick={logout} href="" className="text-lg text-decoration-none">
                  Log Out
                </span>
              </p>
            </div>
          </div>
          <div className="sidebar-footer pt-73 pe-30">
            <div className="footer-card">
              <div className="d-flex justify-content-between mb-20">
                <p className="fw-medium color-palette-1">Karya Nusantara</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default SideBar