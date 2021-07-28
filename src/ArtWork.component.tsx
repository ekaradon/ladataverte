import { ArrowLeftIcon, Button, Pane } from 'evergreen-ui'
import { useAtomValue } from 'jotai/utils'
import { Fragment } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { artWorkEntityList } from './ArtWork.entity'
import { Header } from './Header.component'

function ArtWork() {
  const history = useHistory()
  const { artWorkId } = useParams<{ artWorkId: string }>()
  const artWorkList = useAtomValue(artWorkEntityList)
  const artWork = artWorkList.find(({ id }) => id === +artWorkId)

  if (!artWork) {
    return <Redirect to='/' />
  }

  return (
    <Fragment>
      <Header title={artWork.title}>
        <Button onClick={history.goBack}>
          <ArrowLeftIcon marginRight='5px' />
          Back
        </Button>
      </Header>
      <Pane display='flex' padding={16}>
        <Pane flex={1}>
          <img src={artWork.img.src} alt={artWork.img.alt} />
        </Pane>
      </Pane>
    </Fragment>
  )
}

export { ArtWork }
