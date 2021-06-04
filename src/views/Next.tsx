import { atom, useAtom } from 'jotai'

export const postId = atom(9001)

//
// function Id() {
//   const [id] = useAtom(postId)
//   const props = useSpring({ from: { id: 0 }, id, reset: true })
//   return <a.h1>{props.id.to(Math.round)}</a.h1>
// }

function Next() {
  const [, set] = useAtom(postId)
  return (
    <button onClick={() => set((x) => x + 1)}>
      <div>→</div>
    </button>
  )
}

export default Next
