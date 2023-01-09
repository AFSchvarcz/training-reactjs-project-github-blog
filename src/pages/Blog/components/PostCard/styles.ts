import styled from 'styled-components'

export const PostCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid transparent;
  background-color: ${(props) => props.theme['--base-post']};
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme['--base-label']};
    transition: border-color 0.2s;
  }

  > a {
    text-decoration: none;
  }
`

export const PostCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h1 {
    font-size: 1.25rem;
    color: #e7edf4;
  }

  span {
    flex-shrink: 0;
    font-size: 0.875rem;
    color: ${(props) => props.theme['--base-span']};
  }
`

export const PostCardContent = styled.section`
  margin-top: 1rem;
  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: ${(props) => props.theme['--base-text']};
  }
`
