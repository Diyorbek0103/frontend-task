import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {
  getCategory,
  getFilter,
  getProducts,
} from "../../redux/actions/productActions";

export default function Category() {
  const dispatch = useDispatch();
  const { allCategories, filteredproduct, products, numberOfPages } =
    useSelector((state) => state.reducer);

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const [mycategory, setmyCategory] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    setmyCategory(e.target.value);
  };

  useEffect(() => {
    dispatch(getFilter(mycategory));
  }, [mycategory]);
  
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
          id="outlined-select-currency"
          select
          label="All"
          value={mycategory}
          onChange={handleChange}
        >
          {allCategories.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
