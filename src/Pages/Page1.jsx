import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Layouts/Navbar";
import "./Page1.css";
import img from "../assets/vecteezy_user-icon-on-transparent-background_19879186.png";
import Footer from "../Layouts/Footer";
import log from "../assets/log.png";
import img2 from "../assets/img2.png";

function Page1() {
  const subjects = [
    "مادة الرياضيات",
    "مادة اللغة العربية",
    "مادة اللغة الانجليزية",
  ];

  const fullSubjectMap = {
    "مادة الرياضيات": [
      "مادة الرياضيات",
      "مادة الحاسوب",
      "مادة الفيزياء",
      "مادة الكيمياء",
      "مادة اللغة العربية",
      "مادة الاجتماعيات",
      "مادة العلوم",
    ],
    "مادة اللغة العربية": [
      "مادة اللغة العربية",
      "مادة الاجتماعيات",
      "مادة العلوم",
    ],
    "مادة اللغة الانجليزية": ["مادة اللغة الانجليزية", "مادة الحاسوب"],
  };

  const options = {
    settings: "الإعدادات",
    help: "مساعدة",
    notifications: "الإشعارات",
    logout: "خروج",
  };

  const [selected, setSelected] = useState("Ahmad.1");
  const [open, setOpen] = useState(false);
  const itemRefs = useRef([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filteredSubjects, setFilteredSubjects] = useState([]);

  const handleClick = (index) => {
    setSelectedIndex(index);
    const chosen = subjects[index];
    setFilteredSubjects(fullSubjectMap[chosen] || []);
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

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
                <img src={log} className="logo-img" alt="Logo" />
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
                  <img src={img} className="user-img-2" alt="User Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="outersubject">
          <div className="inersubject">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px",
              }}
            >
              {filteredSubjects.map((subject, index) => (
                <div key={index} className="subjects">
                  <img src={img2} alt={subject} />
                  <div
                    style={{
                      marginTop: "2px",
                      fontWeight: "bold",
                      color: "#e74c3c",
                      fontFamily: "Tajawal, sans-serif",
                    }}
                  >
                    {subject}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="vertical-scroll-container">
            <p className="arabic-button">المواد</p>
            <div className="scroll-area">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`scroll-item ${
                    selectedIndex === index ? "selected" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page1;
