import { useEffect, useRef } from 'react'

interface OwnProps {
  callback: () => void
  delay: number
  initialTrigger?: boolean
}
const useInterval = ({ callback, delay, initialTrigger }: OwnProps) => {
  const savedCallback: any = useRef()

  // Trigger exactly once on load if initialTrigger is true
  useEffect(() => {
    if (initialTrigger) callback()
  }, [])

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function func() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(func, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
