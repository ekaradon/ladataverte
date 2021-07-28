import { useUpdateAtom } from 'jotai/utils'
import { useQuery } from 'react-query'
import { ArtWorkDTO, artWorkEntityList } from './ArtWork.entity'
import { getArtWorks } from './ArtWork.services'
import { PaginationDTO } from './Pagination.entity'

function useQueryArtWorks({ page }: { page?: number } = {}) {
  const setArtworkList = useUpdateAtom(artWorkEntityList)
  return useQuery<PaginationDTO<ArtWorkDTO>>(
    ['useQueryArtWorks', page],
    () => getArtWorks({ page }),
    { onSuccess: ({ data }) => setArtworkList(data) }
  )
}

export { useQueryArtWorks }
