import React from 'react'
import Header from 'components/Header'
import TextTransformer from 'components/TextTransformer'
import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

function App() {
  return (
    <Header fullHeight>
      <div className={cx('wrapper')}>
        <TextTransformer
          initialText="Hey there"
          secondaryText="Let's learn how to make a great portfolio site"
          centered
        />
      </div>
    </Header>
  )
}

export default App
