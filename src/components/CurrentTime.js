import moment from 'moment'
import { useState, useEffect } from 'react'
import './currentTime.scss'

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'))

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(moment().format('HH:mm:ss'))
    }, 1000)
  }, [])

  return (
    <div className="currentTime">
      <div className="todays-date">
        <h2>{moment().format('DD/MM/YYYY')}</h2>
      </div>
      <div className="current-time-dashboard">
        <h1>{currentTime}</h1>
      </div>
    </div>
  )
}

export default CurrentTime
