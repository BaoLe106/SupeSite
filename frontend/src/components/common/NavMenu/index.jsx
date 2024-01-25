import { useState } from "react";
import { iconOrder } from "../constant/nav_constant";
import "./styles.css"
const NavMenu = ({ tabSelection, tabTitles }) => {

    const [active, setActive] = useState(0);
    return (
        <div className="navbar-container">
            <h2 className="hello">Hello</h2>
            {tabTitles.map((title, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => setActive(index)}
                        className={active === index ? "navbar-item-onclick" : "navbar-item"}
                    >
                        {iconOrder[title]}
                        <t className="navbar-item-content">{title}</t>
                    </div>
                )
            })}
            <div className="navbar-bottom">
                {iconOrder["User"]}
                <t className="navbar-item-content" onClick={() => {console.log("Log out")}}>
                    Log Out
                </t>
            </div>
            {/* </ul> */}
        </div>
    );
}

export default NavMenu;