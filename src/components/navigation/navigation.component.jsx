import { Outlet } from "react-router-dom"
import { Fragment } from "react"
import './navigation.styles.scss'
import { Link } from "react-router-dom"
import { ReactComponent as BurgerMenu } from '../../assets/img/burgermenu.svg'
import { ReactComponent as CartIcon } from '../../assets/img/carticon.svg'
import { ReactComponent as FavIcon } from '../../assets/img/favicon.svg'
import { ReactComponent as UserIcon } from '../../assets/img/usericon.svg'

export const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation-container">
                <div className="menu-container">
                    <BurgerMenu className='navicon' />
                </div>
                <div className="logo-container">
                    <span className="logo">LOGO</span>
                </div>
                <div className="navlinks">
                    <Link className="icon">
                        <UserIcon className='navicon' />
                    </Link>
                    <div className="fav-icon icon">
                        <FavIcon className='navicon' />
                    </div>
                    <div className="cart-icon icon">
                        <CartIcon className='navicon' />
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation