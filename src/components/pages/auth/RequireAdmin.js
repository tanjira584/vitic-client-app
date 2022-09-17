import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../../firebase.init";

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, setAdmin] = useState(false);
    const [aloading, setAloading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`)
                .then((res) => res.json())
                .then((data) => {
                    setAdmin(data.admin);
                    setAloading(false);
                });
        }
    }, [user]);

    if (loading || aloading) {
        return <p className="text-center mt-5">Loading.....</p>;
    }
    if (!user || !admin) {
        return <Navigate to="/"></Navigate>;
    }
    return children;
};

export default RequireAdmin;
