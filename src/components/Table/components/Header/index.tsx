import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

export interface HeaderProps {
  content: string
  alignment?: 'left' | 'center' | 'right'
}

export interface OwnProps {
  columns: HeaderProps[]
}

export default function Header({ columns }: OwnProps) {
  return (
    <thead>
      <tr className={cx('wrapper')}>
        {columns.map((c) => (
          <th key={c.content}>
            <div className={cx('column', c.alignment)}>{c.content}</div>
          </th>
        )) || null}
      </tr>
    </thead>
  )
}
