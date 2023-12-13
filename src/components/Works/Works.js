import React from "react";
import "./Works.css";
import portfolio1 from "../../Assets/portfolio61.png";
import portfolio2 from "../../Assets/portfolio5.png";
import portfolio3 from "../../Assets/portfolio5.png";
import portfolio4 from "../../Assets/portfolio61.png";
import portfolio5 from "../../Assets/portfolio5.png";
import portfolio6 from "../../Assets/portfolio61.png";
const Works=()=>{
    return(
        <section id="Works">
            <h2 className="workstitle">My Portfolio</h2>
            <span className="worksdesc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,</span>
            <div className="worksImgs">
                <img src={portfolio1} alt="" className="worksimg" />
                <img src={portfolio2} alt="" className="worksimg" />
                <img src={portfolio3} alt="" className="worksimg" />
                <img src={portfolio4} alt="" className="worksimg" />
                <img src={portfolio5} alt="" className="worksimg" />
                <img src={portfolio6} alt="" className="worksimg" />
            </div>
            <button className="workBtn">See More</button>

        </section>
    )
}
export default Works; 