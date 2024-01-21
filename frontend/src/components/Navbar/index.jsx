import React, { Component } from "react";
import TabMenu from "../TabMenu";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: 0,
        };
    };
    getTabData = () => {
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
        }
        return data;
    }

    render() {
        const { selection } = this.state;
        const { tabTitles } = this.getTabData();
        // console.log(tabTitles)
        return (
            <div>
                <TabMenu 
                    selection={selection}
                    tabTitles={tabTitles}
                />
            </div>    
        )
    };
}

export default Navbar;