import react,{useEffect,useState}from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';

const App=() =>{
  const APP_ID="5bf4f8c9";
  const APP_KEY="fdaeef86bd8f139c90d16c183a1a8f4a";

 
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('banana');

  //const [counter,SetCounter]=useState(0);
  // useEffect(() => {
  //   console.log("effect has made");   
  // }, [counter])

useEffect(() => {
  
  getRecipes();
  console.log("recipes loaded")
}, [query]);

 const getRecipes=async() =>
 {
   const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
   const data= await response.json();
   setRecipes(data.hits);
   console.log(data.hits);
   console.log("recipes loading");
};

  const updateSearch=e =>
  {
    setSearch(e.target.value);
  

  };
  const getSearch=e=>
  {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <h1 className="del">DELICIOUS RECIPES</h1>
      <marquee>cook food..stay healthy..stay home</marquee>

      <form onSubmit={getSearch} className="Search-form">
        <input className="Search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          search
        </button>
          </form>
          <br></br>
          <div className="recipes">
            {recipes.map(recipe=>(<Recipe
            key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              />

            ))};
            </div>
          
      {/* <h3 onClick={()=>SetCounter(counter+1)}>{counter}</h3>  */}
            </div>
           
  )
}

export default App;
