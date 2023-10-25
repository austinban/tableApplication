import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

export interface ColumnProps {
  id: string
  content: string | React.ReactNode
  alignment?: 'left' | 'center' | 'right'
}

export interface OwnProps {
  columns: ColumnProps[]
}
export default function Row({ columns }: OwnProps) {
  return (
    <tr className={cx('row')}>
      {columns.map((column) => {
        const { content, alignment, id } = column
        return (
          <td key={id}>
            <div className={cx('column', alignment)}>{content}</div>
          </td>
        )
      })}
    </tr>
  )
}
