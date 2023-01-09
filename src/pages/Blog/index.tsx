import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { BlogContext } from '../../contexts/BlogContext'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchBar } from './components/SearchBar'
import { BlogContainer, PostsContainer } from './styles'

export interface IUser {
  name?: string
  login?: string
  htmlUrl?: string
  company?: string
  followers?: number
  bio?: string
}

export function Blog() {
  const [user, setUser] = useState<IUser>({})
  const { count, posts } = useContext(BlogContext)

  useEffect(() => {
    getUserInfo()
  }, [])

  const getUserInfo = async () => {
    const { data } = await api.get('users/AFSchvarcz')
    const { name, login, html_url: htmlUrl, company, followers, bio } = data
    setUser({ name, login, htmlUrl, company, followers, bio })
  }

  return (
    <>
      <Header />
      <BlogContainer>
        <Profile user={user} />
        <SearchBar count={count} />
        <PostsContainer>
          {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
        </PostsContainer>
      </BlogContainer>
    </>
  )
}
