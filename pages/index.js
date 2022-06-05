
import { Fragment } from 'react';
import ServiceSlider from '../modules/Service-Slider';
import ToolAutoSlider from '../modules/Tool-AutoSlider';
export default function Home() {
  return (
    <Fragment>
      <h1>Uxerslab</h1>
      <ServiceSlider></ServiceSlider>
      <ToolAutoSlider></ToolAutoSlider>
    </Fragment>
  )
}
