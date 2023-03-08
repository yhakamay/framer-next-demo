"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import styles from "./page.module.css";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  return (
    <main className={styles.main}>
      <h1>Framer Motion x Next.js Demo</h1>
      <div className={styles.card_list}>
        {products.map((product: Product) => (
          <motion.div
            key={product.id}
            className={styles.card}
            onClick={
              selectedProduct?.id === product.id
                ? () => setSelectedProduct(null)
                : () => setSelectedProduct(product)
            }
            variants={{
              open: {
                scale: 1.2,
                opacity: 0,
              },
              closed: {
                scale: 1,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 800,
              damping: 100,
              duration: 0.2,
              staggerChildren: 0.5,
            }}
            animate={selectedProduct?.id === product.id ? "open" : "closed"}
            layout
            layoutId={`card-${product.id}`}
          >
            <div className={styles.card_content}>
              <motion.div
                className={styles.card_header}
                layoutId={`card-header-image-${product.id}`}
              >
                <Image
                  src={product.image}
                  width={100}
                  height={50}
                  alt={product.name}
                />
              </motion.div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          className={styles.card_open}
          variants={{
            open: {
              opacity: 1,
            },
            closed: {
              opacity: 0,
              zIndex: -1,
            },
          }}
          transition={{
            type: "spring",
            stiffness: 800,
            damping: 100,
            staggerChildren: 0.5,
          }}
          animate={selectedProduct === null ? "closed" : "open"}
          layoutId={`card-${selectedProduct?.id}`}
        >
          <div className={styles.card_content}>
            <motion.div
              className={styles.card_header}
              layoutId={`card-header-image-${selectedProduct?.id}`}
            >
              {selectedProduct !== null && (
                <Image
                  src={selectedProduct?.image ?? ""}
                  width={200}
                  height={100}
                  alt={selectedProduct?.name ?? ""}
                />
              )}
            </motion.div>
            <motion.h3>{selectedProduct?.name}</motion.h3>
            <motion.p>{selectedProduct?.price}</motion.p>
            <motion.p>{selectedProduct?.description}</motion.p>
          </div>
        </motion.div>
        <motion.div
          className={styles.overlay}
          variants={{
            open: {
              opacity: 1,
            },
            closed: {
              opacity: 0,
              zIndex: -1,
            },
          }}
          transition={{ duration: 0.1 }}
          animate={selectedProduct === null ? "closed" : "open"}
          onClick={() => setSelectedProduct(null)}
        />
      </div>
    </main>
  );
}

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

const products: Product[] = [];

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
