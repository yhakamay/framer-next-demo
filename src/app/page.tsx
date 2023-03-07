"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import styles from "./page.module.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <main className={styles.main}>
      <h1>Framer Motion x Next.js Demo</h1>
      <h2>Modal with position: inherit</h2>
      <div className={styles.modal_placeholder}>
        <motion.div
          className={styles.modal}
          layout
          onClick={() => setIsOpen(!isOpen)}
          variants={{
            open: {
              position: "inherit",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              transition: { type: "tween", duration: 1.2 },
            },
            closed: {
              scale: 1,
              transition: { type: "tween", duration: 1.2 },
            },
          }}
          animate={isOpen ? "open" : "closed"}
        >
          <Image src="/vercel.svg" width={200} height={200} alt={"vercel"} />
        </motion.div>
      </div>
      <h2>Modal with position: fixed</h2>
      <div className={styles.modal_placeholder}>
        <motion.div
          className={styles.modal}
          layout
          onClick={() => setIsOpen(!isOpen)}
          variants={{
            open: {
              position: "inherit",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              transition: { type: "tween", duration: 1.2 },
            },
            closed: {
              scale: 1,
              transition: { type: "tween", duration: 1.2 },
            },
          }}
          animate={isOpen ? "open" : "closed"}
        >
          <Image src="/vercel.svg" width={200} height={200} alt={"vercel"} />
        </motion.div>
      </div>
      <motion.div
        className={styles.spinning_shape}
        animate={{
          scale: [1, 1.3, 1.3, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
      />
      <motion.button
        className={styles.button}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 300 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        Button
      </motion.button>
      <motion.div
        className={styles.draggable}
        drag
        dragElastic={0.1}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <p>Drag me</p>
      </motion.div>
      <motion.div
        initial={false}
        variants={{
          open: {},
          closed: { opacity: 0, height: 0 },
        }}
        onClick={() => setClicked(!clicked)}
        animate={clicked ? "open" : "closed"}
      >
        <Image src="/next.svg" width={200} height={200} alt={"next"} />
      </motion.div>
    </main>
  );
}
