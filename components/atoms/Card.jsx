import PropTypes from 'prop-types'

function Card({ children, px = 16, gap = 0 }) {
  return (
    <div className={`flex flex-col w-full border border-blueGray-900 border-opacity-20 rounded-md py-8 mb-4 shadow-md px-${px} hover:border-opacity-50 gap-${gap}`}>
      {children}
    </div>
  )
}

Card.propTypes = {
  px: PropTypes.number,
  gap: PropTypes.number,
  children: PropTypes.any.isRequired
}

export default Card
