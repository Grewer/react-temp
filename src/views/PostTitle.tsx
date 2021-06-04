import { atom, useAtom } from 'jotai'
import { postId } from '@/views/Next'


const postData = atom(async (get) => {
  const id = get(postId)
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  return await response.json()
})

function PostTitle() {
  const [{ by, title, url, text, time }] = useAtom(postData)
  return (
    <>
      <h2>{by}</h2>
      <h6>{new Date(time * 1000).toLocaleDateString('en-US')}</h6>
      {title && <h4>{title}</h4>}
      <a href={url}>{url}</a>
      <p>{text}</p>
    </>
  )
}

export default PostTitle
