import React, { useState } from "react";
import TabMenu from "../TabMenu";

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
            <TabMenu 
                tabSelection={tabSelection}
                tabTitles={tabTitles}
            />
        </>    
    );
};

export default Navbar;