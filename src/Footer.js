import React from "react";
import { useGlobalContext } from "./context";

const Footer =()=>{

    const { profileData } = useGlobalContext(); 

    return(
        
            // {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Support : {profileData.name}12345@gmail.com</span>
                    </div>
                </div>
            </footer>
            // {/* <!-- End of Footer --> */}
        
    )
}

export default Footer;