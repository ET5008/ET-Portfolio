

export default function Nav(){
    return(
        <nav className="fixed top-0 w-[100vw] ">
            <div className="flex justify-around bg-background border-b-[1px] border-secondary text-text p-4 items-center">
                <a href="" className="text-2xl">Ethan Tran</a>
                <div className="space-x-6 text-xl">
                    <a href="#hero">Home</a>
                    <a href="#about">About Me</a>
                    <a href="#work">My Work</a>
                    {/* <a href="">Services</a> */}
                </div>
                <a href="#contact" className="text-lg p-2 rounded-md bg-primary text-black font-medium">Contact</a>
            </div>
        </nav>
    )
}