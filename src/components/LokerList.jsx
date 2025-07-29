import { useState, useEffect } from "react";
import axios from "axios";

const LokerList = () => {
    const[loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log("Token saat fetch:", token)

        if (!token) {
        setError(new Error("Token tidak ditemukan. Silakan login dahulu."));
        setLoading(false);
        return;
    }

        const fetchData = async () => {
            try {
                const response = await axios.get("https://lokerprogrammer.vercel.app/api/api/v1/jobs", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setData(response.data);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    },[]);
    if (loading) return <p>Memuat data loker...</p>;
    if (error) return <p>Terjadi kesalahan: {error.message}</p>

    return (
        <>
            <h1>Data Loker</h1>
            {data.length === 0 ? (
                <p>Tidak ada data tersedia.</p>
            ) : (
                data.map((job, index) => (
                    <div key={index}>
                        <h4>{job.title}</h4>
                        <p>{job.description}</p>
                    </div>
                ))
            )}
        </>
    );
}


export default LokerList;