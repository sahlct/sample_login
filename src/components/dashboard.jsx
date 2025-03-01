// import React from 'react'
import Content from "./content";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Dashboard() {
    return (
        <div className=" w-full bg-[#D2D2D2] relative min-h-screen">

            {/* background blur colors  */}
            <div className="bgfirst absolute w-36 h-36 top-[20%] right-[10%] z-0 rounded-full blur-[60px]"></div>
            <div className="bgsecond hidden md:block absolute w-60 h-60 bottom-[20%] left-[50%] z-0 blur-[60px] rounded-full"></div>
            <div className="bgthird absolute w-48 h-48 top-[20%] right-[50%] z-0 blur-[100px] rounded-full"></div>
            <div className="bgfourth absolute w-48 h-48 md:top-0 top-[50%] right-[25%] z-0 blur-[70px] rounded-full"></div>
            <div className="bgfifth absolute w-48 h-48 bottom-0 right-[15%] z-0 blur-[30px] rounded-full"></div>
            <div className="bgsixth absolute w-24 h-24 -top-[5%] -left-[5%] z-0 blur-[50px] rounded-full"></div>


            <Navbar />
            <Sidebar />
            <Content />
        </div>
    )
}
