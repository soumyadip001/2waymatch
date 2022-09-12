import PropTypes from 'prop-types'

function Row({
  children, gap = 0,
  mt = 0, mb = 0, ml = 0, mr = 0,
  flexItems = 'center'
}) {
  const gapStyle = `gap-${gap}`
  const marginStyle = `mt-${mt} mb-${mb} ml-${ml} mr-${mr}`
  return (
    <div className={`flex flex-row w-full justify-between items-${flexItems} ${gapStyle} ${marginStyle}`}>
      {children}
    </div>
  )
}

Row.propTypes = {
  gap: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  flexItems: PropTypes.string,
  children: PropTypes.any.isRequired
}

export default Row