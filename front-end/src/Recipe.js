import Card from './components/Card'
import data from './Data.js'
import "./Recipe.css"
 
const Recipe = () => {
    return ( 
        <div className='cardparent'>
            {
                data.productData ? data.productData.map
                ((recipes, index) =>
                < Card recipes ={recipes} key={index}/>
                ) : "no recipes"
            }
        </div>
     );
}
 
export default Recipe;