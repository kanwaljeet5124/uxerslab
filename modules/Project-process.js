import React from "react";
import styles from "./css/OurProcess.module.css";
import SectionHeading from "./Section-Heading";
import { useEffect, useRef } from "react";

function ProjectProcess() {
    const pp = useRef(null);
    return (
        <div className={`container ${styles["our-process-wrapper"]}`}>
            <SectionHeading title="Our " highlighted-title="Process"></SectionHeading>
            <div ref={pp} class={`${styles["our-process-steps"]} pt-4 UX-container`}>
                <div className={`align-center ${styles["our-process-step"]}`}>
                    <div className={`${styles["icon"]}`}>
                        <img className="" src={"/Images/research-icon1.svg"} />
                    </div>
                    <h5 className="f-700 text-black mt-2 mb-5"> Research</h5>
                </div>
                <div className={`align-center ${styles["our-process-step"]}`}>
                    <div className={`${styles["icon"]}`}>
                        <img className="" src={"/Images/research-icon1.svg"} />
                    </div>
                    <h5 className="f-700 text-black mt-2 mb-5"> Idea</h5>
                </div>
                <div className={`align-center ${styles["our-process-step"]}`}>
                    <div className={`${styles["icon"]}`}>
                        <img className="" src={"/Images/research-icon1.svg"} />
                    </div>
                    <h5 className="f-700 text-black mt-2 mb-5"> Meet/Plan</h5>
                </div>
                <div className={`align-center ${styles["our-process-step"]}`}>
                    <div className={`${styles["icon"]}`}>
                        <img className="" src={"/Images/research-icon1.svg"} />
                    </div>
                    <h5 className="f-700 text-black mt-2 mb-5"> Execution </h5>
                </div>
                <div className={`align-center ${styles["our-process-step"]}`}>
                    <div className={`${styles["icon"]}`}>
                        <img className="" src={"/Images/research-icon1.svg"} />
                    </div>
                    <h5 className="f-700 text-black mt-2 mb-5"> Delivery </h5>
                </div>
                <div className={`align-center ${styles["our-process-step"]}`}>
                    <div className={`${styles["icon"]}`}>
                        <img className="" src={"/Images/research-icon1.svg"} />
                    </div>
                    <h5 className="f-700 text-black mt-2 mb-5"> Support</h5>
                </div>
            </div>

        </div>
    );
}

export default ProjectProcess;