import { lazy } from 'react'

export const ArticleDetailsPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => { resolve(import('./ArticleDetailsPage')) }, 1500)
}))
