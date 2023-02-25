import { ColorFormat, CountdownCircleTimer } from 'react-countdown-circle-timer'

type CounterType = {
  isStarted: boolean, 
  minutes: number, 
  onFinished: Function, 
  width: number, 
  mainColor: ColorFormat, 
  traceColor: ColorFormat}

const Counter = ({
  isStarted, 
  minutes, 
  onFinished, 
  width, 
  mainColor, 
  traceColor}: CounterType) => {
  return (
    <CountdownCircleTimer
      isPlaying={isStarted} // true or false
      updateInterval={1} // seconds
      duration={minutes*60} // seconds
      size={width} // px
      colors={mainColor}
      trailColor={traceColor}
      onComplete={onFinished()} >

      {({ remainingTime }) => {
          let minutes = Math.floor(remainingTime / 60)
          let seconds = remainingTime % 60

          return `${minutes < 10 ? 
            '0' + minutes : minutes} : 
            ${seconds < 10 ? '0' + seconds : seconds}`
      }}
    </CountdownCircleTimer>
  )
}

export default Counter
