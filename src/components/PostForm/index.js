import React, {useState} from 'react'
import './index.css'

const PostForm = ({onPost}) => {
  const [postText, setPostText] = useState('')

  const handlePost = () => {
    onPost(postText)
  }

  return (
    <div className='conatiner'>
      <h2 className='heading'>Create a Post</h2>
      <label>Post Text:</label>
      <input
        type='text'
        value={postText}
        onChange={e => setPostText(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  )
}

export default PostForm
