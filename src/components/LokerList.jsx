import { useState, useEffect } from "react";
import axios from "axios";

const LokerList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token saat fetch:", token);

    if (!token) {
      setError(new Error("Token tidak ditemukan. Silakan login dahulu."));
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lokerprogrammer.vercel.app/api/api/v1/homepage",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Memuat data loker...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  const jobList = data && data.data && Array.isArray(data.data) ? data.data : [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Data Loker</h1>

      {jobList.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Tidak ada data loker yang tersedia.</p>
      ) : (
        // KONTEN GRID UTAMA DI SINI, DI LUAR LOOP MAP
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-6 w-full p-4">
          {jobList.map((job) => (
            // Setiap item pekerjaan adalah ARTICLE, bukan div grid baru
            <article
              key={job.id || job.title} // Gunakan job.id sebagai key, fallback ke job.title jika id tidak ada
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-amber-900 p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h2>
                <p className="text-gray-700 mb-1">
                  <strong className="font-medium">Lokasi:</strong> {job.location}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong className="font-medium">Tipe:</strong> {job.job_type}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong className="font-medium">Kategori:</strong> {job.category}
                </p>
                <p className="text-gray-700">
                  <strong className="font-medium">Perusahaan:</strong> {job.company?.company_name || 'N/A'}
                </p>
              </div>
              {/* Anda bisa menambahkan tombol atau link "Lihat Detail" di sini */}
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default LokerList;
