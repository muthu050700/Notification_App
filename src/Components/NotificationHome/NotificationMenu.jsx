import settings from "../../assets/settings.png";
import pending from "../../assets/wall-clock.png";
import shoppingCart from "../../assets/shopping-cart.png";
import crossImg from "../../assets/cross-button.png"
const NotificationMenu = ({ setIsMenuOpen }) => {
    const filterList = [{
        id: 1,
        name: "Menu",
        bgColor: "bg-amber-300",
        textColor: "text-black",
        imageURL: "https://i.pinimgproxy.com/?url=aHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8yNTYvOTQ1MC85NDUwODkzLnBuZw==&ts=1751051049&sig=14f404fea0f6e4d7c3b457e97bd1a2a15f8a5e95c1326cc27f802c7e314856d2"
    }, {
        id: 2,
        name: "Reject",
        bgColor: "bg-green-500",
        textColor: "text-white",
        imageURL: crossImg
    }, {
        id: 3,
        name: "Pending",
        bgColor: "bg-yellow-500",
        textColor: "text-black",
        imageURL: settings
    }, {
        id: 4,
        name: "Pending",
        bgColor: "bg-yellow-500",
        textColor: "text-black",
        imageURL: pending
    },
    {
        id: 5,
        name: "Cart",
        bgColor: "bg-yellow-500",
        textColor: "text-black",
        imageURL: shoppingCart
    }];

    const handleMenuBar = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            <div className="flex justify-evenly items-center py-2 gap-3 fixed w-full bottom-0 overflow-hidden h-[10vh] bg-[#a6a2a2] p-2 shadow-lg z-10">
                {
                    filterList.map((item) => {
                        return (
                            <div>
                                <div key={item.id} className={`w-[50px] h-[50px]  rounded-2xl flex flex-col justify-center items-center cursor-pointer`} onClick={() => {
                                    item.name === "Menu" ? handleMenuBar() : "";
                                }}>
                                    <img className=" w-[20px]" src={item.imageURL} />
                                    <p className="text-medium font-bold text-center m-0">{item.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default NotificationMenu;