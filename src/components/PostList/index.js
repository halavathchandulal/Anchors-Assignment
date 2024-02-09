import React from 'react'
import './index.css'

const PostList = ({posts}) => {
  return (
    <div className='container'>
      <h2 className='heading'>Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.text}</p>
          <button>Comment</button>
        </div>
      ))}
    </div>
  )
}

export default PostList
