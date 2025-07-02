

import { useState } from "react";
import crossImg from "../../assets/cross-button.png";
import { SiTicktick } from "react-icons/si";
import { FaTimesCircle } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

const NotificationFilters = () => {
    const [filter, setFilter] = useState(null);
    const filterList = [{
        id: 1,
        name: "Approve",
        bgColor: "bg-[#a4c3b2]",
        textColor: "text-white",
        icon: <SiTicktick />
    }, {
        id: 2,
        name: "Reject",
        bgColor: "bg-[#edafb8]",
        textColor: "text-white",
        icon: <FaTimesCircle />
    }, {
        id: 3,
        name: "Pending",
        bgColor: "bg-[#adb5bd]",
        textColor: "text-black",
        icon: <IoIosTime />
    }]

    return (
        <>
            <div className="flex justify-between items-center py-2 fixed w-full top-0 overflow-hidden h-[50px]  bg-[#FDFAF6] border-b-[1px] border-b-[#bcbd8b] p-2 shadow-xl z-10">
                {
                    filterList.map((item) => {
                        const icon = item.icon;
                        return (
                            <div key={item.id} className={`w-fit py-2 my-2  rounded-lg flex justify-center items-center ${filter === item.id ? "text-white bg-[#99BC85]" : "text-[#99BC85] bg-[#E4EFE7]"}  cursor-pointer`}>
                                <div className=" px-2 flex items-center gap-2" onClick={() => setFilter(item.id)}>
                                    {/* <img src={crossImg} className=" w-[17px]" /> */}
                                    {item.icon}
                                    <p className="text-[12px] font-bold text-center m-0">{item.name}-{(100)}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default NotificationFilters;