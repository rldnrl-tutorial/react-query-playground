import deletePost from '@/apis/posts/deletePost'
import fetchComments, { Comment } from '@/apis/posts/fetchComments'
import { Post } from '@/apis/posts/fetchPosts'
import updatePost, { UpdatePostForm } from '@/apis/posts/updatePost'
import React from 'react'
import { useQuery, useMutation } from 'react-query'
import styles from './postDetail.module.css'

type PostDetailProps = {
  post: Post
}

const PostDetail = ({ post }: PostDetailProps) => {
  const { data, isLoading } = useQuery(['comments', post.id], () => fetchComments(post.id))

  const updateMutation = useMutation(({ postId, data }: UpdatePostForm) =>
    updatePost({ postId, data })
  )

  const deleteMutation = useMutation((postId: number) => deletePost(postId))

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <h2>{post.title}</h2>
      <div className={styles.buttonContainer}>
        <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
        <button
          onClick={() =>
            updateMutation.mutate({
              postId: post.id,
              data: { title: 'React Query!!!' },
            })
          }
        >
          Update
        </button>
        {deleteMutation.isError && (
          <p className={styles.deleteMutationError}>Delete Mutation Error</p>
        )}
        {deleteMutation.isLoading && <p className={styles.deletingMutation}>Deleting Mutation</p>}
        {deleteMutation.isSuccess && (
          <p className={styles.deleteMutationSuccess}>Delete Mutation Success</p>
        )}
        {updateMutation.isError && (
          <p className={styles.updateMutationError}>Update Mutation Error</p>
        )}
        {updateMutation.isLoading && <p className={styles.updatingMutation}>Updating Mutation</p>}
        {updateMutation.isSuccess && (
          <p className={styles.updateMutationSuccess}>Update Mutation Success</p>
        )}
      </div>
      <p>{post.body}</p>
      <h3>Comments</h3>
      <ul className="comments">
        {(data as Comment[]).map((comment) => (
          <li key={comment.id}>
            <p>
              {comment.email}: {comment.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostDetail
