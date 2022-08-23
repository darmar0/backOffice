import "./navigation.styles.scss"
import { Outlet, Link} from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
    return (
       <Fragment>
          <div className="navigation-container">
            <Link className="logo-container" to="/"><h1>BackOffice</h1></Link>
            <div className="nav-links">
            <Link className="logo-container" to="authetication">Sign in</Link>
                <span>Menu</span>
            </div>
        </div>
        <Outlet />
       </Fragment>
      
    )
}

export default Navigation;