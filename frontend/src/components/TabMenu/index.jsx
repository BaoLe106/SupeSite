import React from "react";

const TabMenu = (props) => {
    const { selection, tabTitles } = props;
    return (
        <>
            {tabTitles.map((title, index) => {
                return (
                    <p key={index}>{title} - {index} </p>
                )
            })}
        </>
    );
}

export default TabMenu;