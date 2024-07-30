import Link from "next/link";
const Header = ({ cart = [] }) => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" legacyBehavior>
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mt-3">
            <span className="ml-3 text-3xl cursor-pointer">Aurea</span>
          </div>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" legacyBehavior>
            <a className="mr-5 mt-3 text-lg hover:text-red-800">Home</a>
          </Link>
          <Link href="/About" legacyBehavior>
            <a className="mr-5 mt-3 text-lg hover:text-red-800">About</a>
          </Link>
          <Link href="/Products" legacyBehavior>
            <a className="mr-5 mt-3 text-lg hover:text-red-800">Products</a>
          </Link>
          <Link href="/Contact" legacyBehavior>
            <a className="mr-5 mt-3 text-lg hover:text-red-800">Contact Us</a>
          </Link>
          <Link href="/CheckOut" legacyBehavior>
            <a className="mr-5 mt-3 text-lg hover:text-red-800">
              Cart({cart.length})
            </a>
          </Link>
        </nav>
        <button className=" my-2 ml-auto text-white bg-red-500 border-0 mt-2 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-red-600 rounded-3xl">
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
