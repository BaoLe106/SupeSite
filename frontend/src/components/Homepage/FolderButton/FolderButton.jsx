import { useState } from "react";
import { ChevronIcon } from "../../common/constant/icon_constant";
import { FolderButtonContainer, FolderButtonIcon } from "./styles";

function FolderButton() {
    return (
        <FolderButtonContainer>
            <FolderButtonIcon>
                {ChevronIcon}
            </FolderButtonIcon>        
            All sites
        </FolderButtonContainer>
    )
};

export default FolderButton;