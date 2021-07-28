import { atom } from 'jotai'

type ThumbnailDTO = {
  lqip: string
  width: number
  height: number
  alt_text: string
}

type ArtWorkDTO = {
  id: number
  api_model: string
  api_link: string
  is_boosted: boolean
  title: string
  alt_titles: null | string[]
  thumbnail: ThumbnailDTO | null
  date_start: number
  date_end: number
  term_titles: string[] | null
  image_id: string
}

function artWorkEntity({
  id,
  title,
  date_start: dateStart,
  date_end: dateEnd,
  term_titles,
  image_id,
  thumbnail
}: ArtWorkDTO) {
  const {
    width,
    height,
    alt_text: alt
  } = thumbnail || {
    width: NaN,
    height: NaN,
    alt_text: 'No description available'
  }

  return Object.freeze({
    id,
    title,
    dateStart,
    dateEnd,
    tags: term_titles || [],
    img: {
      src: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
      width,
      height,
      alt
    }
  })
}

type ArtWorkEntity = ReturnType<typeof artWorkEntity>

const artWorkDTOList = atom<ArtWorkDTO[]>([])
const artWorkEntityList = atom<ArtWorkEntity[], ArtWorkDTO[]>(
  (get) => get(artWorkDTOList).map(artWorkEntity),
  (_, set, list: ArtWorkDTO[]) => {
    set(artWorkDTOList, list)
  }
)

export type { ArtWorkDTO, ArtWorkEntity }
export { artWorkEntity, artWorkEntityList }
