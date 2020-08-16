import React from 'react'
import {Button} from 'react-mdl'


export default class ProductPage extends React.Component
{

render(props){
return(

    <div>
    <div className="ProductImage">  
    <img height="500px" width="500px" src="https://images-na.ssl-images-amazon.com/images/I/71wPwmxo2NL._SL1500_.jpg" alt="" />
    </div> 

    <div className="ProductDetails">
    <h2>Name</h2>
    <p> Short Description</p>
    </div >

    <div className="ProductPrice">
    <h2>Price</h2>
    <Button raised ripple>Add to Cart</Button>
    <Button raised ripple>Buy</Button>
    </div>

      

    </div>
)





}
}