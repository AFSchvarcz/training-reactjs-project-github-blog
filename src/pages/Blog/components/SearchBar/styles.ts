import styled from 'styled-components'

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 4.5rem;
  padding-inline: 1rem;
`

export const SearchHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span:first-child {
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme['--base-subtitle']};
  }

  span:last-child {
    font-size: 0.825rem;
  }
`

export const SearchInput = styled.input`
  border: 1px solid ${(props) => props.theme['--base-border']};
  border-radius: 6px;
  background-color: ${(props) => props.theme['--base-input']};
  padding: 12px 16px;
  color: ${(props) => props.theme['--base-label']};

  &:focus {
    border-color: ${(props) => props.theme['--blue']};
    color: ${(props) => props.theme['--base-text']};
  }

  &::placeholder {
    color: ${(props) => props.theme['--base-label']};
  }
`
