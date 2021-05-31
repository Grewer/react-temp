import { atom, useRecoilState } from 'recoil'

const counter = atom({
  key: 'myCounter',
  default: 12345,
})

function Counter() {
  const [count, setCount] = useRecoilState(counter)
  console.log('run counter')
  return (
    <div>
      Count: {count}
      <br/>
      <button onClick={() => setCount(val => val + 1)}>Increment</button>
    </div>
  )
}

export default Counter
