import styled from 'styled-components'

export const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  margin-bottom: 5rem;
`

export const PostsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`
