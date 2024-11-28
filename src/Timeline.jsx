import './Timeline.css'
import DiaryPreview from './components/DiaryPreview'
import { useDiaries } from './hooks/useDiary'

const Timeline = ({ year, month }) => {
  const diaryArticles = useDiaries(`${year}-${String(month).padStart(2, '0')}`)

  return (
    <div style={{
      paddingLeft: 40,
      paddingRight: 40,
    }}>
      <div className="timeline">
        { diaryArticles.map((diary, index) => <DiaryPreview key={index} date={diary.date} content={diary.article} />)}
      </div>
    </div>
  )
}

export default Timeline
