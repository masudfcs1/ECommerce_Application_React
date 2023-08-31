import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import CartCountBadge from "./CartCountBadge";
const Navbar = () => {
  return (
    <div className=" container hidden lg:block">
      <div className=" flex justify-between items-center pt-8">
        <h1 className=" text-4xl font-medium"> Logo</h1>
        <div className=" relative w-full max-w-[400px] ">
          <input
            type="text"
            placeholder="Search Product..."
            className=" bg-[#f2f3f5] border-none outline-none px-6 py-3 font-mono rounded-full w-full "
          />
          <BiSearchAlt2
            className=" absolute top-0 right-0 mt-4 mr-5 cursor-pointer text-gray-500 "
            size={20}
          />
        </div>
        <div className="flex gap-4">
          <div className=" bg-[#f2f3f5] w-[50px] h-[50px] flex items-center justify-center rounded-full text-[22px] hover:bg-[#edeff3] cursor-pointer ">
            <AiOutlineUser />
          </div>
          <div className=" bg-[#f2f3f5] w-[50px] h-[50px] flex items-center justify-center rounded-full text-[22px] hover:bg-[#edeff3] cursor-pointer  relative">
            <FiShoppingCart />
            <CartCountBadge size=" w-[25px] h-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
