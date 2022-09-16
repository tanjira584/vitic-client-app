import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/auth/Login";
import Signup from "./components/pages/auth/Signup";
import RequireAuth from "./components/pages/auth/RequireAuth";
import Products from "./components/pages/products/Products";
import Purchase from "./components/pages/purchase/Purchase";
import Dashboard from "./components/pages/dashboard/Dashboard";
import MyOrder from "./components/pages/dashboard/MyOrder";
import Payment from "./components/pages/dashboard/Payment";
import MyProfile from "./components/pages/dashboard/MyProfile";
import AddReview from "./components/pages/dashboard/AddReview";
import UpdateProfile from "./components/pages/dashboard/UpdateProfile";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                <Route
                    path="/products"
                    element={
                        <RequireAuth>
                            <Products></Products>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/purchase"
                    element={
                        <RequireAuth>
                            <Purchase></Purchase>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard></Dashboard>
                        </RequireAuth>
                    }
                >
                    <Route
                        index
                        element={
                            <RequireAuth>
                                <MyProfile></MyProfile>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="my-order"
                        element={
                            <RequireAuth>
                                <MyOrder></MyOrder>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="add-review"
                        element={
                            <RequireAuth>
                                <AddReview></AddReview>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="edit-profile"
                        element={
                            <RequireAuth>
                                <UpdateProfile></UpdateProfile>
                            </RequireAuth>
                        }
                    ></Route>
                    <Route
                        path="payment/:id"
                        element={
                            <RequireAuth>
                                <Payment></Payment>
                            </RequireAuth>
                        }
                    ></Route>
                </Route>
            </Routes>

            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
