import React from 'react'
import {Navigation,Layout,Drawer,Header,Content,Textfield} from 'react-mdl'
import {Link} from 'react-router-dom'


export default function NavBar()
{
    
        return(
            <div style={{height: '100px'}}>
    <Layout fixedHeader scroll transparent waterfall hideSpacer>
        <Header title="E-SHOP">
            <Textfield
                value=""
                onChange={() => {}}
                label="Search"
                expandable
                expandableIcon="search"
            />
        </Header>
        <Drawer title="MENU">
            <button>
                 &#10005;
            </button>
            <Navigation>
            <Link to='/'> < p> Home </p></Link >

            <Link to='/CategoryPage'> < p > Categories </p></Link >
             < Link to = '/ItemList' > < p > Items </p></Link >
        
            
           
    <h2>Your Account</h2> 
    < h2 > Your Wishlist </h2>
    < h2 > Your Orders </h2>
    < h2 > Contact Us </h2>     
            



            </Navigation>

            
        </Drawer>
        <Content />
    </Layout>
</div>
                   )
    }


    