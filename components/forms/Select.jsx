export default function Select({
  value, name, options = [], onChange = null,
  readOnly = false, disabled = false
}) {

  const setAndEmitValue = (updatedVal) => {
    onChange(updatedVal)
  }

  return (
    <div className="flex items-center justify-start h-auto w-full">
      <select
        id={name}
        name={name}
        onChange={(e) => setAndEmitValue(e.target.value)}
        readOnly={readOnly}
        disabled={disabled}
        className='block w-full rounded-md border border-gray-300 focus:border-blueGray-600 focus:outline-none focus:ring-1 focus:ring-blueGray-600 py-1 px-1.5 text-gray-500'
      >
        <option key={0}>Select One</option>
        {options.map(op => 
          <option
            key={op.key}
            selected={op.value === value}
          >{op.value}</option>  
        )}
      </select>
    </div>
  )
}