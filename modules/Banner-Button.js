import Wallet from "../icons/Wallet";

function BannerButton(props){
    return (
        <a className={`mr-2 ml-2 ${props.button} btn-rounded btn-secondary`}> 
            {props.value} 
            <Wallet color="#000"></Wallet>
        </a>
    )
}

export default BannerButton;