import { makeAutoObservable } from 'mobx'
import axios, { AxiosResponse } from 'axios'

interface CoinResponse {
  status: string
  data: CoinResponseData
}
interface CoinResponseData {
  stats: CoinStats
  coins: CoinData[]
}
interface CoinStats {
  total: number
  totalCoins: number
  totalMarkets: number
  totalExchanges: number
  totalMarketCap: string
  total24hVolume: string
}
export interface CoinData {
  uuid: string
  symbol: string
  name: string
  color: string
  iconUrl: string
  marketCap: string
  price: string
  btcPrice: string
  listedAt: string
  change: string
  rank: number
  sparkline: string[]
  coinrankingUrl: string
  '24hVolume': string
}
export class CoinStore {
  coinData: CoinResponseData | null = null
  constructor() {
    makeAutoObservable(this)
  }

  async fetchData() {
    try {
      const res: AxiosResponse<CoinResponse> = await axios.get(
        'https://api.coinranking.com/v2/coins?orderBy=price&scopeLimit=10&orderDirection=desc',
        {
          headers: {
            'x-access-token':
              'coinranking622378398a5f083b3f7a7a4ac6f22655ade885dc7e8fce81',
          },
        },
      )
      this.coinData = res.data.data
    } catch (error) {
      console.log(error)
    }
  }
}
