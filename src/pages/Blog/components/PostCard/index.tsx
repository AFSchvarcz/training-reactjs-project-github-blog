import { NavLink } from 'react-router-dom'
import { IPost } from '../../../../contexts/BlogContext'
import { PostCardContainer, PostCardContent, PostCardHeader } from './styles'

interface IPostCardProps {
  post: IPost
}

export function PostCard({ post }: IPostCardProps) {
  return (
    <PostCardContainer>
      <NavLink to={`post/${post.id}`}>
        <PostCardHeader>
          <h1>{post.title}</h1>
          <span>{post.distanceToNow}</span>
        </PostCardHeader>
        <PostCardContent>
          <p>{post.body}</p>
        </PostCardContent>
      </NavLink>
    </PostCardContainer>
  )
}
