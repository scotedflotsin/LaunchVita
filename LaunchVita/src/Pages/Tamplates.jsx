import React from "react";
import Footer from "../Components/Footer";
import TemplateView from "../Components/TemplateView";

const Templates = () => {
  return (
    <>
      <section className="w-[full] bg-no-repeat bgs-wave justify-center flex">
        <div className="w-[1200px]">
          <p className="text-[30px] ml-[20px] mt-[20px] font-bold text-start">
            Resume Templates
          </p>
            <div className="pb-[20px] overflow-x-auto flex flex-wrap justify-center ">
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />
              <TemplateView />

            </div>
            <div className="flex justify-center py-[20px]">
            <button className="text-[18px] load-more-scale text-[black] px-[40px] h-[46px] rounded-[5px] bg-[var(--greys)]">Load More</button>
            </div>
        </div>
    
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Templates;
