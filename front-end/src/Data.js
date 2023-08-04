import Img1 from './img/chickenSoup.jpg'
import Img2 from './img/friedRice.jpg'
import Img3 from './img/salad.jpg'
import Img4 from './img/semoVita.jpg'
import './Data.css'
const Data ={
    productData:[
        {
            id: 1,
            img: Img1,
            title: "chickenSoup",
            ingredient: "chicken",
            ingredientlist: "Thyme, Salt, Star maggie",
            price: 50,
        },
        {
            id: 2,
            img: Img2,
            title: "Fried rice",
            ingredient: "Rice",
            ingredientlist: "sweet corn,Liver, Green beans",
            price: 60,


        },

        {
            id: 3,
            img: Img3,
            title: "salad",
            ingredient: "Cabbage",
            ingredientlist: "Carrot, Salad cream, cucumber",
            price: 100,
        },
        {

            id: 4,
            img: Img4,
            title: "semovita",
            ingredient: "semovita",
            ingredientlist: "flour",
            price: 10,
        }


    ]





}
export default Data;
