import React from 'react'
import Page from 'components/Page'
import CoinList from 'components/CoinList'

import { coinStore } from 'utils/store'
import styles from './index.module.css'
import classnames from 'classnames/bind'
import Button from '../../components/Button'
const cx = classnames.bind(styles)

function App() {
  return (
    <Page fullHeight>
      <div className={cx('header')}>
        <h1>Coin Watch</h1>
        <Button onClick={() => coinStore.fetchData()}>Refresh</Button>
      </div>

      <CoinList coinStore={coinStore} />
    </Page>
  )
}

export default App
