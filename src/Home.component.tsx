import { Button } from 'evergreen-ui'
import { Fragment } from 'react'

import { ArtTable } from './ArtTable.component'
import { Header } from './Header.component'

function Home() {
  return (
    <Fragment>
      <Header title='Art Institute of Chicago'>
        <Button>Reset</Button>
      </Header>
      <ArtTable />
    </Fragment>
  )
}

export { Home }
