import { ArtWorkDTO } from './ArtWork.entity'
import { PaginationDTO } from './Pagination.entity'

// Type definitions for fetch API
// Spec: https://fetch.spec.whatwg.org/
// Polyfill: https://github.com/github/fetch
// Definitions by: Ryan Graham <https://github.com/ryan-codingintrigue>
interface FetchOptions {
  method?: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT' | 'HEAD' | 'OPTIONS' | 'CONNECT'
  headers?: any
  body?: any
  mode?: 'cors' | 'no-cors' | 'same-origin'
  credentials?: 'omit' | 'same-origin' | 'include'
}

interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => void
}

function api<T>(url: string, options?: FetchOptions): PromiseWithCancel<T> {
  const { signal, abort } = new AbortController()

  const promise = fetch(url, { ...options, signal }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })

  ;(promise as PromiseWithCancel<T>).cancel = () => abort()
  return promise as PromiseWithCancel<T>
}

function getArtWorks({ page = 0 }: { page?: number }) {
  return api<PaginationDTO<ArtWorkDTO>>(
    `https://api.artic.edu/api/v1/artworks?page=${page}&limit=10`,
    { method: 'GET' }
  )
}

export { getArtWorks }
