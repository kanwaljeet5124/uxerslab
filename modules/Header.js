import BrandLogo from "./Logo";
import SearchBar from "./Search-bar";
import HeaderMenu from "./Header-Menu";
import BannerButton from "./Banner-Button";

function Header(){
    return (
        <header>
            <div className="d-flex d-wrap d-align-center container pt-3 pb-3">
                <BrandLogo></BrandLogo>
                <SearchBar classes="ml-5" inputClass="f-700" placeholder="Search for products and brands"></SearchBar>
                <HeaderMenu></HeaderMenu>
                <BannerButton button="btn-small" value="Connect"></BannerButton>
                <BannerButton button="btn-icon-only"></BannerButton>
            </div>
        </header>
    )
}

export default Header;