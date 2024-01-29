import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

import store from "store";
import { Provider } from "react-redux";

import i18 from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { BlogEN } from "languages/en/blog";
import { HomeEN } from "languages/en/home";
import { AboutEN } from "languages/en/about";
import { ContactEN } from "languages/en/contact";
import { HomeES } from "languages/es/home";
import { BlogES } from "languages/es/blog";
import { AboutES } from "languages/es/about";
import { ContactES } from "languages/es/contact";

i18
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources: {
      en: {
        home: HomeEN,
        blog: BlogEN,
        about: AboutEN,
        contact: ContactEN,
      },
      es: {
        home: HomeES,
        blog: BlogES,
        about: AboutES,
        contact: ContactES,
      },
    },
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
  <>
    <Provider store={store}>
      <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Suspense>
    </Provider>
  </>
);
