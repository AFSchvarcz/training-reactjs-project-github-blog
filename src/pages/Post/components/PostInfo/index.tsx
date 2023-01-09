import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { IPost } from '../../../../contexts/BlogContext'
import {
  InfoItem,
  PostInfoContainer,
  ProfileCardBody,
  ProfileCardFooter,
  ProfileCardHeader,
} from './styles'

interface IPostInfoProps {
  post?: IPost
}

export function PostInfo({ post }: IPostInfoProps) {
  return (
    <PostInfoContainer>
      <ProfileCardHeader>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </NavLink>
        <a href={post?.url} target="_blank" rel="noreferrer">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </ProfileCardHeader>
      <ProfileCardBody>{post?.title}</ProfileCardBody>
      <ProfileCardFooter>
        <InfoItem>
          <FontAwesomeIcon icon={faGithub} />
          <span>{post?.user}</span>
        </InfoItem>
        <InfoItem>
          <FontAwesomeIcon icon={faCalendar} />
          <span>{post?.distanceToNow}</span>
        </InfoItem>
        <InfoItem>
          <FontAwesomeIcon icon={faComment} />
          <span>
            {post?.comments} comentário{post?.comments === 1 ? '' : 's'}
          </span>
        </InfoItem>
      </ProfileCardFooter>
    </PostInfoContainer>
  )
}
