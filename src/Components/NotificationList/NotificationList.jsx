import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/userSlice";
import NotificationCart from "./NotificationCart";

const NotificationList = () => {
    const userInfo = useSelector((store) => store.user.userInfo);
    const dispatch = useDispatch();
    return (
        <div className=" bg-[#030303] min-h-[100vh] max-h-full h-[100vh]">
            <h1 className=" font-bold text-2xl text-center text-[#F1EFEC]">Notivication List</h1>
            <NotificationCart />
            <div className=" flex justify-center">
                <div className="fixed w-full bottom-0 overflow-hidden bg-white shadow-lg">
                    <div className="flex justify-between">
                        <button className="bg-[#A0C878] w-6/12 text-lg font-bold px-2 py-1">Approve</button>
                        <button className="bg-[#AF3E3E] text-lg w-6/12 font-bold px-2 py-1">Reject</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationList;