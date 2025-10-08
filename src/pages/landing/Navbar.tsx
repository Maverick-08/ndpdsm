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
                        <img src={ manitLogo } alt="" className="w-16 h-16" />
                    </div>
                    <div className="">
                        <img src={ ndpdsm } alt="" className="w-16 h-16" />
                    </div>
                </div>

                {/* Direct navigation options to pages */}
                <div className="flex gap-4 text-lg">
                    <div className="text-bold">Home</div>
                    <div className="text-bold">About</div>
                    <div className="text-bold">Conference Details</div>
                    <div className="text-bold">Registrations</div>   
                    <div className="text-bold">Publication</div>
                    <div className="text-bold">Schedule</div>
                    <div className="text-bold">Commitee</div>
                    <div className="text-bold">Brochure</div>
                    <div className="text-bold">Contact</div>
                </div>
            </div>
        </section>
    )
}
export default Navbar;