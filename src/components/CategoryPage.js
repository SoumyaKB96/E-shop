import React from 'react'
import CategoryBox from "../components/CategoryBox"


export default class CategoryPage extends React.Component{ 

render(){
   return(
       <div className="CatRow">
       <h1 >Explore Categories</h1>
    
    <CategoryBox />
    < CategoryBox />
       </div>
   )
    
}
}

