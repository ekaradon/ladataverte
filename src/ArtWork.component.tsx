import { ArrowLeftIcon, Button, Pane } from 'evergreen-ui'
import { Fragment } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import { artWorkEntity } from './ArtWork.entity'
import { Header } from './Header.component'
import sample from './sample.json'

const { data } = sample

function ArtWork() {
  const { artWorkId } = useParams<{ artWorkId: string }>()
  const artWork = data.map(artWorkEntity).find(({ id }) => id === +artWorkId)

  if (!artWork) {
    return <Redirect to='/' />
  }

  return (
    <Fragment>
      <Header title={artWork.title}>
        <Link to='/'>
          <Button>
            <ArrowLeftIcon marginRight='5px' />
            Back
          </Button>
        </Link>
      </Header>
      <Pane display='flex' padding={16}>
        <Pane flex={1}>
          <img src={artWork.thumbnail.img} alt={artWork.thumbnail.alt} />
        </Pane>
      </Pane>
    </Fragment>
  )
}

export { ArtWork }
