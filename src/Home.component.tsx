import { Button, SearchInput } from 'evergreen-ui'
import { Fragment } from 'react'

import { ArtTable } from './ArtTable.component'
import { Header } from './Header.component'
import { ArtPagination } from './Pagination.component'

function Home() {
  return (
    <Fragment>
      <Header title='Art Institute of Chicago'>
        <SearchInput marginRight='16px' placeholder='search...' />
        <Button>Reset</Button>
      </Header>
      <ArtTable />
      <ArtPagination />
    </Fragment>
  )
}

export { Home }
