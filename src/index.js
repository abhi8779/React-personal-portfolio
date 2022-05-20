import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.querySelector("#root");

const rootELement = ReactDOM.createRoot(root);

rootELement.render(<App />);
