import React, { useContext, useState } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'
import { SearchContainer, SearchHeader, SearchInput } from './styles'

interface ISearchBarProps {
  count?: number
}

export function SearchBar({ count }: ISearchBarProps) {
  const [searchText, setSearchText] = useState('')
  const { getRepoIssues } = useContext(BlogContext)
  const handleOnSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e
    setSearchText(value)
    getRepoIssues(value)
  }
  return (
    <SearchContainer>
      <SearchHeader>
        <span>Publicações</span>
        <span>{count} publicações</span>
      </SearchHeader>
      <SearchInput
        placeholder="Buscar conteúdo"
        value={searchText}
        onChange={handleOnSearchChange}
      />
    </SearchContainer>
  )
}
