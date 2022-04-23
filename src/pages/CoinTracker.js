import styles from '../assets/styles/App.module.scss'
import { useState, useEffect } from 'react'

function CoinTracker() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])

  useEffect(() => {
    if (loading)
      fetch('https://api.coinpaprika.com/v1/tickers')
        .then((r) => r.json())
        .then((json) => {
          setCoins(json)
          console.log(json)
          setLoading(false)
        })
  })
  return (
    <div className={styles.app}>
      <h1>COINS({coins.length})</h1>
      <div>
        {loading ? (
          <h4>LOADING...</h4>
        ) : (
          <div>
            <h4>LOADED!</h4>
            {coins.map((item) => (
              <div style={{ margin: '10px 0' }}>
                <hr style={{ width: '100%' }} />
                <h3>{item.name}</h3>
                <h>
                  {item.symbol}: ${item.quotes.USD.price}
                </h>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CoinTracker
