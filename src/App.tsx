import { faker } from '@faker-js/faker'
import RestartButton from './components/RestartButton'

const words = faker.word.words(10)

function App() {

  return (
    <>
      <CountdownTimer time={10} />
      <GenerateWords words={words} />
      <RestartButton onRestart={() => { }} />
    </>
  )
}

const GenerateWords = ({ words }: { words: string }) => {
  return <div className='text-4xl text-slate-500'>{words}</div>
}

const CountdownTimer = ({ time }: { time: number }) => {
  return <h2>{time}</h2>
}


export default App
