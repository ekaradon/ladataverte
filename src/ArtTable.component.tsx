import { Table } from 'evergreen-ui'
import { ArtWorkEntity } from './ArtWork.entity'
import sample from './sample.json'

const { data } = sample

function ArtTable() {
  return (
    <Table>
      <Table.Head>
        <Table.SearchHeaderCell flex={5} />
        <Table.TextHeaderCell flex={1}>Date</Table.TextHeaderCell>
        <Table.TextHeaderCell flex={3}>tags</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body maxHeight='50%'>
        {data.map(ArtWorkEntity).map((artWork) => (
          <Table.Row key={artWork.id} isSelectable>
            <Table.TextCell flex={5}>{artWork.title}</Table.TextCell>
            <Table.TextCell flex={1} isNumber>
              {artWork.dateStart}
            </Table.TextCell>
            <Table.TextCell flex={3} textProps={{ color: 'muted' }}>
              {artWork.tags.join(', ')}
            </Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export { ArtTable }
