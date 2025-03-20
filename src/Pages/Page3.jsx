import React, { useState } from "react";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";

import img from "../assets/vecteezy_user-icon-on-transparent-background_19879186.png";
import log from "../assets/log.png";
import "./Page3.css";

function Page3() {
  const [username, setUsername] = useState("Dana.mihrab");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(username);

  const options = {
    settings: "الإعدادات",
    help: "مساعدة",
    notifications: "الإشعارات",
    logout: "خروج",
  };

  const userchild = [
    {
      name: "hala.2",
      img: log,
    },
    {
      name: "jana.7",
      img: log,
    },
  ];

  return (
    <div className="page1">
      <Navbar />
      <div>
        <header className="title-1">
          <p className="title-1-font">واجهة الأهل</p>
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
                <img src={log} alt="Logo" className="logo-img" />
              </div>
            </div>

            <div className="BottomBorder-2"></div>
            <div className="user-name-font-div">
              <p className="user-name-font"> {username} , أهلاً </p>
            </div>
          </div>
        </div>
        <div>
          <div className="container-child-veiw">
            <p className="title-child-veiw">أطفالك</p>
            <p className="subtitle-child-veiw">
              هذه هي حسابات أطفالك، انقر فوق اسم طفلك لعرض تقدمه
            </p>
          </div>

          <div className="child-list">
            {userchild.map((child, index) => (
              <div key={index} className="child-container">
                <div className="name-img">
                  <img src={child.img} alt={child.name} className="child-img" />
                  <span className="child-name font-family-cilde">
                    {child.name}
                  </span>
                </div>
                <span className="child-settings font-family-cilde">
                  الإعدادات
                </span>
              </div>
            ))}
          </div>
          <div className="child-form-container-outer">
            <div className="child-form-container">
              <p className="child-form-title"> ! هل أنت جاهز لإضافة طفلك </p>
              <p className="child-form-subtitle">
                النقر فوق "أضف طفلاً" لإنشاء حساب جديد لطفلك! أو الدخول لحساب
                موجود
              </p>
              <button className="child-form-button">أضف طفلاً</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page3;
