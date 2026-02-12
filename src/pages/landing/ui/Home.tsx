import { Contacts } from '../components/contacts/Contacts'
import { Konstructor } from '../components/konstructor/Konstructor'
import NewRecipes from '../components/newresepts/Nevresepts'
import { PopularRsepts } from '../components/popular/PopularRsepts'
import RecipeCatalog from '../components/recipeСard/RecipeCard'
import { Text } from '../components/text/Text'

export function Home() {
  return (
    <div >
      <Konstructor />
      <Text />
      <NewRecipes />
      <PopularRsepts />
      <RecipeCatalog />
      <Contacts />
    </div>
  )
}