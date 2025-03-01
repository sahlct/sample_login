// import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'Jan', value: 20, highlight: false },
    { name: 'Feb', value: 50, highlight: false },
    { name: 'Mar', value: 40, highlight: false },
    { name: 'Apr', value: 45, highlight: false },
    { name: 'May', value: 38, highlight: false },
    { name: 'Jun', value: 60, highlight: true },
    { name: 'Jul', value: 30, highlight: false },
    { name: 'Aug', value: 50, highlight: false },
    { name: 'Sep', value: 15, highlight: false },
    { name: 'Oct', value: 48, highlight: false },
    { name: 'Nov', value: 32, highlight: false },
    { name: 'Dec', value: 40, highlight: false }
];

const blueCardsData = [
    { icon: '/assets/officer.png', title: 'Total Employees', value: 3 },
    { icon: '/assets/mngmnt.png', title: 'Management', value: 5 },
    { icon: '/assets/folders.png', title: 'Total Folders', value: 0 },
    { icon: '/assets/folders.png', title: 'Total Folders', value: 0 }
];

const button = (
    <div className="w-8 h-8 rounded-full border flex justify-center items-center hover:bg-gray-100 transition-colors cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right hover:rotate-45 transition-transform">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 7l-10 10" />
            <path d="M8 7l9 0l0 9" />
        </svg>
    </div>
)

export default function Content() {
    return (
        <div className="md:ms-[120px] md:pt-20 pt-14 min-h-screen font-[Poppins]">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 px-5 pt-10 min-h-64 h-fit">

                {/* grid-1  */}
                <div className="rounded-2xl z-30 flex flex-col justify-between bg-[#FFFFFF54] shadow-2xl p-5 pb-0 h-full">
                    <div className="flex justify-between items-center mb-5 md:mb-0">
                        <p className="text-lg font-semibold">Documents Expiring</p>
                        {button}
                    </div>
                    <div className="w-full h-40 flex items-end border-t border-dashed border-blue-400">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <XAxis dataKey="name" tick={{ fill: '#999', fontSize: 8 }} tickLine={false} axisLine={false} />
                                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.highlight ? 'rgba(200, 231, 100, 1)' : '#E9EDF7'}
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* hrid-2  */}
                <div className="lg:col-span-2 z-30 rounded-2xl bg-[#FFFFFF66] shadow-2xl p-5 flex flex-col gap-5 overflow-auto">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold text-start">This Month Expires Documents</p>
                        {button}
                    </div>
                    <div>
                        <div className="flex justify-around gap-2 text-[10px]">
                            <p>Entity</p>
                            <p>Email</p>
                            <p className='hidden lg:block'>Document Name</p>
                            <p className='hidden lg:block'>Document Type</p>
                            <p className='hidden md:block'>Document Type</p>
                            <p>Document Type</p>
                            <p>Document Type</p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <hr />
                    </div>
                    <div className="flex justify-center items-end h-full z-30">
                        <img src="/assets/box.png" alt="box" className="h-28" />
                    </div>
                </div>

            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 px-5 min-h-60 pb-10 md:pb-0 pt-5">

                {/* grid-3  */}
                <div className="shadow-2xl h-full z-30 bg-[#FFFFFF54] rounded-2xl p-5 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold">Documents Expiry</p>
                        {button}
                    </div>
                    <div>
                        <div className="flex justify-around text-[10px]">
                            <p>Document Type</p>
                            <p>Document Name</p>
                            <p>Status</p>
                            <p>Details</p>
                        </div>
                        <hr />
                    </div>
                    <div className="flex justify-center items-end h-full">
                        <img src="/assets/box.png" alt="box" className="h-20" />
                    </div>
                </div>

                {/* 4th grid  */}
                <div className="col-span-1 lg:col-span-2 z-30 grid lg:grid-cols-4 grid-cols-2 p-5 gap-5 bg-[#FFFFFF54] rounded-2xl shadow-2xl h-full">
                    {blueCardsData.map((card, index) => (
                        <div key={index} className="bg-[#4b66e3] cursor-pointer rounded-2xl flex flex-col justify-between p-2 relative">
                            <div className="flex flex-wrap justify-between items-center">
                                <img src={card.icon} alt="avatar" className="w-7" />
                                {index === 0 && <img src={card.icon} alt="avatar" className="w-7 absolute left-5 top-2" />}
                                <p className="text-[10px] font-semibold text-white">{card.title}</p>
                            </div>
                            <div className="md:text-6xl text-4xl font-bold text-white">
                                {card.value}
                            </div>
                            <div className="flex justify-end text-[#c8e764]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-dots">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            
        </div>
    );
}