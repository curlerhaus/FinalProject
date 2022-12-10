import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className = "headerTitleSm">Not the greatest blog</span>
            <span className='headerTitleLg'>This is just a tribute</span>
        </div>
        <img className='headerImg' src="https://placedog.net/1200/1200" alt="" />
    </div>
  )
}
