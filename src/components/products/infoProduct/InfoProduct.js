import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./infoProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getSingleProduct } from "../../../redux/actions/productActions";
import MyLoader from "../../skeleton/MyLoader";
import { Carousel } from "../../carousel/Carousel";
import { Products } from "../allProducts/Products";
export const InfoProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, loading } = useSelector((state) => state.reducer);
<Products id={id}/>
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  return (
    <div className="row mt-3 infoProduct">
      <div className="col-xl-6">{loading ? <MyLoader /> : <Carousel />}</div>
      <div className="col-xl-6">
        {loading ? (
          <MyLoader />
        ) : (
          <div className="card">
            <img src={singleProduct.thumbnail} alt={singleProduct.title} />
            <div className="card-body">
              <h5 className="card-title">{singleProduct.title}</h5>
              <p className="card-text">{singleProduct.description}</p>
              <p>
                <b>Category:</b><span> {singleProduct.category}</span>
              </p>
              <p>
                <b>Brand:</b><span> {singleProduct.brand}</span>
              </p>
              <p>
                <b>Price:</b><span> {singleProduct.price}</span>
              </p>
              <p>
                <b>Rating:</b><span> {singleProduct.rating}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
