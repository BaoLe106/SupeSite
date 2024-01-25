import React, { useState } from "react";
import NavMenu from "../NavMenu";

function Navbar() {
    const [tabSelection, setTabSelection] = useState(0);

    const getTabData = () => {
        const tabTitles = [
            "Overview",
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
            <NavMenu 
                tabSelection={tabSelection}
                tabTitles={tabTitles}
            />
        </>    
    );
};

export default Navbar;