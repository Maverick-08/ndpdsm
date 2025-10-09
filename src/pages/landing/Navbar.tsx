import { useState } from "react";
import { useNavigate } from "react-router-dom"
import manitLogo from '../../assets/MANIT_LOGO.webp';
import ndpdsm from '../../assets/NPDSM_logo.webp';

const Navbar = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <section className="sticky top-0 z-50 px-4 p-1.5 flex bg-white">
            <div className="w-full flex items-center justify-between">
                {/* MANIT logo */}
                <div className="pl-4 flex gap-2">
                    <div className="">
                        <img src={ manitLogo } alt="" className="w-14 h-14" />
                    </div>
                    <div className="">
                        <img src={ ndpdsm } alt="" className="w-14 h-14" />
                    </div>
                </div>

                {/* Direct navigation options to pages */}
                <div className="flex gap-6 text-md text-bold">
                    <div className="">Home</div>
                    <div className="">About</div>
                    <div className="">Conference Details</div>
                    <div className="">Registrations</div>   
                    <div className="">Publication</div>
                    <div className="">Schedule</div>
                    <div className="">Commitee</div>
                    <div className="">Brochure</div>
                    <div className="">Contact</div>
                </div>
            </div>
        </section>
    )
}
export default Navbar;