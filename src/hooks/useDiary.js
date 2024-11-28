import { useEffect, useState } from 'react'
import initDatabase, { getDiaryArticles } from '../store/database'

export const useDiary = (date) => {
  const [diaryEntry, setDiaryEntry] = useState(null)

  useEffect(() => {
    const fetchDiary = async () => {
      const db = await initDatabase()
      const tx = db.transaction('diaries', 'readonly')
      const store = tx.objectStore('diaries')
      const entry = await store.get(date)
      setDiaryEntry(entry || null)
    }

    date && fetchDiary()
  }, [date])

  return diaryEntry
}

export const useDiaries = (month) => {
  const [diaries, setDiaries] = useState([])

  useEffect(() => {
    const fetchDiaries = async () => {
      const articles = await getDiaryArticles(month)

      setDiaries(articles)
    }

    month && fetchDiaries()
  }, [month])

  return diaries
}

export default useDiary
