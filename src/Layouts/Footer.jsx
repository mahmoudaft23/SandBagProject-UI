import React, { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import "./Footer.css";
import log from "../assets/log.png";

function Footer() {
  const [year] = useState("2025");

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-inner">
          <span className="footer-container-inner-title font-footer-family">
            روابط مهمة
          </span>
          <div className="footer-container-outer">
            <div className="footer-container-inner-right">
              <ul className="footer-container-unordered-list font-footer-family">
                <li>تواصل معنا -</li>
                <li>الأسئلة الأكثر شيوعاً -</li>
              </ul>
            </div>
            <div className="footer-container-inner-left">
              <ul className="footer-container-unordered-list font-footer-family">
                <li>من نحن -</li>
                <li>سياسات الخصوصية -</li>
                <li>شروط الاستخدام -</li>
                <li>سياسة الإرجاع والإلغاء -</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-logo-img">
          <img src={log} alt="SandBag Logo" />
        </div>
      </div>

      <div className="footer-down">
        <span className="font-footer font-footer-family">
          تابعنا على مواقع التواصل الاجتماعي
        </span>
        <div className="social-icons">
          <a>
            <Instagram size={20} color="rgb(207, 206, 206)" />
          </a>
          <a>
            <Facebook size={20} color="rgb(207, 206, 206)" />
          </a>
          <a>
            <Twitter size={20} color="rgb(207, 206, 206)" />
          </a>
          <a>
            <Youtube size={20} color="rgb(207, 206, 206)" />
          </a>
        </div>
        <span className="font-footer font-footer-bold font-footer-family">
          {year} ساند باج{" "}
        </span>
        <span className="font-footer font-footer-family">
          جميع الحقوق محفوظة.تطوير
          <span className="font-footer-bold font-footer-family">
            {" "}
            العهد لتقنيات الكمبيوتر
          </span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
