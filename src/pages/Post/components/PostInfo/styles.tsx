import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -5.5rem;
  padding: 2rem 2.5rem;

  border-radius: 10px;
  background-color: ${(props) => props.theme['--base-profile']};
`

export const ProfileCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0.5rem;

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

export const ProfileCardBody = styled.h1`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  line-height: 130%;
  color: ${(props) => props.theme['--base-title']};
`

export const ProfileCardFooter = styled.footer`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
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
