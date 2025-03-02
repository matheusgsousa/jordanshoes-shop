import React from 'react';
import Image from 'next/image';
import styles from './product-container.module.css';
import { Product } from '@/app/models/products';

const ProductContainer = (props: Product) => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={props.imageSrc} width={200} height={150} alt="Shoe" />
      </div>
      <article className={styles.content}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.type}>{props.type}</p>
        <p className={styles.price}>
          {props.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </article>
    </section>
  );
};

export default ProductContainer;
