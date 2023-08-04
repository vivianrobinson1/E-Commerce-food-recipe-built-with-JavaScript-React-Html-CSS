import { useCart } from "react-use-cart";
import './Card.css'

const Card = (props) => {
    const{ingredient,ingredientlist,title,price,img} = props.recipes // destructuring
    const{addItem} = useCart();

    return ( 
        <div class="card">
  <img src={img}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> {title}</h5>
    <p class="card-text">{ingredient}</p>
    <p class="card-text">{ingredientlist}</p>
    <p class="card-text">{price}</p>
    <a href="#" class="btn btn-primary" onClick={() => addItem(props.recipes)} >Add To Cart</a>
  </div>
</div>
     );
}
 
export default Card;