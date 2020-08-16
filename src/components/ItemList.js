import React from 'react'
import {Grid, Cell} from "react-mdl"



export default function ItemList()
{
    
        return(
            <div >
           

           <Grid className="demo-grid-1" >
        <Cell col={8}  className="cell" >
            <img height="300px" width="300px" src="https://images-na.ssl-images-amazon.com/images/I/71wPwmxo2NL._SL1500_.jpg" alt="" />
            <h4>Product Name</h4>
            <p>Description</p>
            <p>Price</p>

        </Cell>
        
    </Grid>


</div>



    


        )



    }
    
