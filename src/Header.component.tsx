import { Button, Pane, Heading, SearchInput } from 'evergreen-ui'

function Header() {
  return (
    <Pane display='flex' padding={16} borderRadius={3}>
      <Pane flex={1}>
        <Heading size={600}>Art Institute of Chicago</Heading>
      </Pane>
      <Pane>
        <SearchInput marginRight='16px' placeholder='search...' />
        <Button>Réinitialiser</Button>
      </Pane>
    </Pane>
  )
}

export { Header }
