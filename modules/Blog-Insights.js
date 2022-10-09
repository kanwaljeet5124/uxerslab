import BlogStudyCard from './Blog-Study';
import styles from './css/blog-insights.module.css';
function BlogInsights(props){
    return (
    <div className="bg-smoke">
        <div className='container pt-5'>
            <div className='d-flex d-flex-wrap pt-3'>
                <div className={`p-relative col-8 offset-4 mb-5 ${styles['insight-header']}`}> 
                    <a href="#" className={`mt-5 text-primary badge`}> Knowledgebase </a>
                    <h2>
                        Our latest company news, whitepapers, videos, and articles.
                    </h2>
                </div>
                <div className="col-3"> 
                    <div className="row">
                        <div className="col-12 text-black mb-3 ux-link">
                            <span className="small-badge op-09 f-600 ">News</span>
                            <p className="text-black f-500">Slalom continues growth and expansion into Portland, Maine</p>
                        </div>
                        <div className="col-12 text-black mb-3 ux-link">
                            <span className="small-badge op-09 f-600 ">News</span>
                            <p className="text-black f-500">Slalom continues growth and expansion into Portland, Maine</p>
                        </div>
                        <div className="col-12 text-black mb-3 ux-link">
                            <span className="small-badge op-09 f-600 ">News</span>
                            <p className="text-black f-500">Slalom continues growth and expansion into Portland, Maine</p>
                        </div>
                        <div className="col-12 text-black mb-3 ux-link">
                            <span className="small-badge op-09 f-600 ">News</span>
                            <p className="text-black f-500">Slalom continues growth and expansion into Portland, Maine</p>
                        </div>
                        
                    </div>
                </div>
                <div className="col-7 offset-1"> 
                    <BlogStudyCard></BlogStudyCard>
                </div>
                
            </div>
        </div>
        <div className='d-flex d-flex-wrap'>
            <div className='col-4 bg-white '>
                <div className='bg-smoke' style={{'borderBottomRightRadius':'150px','minHeight':'150px'}}> <h3>&nbsp;</h3></div>
            </div>
            <div className='col-8 p-relative'>
                <div className={`p-2 p-absolute bg-primary ${styles['insights-floating-card']}`}>
                    <a href="#" className={`text-white small-badge`}> articles </a>
                    <div className={`${styles['insights-floating-card-content']}`}>
                        <h5 className={`text-white f-500 mr-5 ${styles['insights-floating-card-content-title']}`}>How can your organization benefit from AI right now?</h5>
                        <div>
                            <a href="#" className='btn-default text-white f-600'> Explore more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default BlogInsights;