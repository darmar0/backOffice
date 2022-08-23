import "../category-item/category-item.styles.scss"
import { useNavigate } from "react-router-dom"


const CategoryItem = ({category}) => {

const navigate = useNavigate();
const navigateHandeler = () => {
 navigate(category.url)
}

    return(
        <div className="category-item-container" onClick={navigateHandeler}>
            <img className="background-image" style={{backgroundImage: `url(${category.imageUrl})`}}></img>
            <div className="category-body-container">
         <h2 >{category.name}</h2>
       </div>
        </div>
    )
}

export default CategoryItem;