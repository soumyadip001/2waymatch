import { useState } from "react"

function MultiCheck({
  list = [], onChange = null
}) {

  let active = false
  const derivedClass = active ?
    'bg-blueGray-900 text-slate-100 hover:bg-blueGray-700 active:bg-blueGray-900'
    : 'text-blueGray-900 bg-slate-200 hover:bg-blueGray-900 hover:text-slate-100 active:text-blueGray-900 active:bg-slate-200'

  const [customList, setCustomList] = useState(list)

  const toggleItemMarking = (item) => {
    if (item.id) {
      const newList = customList.map(cl => {
        if (cl.id === item.id) {
          return { 
            ...cl,
            selected: !cl.selected
          }
        } else {
          return cl
        }
      })
      setCustomList(newList)
      onChange(newList)
    }
  }

  const capitalize = s => s && s[0].toUpperCase() + s.slice(1)

  return (
    <div className='flex flex-row w-full gap-4 flex-wrap'>
      {customList.map((item, index) =>
        <div
          key={item.id}
          className={`flex items-center justify-center min-h-12 min-w-28 w-auto px-4 py-2 rounded-md cursor-pointer transition-all ${derivedClass}`}
          isactive={item.selected.toString()}
          onClick={() => toggleItemMarking(item)}
        >
          <input
            type="checkbox"
            className="mr-4 hidden"
            name={`item-${index}`}
            id={`item-${index}`}
            defaultChecked={item.selected}
          />
          {item.selected &&
            <i className="fa fa-check mr-2 text-green-600"></i>
          }
          {capitalize(item.title)}
        </div>
      )}
    </div>
  )
}

export default MultiCheck