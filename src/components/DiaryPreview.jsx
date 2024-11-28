import TextWithBR from './TextWithBR'
import './DiaryPreview.css'

const DiaryPreview = ({ date, content }) => {  
  return (
    <div className="entry long-text">
      <div className="date">{date}</div>
      <div className="icon blue"></div>
      <div className="content">
        <TextWithBR>{content}</TextWithBR>
      </div>
    </div>
  )
}

export default DiaryPreview
