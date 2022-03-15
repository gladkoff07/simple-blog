import CheckBox from './checkBox'

export default function Header({ check, changeType, changeTheme }) {
  return (
    <header className='header'>
      <div className='container'>
        <span className='header__name'>IT Blog</span>
        <div className='header__tabs'>
          <button
            onClick={() => changeType('posts')}
            className='header__tabs-item'
          >
            Посты
          </button>
          <button
            onClick={() => changeType('users')}
            className='header__tabs-item'
          >
            Пользователи
          </button>
        </div>
        <CheckBox checked={check} changeTheme={changeTheme} />
      </div>
    </header>
  )
}
