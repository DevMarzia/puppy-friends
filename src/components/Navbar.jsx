import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fakeLogout } from "../Redux/auth/auhtSlice"; // importa logout
import logo from "../assets/logo.jpeg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { PiDogFill } from "react-icons/pi";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  // Chiude il menu quando scrollo
  useEffect(() => {
    const handleScroll = () => {
      setToggle(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  // Funzione logout
  const handleLogout = () => {
    dispatch(fakeLogout()).then(() => {
      navigate("/login");
      setToggle(false); // chiudo il menu mobile se aperto
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-[1050] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] select-none  ">
      <div className="flex items-center justify-between h-full px-6">
        {/* Logo + nome app */}
        <div className="flex items-center gap-2 ">
          <img
            src={logo}
            alt="Logo"
            draggable="false"
            className="rounded-lg h-10 w-10"
          />
          <p className="text-[#f3ece0] text-xl font-bold">
            Puppy<span className="text-[#d7c2a0]"> Friends</span>
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-lg">
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/chi-siamo`}>Chi siamo</Link>
          </li>
          <li>
            <Link
              to={`/cards-puppy`}
              className="inline-flex items-center gap-1"
            >
              I nostri cani
              <PiDogFill />{" "}
            </Link>
          </li>
          {user?.role === "admin" && (
            <li>
              <Link to={`/admin`}>Dashboard</Link>
            </li>
          )}

          <li>
            {user ? (
              <button onClick={handleLogout} className="buttonLogout">
                Logout
              </button>
            ) : (
              <Link to={`/login`}>Login</Link>
            )}
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      <ul
        style={{
          backgroundColor: "#685243",
          transform: toggle ? "translateX(0)" : "translateX(100%)",
          opacity: toggle ? 1 : 0,
          transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
          position: "absolute",
          top: "4rem",
          left: 0,
          width: "100%",
          zIndex: 50,
          pointerEvents: toggle ? "auto" : "none",
        }}
        className="md:hidden absolute top-16 left-0 w-full flex flex-col items-center gap-4 py-4 text-lg z-50 "
      >
        <li>
          <Link to={`/`} onClick={() => setToggle(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to={`/chi-siamo`} onClick={() => setToggle(false)}>
            Chi siamo
          </Link>
        </li>
        <li>
          <Link
            to={`/cards-puppy`}
            className="inline-flex items-center gap-1"
            onClick={() => setToggle(false)}
          >
            I nostri cani
            <PiDogFill />
          </Link>
        </li>
        {user?.role === "admin" && (
          <li>
            <Link to={`/admin`} onClick={() => setToggle(false)}>
              Dashbaord
            </Link>
          </li>
        )}

        <li>
          {user ? (
            <button onClick={handleLogout} className="buttonLogout">
              Logout
            </button>
          ) : (
            <Link to={`/login`} onClick={() => setToggle(false)}>
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
