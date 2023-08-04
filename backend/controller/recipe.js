import recipe from "../model/recipe";


export const Recipe = async (req, res) => {
    console.log(req.body);
    
    try {
      const  { Title, Ingredient, Ingredientlist, id, price } = req.body; 
      console.log(req.body);
      const recipes = new recipe ({
        Title:req.body.Title,
        Ingredient:req.body.Ingredient,
        Ingredientlist:req.body.Ingredientlist,
        id:req.body.id,
        price:req.body.price
    
      });
      await recipes.save();
      res.status(201).json({ message: "Recipe Added Successfully" });
    } catch (err) {
      console.log(err);
    }
  
  }

  export const fetchRecipe = async (req, res) => {
    const Name = await recipe.find(req.params._id).exec();
    res.json(Name) 
  }
