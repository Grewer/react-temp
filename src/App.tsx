import './App.css'
import useModel from 'flooks'

const counter = (now) => ({
  count: 0,
  test: 1,
  add() {
    const { count } = now() // <----- now()        :: 获取自身 model
    now({ count: count + 1 }) // <--- now(payload) :: 更新自身 model
  },
  async addLater() {
    const { add, test } = now() // <-- now(model) :: 获取其它 model
    now({ test: test + 1 })
    await new Promise((resolve, reject) => setTimeout(resolve, 1000))
    add()
  },
})

function App() {
  const { count, add, addLater } = useModel(counter) // <-- ['count'] :: 按需触发 Re-render

  console.log(addLater.loading, addLater.error)

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={addLater}>+ ⌛{addLater.loading && '...'}</button>
    </div>
  )
}

export default App
