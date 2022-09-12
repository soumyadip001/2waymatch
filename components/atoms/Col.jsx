import PropTypes from 'prop-types'

function Col({ children, size = 2 }) {

  let compiledClass = `w-${size}/12`

  return (
    <div className={`flex items-center ${compiledClass}`}>
      {children}
    </div>
  )
}

Col.propTypes = {
  size: PropTypes.number,
  children: PropTypes.element.isRequired
}

export default Col