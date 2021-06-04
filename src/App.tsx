import './App.css'

import { atom, Provider, useAtom } from 'jotai'
import Next from '@/views/Next'
import PostTitle from '@/views/PostTitle'
import React, { Suspense } from 'react'


const countAtom = atom(0)


const doubledCountAtom = atom((get) => get(countAtom) * 2)

function App() {

  const [count, setCount] = useAtom(countAtom)

  const [doubledCount] = useAtom(doubledCountAtom)

  console.log('render App')

  return (
    <div className="App">
      <Provider>
        {count}

        <button onClick={() => {
          setCount(val => val + 1)
        }}>add
        </button>

        <div>{doubledCount}</div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <PostTitle />
        </Suspense>
        <Next/>
      </Provider>
    </div>
  )
}

export default App
