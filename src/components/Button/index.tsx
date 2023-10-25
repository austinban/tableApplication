import { ReactNode } from 'react'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

type OwnProps = {
  children?: ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: OwnProps) => {
  return (
    <button onClick={onClick} className={cx('wrapper')}>
      {children}
    </button>
  )
}

export default Button
