import { useState } from "react";
import { SortIcon } from "../../common/constant/icon_constant";
import { SortButtonContainer, SortButtonIcon } from "./styles";

function SortButton() {
    return (
        <SortButtonContainer>
            <SortButtonIcon>
                {SortIcon}
            </SortButtonIcon>        
            Recent
        </SortButtonContainer>
    )
};

export default SortButton;