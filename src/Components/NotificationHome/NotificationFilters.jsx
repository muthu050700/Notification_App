

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
            <div className="flex justify-evenly items-center py-2 fixed w-full top-0 overflow-hidden h-[12vh] bg-[#d8e2dc] border-b-[1px] border-b-[#bcbd8b] p-2 shadow-xl z-10">
                {
                    filterList.map((item) => {
                        return (
                            <div key={item.id} className={`w-[100px] h-[50px]  rounded-2xl flex justify-center items-center ${item.bgColor} cursor-pointer`}>
                                <p className="text-lg font-bold text-center m-0">{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default NotificationFilters;