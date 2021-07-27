import { Pagination, Pane } from 'evergreen-ui'

function ArtPagination() {
  return (
    <Pane margin='auto' maxWidth='300px'>
      <Pagination page={1} totalPages={250} />
    </Pane>
  )
}

export { ArtPagination }
