
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="
        flex
        w-full
        items-center
        justify-between
        px-4
        py-4
        sm:px-6
        lg:px-10
      "
    >
      
      <div className="flex items-center gap-2">
     

            <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="18.5" cy="17.5" r="3.5"></circle>
        <circle cx="5.5" cy="17.5" r="3.5"></circle>
        <circle cx="15" cy="5" r="1"></circle>
        <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path>
      </svg>
      <span className="font-semibold"> InstantMart</span>
      </div>
      </div>

      {}
      <div className="flex items-center gap-4 text-gray-700">
        <Link to="./Cart.tsx" className="flex items-center>">

        <FiShoppingCart size={22} />
        <FiMenu size={25} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
