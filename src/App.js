import "./App.css";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function App() {
    return (
        <div className="">
            <h2 className="text-center text-danger">Hello World</h2>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
