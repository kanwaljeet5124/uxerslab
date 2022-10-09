import styles from './css/getintouch.module.css'

import SocialIcons from './Social-Icons';
function ContactUs(){
    return(
        <div className={` bg-smoke ${styles['UX-getInTouch']}`}>
            <div className='container d-flex d-flex-wrap pt-5 pb-5'>
                <div className='col-5 p-relative'>
                    <h1 className='text-white'>GET  IN  TOUCH</h1>
                    <h2 className='text-white secondary-font'>Let's talk about your next big project.</h2>
                    <p className='text-white mt-1 secondary-font'>
                        We deliver beyond your expectation.
                    </p>
                    <p className='text-white mt-5 mb-2 secondary-font'>
                        Follow us on:
                    </p>
                    <SocialIcons></SocialIcons>
                </div>
                <div class="col-7 pl-5 secondary-font">
                    <form>
                        <div className={`d-flex d-flex-wrap`}>
                            <div className={styles['three-field']}>
                                <div className={styles['form-group']}>
                                    <input className={styles['input-text']} type="text" placeholder="Name*"></input>
                                </div>
                            </div>
                            <div className={styles['three-field']}>
                                <div className="form-group">
                                    <input className={styles['input-text']} type="text" placeholder="Work Email*"></input>
                                </div>
                            </div>
                            <div className={styles['three-field']}>
                                <div className="form-group">
                                    <input className={styles['input-text']} type="text" placeholder="Phone*"></input>
                                </div>
                            </div>
                        </div>

                        <div className={styles['opt-wrapper']}> 
                            <label className={`primary-font ${styles['lbl-title']}`}>How soon do you want to start the project?*</label>
                            <div className={styles['option-box']}>
                                <label>
                                    <input type="radio" value="Within 8 weeks" checked="checked"></input>
                                    <span className={styles['lbl-text']}>Within 8 weeks</span>
                                </label>
                            </div>
                            <div className={styles['option-box']}> 
                                <label>
                                    <input type="radio" value="More than 8 weeks"></input>
                                    <span className={styles['lbl-text']}>More than 8 weeks</span>
                                </label>
                            </div>
                        </div>
                        <div className={styles['check-services']}>
                            <label className={`primary-font ${styles['lbl-title']}`}>Which services are you looking for?*</label>
                            <div className={styles['option-box']}>
                                <label> 
                                    <input type="checkbox" class="which_digital_marketing" value="Social Media Marketing"></input>
                                    <span className={styles['lbl-text']}>Social Media Marketing</span> 
                                </label>
                            </div>
                            <div className={styles['option-box']}>
                                <label> 
                                    <input type="checkbox" class="which_digital_marketing" value="Social Media Marketing"></input>
                                    <span className={styles['lbl-text']}>Social Media Marketing</span> 
                                </label>
                            </div>
                            <div className={styles['option-box']}>
                                <label> 
                                    <input type="checkbox" class="which_digital_marketing" value="Social Media Marketing"></input>
                                    <span className={styles['lbl-text']}>Social Media Marketing</span> 
                                </label>
                            </div>
                            <div className={styles['option-box']}>
                                <label> 
                                    <input type="checkbox" class="which_digital_marketing" value="Social Media Marketing"></input>
                                    <span className={styles['lbl-text']}>Social Media Marketing</span> 
                                </label>
                            </div>
                            <div className={styles['option-box']}>
                                <label> 
                                    <input type="checkbox" class="which_digital_marketing" value="Social Media Marketing"></input>
                                    <span className={styles['lbl-text']}>Social Media Marketing</span> 
                                </label>
                            </div>
                            <div className={styles['option-box']}>
                                <label> 
                                    <input type="checkbox" class="which_digital_marketing" value="Social Media Marketing"></input>
                                    <span className={styles['lbl-text']}>Social Media Marketing</span> 
                                </label>
                            </div>
                        </div>

                        <div className={`mb-3 ${styles['textarea-wrapper']}`}>
                            <div className={styles['form-group']}>
                                <label className={`primary-font ${styles['TA-lbl-text']}`}>
                                    Share your requirements*
                                    <small className={styles['smaller-txt']}>(minimum 250 characters)</small>
                                </label>
                                <textarea className={styles['items-textarea']} placeholder="(You can add links to your shareable materials if any)" ></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;