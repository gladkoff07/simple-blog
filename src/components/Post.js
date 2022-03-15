import { memo } from 'react'

const Post = ({ title, body, name, email }) => {
  return (
    <div className='list-posts__item'>
      <div className='list-posts__item-title'>
        {title} {name}
      </div>
      <div className='list-posts__item-content'>
        {body} {email}
      </div>
    </div>
  )
}

export default memo(Post)
