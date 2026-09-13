import logo from "../assets/logo-text.png";
import hamburgerIcon from "../assets/hamburger.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-50 border-b border-gray-200">
      <div className="lg:container lg:mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-20">
          {/* mobile version */}
          <div className="flex items-center min-[840px]:hidden">
            <button className="p-2 -ml-2 rounded-md hover:bg-gray-50 focus:outline-none transition-transform active:scale-95">
              <img
                src={hamburgerIcon}
                alt="Menu"
                className="w-5 h-5 object-contain"
              />
            </button>
          </div>

          {/* desktop version */}
          <div className="hidden md:flex shrink-0 items-center">
            <a href="#">
              <img src={logo} alt="DevStack" className="h-9 w-auto" />
            </a>
          </div>

          {/* mobile logo */}
          <div className="flex md:hidden flex-1 justify-center">
            <a href="#">
              <img src={logo} alt="DevStack" className="h-8 w-auto" />
            </a>
          </div>

          {/* nav link */}
          <div className="hidden min-[840px]:flex flex-1 justify-center">
            <div className="flex space-x-10">
              <a
                className="text-[15px] font-medium transition-colors hover:text-[#DE1B76] text-[#DE1B76]"
                href="#"
              >
                Home
              </a>
              <a
                className="text-[15px] font-medium transition-colors hover:text-[#DE1B76] text-slate-500"
                href="#"
              >
                Technologies
              </a>
              <a
                className="text-[15px] font-medium transition-colors hover:text-[#DE1B76] text-slate-500"
                href="#"
              >
                Projects
              </a>
              <a
                className="text-[15px] font-medium transition-colors hover:text-[#DE1B76] text-slate-500"
                href="$"
              >
                About
              </a>
              <a
                className="text-[15px] font-medium transition-colors hover:text-[#DE1B76] text-slate-500"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>

          {/* sign in and sign up */}
          <div className="flex items-center gap-1 min-[375px]:gap-5">
            <a
              href="#signin"
              className="text-[10px] min-[325px]:text-[14px] md:text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="bg-[#DE1B76] hover:bg-[#c21767] text-white text-[10px] min-[325px]:text-[14px] md:text-[15px] font-medium px-5 py-2 md:px-7 md:py-2.5 rounded-full transition-colors shadow-sm hover:shadow"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
