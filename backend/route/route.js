const router = require('express').Router();
const {login} = require('../controller/signin')
const {register} = require('../controller/register');
import {Recipe, fetchRecipe} from '../controller/recipe';


router.post('/register', register)
router.post('/signin', login)
router.post('/recipe', Recipe)
router.get('/fetchrecipe', fetchRecipe)

module.exports = router;