import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Products } from "./components/products/allProducts/Products";
import { InfoProduct } from "./components/products/infoProduct/InfoProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SiteLoader from "./components/siteLoader/SiteLoader";

export default function App() {

const [loading,setLoading]=useState(true);

useEffect(()=>{
 
    setLoading(false)

},[])

if(loading){
  return(
    <SiteLoader/>
  )
}

  return (
    <>
   
      <Switch>
        <Route exact path={"/"} component={Products} />
        <Route exact path={"/item/:id"} component={InfoProduct} />
      </Switch>
    </>
  );
}
