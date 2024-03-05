import { useState } from "react";
import { 
    SearchbarContainer,
    SearchbarInput
} from "./styles.jsx";

function Searchbar() {
    return (
        <SearchbarContainer>
            <SearchbarInput placeholder="Search anyting..."></SearchbarInput>
        </SearchbarContainer>
    )
};

export default Searchbar;