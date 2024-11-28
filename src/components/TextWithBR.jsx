import { Fragment } from 'react'

const TextWithBR = ({ children }) => {
  return (
    <>
      { children.split('\n').map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      ))}
    </>
  )
}

export default TextWithBR
