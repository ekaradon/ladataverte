import { Button } from 'evergreen-ui'
import { Fragment } from 'react'

import { ArtTable } from './ArtTable.component'
import { Header } from './Header.component'

function Home() {
  function onReset() {
    window.location.reload(true)
  }

  return (
    <Fragment>
      <Header title='Art Institute of Chicago'>
        <Button onClick={onReset}>Reset cache</Button>
      </Header>
      <ArtTable />
    </Fragment>
  )
}

export { Home }
