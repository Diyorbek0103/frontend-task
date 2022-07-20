import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { getFilter, getProducts } from "../../redux/actions/productActions";
import { useDispatch ,useSelector} from "react-redux";
import { Products } from "../products/allProducts/Products";
import { search } from "../../redux/actions/productActions";
export default function MySearch() {
  const {products}=useSelector(state=>state.reducer)
  const dispatch =useDispatch();
  const [value, setValue] = useState("");
  useEffect(()=>{
    dispatch(search(value))
  },[value])
  {
    products 
      .filter((val) => {
        if(value == ""){
          return val;
        }else if(val.title.toLowerCase().includes(value.toLowerCase())){
          return val;
        }
      })
      .map((val) => {
       if(val){
        return(
          <Products/>
         )
       }
       else{
        return(
          <h1>Not Found</h1>
        )
       }
      })
  }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          onChange={(e) => setValue(e.target.value)}
          id="filled-search"
          label="Search here"
          type="search"
          variant="filled"
        />
      </div>
    </Box>
  );
}
