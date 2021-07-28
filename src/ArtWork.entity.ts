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
  image_id: string
}

function artWorkEntity({
  id,
  title,
  date_start: dateStart,
  date_end: dateEnd,
  term_titles,
  image_id,
  thumbnail: {alt_text: alt, ...thumbnail}
}: ArtWorkDTO) {
    return Object.freeze({
        id,
        title,
        dateStart,
        dateEnd,
        tags: term_titles || [],
        thumbnail: {
            img: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
            alt,
            ...thumbnail
        }
  })
}

type ArtWorkEntity = ReturnType<typeof artWorkEntity>

export type { ArtWorkDTO, ArtWorkEntity }
export { artWorkEntity }