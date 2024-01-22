
const TabMenu = ({ tabSelection, tabTitles }) => {
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