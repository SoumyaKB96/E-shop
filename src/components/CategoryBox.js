import React from 'react'
import {Box} from '@material-ui/core'
import {Switch,Link, Route} from 'react-router-dom'
import '../styles.css'
import ItemList from './ItemList'

export default class CategoryBox extends React.Component {
    render() {
        return ( < div className="CatBox">
            
         <Switch>
                    <Route path="/CategoryPage/items" component={ItemList}/>
                </Switch>
            <Box  m={3}>
                <h5>Cat name</h5>
                <Link to = "/CategoryPage/items" >
               
                    View
                
                </Link>
               
            </Box>
            
            </div>
        )

    }

}