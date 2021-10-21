import { useState, useEffect } from 'react'
import './meter.scss'
import moment from 'moment'
import Button from './Button'
import useSound from 'use-sound'
import alert from '../sound/alert-evangelion.mp3'

function Meter({ selectedTime, setIsStarted }) {
  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'))
  const [time, setTime] = useState({ min: selectedTime, sec: 0 })
  const [restartButton, setRestartButton] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const [newAlert, { stop }] = useSound(alert)

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
      newAlert()
      setRestartButton(true)
    }
  }, [time])

  const handlePauseButton = () => {
    setIsPaused(!isPaused)
  }

  const handleGoBack = () => {
    setIsStarted(false)
    stop()
  }

  return (
    <div className="meter">
      <h3>Time</h3>
      <div>
        <div className="clock-container">
          <h4>
            {time.min <= 9 ? '0' + String(time.min) : time.min} :{' '}
            {time.sec <= 9 ? '0' + String(time.sec) : time.sec}
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
