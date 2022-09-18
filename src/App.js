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
import ManageUsers from "./components/pages/dashboard/ManageUsers";
import ManageOrders from "./components/pages/dashboard/ManageOrders";
import ManageProducts from "./components/pages/dashboard/ManageProducts";
import AddProduct from "./components/pages/dashboard/AddProduct";
import RequireAdmin from "./components/pages/auth/RequireAdmin";
import Page404 from "./components/pages/page404/Page404";

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
                        path="manage-user"
                        element={
                            <RequireAdmin>
                                <ManageUsers></ManageUsers>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="manage-order"
                        element={
                            <RequireAdmin>
                                <ManageOrders></ManageOrders>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="manage-product"
                        element={
                            <RequireAdmin>
                                <ManageProducts></ManageProducts>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="add-product"
                        element={
                            <RequireAuth>
                                <AddProduct></AddProduct>
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
                <Route path="*" element={<Page404></Page404>}></Route>
            </Routes>

            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
