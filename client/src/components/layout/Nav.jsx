import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-[100vw] shadow-lg bg-background">
      <div className="flex justify-around text-text p-4 items-center">
        <a href="" className="text-3xl">
          Ethan Tran
        </a>
        <div className="space-x-6 text-2xl hidden lg:inline md:inline">
          <a href="#hero">Home</a>
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
        <a href="" className="inline md:hidden">
          <MenuIcon sx={{ fontSize: 24 }} />
        </a>
      </div>
    </nav>
  );
}
