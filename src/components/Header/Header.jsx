import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="py-2">
      <div className="max-w-6xl mx-auto flex flex-row flex-wrap justify-between items-center text-base md:text-lg font-semibold px-3">
        {/* Logo */}
        <Link to="" className="order-1 w-1/3 md:w-auto">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt=""
            className="w-36 md:w-52"
          />
        </Link>
        {/* Navlinks */}
        <nav className="flex flex-row justify-center gap-6 md:gap-8 flex-wrap order-3 w-full md:order-2 md:w-auto mt-3 md:mt-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-neutral-700"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-neutral-700"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-neutral-700"}`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="github"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-neutral-700"}`
            }
          >
            Github
          </NavLink>
        </nav>
        {/* CTA */}
        <div className="min-w-[165px] order-2 w-2/3 flex justify-end items-center md:order-3 md:w-auto">
          <Link to="#" className="mr-3 md:mr-4">
            Log In
          </Link>
          <Link
            to="#"
            className="py-2 px-3 rounded-lg bg-orange-700 text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
