import styles from './css/popup.module.css';
import PopupListItem from './Popup-List-Item';

function Popup(props){
    return(
        <ul className={`bg-white rounded-20 p-absolute list-style-none border ${styles["popup-card"]}`}>
            <li>
                <PopupListItem value="Motors"></PopupListItem>
            </li>
            <li>
                <PopupListItem value="Watches"></PopupListItem>
            </li>
            <li>
                <PopupListItem value="Collectible Cards"></PopupListItem>
            </li>
            <li>
                <PopupListItem value="Fashion"></PopupListItem>
            </li>
            <li>
                <PopupListItem value="Gaming"></PopupListItem>
            </li>
            <li>
                <PopupListItem value="Art"></PopupListItem>
            </li>
            <li>
                <PopupListItem value="Music"></PopupListItem>
            </li>
            <li>
                <PopupListItem value="Real Estate"></PopupListItem>
            </li>
        </ul>
    )
}
export default Popup;