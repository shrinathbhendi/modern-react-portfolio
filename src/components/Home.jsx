import React from "react"
import { ReactTyped } from "react-typed"
import Tilt from "react-parallax-tilt"
import profile from "../assets/profile.jpg"

function Home(){

return(

<section id="home" className="home">

<div className="home-text">

<h3 className="hello">Hello I'm</h3>

<h1 className="name">Shrinath</h1>

<h2 className="typing">

<ReactTyped
strings={[
"Java Full Stack Developer",
"React Developer",
"Web Designer"
]}
typeSpeed={70}
backSpeed={40}
loop
/>

</h2>

<p className="home-desc">
I build modern websites with beautiful UI, smooth animations,
and powerful functionality using modern web technologies.
</p>

<a href="/resume.pdf" download>
<button className="btn">Download Resume</button>
</a>

</div>

<div className="home-img">

<Tilt
scale={1.08}
glareEnable={true}
glareMaxOpacity={0.4}
glareColor="#ffffff"
glarePosition="all"
>

<img src={profile} alt="profile"/>

</Tilt>

</div>

</section>

)

}

export default Home