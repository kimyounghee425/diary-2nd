import './Button.css'

const Button = ({ size = 'small', onClick, test, children }) => {
  const classList = ['button']

  classList.push(size)

  return (
    <button
      data-test={test}
      className={classList.join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
