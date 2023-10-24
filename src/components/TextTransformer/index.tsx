import { CSSProperties, useEffect, useState } from 'react'
import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

type OwnProps = {
  initialText: string
  secondaryText: string
  focused?: boolean
  timeTrigger?: number
  centered?: boolean
  textStyles?: {
    initialTextStyles: CSSProperties
    secondaryTextStyles: CSSProperties
  }
}

const TextTransformer = ({
  initialText,
  secondaryText,
  textStyles,
  focused: focusedProp,
  timeTrigger,
  centered,
}: OwnProps) => {
  const [focused, setFocused] = useState(focusedProp || false)

  useEffect(() => {
    if (timeTrigger) {
      const timer = setTimeout(() => {
        setFocused(true)
      }, timeTrigger)
      return () => clearTimeout(timer)
    }
  }, [timeTrigger])

  return (
    <div className={cx('wrapper', { focused, centered })}>
      <div style={textStyles?.initialTextStyles} className={cx('textWrapper')}>
        {initialText.split('').map((letter, index) => {
          return (
            <div
              key={`letter-${letter}-${index}`}
              className={cx('textItem', 'initialText')}
              style={{ transitionDelay: `${index * 0.03}s` }}
            >
              {letter}
            </div>
          )
        })}
      </div>
      <div
        style={textStyles?.secondaryTextStyles}
        className={cx('textWrapper', 'absolute')}
      >
        {secondaryText.split('').map((letter, index) => {
          return (
            <div
              key={`letter-${letter}-${index}`}
              className={cx('textItem', 'secondaryText')}
              style={{ transitionDelay: `${index * 0.03}s` }}
            >
              {letter}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TextTransformer
