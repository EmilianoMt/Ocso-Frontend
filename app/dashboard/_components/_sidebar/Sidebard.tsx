import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar() {
    return(
        <nav className="w-[10vh] h-[90vh] bg-orange-200 flex flex-col items-center py-20">
            <NavItem icon={<LuStore className="text-4xl"/>} path="/dashboard/store"/>
            <NavItem icon={<LuTruck className="text-4xl"/>} path="/dashboard/truck"/>
            <NavItem icon={<LuWheat className="text-4xl"/>} path="/dashboard/product"/>
            <NavItem icon={<LuUser className="text-4xl"/>} path="/dashboard/user"/>
            <NavItem icon={<LuUsers className="text-4xl"/>} path="/dashboard/users"/>
        </nav>
    )
}