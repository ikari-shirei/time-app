import './button.scss'

function Button({ name, children, onClick }) {
  const buttonName = name === 'primary' ? 'primaryButton' : 'secondaryButton'

  return (
    <button onClick={onClick} className={`${buttonName} button`}>
      {children}
    </button>
  )
}

export default Button
