const If = ({ then, children }) => {
  return then ? children : null
}

export default If