import styles from './css/blogstudy.module.css';

function BlogStudyCard(props){
    return (
        <div className={styles['ux-case-study-card']}>
            <img className={styles['ux-case-study-card-img']} src={"/Images/AI-2.webp"} />
            <div className={`bg-white p-3 ${styles['ux-case-study-card-title']}`}>
                <h5 className='m-0 p-0 f-500'>Slalom continues growth and expansion into Portland, Maine</h5>
            </div>
        </div>
    );
}

export default BlogStudyCard;