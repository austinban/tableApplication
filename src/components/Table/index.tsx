import classnames from 'classnames/bind'
import Row, { ColumnProps } from './components/Row'
import HeaderComponent, { HeaderProps } from './components/Header'
import styles from './index.module.css'
const cx = classnames.bind(styles)

interface OwnProps {
  rows: Array<ColumnProps[]>
  header: HeaderProps[]
}
export default function Table({ rows, header }: OwnProps) {
  return (
    <table className={cx('wrapper')}>
      <HeaderComponent columns={header} />
      <tbody>
        {rows.map((row) => {
          return <Row columns={row} />
        })}
      </tbody>
    </table>
  )
}
