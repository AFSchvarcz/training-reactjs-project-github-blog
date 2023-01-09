import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IUser } from '../..'
import {
  Avatar,
  InfoItem,
  ProfileCard,
  ProfileCardBody,
  ProfileCardFooter,
  ProfileCardHeader,
  ProfileContainer,
} from './styles'

interface IProfileProps {
  user: IUser
}

export function Profile({ user }: IProfileProps) {
  return (
    <ProfileContainer>
      <Avatar src="https://github.com/AFSchvarcz.png" alt="" />
      <ProfileCard>
        <ProfileCardHeader>
          <span>{user.name}</span>
          <a href={user.htmlUrl} target="_blank" rel="noreferrer">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileCardHeader>
        <ProfileCardBody>{user.bio || 'Sem biografia'}</ProfileCardBody>
        <ProfileCardFooter>
          <InfoItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{user.company || 'Não identificado'}</span>
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>
              {user.followers} Seguidor{user.followers === 1 ? '' : 'es'}
            </span>
          </InfoItem>
        </ProfileCardFooter>
      </ProfileCard>
    </ProfileContainer>
  )
}
