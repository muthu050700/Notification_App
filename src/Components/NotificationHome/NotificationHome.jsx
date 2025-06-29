import NotificationFilters from "./NotificationFilters";
import NotificationCart from "../NotificationList/NotificationCart";
import NotificationMenu from "./NotificationMenu";
import { useState } from "react";
import Menu from "./Menu";

const NotificationHome = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className=" bg-[#f1faee] min-h-[100vh] max-h-full relative">
                <NotificationFilters />
                <div className="pt-[8vh] pb-[13vh]">
                    <div className="flex justify-between py-3 px-2">
                        <h3>App Name</h3>
                        <p>Profile image</p>
                    </div>
                    <div className="flex justify-center items-center pb-4">
                        <input className=" bg-[#aec3b0] border-none text-[#1d2d44] w-[350px] px-2 font-bold text-xl mx-2 h-[40px] rounded-xl" />
                    </div>
                    <NotificationCart />
                    <NotificationCart />
                    <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </div>
                <NotificationMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div >
        </>
    )
}

export default NotificationHome;