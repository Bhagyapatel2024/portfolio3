import React, { useRef, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { personalInfo, publicUrls } from "../constants";
import Modal from "./Modal";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    buttonText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: personalInfo.fullName,
          from_email: form.email,
          to_email: personalInfo.email,
          message: form.message,
          reply_to: form.email,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setModalContent({
            title: "Success!",
            message: "Thank you. I will get back to you as soon as possilbe.",
            buttonText: "Ok",
          });
          setIsModalVisible(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error while sending mail ", error);
          setModalContent({
            title: "Error!",
            message: "Ahh, something went wrong. Please try again.",
            buttonText: "Retry",
          });
          setIsError(true);
          setIsModalVisible(true);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="relative flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          {/* <div className="flex items-center justify-end space-x-4 absolute top-8 right-4">
            {Object.keys(publicUrls.socialProfiles).map((socialProfile) => {
              const profile = publicUrls.socialProfiles[socialProfile];
              return (
                <div
                  key={`social_${profile.title}`}
                  onClick={() => window.open(profile.link, "_blank")}
                  className="green-pink-gradient lg:w-10 lg:h-10 h-8 w-8 rounded-full flex justify-center items-center cursor-pointer hover:scale-110"
                >
                  <img
                    src={profile.icon}
                    alt={`social_${profile.title}`}
                    className="w-4/6 h-4/6 object-contain"
                  />
                </div>
              );
            })}
          </div> */}

<div>
  <p className={styles.sectionSubText}></p>
  <h3 className={styles.sectionHeadText}>Contact</h3>
  
  <p className={styles.sectionSubText}>
    Email: 
    <a href="mailto:bhagya20052904@gmail.com">bhagya20052904@gmail.com</a>
  </p>
  
  <p className={styles.sectionSubText}>
    Mobile: (+91) 9328291692
  </p>
  
  <p className={styles.sectionSubText}>
    
    LinkedIn :  
    <a href="https://www.linkedin.com/in/bhagyapatel/" target="_blank" rel="noopener noreferrer">
       bhagyapatel
    </a>
  </p>
  
  <p className={styles.sectionSubText}>
    
    LeetCode :  
    <a href="https://leetcode.com/u/Bhagya_patel_01/" target="_blank" rel="noopener noreferrer">
     Bhagya_patel_01
    </a>
  </p>
</div>

      
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      {isModalVisible && (
        <Modal
          title={modalContent.title}
          message={modalContent.message}
          buttonText={modalContent.buttonText}
          isError={isError}
          setIsModalVisible={() => setIsModalVisible(false)}
        />
      )}
    </>
  );
};

export default SectionWrapper(Contact, "contact");
