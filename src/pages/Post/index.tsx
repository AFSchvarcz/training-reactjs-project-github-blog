/* eslint-disable react/no-children-prop */
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { BlogContext } from '../../contexts/BlogContext'
import { PostInfo } from './components/PostInfo'
import { PostContainer, PostContent } from './styles'

// https://api.github.com/repos/AFSchvarcz/training-reactjs-project-github-blog/issues/1

export function Post() {
  const { posts } = useContext(BlogContext)
  const { id } = useParams()
  return (
    <>
      <Header />
      {posts && (
        <PostContainer>
          <PostInfo post={posts.find((post) => post.id === Number(id))} />
          <PostContent>
            <ReactMarkdown
              children={
                posts.find((post) => post.id === Number(id))?.body || ''
              }
            />
          </PostContent>
        </PostContainer>
      )}
    </>
  )
}
