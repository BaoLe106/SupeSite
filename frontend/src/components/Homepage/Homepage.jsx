import { useState } from "react";
import { withRouter } from "react-router";
import { SupeSiteLogo } from "../common/constant/icon_constant.jsx";
import { ChevronIcon } from "../common/constant/icon_constant.jsx";
import { SortIcon } from "../common/constant/icon_constant.jsx";

import Navbar from "../common/Navbar/Navbar.jsx";
import Searchbar from "./Searchbar/Searchbar.jsx";
import FolderButton from "./FolderButton/FolderButton.jsx";
import SortButton from "./SortButton/SortButton.jsx";
import {
    HomepageContainer, 
    SidebarContainer,
    Logo,
    HomepageContent,
    HomepageHeader,
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
                <HomepageHeader>
                    <FolderButton/>
                    <SortButton/>
                    <Searchbar/>
                </HomepageHeader>
                
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
