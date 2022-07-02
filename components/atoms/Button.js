function Button({ children, onClick, primary = false }) {
  
  const derivedClasses = primary ? 'btn btn--primary' : 'btn'

  return (
    <button className={derivedClasses} onClick={onClick}>{ children }</button>
  )
}

export default Button;
