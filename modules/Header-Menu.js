import MenuItem from "./Menu-Item";
function HeaderMenu(props){
    return(
        <ul className="d-flex d-justify-end d-flex-100 m-0 p-0 list-style-none ">
            <MenuItem childs="false" value="Home"></MenuItem>
            <MenuItem childs="true" value="Marketplace"></MenuItem>
            <MenuItem childs="true" value="FAQs"></MenuItem>
            <MenuItem childs="false" value="Create"></MenuItem>
        </ul>
    )
}

export default HeaderMenu;