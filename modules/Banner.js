import { Fragment } from 'react';
import styles from './css/banner.module.css';
import BannerCircle from '../icons/BannerCircle';


function Banner(props){

    function dancingText(event){
        event.target.classList.remove("useRubberBand");
        event.target.classList.remove("useRubberBandRepeat");
        event.target.classList.add("useRubberBand");
        const timer = setTimeout(() => {
            event.target.classList.remove("useRubberBand");
        }, 1050);
        return () => clearTimeout(timer);
    }
    return(
        <Fragment>
            <div className={`d-flex d-align-center ${styles['UX-Banner-wrapper']}`}>
                <div className={`container`}>
                    <div className="d-flex d-align-center d-justify-center">
                        <div className='col-12 d-flex d-align-center d-justify-center d-flex-column'>
                            <h1  className={`col-12 text-center op-09 text-secondary text-uppercase popin-font`} >
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>W</span>
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>E</span>
                
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>&nbsp;</span>

                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>Y</span>
                                <span className={`useRubberBandRepeat ${styles['dancing-letter']}`} onMouseOver={dancingText}>o</span>
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>u</span>
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>r</span>
                                <span className='text-gradient op-1'> Ideas</span> <br/> 
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>M</span>
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>a</span>
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>x</span>
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>i</span>
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>m</span>
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>i</span>
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>z</span>
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>e</span>
                                <span className={`${styles['dancing-letter']}`} onMouseOver={dancingText}>d</span>
                            </h1>
                            <p className={`col-5 text-center text-grey`}>
                                We connect. We unite. We communicate. We successfuly deliverd the dream projects of iconic brands.
                            </p>
                            <div className='mt-5 col-12 text-center'>
                                <a className='btn btn-primary btn-default-width mr-3' href="#">Explore</a>
                                <a className='btn btn-secondary btn-default-width' href="#">Start Project</a>
                            </div>
                            <div className={styles['banner-mouse']}>
                                <i className="fas fa-mouse"></i>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    );
}

export default Banner;