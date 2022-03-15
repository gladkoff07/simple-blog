import PostList from './PostList'

export default function BlockPost({ posts }) {
  return (
    <main className='main'>
      <div className='container'>
        <PostList posts={posts} />
      </div>
    </main>
  )
}
