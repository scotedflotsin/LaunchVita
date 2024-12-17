import React from "react";
import NavBar from "../Components/NavBar";
import wave from "../assets/headerwave.svg";
import star from "../assets/star.svg";
import headerimage from "../assets/hero.svg";
import Testimonials from "../Components/Testimonials";
import celebration from "../assets/testimonialcelebration.svg";
import Footer from "../Components/Footer";
import HomeCVSlider from "../Components/HomeCVSlider";
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <>
    
      {/* Here section */}
      <section className="w-[full] bg-no-repeat bgs-wave justify-center flex">
        <div className="flex flex-row items-center justify-between w-[1100px] px-[20px] mt-[100px]">
          <div>
            <p className="text-[30px] font-bold heading-line-height">
              Boost Your Chances, Land <br /> Your Dream job with a <br />{" "}
              Stellar Resume.{" "}
            </p>
            <p className=" mt-[15px] text-[19px] sub-heading-line-height">
              Create, Customize and perfact Your Resume with Ease <br />
              --Powered by AL for Maximum Impact
            </p>
            <Link to="/create">
            <button className="mt-[20px] text-[18px] nav-button-hover-bg2 text-[white] px-[20px] h-[56px] rounded-[5px] bg-[var(--primary-color)]">
              Create your CV
            </button>
            </Link>
            <div className="flex items-center gap-[10px] mt-[10px]">
              <img src={star} alt="star" />
              <p className="text-center mt-[3px]">
                4.5 Tursted by 1M+ industry leaders
              </p>
            </div>
          </div>
          <div>
            <img src={headerimage} alt="header image" />
          </div>
        </div>
      </section>
      {/* Testimonial section */}
      <section className="w-full justify-center flex">
        <div className="mt-[70px] flex flex-row w-[1100px] justify-between px-[20px] items-center">
          <div className="flex flex-col justify-center">
            <p className="text-[30px] font-bold">What people say about us</p>
            <p className="text-[19px] sub-heading-line-height mt-[15px]">
              Real Stories, Real Success: See How LaunchVita Helps <br /> Job
              Seekers Archive Their Career Goals.
            </p>
            <img
              src={celebration}
              alt="celebration"
              className="self-center mt-[50px] w-[392pxpx]"
            />
          </div>
          <div className="flex flex-col gap-[50px]">
            <div className="mr-[100px]">
              <Testimonials />
            </div>
            <div className="ml-[100px]">
              <Testimonials />
            </div>
            <div className="mr-[100px]">
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
      {/* tamplates overview section */}
      <section className="w-[full]  justify-center flex flex-col">
        <p className="text-[30px] font-bold mt-[100px] self-center">
          20K+ Templates
        </p>
        <div>
          <HomeCVSlider />
        </div>
      </section>
      {/* hired section for companies */}
      <section className="w-full justify-center flex pt-[70px]">
        <div className="flex w-[1200px] px-[20px]">
          <div>
            <p className="text-[30px] font-bold text-nowrap heading-line-height">
              Get Hired top <br /> Companies
            </p>
            <Link to="/create">
            <button className="mt-[20px] text-[18px] mt-[15px ] nav-button-hover-bg2 text-[white] px-[20px] h-[46px] rounded-[5px] bg-[var(--primary-color)]">
              Create your CV
            </button>
            </Link>
          </div>
          <div>
            <p className="ml-[20px] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              itaque consectetur cumque sit rerum debitis voluptates eos facere
              vitae doloremque quibusdam maxime voluptatum quam, atque porro?
              Nemo, in! Nostrum totam nesciunt culpa minima consequuntur
              reprehenderit architecto atque dignissimos officiis quam nam eius
              incidunt molestiae et distinctio, natus odio nisi tempore eos fuga
              omnis. Nesciunt qui, sit repudiandae at minima, commodi
              repellendus impedit aliquid optio corporis alias iste veniam hic
              neque libero dolorum aut a natus sed nobis quibusdam mollitia enim
              asperiores. Optio ab quia quisquam velit impedit esse, quidem quod
              ratione nisi veniam odio inventore fuga quasi molestias nobis
              recusandae!
            </p>
          </div>
        </div>
      </section>
      {/* featured section */}
      <section className="w-full justify-center flex pt-[70px]">
        <div className="w-[1200px] flex-col">
          <p className="text-[30px] font-bold p-[20px]">
            The next gen CV builder
          </p>
          <div className="mt-[20px]">
            <div className="flex gap-[50px] pl-[20px]">
              {/* left */}
              <div>
                <p className="text-[20px] font-medium">
                  AI integrated features & suggestions
                </p>
                <p className="text-[14px] font-normal">
                  LaunchVita will provide you better experiance and fast <br />{" "}
                  loading performance
                </p>

                <p className="text-[20px] font-medium mt-[20px]">
                  AI integrated features & suggestions
                </p>
                <p className="text-[15px] font-normal">
                  On every step our AI will help you to improve your <br />{" "}
                  resume contents.
                </p>

                <p className="text-[20px] font-medium mt-[20px]">
                  100% secure and safe
                </p>
                <p className="text-[15px] font-normal">
                  We are not taking your any details to share with any <br />{" "}
                  third-party.
                </p>
              </div>
              {/* right */}
              <div>
                <p className="text-[20px] font-medium">
                  100% details in your control
                </p>
                <p className="text-[15px] font-normal">
                  You can set your all given details without <br /> restriction.
                </p>

                <p className="text-[20px] font-medium mt-[20px]">
                  Allow you to download and share online
                </p>
                <p className="text-[15px] font-normal">
                  LaunchVita allow you to get your resume in <br /> downloadable
                  format and also you can share our the <br /> internet.
                </p>

                <p className="text-[20px] font-medium">
                  No login and Signup required
                </p>
                <p className="text-[15px] font-normal mt-[20px]">
                  LaunchVita offer you to Hessels free platform here no <br />{" "}
                  authentication require to start work.
                </p>
              </div>
            </div>
            <div className="w-full justify-center flex pb-[50px] pt-[40px]">
              <Link to="/create">
              <button className="mt-[20px] text-[18px] mt-[15px ] nav-button-hover-bg2 text-[white] px-[20px] h-[46px] rounded-[5px] bg-[var(--primary-color)]">
                Create your CV
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
