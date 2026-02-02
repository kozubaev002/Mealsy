import { Contacts } from '../components/contacts/Contacts'
import NewRecipes from '../components/newresepts/Nevresepts'
import { PopularRsepts } from '../components/popular/PopularRsepts'
import RecipeCatalog from '../components/recipeСard/RecipeCard'

export function Home() {
  return (
    <div >
      <NewRecipes />
      <PopularRsepts />
      <RecipeCatalog />
      <Contacts />
    </div>
  )
}
