import React, { useState } from "react";
import { iconOrder } from "../constant/icon_constant.jsx";

import {
    NavbarContainer,
    NavbarItem,
    NavbarItemContent,
    LogoutButton,
    Hello
} from "./styles.jsx";


function Navbar() {
    const [tabSelection, setTabSelection] = useState(0);
    const getTabData = () => {
        const tabTitles = [
            "My Sites",
            "Favorite",
            "Recent",
            "My platform",
            "Help",
            "Setting"
        ];
        const data = {
            tabTitles,
        };
        return data;
    };
    const { tabTitles } = getTabData();

    return (
        <>
            <NavbarContainer>
                <Hello>Hello</Hello>
                {tabTitles.map((title, index) => {
                    return (
                        <NavbarItem key={index} onClick={() => setTabSelection(index)} open={tabSelection === index}>
                            {iconOrder[title]}
                            <NavbarItemContent>
                                {title}
                            </NavbarItemContent>
                        </NavbarItem>
                    )
                })}
                <LogoutButton onClick={() => {console.log("Log out")}}>
                    {iconOrder["User"]}
                    <NavbarItemContent>
                        Logout
                    </NavbarItemContent>
                </LogoutButton>
            </NavbarContainer>
        </>
    );
};

export default Navbar;