import styled from '@emotion/styled'
import { Pagination, Pane, Table } from 'evergreen-ui'
import { useAtomValue } from 'jotai/utils'
import { Fragment, useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

import { artWorkEntityList } from './ArtWork.entity'
import { useQueryArtWorks } from './ArtWork.queries'
import { paginationEntity } from './Pagination.entity'

const RowLink = styled(Link)({
  textDecoration: 'none'
})

function ArtTable() {
  const history = useHistory()
  const { search, pathname } = useLocation()
  const queryPage = new URLSearchParams(search).get('page')
  const [page, setPage] = useState<number>(Number(queryPage) || 1)
  const artWorkList = useAtomValue(artWorkEntityList)
  const { data } = useQueryArtWorks({ page })
  const [filter, setFilter] = useState('')

  useEffect(() => {
    if (!queryPage || +queryPage !== page) {
      history.push(`${pathname}?page=${page}`)
    }
  }, [page, queryPage, pathname, history])

  if (!data) {
    return null
  }

  const pagination = paginationEntity(data)
  const filteredArtWorkList = artWorkList.filter(
    (artWork) => !filter || artWork.title.includes(filter)
  )

  return (
    <Fragment>
      <Table>
        <Table.Head>
          <Table.SearchHeaderCell onChange={setFilter} value={filter} flex={5} />
          <Table.TextHeaderCell flex={1}>Date</Table.TextHeaderCell>
          <Table.TextHeaderCell flex={3}>tags</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body maxHeight='50%'>
          {filteredArtWorkList.length ? (
            filteredArtWorkList.map((artWork) => (
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
            ))
          ) : (
            <Table.Row>
              <Table.TextCell>
                Nothing to display here. Empty your filter or change of page?
              </Table.TextCell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      <Pane margin='auto' maxWidth='300px'>
        <Pagination
          page={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={setPage}
        />
      </Pane>
    </Fragment>
  )
}

export { ArtTable }
