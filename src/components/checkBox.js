export default function CheckBox({ checked, changeTheme }) {
  return (
    <div className='checkbox'>
      <label
        className={`checkbox__label ${checked ? 'checked' : ''}`}
        onClick={changeTheme}
      >
        <span className='checkbox__button'></span>
      </label>
    </div>
  )
}
