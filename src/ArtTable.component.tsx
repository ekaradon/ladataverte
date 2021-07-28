import styled from '@emotion/styled'
import { Table } from 'evergreen-ui'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { artWorkEntity } from './ArtWork.entity'
import sample from './sample.json'

const RowLink = styled(Link)({
  textDecoration: 'none'
})

const { data } = sample

function ArtTable() {
  const [filter, setFilter] = useState('')

  return (
    <Table>
      <Table.Head>
        <Table.SearchHeaderCell onChange={setFilter} value={filter} flex={5} />
        <Table.TextHeaderCell flex={1}>Date</Table.TextHeaderCell>
        <Table.TextHeaderCell flex={3}>tags</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body maxHeight='50%'>
        {data
          .map(artWorkEntity)
          .filter((artWork) => !filter || artWork.title.includes(filter))
          .map((artWork) => (
            <RowLink key={artWork.id} to={`/artwork/${artWork.id}`}>
              <Table.Row isSelectable>
                <Table.TextCell flex={5}>{artWork.title}</Table.TextCell>
                <Table.TextCell flex={1} isNumber>
                  {artWork.dateStart}
                </Table.TextCell>
                <Table.TextCell flex={3} textProps={{ color: 'muted' }}>
                  {artWork.tags.join(', ')}
                </Table.TextCell>
              </Table.Row>
            </RowLink>
          ))}
      </Table.Body>
    </Table>
  )
}

export { ArtTable }
