import { useState, useEffect } from 'react'
import './meter.scss'
import moment from 'moment'
import Button from './Button'

function Meter({ selectedTime, setIsStarted }) {
  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'))
  const [time, setTime] = useState({ min: selectedTime, sec: 0 })
  const [restartButton, setRestartButton] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(moment().format('HH:mm:ss'))
    }, 1000)
  }, [])

  const calculate = () => {
    const newTime =
      time.sec === 0
        ? { min: time.min - 1, sec: 59 }
        : { min: time.min, sec: time.sec - 1 }

    console.log(newTime)
    setTime(newTime)
  }

  useEffect(() => {
    if (time.min === 0 && time.sec === 0) {
      return
    } else if (!isPaused) {
      calculate()
    }
  }, [currentTime])

  useEffect(() => {
    if (time.min === 0 && time.sec === 0) {
      alert('done')
      setRestartButton(true)
    }
  }, [time])

  const handlePauseButton = () => {
    setIsPaused(!isPaused)
  }

  const handleGoBack = () => {
    setIsStarted(false)
  }

  return (
    <div className="meter">
      <h3>Time</h3>
      <div>
        <div className="clock-container">
          <h4>
            {time.min} : {time.sec}
          </h4>
        </div>
        <div className="buttons-container">
          {restartButton ? (
            <Button name="primary" onClick={handleGoBack}>
              Go Back
            </Button>
          ) : (
            <Button name="primary" onClick={handlePauseButton}>
              {isPaused ? 'Continue' : 'Pause'}
            </Button>
          )}
          {isPaused ? (
            <Button name="secondary" onClick={handleGoBack}>
              Go Back
            </Button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default Meter