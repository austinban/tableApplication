import { ReactNode } from 'react'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

type OwnProps = {
  children?: ReactNode
  fullHeight?: boolean
}

const Header = ({ children, fullHeight }: OwnProps) => {
  return <div className={cx('wrapper', { fullHeight })}>{children}</div>
}

export default Header
