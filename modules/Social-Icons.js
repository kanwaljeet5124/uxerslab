import styles from './css/social-icons.module.css';
function SocialIcons(props){
    return (
        <div className={`${styles['ux-social-icons']}`}>
            <a href="#" className='ux-link'><i className="fab fa-facebook"></i></a>
            <a href="#" ><i className="fab fa-twitter"></i></a>
            <a href="#" ><i className="fab fa-instagram"></i></a>
            <a href="#" ><i className="fab fa-linkedin-in"></i></a>
        </div>
    );
}

export default SocialIcons;