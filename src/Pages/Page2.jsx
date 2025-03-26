import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Layouts/Navbar";
import "./Page2.css";
import img from "../assets/vecteezy_user-icon-on-transparent-background_19879186.png";
import Footer from "../Layouts/Footer";

function Page2() {
  const [selected, setSelected] = useState("Ahmad.1");
  const [rows, setRows] = useState([]);
  const [activeTable, setActiveTable] = useState("progress");
  const tableRef = useRef(null);
  const [account1, setaccount1] = useState(3); //الحساب
  const [account2, setaccount2] = useState(5); //التقدم
  useEffect(() => {
    loadTableData("progress");
  }, []);

  const createRows = (type, length) => {
    const isProgress = type === "progress";
    return Array.from({ length }, (_, i) => ({
      id: i,
      activity: isProgress ? "لعبة الرياضيات" : "نشاط الحساب",
      stage: isProgress ? 1 : 2,
      grade: isProgress ? "8/10" : "10/10",
      note: isProgress ? "يرجى مراجعة جداول الضرب" : "أداء ممتاز في الحساب",
    }));
  };

  const loadTableData = (type) => {
    const length = type === "account" ? account1 : account2;

    const newRows = createRows(type, length);
    setRows(newRows);
  };

  const handleScroll = () => {
    const bottom =
      tableRef.current.scrollHeight - tableRef.current.scrollTop ===
      tableRef.current.clientHeight;

    if (bottom && rows.length !== 7) {
      const newRows = createRows(activeTable, 7);
      setRows(newRows);
    }
  };

  const handleTableChange = (type) => {
    setActiveTable(type);
    loadTableData(type);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="title-1-font-outer">
          <p className="title-1-font">التقدم للاهل</p>
        </div>

        <div className="mune-bar">
          <div className="mune-bar-inner">
            <div className="mune-bar-title">
              <a className="title" href="#">
                العودة الى الصفحة الرئيسية ▶
              </a>
            </div>
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
      </div>

      <div className="activity-container">
        <div className="buttons-side">
          {activeTable === "account" && <span className="arrow-1"></span>}
          <button
            className={`side-button ${
              activeTable === "account" ? "active" : ""
            }`}
            onClick={() => handleTableChange("account")}
          >
            الحساب
          </button>

          {activeTable === "progress" && <span className="arrow-1"></span>}
          <button
            className={`side-button ${
              activeTable === "progress" ? "active" : ""
            }`}
            onClick={() => handleTableChange("progress")}
          >
            التقدم
          </button>
        </div>

        <div className="scroll-table">
          <table className="activity-table activity-table-heder">
            <thead>
              <tr>
                <th style={{ width: "10%", fontFamily: "Tajawal, sans-serif" }}>
                  النشاط
                </th>
                <th style={{ width: "10%", fontFamily: "Tajawal, sans-serif" }}>
                  المرحلة
                </th>
                <th style={{ width: "10%", fontFamily: "Tajawal, sans-serif" }}>
                  العلامة
                </th>
                <th
                  style={{
                    width: "70%",
                    textAlign: "right",
                    fontFamily: "Tajawal, sans-serif",
                  }}
                >
                  ملاحظة
                </th>
              </tr>
            </thead>
          </table>
          <div className="scroll-body" onScroll={handleScroll} ref={tableRef}>
            <table className="activity-table activity-table-body">
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td style={{ width: "10.1%", fontWeight: "bold" }}>
                      {row.activity}
                    </td>
                    <td style={{ width: "10.1%", fontWeight: "bold" }}>
                      {row.stage}
                    </td>
                    <td style={{ width: "10.1%", fontWeight: "bold" }}>
                      {row.grade}
                    </td>
                    <td
                      style={{
                        width: "70%",
                        textAlign: "right",
                        fontWeight: "bold",
                      }}
                    >
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="font-down">
        <p>قد يستغرق النشاط الاخير مدة لاظهاره ادناه</p>
      </div>
      <Footer />
    </div>
  );
}

export default Page2;
