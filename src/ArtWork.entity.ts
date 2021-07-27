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
  thumbnail: ThumbnailDTO
  date_start: number
  date_end: number
  term_titles: string[] | null
}

function ArtWorkEntity({
  id,
  title,
  date_start: dateStart,
  date_end: dateEnd,
  term_titles,
  thumbnail: {lqip: img, alt_text: alt, ...thumbnail}
}: ArtWorkDTO) {
    return Object.freeze({
        id,
        title,
        dateStart,
        dateEnd,
        tags: term_titles || [],
        thumbnail: {
            img,
            alt,
            ...thumbnail
        }
  })
}

export type { ArtWorkDTO }
export { ArtWorkEntity }