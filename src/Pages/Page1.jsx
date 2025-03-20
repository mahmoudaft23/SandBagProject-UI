import React, { useState } from "react";
import Navbar from "../Layouts/Navbar";
import "./Page1.css";
import img from "../assets/vecteezy_user-icon-on-transparent-background_19879186.png";
import Footer from "../Layouts/Footer";
import log from "../assets/log.png";

function Page1() {
  const options = {
    settings: "الإعدادات",
    help: "مساعدة",
    notifications: "الإشعارات",
    logout: "خروج",
  };
  const [selected, setSelected] = useState("Ahmad.1");
  const [open, setOpen] = useState(false);
  return (
    <div className="page1">
      <Navbar />
      <div>
        <header className="title-1">
          <p className="title-1-font">واجهة الطفل</p>
        </header>
        <div className="Meun">
          <div className="Meunpageouter">
            <div className="Meunpage">
              <div className="dropdown">
                <button
                  className="dropdown-button"
                  onClick={() => setOpen(!open)}
                >
                  <span className="text-font-dropdown-min"> ▼ {selected}</span>
                </button>

                {open && (
                  <div className="dropdown-menu">
                    {Object.values(options).map((option, index) => (
                      <div
                        key={index}
                        className="dropdown-item"
                        onClick={() => {
                          setSelected(option);
                          setOpen(false);
                        }}
                      >
                        <span className="text-font-dropdown">{option}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <img src={log} className="logo-img " />
              </div>
            </div>

            <div className="BottomBorder-2"></div>
            <div className="user-meun">
              <div className="user-meun-iner">
                <div className="user-name-meun">
                  <span className="text-font-dropdown-min-1">{selected}</span>
                  <span className="text-font-dropdown-min-2">@{selected}</span>
                </div>
                <div>
                  <img src={img} className="user-img" alt="User Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <Footer />
    </div>
  );
}

export default Page1;
