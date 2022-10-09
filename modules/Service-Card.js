import { Fragment } from  "react";
import styles from './css/service-card.module.css';
function ServiceCard(props){

    return (
        <Fragment>
            <div className={`d-flex d-flex-column border ${styles["card-bg"]}`}>
                <div className={styles['UX-card']}>
                    <div className={`bg-grey ${styles['ux-card-icon']}`}> H </div>
                    <div className={`h4 popin-font  ${styles['ux-card-title']}`}>
                        Web Designing
                    </div>
                    <p className={`mt-3 mb-3 text-grey text-center font-16 l-22`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                    <a className={`btn btn-default text-secondary font-14 underline`}> Explore </a>
                </div>
            </div>


            
        </Fragment>
    );
}

export default ServiceCard