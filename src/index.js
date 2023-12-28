import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

import i18 from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],  
    },
    lng: "es",
    fallbackLng: ["es", "en"],
    backend: {
      loadPath: "/languages/{{lng}}/global.json",
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));

const loadingMarkup = (
  <div className="py-4 px-2 text-center">
    <h2 className="text-oro font-Main text-xl">Loading...</h2>
  </div>
);

root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
