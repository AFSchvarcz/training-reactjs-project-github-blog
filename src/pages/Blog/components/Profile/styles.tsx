import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: -5.5rem;
  padding: 2rem 2.5rem;

  border-radius: 10px;
  background-color: ${(props) => props.theme['--base-profile']};
`

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const ProfileCard = styled.div`
  flex: 1;
`

export const ProfileCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0.5rem;

  > span {
    font-size: 1.5rem;
    color: ${(props) => props.theme['--base-title']};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 0.75rem;
    color: ${(props) => props.theme['--blue']};
    border-bottom: 1px solid transparent;
    padding-bottom: 2px;

    &:hover {
      border-color: ${(props) => props.theme['--blue']};
      transition: border-color 0.5s;
    }

    span {
      line-height: 0;
    }
  }
`

export const ProfileCardBody = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme['--base-text']};
`

export const ProfileCardFooter = styled.footer`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['--base-text']};

  svg {
    color: ${(props) => props.theme['--base-label']};
  }
`
