import "../category-menu/category-menu.styles.scss"
import CategoryItem from "../category-item/category-item.component"

const CategoryMenu = () => {
    const menu = [{id: 1, name:"Document menagement", url: "document-management", imageUrl: "https://rsa.mfa.gov.by/kcfinder/upload/rsa/images/apila-archivos-documentos-clip-negro_8119-1532.jpg"},
    { id: 2, url: "stock-list", imageUrl: "https://media.istockphoto.com/photos/rows-of-shelves-picture-id1138429558?k=20&m=1138429558&s=612x612&w=0&h=SEojoXUHl6Di4plxrDgH28aY9J1yCTxFxH5uIlibDeo=", name:"Stock list"}]
    return(
       <div className="category-menu-container">
              <div className="title-container">
            <h1>Back office</h1>
            <span>Document Management Solutions</span>
            </div>
     <div className="category-grid-container">
     {menu.map(category=> <CategoryItem key={category.id} category={category}/>  )}
     </div>
      
        
       </div>
    )
}

export default CategoryMenu;