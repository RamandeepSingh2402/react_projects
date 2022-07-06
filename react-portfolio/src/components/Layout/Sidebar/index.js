import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className='nav-bar'>
            <Link className = 'logo' to="/">
                <img src={LogoS} alt="logo"></img>
                <img src={LogoSubtitle} alt="slobodan"></img>
            </Link>
    </div>
)

export default Sidebar;