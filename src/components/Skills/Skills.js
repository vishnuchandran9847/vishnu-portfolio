import React from "react";
import UIDesignImg from "../../Assets/ui design.png";
import WebDesignImg from "../../Assets/webdesign.png";
import AppDesignImg from "../../Assets/appdesign.png";
import "./Skills.css";
const Skills=()=>{
    return(
        <section id="Skills">
            <span className="SkillTitle">What i Do</span>
            <span className="SkillDes">Iam a skilled and passionate webdesigner with experience in creating visually appealing and user-friendly websites.i have a strong understanding of design and a keen eye for detail.i am proficient in HTML,CSS and JAVASCRIPT as well as design software such as adobe photoshop and illustrator </span>
            <div className="SkillBars">
                <div className="SkillBar"> 
                <img src={UIDesignImg} alt="UIDesign" className="SkillBarImg" width={100}/>
                <div className="SkillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This a DEMO TEXT , WE CAN FILL IT LATER</p>
                </div>
                </div>

                <div className="SkillBar"> 
                <img src={WebDesignImg} alt="WebDesign" className="SkillBarImg" width={100}/>
                <div className="SkillBarText">
                    <h2>Website Design</h2>
                    <p>This a DEMO TEXT , WE CAN FILL IT LATER</p>
                </div>
                </div>

                <div className="SkillBar"> 
                <img src={AppDesignImg} alt="AppDesign" className="SkillBarImg" width={100}/>
                <div className="SkillBarText">
                    <h2>App Design</h2>
                    <p>This a DEMO TEXT , WE CAN FILL IT LATER</p>
                </div>
                </div>
            </div>

        </section>

    )
}
export default Skills;



