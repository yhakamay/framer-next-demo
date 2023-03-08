"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import styles from "./page.module.css";

export default function Home() {
  const [selectedId, setSelectedId] = useState<null | number>(null);
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <main className={styles.main}>
      <h1>Framer Motion x Next.js Demo</h1>
      <div className={styles.card_list}>
        <motion.div
          className={styles.overlay}
          initial={false}
          animate={{ opacity: selectedId === null ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          style={{ pointerEvents: !selectedId ? "none" : "auto" }}
          onClick={() => setSelectedId(null)}
        />
        {products.map((product) => (
          <>
            <div className={styles.card_placeholder}>
              <motion.div
                key={product.id}
                onClick={
                  selectedId === product.id
                    ? () => setSelectedId(null)
                    : () => setSelectedId(product.id)
                }
                className={styles.card}
                variants={{
                  open: {
                    border: "none",
                    position: "absolute",
                    top: "60%",
                    left: "50%",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 9999,
                    width: "80vw",
                    height: "100vh",
                  },
                  closed: {
                    opacity: 1,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 1000,
                  damping: 100,
                  when: "beforeChildren",
                  staggerChildren: 0.5,
                }}
                initial={false}
                animate={selectedId === product.id ? "open" : "closed"}
              >
                <div className={styles.card_content}>
                  <motion.div
                    className={styles.card_header}
                    variants={{
                      open: {
                        scale: 3,
                      },
                      closed: {
                        // the default style defined in page.module.css
                      },
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.2,
                    }}
                    animate={selectedId === product.id ? "open" : "closed"}
                  >
                    <Image
                      src={product.image}
                      width={100}
                      height={50}
                      alt={product.name}
                    />
                  </motion.div>
                  <motion.h3>{product.name}</motion.h3>
                  <motion.p>{product.price}</motion.p>
                  <motion.p
                    variants={{
                      open: {
                        opacity: 1,
                      },
                      closed: {
                        opacity: 0,
                      },
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.2,
                    }}
                    initial={false}
                    animate={selectedId === product.id ? "open" : "closed"}
                  >
                    {product.description}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </>
        ))}
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
          open: {
            // the default style defined in page.module.css
          },
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

const products: {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}[] = [];

for (let i = 0; i < 10; i++) {
  products.push({
    id: i,
    name: "Product " + i,
    price: "$" + i,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquet, nunc elit aliquet nisl, sed aliquam massa justo sit amet elit. Sed euismod, nunc ut aliquam",
    image: "/next.svg",
  });
}
