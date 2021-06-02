import React, { useEffect } from 'react'
import { assign, createMachine, interpret } from 'xstate'
import { useMachine } from '@xstate/react'

const fetchMachine = createMachine({
  id: 'Dog API',
  initial: 'idle',
  context: {
    dog: null
  },
  states: {
    idle: {
      on: {
        FETCH: 'loading'
      }
    },
    loading: {
      invoke: {
        id: 'fetchDog',
        src: (context, event) =>
          fetch('https://dog.ceo/api/breeds/image/random').then((data) =>
            data.json()
          ),
        onDone: {
          target: 'resolved',
          actions: assign({
            dog: (_, event) => event.data
          })
        },
        onError: 'rejected'
      },
      on: {
        CANCEL: 'idle'
      }
    },
    resolved: {
      type: 'final'
    },
    rejected: {
      on: {
        FETCH: 'loading'
      }
    }
  }
})

const List = () => {

  const [current, send] = useMachine(fetchMachine)

  console.log(current)

  return (<div>
    <button onClick={() => {
      send('FETCH')
    }}>
      list send
    </button>
    <div>
      {
        JSON.stringify(current.context?.dog)
      }
    </div>
  </div>)
}


export default List
