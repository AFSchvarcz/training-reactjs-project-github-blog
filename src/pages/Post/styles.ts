import styled from 'styled-components'

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  margin-bottom: 5rem;
`
export const PostContent = styled.section`
  width: 100%;
  padding: 2.5rem 2rem;

  p {
    margin-bottom: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    color: ${(props) => props.theme['--blue']};
  }

  pre {
    width: 100%;
    border-radius: 2px;
    padding: 1rem;
    background-color: ${(props) => props.theme['--base-post']};
  }
`
