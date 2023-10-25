import classnames from 'classnames/bind'
import { useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import useInterval from 'utils/hooks/useInterval'
import Table from 'components/Table'
import Section from 'components/Section'
import Loader from 'components/Loader'
import { HeaderProps } from 'components/Table/components/Header'
import { CoinData, CoinStore } from 'utils/store/coin-store'
import styles from './index.module.css'
import { ColumnProps } from '../Table/components/Row'
const cx = classnames.bind(styles)

type OwnProps = {
  coinStore: CoinStore
}

const CoinList = ({ coinStore }: OwnProps) => {
  useInterval({
    callback: () => coinStore.fetchData(),
    delay: 60000,
    initialTrigger: true,
  })

  const headers: HeaderProps[] = useMemo(
    () => [
      { content: 'Name' },
      { content: 'Price', alignment: 'center' },
      { content: '24 Hour Trade Volume', alignment: 'center' },
      { content: 'Change (Past 24 Hours)', alignment: 'right' },
    ],
    [],
  )

  const getColumns = (): Array<ColumnProps[]> => {
    const coinData = coinStore.coinData?.coins

    if (!coinData) return []

    return coinData.map((coin: CoinData) => {
      return [
        { id: coin.uuid, content: renderCoinName(coin) },
        { id: coin.uuid, content: renderPrice(coin), alignment: 'center' },
        {
          id: coin.uuid,
          content: Number(coin['24hVolume']).toLocaleString(),
          alignment: 'center',
        },
        { id: coin.uuid, content: renderChange(coin), alignment: 'right' },
      ]
    })
  }

  const renderCoinName = (coin: CoinData) => {
    return (
      <div className={cx('name')}>
        <img
          style={{ borderColor: coin.color }}
          className={cx('img')}
          src={coin.iconUrl}
        />
        {coin.name}
      </div>
    )
  }

  const renderPrice = (coin: CoinData) => {
    const USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })

    return USDollar.format(Number(coin.price))
  }

  const renderChange = (coin: CoinData) => {
    const { change } = coin
    return (
      <div className={cx('change', { negative: Number(change) < 0 })}>
        ${coin.change.replaceAll('-', '')}
      </div>
    )
  }

  const renderContent = () => {
    if (coinStore.coinData === null) return <Loader fill />

    return <Table header={headers} rows={getColumns()} />
  }

  return <Section>{renderContent()}</Section>
}
export default observer(CoinList)
