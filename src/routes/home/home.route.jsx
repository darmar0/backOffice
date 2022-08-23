import { Outlet } from "react-router-dom";
import "./home.styles.scss"
import CategoryMenu from "../../components/category-menu/category-menu.component"


const Home = () => {
    return (
        <div className="home-container">
            <Outlet />
        <CategoryMenu />
        </div>
     
    )
}

export default Home;