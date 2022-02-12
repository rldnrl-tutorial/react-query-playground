import fetchComments from '@/apis/fetchComments'
import { Post } from '@/apis/fetchPosts'
import React from 'react'
import { useQuery } from 'react-query'

type PostDetailProps = {
  post: Post
}

const PostDetail = ({ post }: PostDetailProps) => {
  const { data, isLoading }  = useQuery(
    ['comments', post.id],
    () => fetchComments(post.id)
  )

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments</h3>
      <ul className='comments'>
        {data?.map((comment) => (
          <li key={comment.id}>
            <p>{comment.email}: {comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostDetail