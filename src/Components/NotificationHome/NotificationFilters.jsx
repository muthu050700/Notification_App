

import crossImg from "../../assets/cross-button.png";

const NotificationFilters = () => {

    const filterList = [{
        id: 1,
        name: "Approve",
        bgColor: "bg-[#a4c3b2]",
        textColor: "text-white"
    }, {
        id: 2,
        name: "Reject",
        bgColor: "bg-[#edafb8]",
        textColor: "text-white"
    }, {
        id: 3,
        name: "Pending",
        bgColor: "bg-[#adb5bd]",
        textColor: "text-black"
    }]

    return (
        <>
            <div className="flex justify-between items-center py-2 fixed w-full top-0 overflow-hidden h-[8vh] bg-[#d8e2dc] border-b-[1px] border-b-[#bcbd8b] p-2 shadow-xl z-10">
                {
                    filterList.map((item) => {
                        return (
                            <div key={item.id} className={`w-fit py-2  rounded-lg flex justify-center items-center my-2 ${item.bgColor} cursor-pointer`}>
                                <div className=" px-2 flex items-center gap-2">
                                    <img src={crossImg} className=" w-[17px]" />
                                    <p className="text-sm font-bold text-center m-0">{item.name}</p>
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