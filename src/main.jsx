import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CursorProvider from "./context/CursorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CursorProvider>
        <App />
    </CursorProvider>,
);
