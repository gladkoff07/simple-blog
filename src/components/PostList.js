import Post from './Post'

export default function PostList({ posts }) {
  return (
    <div className='list-posts'>
      {posts.length ? (
        posts.map(post => <Post key={post.id} {...post} />)
      ) : (
        <div className='error-text'>Нет записей</div>
      )}
    </div>
  )
}
