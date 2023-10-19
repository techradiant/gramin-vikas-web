import sl1 from '../../content/images/h2-slide1.jpg'
import sl2 from '../../content/images/h2-slide2.jpg'

function Slider()
{
return(

    <>
     <section id="home-slider" className="owl-carousel owl-theme wf100">
            <div className="item">
               <div className="slider-caption h2slider">
                  <div className="container">
                     <strong>Ecova<span> is the Best</span></strong>
                     <h1>Eco Friendly</h1>
                     <p>Nonprofit WordPress Theme</p>
                     <a href="#" className="active">Find Out More</a> <a href="#">Join us Now</a> 
                  </div>
               </div>
               <img src={sl1} alt=""/> 
            </div>
            <div className="item">
               <div className="slider-caption h2slider">
                  <div className="container">
                     <strong><span>Please</span> Stop Hunting & </strong>
                     <h1>Save WildLife</h1>
                     <p>of <strong>endangered animals</strong> in the world</p>
                     <a href="#" className="active">Find Out More</a> <a href="#">Join us Now</a> 
                  </div>
               </div>
               <img src={sl2} alt=""/> 
            </div>
            <div className="item">
               <div className="slider-caption h2slider">
                  <div className="container">
                     <strong>Save <span> & dont waste our life</span> partner</strong>
                     <h1>Water Resource</h1>
                     <p>Before <strong>its too late</strong> for us...</p>
                     <a href="#" className="active">Find Out More</a> <a href="#">Join us Now</a> 
                  </div>
               </div>
               <img src="images/h2-slide3.jpg" alt=""/> 
            </div>
         </section>
    </>
)
}
export default Slider;