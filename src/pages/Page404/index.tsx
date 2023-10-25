import React from 'react'
import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

function App() {
  return (
    <div className={cx('wrapper')}>
      <h1>404 Page Not Found</h1>
    </div>
  )
}

export default App
