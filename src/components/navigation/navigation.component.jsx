import "./navigation.styles.scss"
import { Outlet, Link} from "react-router-dom";
import { Fragment , useContext} from "react";
import { UserContext } from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils"

const Navigation = () => {

    const {currentUser, setCurretntUser} = useContext(UserContext)
   console.log(currentUser)

   const signOutHandeler = () => {
    signOutUser();
    setCurretntUser(null);
   }
    return (
       <Fragment>
          <div className="navigation-container">
            <Link className="logo-container" to="/"><h1>BackOffice</h1></Link>
            <div className="nav-links">
            {currentUser? ( <span className="nav-link" onClick={signOutHandeler}>Sign Out</span>) : 
            ( <Link className="nav-link" to="authetication">Sign in</Link>)}
                <span>Menu</span>
            </div>
        </div>
        <Outlet />
       </Fragment>
      
    )
}

export default Navigation;