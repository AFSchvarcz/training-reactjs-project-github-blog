import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export interface IPost {
  id: number
  number: number
  title: string
  body: string
  url: string
  user: string
  comments: number
  distanceToNow: string
}

export interface IRepoData {
  count?: number
  posts?: IPost[]
  getRepoIssues: (text: string) => void
}

export const BlogContext = createContext({} as IRepoData)

interface BlogContextProviderProps {
  children: ReactNode
}

export const USERNAME = 'rocketseat-education'
export const REPO = 'reactjs-github-blog-challenge'

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [blogState, setBlogState] = useState<Partial<IRepoData>>()

  useEffect(() => {
    getRepoIssues()
  }, [])

  const getRepoIssues = async (text?: string) => {
    const q = text
      ? `${encodeURI(text)}repo:${USERNAME}/${REPO}`
      : `repo:${USERNAME}/${REPO}`
    console.log(q)
    const { data } = await api.get('search/issues', {
      params: {
        q,
      },
    })
    const { total_count: count, items } = data
    const posts = items.map((item: any) => ({
      id: item.id,
      number: item.number,
      title: item.title,
      body: item.body,
      url: item.html_url,
      user: item.user.login,
      comments: item.comments,
      distanceToNow: `Há ${formatDistanceToNow(new Date(item.created_at), {
        locale: ptBR,
      })}`,
    }))
    setBlogState({ count, posts })
  }

  return (
    <BlogContext.Provider
      value={{
        ...blogState,
        getRepoIssues,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
