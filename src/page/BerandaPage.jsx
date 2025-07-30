import LokerList from "../components/LokerList";
import Navbar from "../components/Navbar";
import heroImage from "../assets/heroImage.jpg";

const Beranda = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="">
        <img src={heroImage} className="h-screen w-full object-fill" />
      </div>
      <div className="bg-amber-300 h-screen p-12">
        <div className="bg-white h-full box-border">
          <div className="flex justify-center p-16">
            <h1 className="text-4xl">kategori Loker</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full h-[60%] p-4">
            <div className="border rounded-xl p-3 text-center shadow hover:shadow-md transition cursor-pointer hover:bg-blue-50">
              <a
                href="#"
                className="font-medium text-gray-700 hover:text-blue-600"
              >
                Semua Lowongan
              </a>
            </div>
            <div className="border rounded-xl p-3 text-center shadow hover:shadow-md transition cursor-pointer hover:bg-blue-50">
              <a
                href="#"
                className="font-medium text-gray-700 hover:text-blue-600"
              >
                Frontend
              </a>
            </div>
            <div className="border rounded-xl p-3 text-center shadow hover:shadow-md transition cursor-pointer hover:bg-blue-50">
              <a
                href="#"
                className="font-medium text-gray-700 hover:text-blue-600"
              >
                Backend
              </a>
            </div>
            <div className="border rounded-xl p-3 text-center shadow hover:shadow-md transition cursor-pointer hover:bg-blue-50">
              <a
                href="#"
                className="font-medium text-gray-700 hover:text-blue-600"
              >
                Full Stack
              </a>
            </div>
            <div className="border rounded-xl p-3 text-center shadow hover:shadow-md transition cursor-pointer hover:bg-blue-50">
              <a
                href="#"
                className="font-medium text-gray-700 hover:text-blue-600"
              >
                Mobile Dev
              </a>
            </div>
            <div className="border rounded-xl p-3 text-center shadow hover:shadow-md transition cursor-pointer hover:bg-blue-50">
              <a
                href="#"
                className="font-medium text-gray-700 hover:text-blue-600"
              >
                Devops
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-red-500 p-12">
        <div className="bg-white h-full box-border">
            <div className="pt-16">
                <LokerList />
            </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
