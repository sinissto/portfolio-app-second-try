"use client";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      className={"h-full"}
      initial={{ y: "-200vh" }}
      animate={{ y: "0%", transition: { duration: 1 } }}
    >
      <div>Contact page</div>
    </motion.div>
  );
};

export default ContactPage;
