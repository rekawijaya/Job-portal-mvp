    import axios from "axios";
    import React, { createContext, useContext, useEffect, useState } from "react";
    

    const AuthContext = createContext();

    export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("userInfo")) || {}
    );

    useEffect(() => {
        const storedUserData = localStorage.getItem("userInfo");

        if (storedUserData && isLogin) {
        setUser(JSON.parse(storedUserData));
        }
    }, [isLogin]);

    const login = async (email, password) => {
        try {
        const inputData = {
            email,
            password
        };
        const response = await axios({
            method: "POST",
            url: `http://localhost:80/api/users/login`,
            data: inputData,
        });

        const { data } = response
        console.log(data);
        if (data.success) {
            const { token } = data.data;
            const { success } = data;
            const validData = {
                token,
                success
            }
            // Check if getUser is defined and is an array with at least one element
            if (token) {
            // const userObject = getUser[0];

            localStorage.setItem("token", token);
            // localStorage.setItem("userInfo", JSON.stringify(userObject));

            setIsLogin(true);
            // setUser(userObject);

            return validData;
            } else {
            console.error("Login failed: User data is undefined or empty");
            return { success: false, error: "User data is undefined or empty" };
            }
        } else {
            console.error("Login failed: ", data.message);
            return { success: false, error: data.message };
        }
        } catch (error) {
        console.error("Login failed:", error);
        return { success: false, error: error };
        }
    };

    const logout = () => {
        // Implement logic untuk set status login menjadi false
        localStorage.removeItem("token");
        // localStorage.removeItem("userInfo");
        setIsLogin(false);
    };

    return (
        <AuthContext.Provider value={{ isLogin, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
    };

    export const useAuth = () => {
    return useContext(AuthContext);
    };
