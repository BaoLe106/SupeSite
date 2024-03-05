import React from "react";
import {ReactComponent as Logo} from "../Icon/SupeSiteLogo.svg";
import {ReactComponent as Chevron} from "../Icon/chevron.svg";
import {ReactComponent as Sort} from "../Icon/sort-arrow.svg";
import {ReactComponent as Email} from "../Icon/email.svg";
import {ReactComponent as Favorite} from "../Icon/favorite.svg";
import {ReactComponent as Folder} from "../Icon/folder.svg";
import {ReactComponent as Home} from "../Icon/home.svg";
import {ReactComponent as Question} from "../Icon/question.svg";
import {ReactComponent as Setting} from "../Icon/setting.svg";
import {ReactComponent as Time} from "../Icon/time.svg";
import {ReactComponent as User} from "../Icon/user.svg";

export const SupeSiteLogo = <Logo style={{ width: '100px' }}/>;
export const ChevronIcon = <Chevron/>
export const SortIcon = <Sort/>
export const iconOrder = {
    "My Sites": <Home/>,
    "Favorite": <Favorite/>,
    "Recent": <Time/>,
    "My platform": <Folder/>,
    "Help": <Question/>,
    "Setting": <Setting/>,
    "User": <User/>
}
