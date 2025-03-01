import { useState, useEffect } from 'react';
import Offcanvas from './offcanvas';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className={`w-full fixed top-0 z-40 md:h-20 h-16 flex justify-between md:items-end items-center md:ps-8 ps-4 md:pe-12 pe-4 ${isScrolled ? 'backdrop-blur-[4px] shadow-sm' : 'bg-transparent'
                    } transition-all duration-300 ease-in-out`}
            >
                <div className="flex gap-10 items-center">
                    <img src="/assets/logo.png" alt="logo image" className="h-6 cursor-pointer" />
                    <div className="hidden md:block font-bold text-3xl text-[#02024B] font-[Poppins] cursor-pointer">
                        Dashboard
                    </div>
                </div>
                <div className="flex md:gap-10 gap-3 items-center">
                    <div>
                        <img src="/assets/notification.png" alt="notIcon" className="w-8 h-8 cursor-pointer" />
                    </div>
                    <div className="hidden md:flex items-center gap-2 cursor-pointer">
                        <img src="/assets/round_logo.png" alt="R_Logo" className="w-10 h-10" />
                        <div className="flex flex-col justify-center text-left">
                            <p className="text-lg font-[Poppins] font-light text-[#4B66E3]">techon</p>
                            <p className="text-xs font-[Poppins] font-light">Admin</p>
                        </div>
                    </div>
                    <div className="text-[#02024B] md:block hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-dots"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>
                    </div>
                    <div className="text-[#02024B] md:hidden" onClick={toggleSidebar}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                        </svg>
                    </div>
                </div>
            </div>
            <Offcanvas isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    );
}