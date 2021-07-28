type PaginationDTO<T> = Readonly<{
  data: T[]
  pagination: {
    current_page: number
    limit: number
    offset: number
    total: number
    total_pages: number
  }
}>

type PaginationEntity<T> = Readonly<{
  data: T[]
  currentPage: number
  limit: number
  total: number
  totalPages: number
}>

function paginationEntity<T>(paginationData: PaginationDTO<T>): PaginationEntity<T> {
  const {
    data,
    pagination: { current_page: currentPage, limit, total, total_pages: totalPages }
  } = paginationData
  return Object.freeze({
    data,
    currentPage,
    limit,
    total,
    totalPages
  })
}

export type { PaginationDTO, PaginationEntity }
export { paginationEntity }
