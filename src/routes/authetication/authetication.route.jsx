import "./authetication.styles.scss";
import {signInWidthGooglePopup} from "../../utils/firebase/firebase.utils"
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const Authetication = () => {

const logGoogleUser = async() => {
    const {user} = await signInWidthGooglePopup();
    // createUserDocumentFromAuth(user)
}

    return (
     <div className="auth-container">
        <SignIn />
        <SignUp />
     </div>
    )
}

export default Authetication;