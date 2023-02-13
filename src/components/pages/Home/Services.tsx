import Image from 'next/image';
import styles from '@styles/Home.module.css';
import Illustration from '@assets/images/services.png';
import Illustration2 from '@assets/images/illustration1.svg';

export default function Services() {
  return (
    <div className={styles.serv}>
      <h1>Easy and Fast!</h1>
      <div className={styles['serv-container']}>
        <div className={styles['serv-left']}>
          <Image src={Illustration} alt={'Services Illus'} style={{ width: '75%', height: '75%' }} />
        </div>

        <div className={styles['serv-right']}>
          <ul>
            <li>Trading</li>
            <li>Buy and Sell</li>
            <li>Exchange</li>
          </ul>
        </div>
      </div>

      <div className={styles['serv-img']}>
        <Image src={Illustration2} alt={'Assets'} style={{ width: '70%', height: '70%' }} />
      </div>
    </div>
  );
}
