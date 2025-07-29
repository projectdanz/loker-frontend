import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const navigate = useNavigate();
  let [message, setMessage] = useState({});
  const [formData, setFormData] = useState({
   role: "applicant",
    companyName: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    postal_code: "",
    address: "",
  });

  const validate = (fieldName, value) => {
    const errMsg = {};

    switch(fieldName) {
        case "name":
            if(!value.trim()){
                errMsg.name = "Nama lengka harus diisi!";
            }
            break;
        case "email":
            if(!value) {
                errMsg.email = "Email tidak boleh kosong!";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                errMsg.email = "Format email tidak valid";
            }
            break;
        case "password":
            if(!value.trim()) {
                errMsg.password = "Password tidak boleh kosong!";
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/.test(value)) {
                errMsg.password = "Harus ada huruf besar, kecil, angka, simbol, dan minimal 6 karakter";
            }
        case "postal_code":
            if(!value) {
                errMsg.postal_code = "Kode pos tidak boleh kosong!";
            } else if (isNaN(value)) {
                errMsg.postal_code = "Format kode pos tidak valid";
            } 
    default:
        break;
    }

    setMessage(errMsg);
    
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    // update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(validate(name, value));

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const data = formData
      if (data.role === "applicant") {
          delete data.role;
          const res = await axios.post("https://lokerprogrammer.vercel.app/api/api/v1/register", formData);
          console.log("error:", err)
        console.log("Res:", res.data);
      } else if (data.role === "company") {
        delete data.role;
        const res = await axios.post("https://lokerprogrammer.vercel.app/api/api/v1/register-company", formData);
        console.log("Res:", res.data);
      } else {
        return false;
      }
      navigate("/verify", { state: { email: formData.email } });
    } catch (error) {
      console.log("error:", err);
    }
  };

  return (
    
    <div>
        
      <form onSubmit={handleSubmit}>
        <div>
            <label><input type="radio" name="role" value="applicant" checked={formData.role === "applicant"} onChange={handleChange} />applicant</label>
            <label><input type="radio" name="role" value="company" checked={formData.role === "company"} onChange={handleChange} />company</label>
        </div>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Fullname :"/>
        {message.name && <p>{message.name}</p>}
        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email :"/>
        {message.email && <p>{message.email}</p>}
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password :"/>
        {message.password && <p>{message.password}</p>}
        <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} placeholder="Confirm Password :"/>
        <input type="text" name="provinsi" onChange={handleChange} value={formData.provinsi} placeholder="Provinsi :" />
        <input type="text" name="kabupaten" onChange={handleChange} value={formData.kabupaten} placeholder="Kabupaten :" />
        <input type="text" name="kecamatan" onChange={handleChange} value={formData.kecamatan} placeholder="Kecamatan :" />
        <input type="text" name="postal_code" onChange={handleChange} value={formData.postal_code} placeholder="Kode Pos :" />
        {message.postal_code && <p>{message.postal_code}</p>}
        <input type="text" name="address" onChange={handleChange} value={formData.address} placeholder="Alamat :"/>
        {formData.role === "company" && (
            <>
                <input type="text" name="companyName" onChange={handleChange} value={formData.companyName || ""} placeholder="Nama Perusahaan :" />
            </>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
