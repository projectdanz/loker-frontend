import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
    const navigate = useNavigate();
    let[message, setMessage] = useState([]);
    const[formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const validate = (email, password) => {
        let response = []

        if (!email) {
            response.push("Email harap diisi")
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            response.push("Format email tidak valid")
        }

        if (!password) {
            response.push("Password harap diisi")
        } else if (password.length < 6) {
            response.push("Password minimal 8 karakter")
        }

        setMessage(response)
        return response.length === 0
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = formData;
        
        if(validate(email, password)) {
            setMessage(["Form valid, processing..."])
        }

        try {
            const res = await axios.post("https://lokerprogrammer.vercel.app/api/api/v1/login", formData);
            const {token, user} = res.data;
            localStorage.setItem("token:", token);
            localStorage.setItem("user:", JSON.stringify(user));
            navigate("/home")
        } catch (err) {
            console.log("error:", err.response.data.message);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            {message.length > 0 && (
                message.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))
        )}
            <input type="text" name="email" value={formData.email} placeholder="email" onChange={handleChange} />
            <input type="password" name="password" value={formData.password} placeholder="password" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );


}

export default LoginForm