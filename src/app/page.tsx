import styles from './page.module.css';
import ProductContainer from './components/product-container/index';
import Image from 'next/image';
import { mockProducts } from './models/products';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.advice}>Frete grátis para todo o Brasil</div>
      <header className={styles.header}>
        <div className={styles.description}>
          <p className={styles.logo}>
            <Image
              src={'/jordan.svg'}
              width={50}
              height={50}
              alt="logo"
            ></Image>
            <span style={{ fontSize: 20, fontWeight: 500 }}>JordanShoes</span>
          </p>
          <div className={styles.supportText}>
            <div className={styles.supportTextTitle}>
              A melhor loja de Jordan
            </div>
            <div className={styles.supportTextDescription}>
              O tênis Jordan é fruto de uma velha e forte parceria entre a Nike
              e o jogador Michael Jordan.
            </div>
          </div>
        </div>
      </header>
      <div className={styles.tagline}>
        <span className={styles.taglineTitle}>Os melhores em um só lugar</span>
        <span className={styles.taglineText}>
          A marca Jordan na JordanShoes é a escolha certa para os amantes de
          sneakers que buscam estilo e conforto.
        </span>
      </div>
      <section className={styles.products}>
        {mockProducts.map((product, index) => (
          <ProductContainer
            key={index}
            price={product.price}
            title={product.title}
            type={product.type}
            imageSrc={product.imageSrc}
          />
        ))}
      </section>
    </div>
  );
}
