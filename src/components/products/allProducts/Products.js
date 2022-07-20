import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getFilter, getProducts } from "../../../redux/actions/productActions";
import Category from "../../header/Category";
import MySearch from "../../header/MySearch";
import MyPagination from "../../pagination/MyPagination";
import MyLoader from "../../skeleton/MyLoader";
import "../allProducts/products.css";
export const Products = ({id}) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { products, loading, numberOfPages } = useSelector(
    (state) => state.reducer
  );
  useEffect(() => {
    dispatch(getProducts(page));
  }, [page,id]);
  return (
    <div className="row products  ">
      <div className="d-flex justify-content-between">
        <MySearch />
        <Category />
      </div>
      <h2 className="text-center mb-4">Our products</h2>
      {loading ? (
        <MyLoader />
      ) : (
        products?.map((item, index) => (
          <div className="col-xl-4" key={index}>
            <div className="card">
              <img src={item.thumbnail} alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <Link to={"/item/" + item.id}>learn more</Link>
              </div>
            </div>
          </div>
        ))
      )}
      {numberOfPages > 1 ? (
        <MyPagination
          page={page}
          setPage={setPage}
          numberOfPages={numberOfPages}
        />
      ) : (
        ""
      )}
    </div>
  );
};
