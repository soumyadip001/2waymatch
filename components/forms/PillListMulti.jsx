import { useEffect, useState } from 'react'
import Pill from './Pill'

export default function PillListMulti({
  list = [], values = [], onChange = null
}) {

  const [pills, setPills] = useState(values)

  useEffect(() => {
    console.log('>>> run', values)
    setPills(values)
  }, [values])

  const setValue = (v) => {
    if (v) {
      console.log(v, pills)
      if (pills.includes(v)) {
        const filteredPills = pills.filter(p => p !== v)
        console.log('item exists', filteredPills)
        setPills(filteredPills)
        onChange(filteredPills)
      } else {
        console.log('new item')
        setPills([...pills, v])
        onChange([...pills, v])
      }
    }
  }

  return (
    <div className='flex flex-row w-full gap-4 flex-wrap'>
      {list.map(item =>
        <Pill
          key={item}
          active={!!pills.includes(item)}
          onClick={(e) => setValue(e)}
          value={item}
        />
      )}
    </div>
  )
}