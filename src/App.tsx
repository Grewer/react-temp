import './App.css'
import { createMachine, interpret } from 'xstate'
import List from '@/views/List'

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: { on: { TOGGLE: 'active' } },
    active: { on: { TOGGLE: 'inactive' } }
  }
})

const toggleService = interpret(toggleMachine)
  .onTransition((state) => console.log(state.value))
  .start()

function App() {
  return (
    <div className="App">
      <button onClick={() => {
        toggleService.send('TOGGLE')
      }}> send
      </button>
      <br/>
      List:
      <List/>
    </div>
  )
}

export default App
