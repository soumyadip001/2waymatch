function List({ items }) {
  return (
    <ul className="flex w-full flex-col items-start justify-center list-none gap-4">
      {items.map(item =>
        <li className="flex justify-start w-full items-center gap-4 border-t border-blueGray-300 pt-4" key={item}>
          <i className="fa fa-check-circle text-green-400"></i>
          <span>{item}</span>
        </li>
      )}
    </ul>
  )
}

export default List
