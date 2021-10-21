import { useState } from 'react'
import CurrentTime from './CurrentTime'
import TimeOptions from './TimeOptions'
import Meter from './Meter'

function App() {
  const [selectedTime, setSelectedTime] = useState(10)
  const [isStarted, setIsStarted] = useState(false)

  return (
    <div className="App">
      <CurrentTime />
      {isStarted ? (
        <Meter selectedTime={selectedTime} setIsStarted={setIsStarted} />
      ) : (
        <TimeOptions
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          setIsStarted={setIsStarted}
        />
      )}
    </div>
  )
}

export default App
