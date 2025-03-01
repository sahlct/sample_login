"use client";
import { useState } from 'react';
import PropTypes from 'prop-types';

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const SidebarItem = ({ icon, isActive, onClick }) => {
  return (
    <div 
      className={cn(
        "w-full h-10 flex justify-center items-center cursor-pointer rounded-full transition-all duration-300 transform hover:scale-110",
        isActive ? "bg-[#C8E764]" : "bg-white hover:bg-[#c8e76487]"
      )}
      onClick={onClick}
    >
      <img src={icon} alt="icon" className="h-5" />
    </div>
  );
};

// PropTypes validation
SidebarItem.propTypes = {
  icon: PropTypes.string.isRequired, 
  isActive: PropTypes.bool.isRequired, 
  onClick: PropTypes.func.isRequired,
};

// default props
SidebarItem.defaultProps = {
  isActive: false,
};

export default function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const menuItems = [
      { icon: "/assets/home.png", alt: "home_icon" },
      { icon: "/assets/business.png", alt: "bsns" },
      { icon: "/assets/user.png", alt: "user_icon" },
      { icon: "/assets/money.png", alt: "money_icon" },
      { icon: "/assets/market.png", alt: "market_logo" },
    ];

    return (
        <div className="w-[120px] fixed hidden left-0 z-20 h-screen pt-28 pb-10 md:flex items-center flex-col justify-between">
            <div className="w-10 rounded-2xl h-fit flex flex-col gap-4 bg-[#FFFFFF9C] py-5 group">
                {menuItems.map((item, index) => (
                    <div 
                      key={index}
                      className="relative transition-all duration-300 transform group-hover:scale-100 hover:scale-125 hover:z-10"
                      style={{
                        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }}
                    >
                      <SidebarItem 
                        icon={item.icon} 
                        isActive={activeIndex === index}
                        onClick={() => setActiveIndex(index)}
                      />
                    </div>
                ))}
            </div>

            <div className="w-10 bg-[#FFFFFF9C] flex flex-col gap-5 rounded-3xl py-3">
                <div 
                  className="w-full h-10 rounded-full flex justify-center items-center cursor-pointer bg-white hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                  style={{
                    transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }}
                >
                    <img src="/assets/logout.png" alt="logout_icon" className="h-4" />
                </div>
                <div 
                  className="w-full h-10 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110"
                  style={{
                    transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }}
                >
                    <img src="/assets/round_logo.png" alt="logo" className="h-full w-full" />
                </div>
            </div>
        </div>
    );
}