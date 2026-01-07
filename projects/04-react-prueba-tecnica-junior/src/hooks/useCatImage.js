import { useEffect, useState } from 'react'
import { getImageUrl } from '../services/image.js'

// Custom Hook
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firsThreeWords = fact.split(' ', 3)

    getImageUrl(firsThreeWords).then(newImageUrl => setImageUrl(newImageUrl))
  }, [fact])

  return { imageUrl }
} // { imageUrl: 'https://image.com' }
