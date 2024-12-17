import React from "react";
import Footer from "../Components/Footer";
import logo from "../assets/applogo.svg";
import profile from "../assets/myprofile.jpg";
import gprofile from "../assets/girlprofile.png";

const About = () => {
  return (
    <>
      <section className="w-[full] bg-no-repeat bgs-wave justify-center flex">
        <div className="flex flex-row  w-[1100px] px-[20px] mt-[100px] flex-col">
          <p className="text-[50px] font-light">About</p>
          <div className="h-[85px] flex items-center gap-[10px] cursor-pointer">
            <img src={logo} alt="Logo" className="w-[56px] h-auto" />
            <div className="flex items-baseline">
              <p className="text-[30px] font-semibold">Launch</p>
              <p className="text-[25px] font-semibold">Vita</p>
            </div>
          </div>
          <p className="text-[19px] fon">
            About Us <br />
            At LaunchVita, we believe that every individual deserves a
            fair chance to showcase their unique skills and experiences in a way
            that stands out. Our mission is to simplify the process of creating
            professional, polished resumes while empowering you to land your
            dream job. Whether you’re a fresh graduate, a seasoned professional,
            or someone looking for a career change, LaunchVita is designed to
            cater to your unique needs. We understand how challenging it can be
            to capture your story on a single page. That’s why we offer
            intuitive tools, modern templates, and personalized suggestions to
            help you craft resumes that leave a lasting impression. LaunchVita
            isn’t just a resume builder—it’s a bridge between your aspirations
            and opportunities. We are passionate about helping you turn your
            potential into possibilities. <br /> <br /> Our Vision <br /> To revolutionize how people
            present themselves in the job market by combining simplicity,
            creativity, and technology. <li>Empower Careers:</li> We aim to become a
            go-to platform that equips users with professional resumes tailored
            to their ambitions and industries. <li>Leverage Innovation:</li> With the
            integration of cutting-edge AI, we strive to provide intelligent
            suggestions to highlight your skills and strengths effectively.
            <li>Promote Accessibility:</li> Everyone, regardless of technical skills,
            should have access to world-class resume-building tools. That’s why
            LaunchVita is designed to be straightforward, inclusive, and
            user-friendly. We envision a future where your first step towards a
            dream job begins here—with a resume that reflects not just your
            credentials but your story, aspirations, and individuality. Our
            developer
          </p>
          <br />
          <br />
          <p className="text-[19px] fon">Our Developer</p>
          <div className="fon gap-[30px] py-[50px] flex">
  {/* First Profile */}
  <div>
    <div className="w-[110px] h-[110px] rounded-full overflow-hidden">
      <img 
        src={profile} 
        alt="profile" 
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <p className="text-[21px] font-normal mt-[10px]">Harsh Verma</p>
      <p className="text-[17px] font-semibold text-[var(--primary-color)] mt-[5px]">
         developer
      </p>
    </div>
  </div>

  {/* Second Profile */}
  {/* <div>
    <div className="w-[110px] h-[110px] rounded-full overflow-hidden">
      <img 
        src={gprofile} 
        alt="profile" 
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <p className="text-[21px] font-normal mt-[10px]">Amayra S.</p>
      <p className="text-[17px] font-semibold text-[var(--primary-color)] mt-[5px]">
        Web developer
      </p>
    </div>
  </div> */}
</div>

        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;
