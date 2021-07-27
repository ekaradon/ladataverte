import { Fragment } from 'react'
import { Header } from './Header.component'
import { ArtTable } from './ArtTable.component'
import { ArtPagination } from './Pagination.component'

function App() {
  return (
    <Fragment>
      <Header />
      <ArtTable />
      <ArtPagination />
    </Fragment>
  )
}

export { App }
