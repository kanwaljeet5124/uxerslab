import { Fragment } from "react";
import styles from './css/technologies.module.css';
import SectionHeading from "./Section-Heading";

function Technologies(props){
    return(
        <Fragment>
        <div className="container ">
            <div className={styles['technology-wrapper']}>
                <SectionHeading title="Our " highlighted-title="Vision"></SectionHeading>
                <div className={`pb-3 ${styles['UX-technologies']}`}>
                    <div className={styles['ux-technology-item']}>
                        <img src={"/Images/platform-aws-up.svg"} className={styles['item-image']}></img>
                    </div>
                    <div className={styles['ux-technology-item']}>
                        <img src={"/Images/platform-snowflake.svg"} className={styles['item-image']}></img>
                    </div>
                    <div className={styles['ux-technology-item']}>
                        <img src={"/Images/platform-salesforce-up.svg"} className={styles['item-image']}></img>
                    </div>
                    <div className={styles['ux-technology-item']}>
                        <img src={"/Images/platform-tableau-up.svg"} className={styles['item-image']}></img>
                    </div>
                    <div className={styles['ux-technology-item']}>
                        <img src={"/Images/platform-microsoft-up.svg"} className={styles['item-image']}></img>
                    </div>
                    <div className={styles['ux-technology-item']}>
                        <img src={"/Images/platform-google-cloud-up.svg"} className={styles['item-image']}></img>
                    </div>
                </div>
                { props["bottom-section"] === "true" && 
                    <div className={`${styles['ux-technology-description']} mt-5 pr-3`}>
                        <p className="{styles['ux-technology-description p']}">
                            We have strong partnerships with the world's <br></br>top tech companies.
                        </p>
                        <a className="btn btn-secondary">Read More..</a>
                    </div>
                }
            </div>
        </div>
        </Fragment>
    );
}

export default Technologies;