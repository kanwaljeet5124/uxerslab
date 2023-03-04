import { Fragment } from 'react';
import Banner from '../modules/Banner';
import ServiceSlider from '../modules/Service-Slider';
import Technologies from '../modules/Technologies';
import BlogInsights from '../modules/Blog-Insights';
import ProjectProcess from '../modules/Project-process';
import ContactUs from '../modules/GetInTouch';
export default function Home() {
  return (
    <Fragment>
      <Banner></Banner>
      <ServiceSlider></ServiceSlider>
      <ProjectProcess></ProjectProcess>
      <BlogInsights></BlogInsights>
      <Technologies heading="true" bottom-section="true"></Technologies>
      <ContactUs></ContactUs> 
      
    </Fragment>
  )
}
