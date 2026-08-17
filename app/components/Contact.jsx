import { assets } from '@/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "motion/react"

function Contact({isDarkMode}) {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "7ea05681-b6a2-4639-92a2-017312fb05cc"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
    intial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
      id="contact"
      className="
        w-full
        px-[12%]
        py-10
        scroll-mt-20
        bg-[url('/footer-bg-color.png')]
        bg-no-repeat
        bg-center
        bg-[length:90%_auto]
        dark:bg-none
      "
    >

      {/* Heading */}

      <motion.h4
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-center mb-2 text-lg font-Ovo">
        Connect with me
      </motion.h4>

      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="text-center text-5xl font-Ovo">
        Get in touch
      </motion.h2>

      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="
        text-center
        max-w-2xl
        mx-auto
        mt-5
        mb-12
        font-Ovo
        leading-8
      ">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>


      {/* Form */}

      <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-3xl mx-auto"
      >

        {/* Name + Email */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-6
          mt-10
          mb-8
        ">

          <motion.input
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="
              w-full
              p-4
              outline-none
              border
              border-gray-400
              rounded-md
              bg-transparent
              dark:border-white/70
            "
          />

          <motion.input
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="
              w-full
              p-4
              outline-none
              border
              border-gray-400
              rounded-md
              bg-transparent
              dark:border-white/70
            "
          />

        </div>


        {/* Message */}

        <motion.textarea
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
          rows="8"
          placeholder="Enter your message"
          required
          name="message"
          className="
            w-full
            p-4
            outline-none
            border
            border-gray-400
            rounded-md
            bg-transparent
            mb-6
            resize-none
            dark:border-white/70
          "
        />


        {/* Submit Button */}

        <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
          type="submit"
          className="
              py-3
              px-8
              w-max
              flex
              items-center
              justify-between
              gap-2
              rounded-full
              mx-auto
              border
              border-gray-400
              bg-transparent
              duration-500
              hover:bg-gray-100
              dark:text-white
              dark:border-white/50
              dark:hover:bg-darkHover
          "
      >
          Submit now

          <Image
              src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
              alt=""
              className="w-4"
          />
      </motion.button>


        {/* Result */}

        <p className="mt-4 text-center">
          {result}
        </p>

      </motion.form>

    </motion.div>
  );
}

export default Contact;