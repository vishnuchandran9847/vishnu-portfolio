import React from "react";
import "./Intro.css";
import bg from "../../Assets/myimage1.png";
import { Link } from "react-scroll";
// import btnImg from "../../Assets/hire.png";
import pdf from "../../Assets/pdf.pdf";

import { PiDownloadSimpleFill } from "react-icons/pi";

const Intro = () => {
  return (
    <section id="Intro">
      <div className="IntroContent">
        <span className="Hello">Hello,</span>
        <span className="introText">
          I'm<span className="introName"> Vishnu</span>
          <br />
          Website Designer
        </span>
        <p className="intropara">
          {" "}
          I am a skilled web desiger with experince in creating <br /> visually
          appealing and user friendly websites
        </p>
        {/* <Link><button className="btn"><img src={btnImg} alt="Hire Me" width={15}/> Hire Me</button></Link>  */}

        {/* <Link href="c:\Users\best\OneDrive\Documents\Vishnu c Qa.pdf" download><button className="btn">Resume</button></Link>  */}
        <div className="Button">
        <a className="btn-resume" href={pdf} target="_blank" download>

          Resume
          <PiDownloadSimpleFill />
        </a>
        </div>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};
export default Intro;
// btn btn-sm