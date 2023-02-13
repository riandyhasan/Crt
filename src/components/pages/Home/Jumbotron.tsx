import Image from 'next/image';
import styles from '@styles/Home.module.css';
import Coins from '@assets/images/jumbotron.png';
import SecurityAssets from '@assets/images/security.png';
// import TeleLogo from '@assets/images/tele-icon.png';
import Modal from 'react-modal';
import TelegramLoginButton, { TelegramUser } from '@v9v/ts-react-telegram-login';
import { useState } from 'react';

export default function Jumbotron() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      background: 'linear-gradient(212.99deg, #050810 27.28%, #122E47 86.52%)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '20px',
    },
  };

  const handleTelegramResponse = (user: TelegramUser) => {
    console.log(user);
  };

  return (
    <div className={styles['jumbot-container']}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel='Example Modal'>
        <div className={styles.modal}>
          <h1>Register/Login</h1>
          <Image src={SecurityAssets} alt={'Modal Assets'} style={{ width: '70%', height: '70%' }} />
          <br />
          <TelegramLoginButton dataOnAuth={handleTelegramResponse} botName='lou_bookkeeper_dev_bot' />{' '}
        </div>
      </Modal>
      <div className={styles['jumbot-left']}>
        <h1>Buy, Sell, and Trade with Confidence</h1>

        <p>
          Crt is the first platform in Indonesia that offers easy payment options for buying and selling cryptocurrency.
        </p>

        <div>
          <button onClick={() => setIsOpen(true)}>Register Now</button>
        </div>
      </div>

      <div className={styles['jumbot-right']}>
        <Image src={Coins} alt={'Coins'} style={{ width: '70%', height: '70%' }} />
      </div>
    </div>
  );
}
