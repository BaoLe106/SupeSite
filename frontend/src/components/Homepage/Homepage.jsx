import { useState } from "react";
import { withRouter } from "react-router";
import { SupeSiteLogo } from "../common/constant/icon_constant.jsx";
import { ChevronIcon } from "../common/constant/icon_constant.jsx";
import { SortIcon } from "../common/constant/icon_constant.jsx";

import Navbar from "../common/Navbar/Navbar.jsx";
import Searchbar from "./Searchbar/Searchbar.jsx";
import {
    HomepageContainer, 
    SidebarContainer,
    Logo,
    HomepageContent,
    
} from "./styles.jsx"


function Homepage() {


    return (
        <HomepageContainer>
            <SidebarContainer>
                <Navbar/>
            </SidebarContainer>
            <Logo>
                {SupeSiteLogo}
            </Logo>
            <HomepageContent>
                <Searchbar/>
            </HomepageContent>
        </HomepageContainer>
        // <div className="homepage-container">
        //     <div className="homepage-left-container">
        //         <div className="logo">{SupeSiteLogo}</div>
        //         <div className="center-div">
        //             {/* Into another component */}
        //             <div className="folder-button">
        //                 <t>All Sites</t>
        //                 {ChevronIcon}
        //             </div>
        //             {/* Into another component */}
        //             <div className="sort-button">
        //                 {SortIcon}
        //                 <t>Recent</t>
        //             </div>
        //             {/* Into another component */}
        //             <input className="searchbar" placeholder="Search anything"></input>                
        //         </div>
            
        //     </div>
        //     {/* <div className="homepage-right-container"> */}
        //         <Navbar/>
        //     {/* </div> */}
        //    <div className="container">
        //         <div className="1"></div>
        //         <div className="2"></div>
        //    </div>
            
        // </div>
    )
}

export default Homepage
