import { FiMail } from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = import.meta.env.VITE_CONTACT_EMAIL || "contact@example.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <motion.button
        onClick={copyToClipboard}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 1.05 }}
        className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.p
              className="flex items-center justify-center gap-2"
              key="copied-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              ✅ Email Copied!
            </motion.p>
          ) : (
            <motion.p
              className="flex items-center justify-center gap-2"
              key="copy-email-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <FiMail />
              Drop me an email
            </motion.p>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default CopyEmailButton;
