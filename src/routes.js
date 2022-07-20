import React from 'react'
import {Routes, Switch} from 'react-router-dom';
import Header from './header.js'
// import {BrowserRouter} from 'react-router-dom'
// import Routes from './routes'




export default  () => {
   
    return(
        <Switch>
            <Routes path='/' component={Header}>
       <div>Pagina Inicial</div> 
            </Routes>

        </Switch>

    );

}