import { useState, useEffect } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const slides = [
{
image:"src/assets/images/hero03.png",
title:"Investing for Tomorrow",
text:"Positioning capital for long-term growth."
},
{
image:"src/assets/images/hero02.png",
title:"Disciplined Execution",
text:"Transforming opportunities into lasting value."
},
{
image:"src/assets/images/hero01.png",
title:"Market Leadership",
text:"Leveraging experience across private markets."
},
{
image:"src/assets/images/hero04.png",
title:"Enduring Partnerships",
text:"Building relationships that create sustainable success."
},

];

function Hero(){

const [index,setIndex] = useState(0);

useEffect(()=>{

const interval = setInterval(()=>{
setIndex((prev)=> (prev + 1) % slides.length);
},6000);

return ()=>clearInterval(interval);

},[]);

return(

<section className="hero">

<div className="slider">

{slides.map((slide,i)=>(

<div
key={i}
className={`slide ${i === index ? "active" : ""}`}
style={{backgroundImage:`url(${slide.image})`}}
>

<div className="hero-content">

<h1
key={index}
className="typewriter"
>
{slide.title}
</h1>

<p>
{slide.text}
</p>

</div>

</div>

))}

</div>

<div className="hero-bottom">

<div className="dots">

{slides.map((_,i)=>(

<span
key={i}
className={`dot ${i === index ? "active" : ""}`}
onClick={()=>setIndex(i)}
></span>

))}

</div>

<Link to="/credit">
  <button className="hero-btn">
    Explore More
  </button>
</Link>

</div>

</section>

);

}

export default Hero;