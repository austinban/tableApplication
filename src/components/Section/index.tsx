import { ReactNode } from 'react'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

type OwnProps = {
  children: ReactNode
}

const Section = ({ children }: OwnProps) => {
  return <div className={cx('wrapper')}>{children}</div>
}

export default Section
