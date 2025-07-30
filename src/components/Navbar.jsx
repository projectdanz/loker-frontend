import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const user = localStorage.getItem("user")
  return (
    <div className="
    flex 
    justify-between 
    items-center 
    py-2 
    px-8 
    box-border 
    border-4 
    border-orange-500 
    fixed 
    left-1/2 
    transform 
    -translate-1/2 
    top-13 
    w-[95%] 
    z-50 
    rounded-full">
      <div className="text-white">
        <p>ini gambar</p>
      </div>
      <div className="flex justify-center flex-grow">
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="">
              Lorem
            </a>
          </li>
          <li>
            <a href="#" className="">
              Lorem
            </a>
          </li>
          <li>
            <a href="#" className="">
              Lorem
            </a>
          </li>
        </ul>
      </div>
      <div className="m-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          {user?.name || "user"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
