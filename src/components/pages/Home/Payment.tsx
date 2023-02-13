import Image from 'next/image';
import styles from '@styles/Home.module.css';
import Illustration from '@assets/images/payment.svg';
import Illustration2 from '@assets/images/illustration2.svg';

export default function Payment() {
  return (
    <div className={styles['payment-container']}>
      <h1>Buy Crypto with Easiest Payment</h1>
      <Image src={Illustration} alt={'Payment Illustration'} style={{ width: '55%', height: '55%' }} />

      <div className={styles['payment-img']}>
        <Image src={Illustration2} alt={'Payment Illustration'} style={{ width: '70%', height: '70%' }} />
      </div>
    </div>
  );
}
