import { useState } from 'react'
import './timeOptions.scss'
import Button from './Button'

function TimeOptions({ selectedTime, setSelectedTime, setIsStarted }) {
  const [options, setOptions] = useState([
    {
      min: 10,
      name: '10 Min',
      selected: true,
    },
    {
      min: 20,
      name: '20 Min',
      selected: false,
    },
    {
      min: 30,
      name: '30 Min',
      selected: false,
    },
    {
      min: 40,
      name: '40 Min',
      selected: false,
    },
  ])

  const findSelectedOne = (min) => {
    let newOptions = options.map((obj) => {
      return { ...obj, selected: false }
    })

    const targetObj = newOptions.find((obj) => {
      return obj.min === min
    })

    targetObj.selected = true

    newOptions = newOptions.map((obj) => {
      return obj.min === targetObj.min ? targetObj : obj
    })

    setOptions(newOptions)
  }

  const handleSelectedTime = (min) => {
    setSelectedTime(min)

    findSelectedOne(min)
  }

  const handleStartButton = () => {
    setIsStarted(true)
  }

  return (
    <div className="timeOptions">
      <h3>Select Time</h3>
      <div className="time-options-container">
        {options.map((time) => {
          return (
            <div
              className={`${
                time.selected === true ? 'active' : ''
              } time-options-cell`}
            >
              <button onClick={() => handleSelectedTime(time.min)}>
                {time.name}
              </button>
            </div>
          )
        })}
      </div>
      <div className="start-button-container">
        <Button
          name="primary"
          selectedTime={selectedTime}
          onClick={handleStartButton}
        >
          Start
        </Button>
      </div>
    </div>
  )
}

export default TimeOptions
