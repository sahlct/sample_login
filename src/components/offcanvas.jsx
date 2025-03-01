import { useState } from "react";
import PropTypes from "prop-types";

const Offcanvas = ({ isOpen, toggleSidebar }) => {
    const [activeIndex, setActiveIndex] = useState(0); 

    const menuItems = [
        { icon: "/assets/home.png", text: "Dashboard" },
        { icon: "/assets/user.png", text: "Services" },
        { icon: "/assets/market.png", text: "Settings" },
    ];

    return (
        <div
            className={`fixed top-0 right-0 font-[Poppins] h-full w-64 bg-[#00000032] backdrop-blur-[5px] text-white transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-40 flex flex-col justify-between`}
        >
            <div className="p-4">
                {/* Header */}
                <div className="flex justify-between items-center mt-1">
                    <div className="text-2xl font-bold"></div>
                    <div onClick={toggleSidebar} className="cursor-pointer">
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
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                {/* Navigation Menu */}
                <ul className="mt-4 font-light font-[Poppins]">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="p-2 flex items-center gap-3 cursor-pointer transition-all duration-300"
                            onClick={() => setActiveIndex(index)} 
                        >
                            <div
                                className={`w-10 h-10 rounded-full flex justify-center items-center transition-all duration-300 ${
                                    activeIndex === index ? "bg-[#C8E764]" : "bg-white"
                                }`}
                            >
                                <img src={item.icon} alt="icon" className="h-5" />
                            </div>
                            <p className="text-white">{item.text}</p>
                        </div>
                    ))}
                </ul>
            </div>

            {/* Bottom Section */}
            <div className="px-6 flex flex-col gap-3 absolute bottom-5 w-full">
                <div className="w-full flex justify-start items-center h-10 gap-3 rounded-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
                    <img src="/assets/round_logo.png" alt="logo" className="h-full w-10" />
                    <img src="/assets/logo.png" alt="logo" className="w-20" />
                </div>
            </div>
        </div>
    );
};

Offcanvas.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default Offcanvas;
