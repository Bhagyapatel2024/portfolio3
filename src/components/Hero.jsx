
import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Hero Section Content */}
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0`}
      >
        {/* Decorative vertical line and circle */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Introduction text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-electric-purple">{personalInfo.name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Creative software developer, specializing in building web
            applications and advancing data science solutions.
          </p>
         
          <br/>
          <p >I am an enthusiastic Computer Science Engineering student with a strong foundation in programming languages like Java and Python. </p>
        <br/>
        <p>I have hands-on experience in web development technologies such as React.js to build real-time applications.  </p>
        <br/>
        <p>My background in machine learning includes developing predictive models using frameworks like scikit-learn and TensorFlow. Additionally, I have solved over 500 problems on LeetCode.</p>
       <br/>
        <p>I also secured an All India Rank of 553 in the National Level Science Talent Search Examination.</p>
        </div>
      </div>

      {/* 3D Computer Model */}
      {/* <ComputersCanvas /> */}

      {/* Scroll Indicator */}
      {/* <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
