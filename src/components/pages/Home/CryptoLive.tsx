import styles from '@styles/Home.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CryptoLive() {
  const [data, setData] = useState([]);
  const fetchCryptoAPI = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://api.coincap.io/v2/assets?limit=10',
      });
      setData(response.data.data);
    } catch (e) {
      setData([]);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCryptoAPI();
  }, []);

  return (
    <div className={styles['cl-container']}>
      <h1>Crypto Live</h1>
      <table className={styles['cl-table']}>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>Volume 24h</th>
          <th>24h</th>
        </tr>
        {data?.map((_, i) => {
          return (
            <tr key={i}>
              <td>{_['rank']}</td>
              <td>{`${_['name']} (${_['symbol']})`}</td>
              <td>{`$ ${_['priceUsd']}`.substring(0, 9)}</td>
              <td>{`$ ${_['marketCapUsd']}`.substring(0, 9)}</td>
              <td>{`${_['volumeUsd24Hr']}`.substring(0, 7)}</td>
              <td style={`${_['changePercent24Hr']}`[0] === '-' ? { color: 'red' } : { color: 'green' }}>
                {`${_['changePercent24Hr']}`.substring(0, 4) + '%'}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
