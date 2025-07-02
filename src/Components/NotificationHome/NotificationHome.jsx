import NotificationFilters from "./NotificationFilters";
import NotificationCart from "../NotificationList/NotificationCart";
import NotificationMenu from "./NotificationMenu";
import { useState } from "react";
import Menu from "./Menu";

const NotificationHome = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [fixedHeader, setFixedHeader] = useState(false);

    const handleFilterFixed = () => {
        if (window.scrollY >= 50) {
            setFixedHeader(true);
        } else {
            setFixedHeader(false);
        }
    }

    window.addEventListener("scroll", handleFilterFixed);

    return (
        <>
            <div className="min-h-[100vh] max-h-full relative">
                <NotificationFilters handleFilterFixed={handleFilterFixed} fixedHeader={fixedHeader} />
                <div className={`${fixedHeader ? "pt-[70px]" : "pt-[20px]"} pb-[13vh]`}>
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