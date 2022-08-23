import { useState } from 'react'
import Pill from './Pill'

export default function PillList({ list = [], value }) {

  const [val, setVal] = useState(value)

  const setValue = (v) => {
    if (v) {
      setVal(v)
    }
  }

  return (
    <div className='flex flex-row w-full gap-4'>
      {list.map(item =>
        <Pill
          key={item}
          active={item === val}
          onClick={(e) => setValue(e)}
          value={item}
        />  
      )}
    </div>
  )
}