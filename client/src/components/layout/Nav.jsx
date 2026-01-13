import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router";
import { useState } from 'react'

export default function Nav() {
const [menuHidden, setMenuHidden] = useState(True)


  return (
    <nav className="fixed top-0 w-[100vw] shadow-lg bg-background z-10">
      <div className="flex justify-around text-text p-4 items-center">
        <Link to="/" className="text-3xl">
          Ethan Tran
        </Link>
        <div className="space-x-6 text-2xl hidden lg:inline md:inline">
          <a href="/">Home</a>
          <a href="#about">About Me</a>
          <a href="#work">My Work</a>
          {/* <a href="">Services</a> */}
        </div>
        <a
          href="#contact"
          className="text-2xl px-4 py-3 rounded-md bg-primary text-white hidden lg:inline md:inline"
        >
          Contact
        </a>
        <Link to="/" className="inline md:hidden">
          <MenuIcon sx={{ fontSize: 24 }} />
        </Link>
      </div>
    </nav>
  );
}
