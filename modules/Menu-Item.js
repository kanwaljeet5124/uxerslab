import { useState } from 'react';
import Popup from './Popup-List';
import ArrowDown from '../icons/Arrow-Down';


function MenuItem(props){
    const [active, setActive] = useState(false);

    function activeHandler(e){
        setActive(prev => !prev);
    }

    return (
        <li className="menu__item level-1 pl-2 pr-2 p-relative">
            <a href="#" className={`d-flex d-align-center p-relative menu__link f-600 ${active? "text-secondary active-menu":"text-grey"}`} onClick={activeHandler}>
                {props.value}
                {props.childs==="true" && <span className='d-flex ml-1'><ArrowDown color={`${active? "#000":"#4c4c4c"}`}></ArrowDown></span>}
            </a>
            {props.childs==="true" && active && <Popup></Popup>}
        </li>
    )
}

export default MenuItem;