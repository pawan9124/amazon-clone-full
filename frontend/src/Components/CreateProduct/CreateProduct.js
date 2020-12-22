import React, { useState, useEffect } from "react";
import TransitionsModal from "../Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import "./CreateProduct.css";
import validator from "validator";
import { createProduct } from "../../actions/sellerActions";
import { withRouter, Link } from "react-router-dom";

function CreateProduct(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [storeName, setStoreName] = useState("");
  const [errors, setErrors] = useState({});
  const [imageFiles, setImageFiles] = useState([]);
  const [sentImageFiles, setSentImageFiles] = useState([]);
  const [limit, setLimit] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [openModal, setOpenModal] = useState(props.open);
  const [isParentChanged, setIsParentChanged] = useState(false);

  //Get the user detail from the store
  const user = useSelector((state) => state.auth.user);
  const dispatchProps = useDispatch();

  useEffect(() => {
    setOpenModal(props.open);
  }, [props.open]);

  const handleCreateProduct = (e) => {
    const tempErrors = {};
    e.preventDefault();
    if (validator.isEmpty(title)) {
      tempErrors.title = "Please enter a title";
    }
    if (validator.isEmpty(price)) {
      tempErrors.price = "Please enter a price";
    }
    if (validator.isEmpty(storeName)) {
      tempErrors.storeName = "Please enter store name";
    }
    if (imageFiles.length === 0) {
      tempErrors.imageFiles = "Please select a product image";
    }
    if (Object.keys(tempErrors).length === 0) {
      const fd = new FormData();
      fd.append("title", title);
      fd.append("price", price);
      fd.append("storeName", storeName);
      fd.append("seller", user.id);
      //Server side don't accept array of formdata so the loop is calling
      for (let i = 0; i < sentImageFiles.length; i++) {
        fd.append("image", sentImageFiles[i][0]);
      }
      dispatchProps(createProduct(fd, props.history));
    } else {
      setErrors(tempErrors);
    }
  };
  const cancelModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.setModalState(false);
  };

  //handle image changes
  const _handleImageChange = (e) => {
    const dataFile = [];
    const rawFiles = [];
    const files = e.target.files;
    const length = files.length;
    if (length < 6) {
      rawFiles.push(files);
      return Promise.all(
        [].map.call(files, function (file) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () {
              resolve({ result: reader.result, file: file });
            };
            reader.readAsDataURL(file);
          });
        })
      ).then((results) => {
        results.forEach((result) => {
          dataFile.push({ file: result.file, imagePreviewUrl: result.result });
          if (length === dataFile.length) {
            const newImages = [...imageFiles, ...dataFile];
            const newSentImages = [...sentImageFiles, files];
            setSentImageFiles(newSentImages);
            setImageFiles(newImages);
          }
        });
      });
    } else {
      setLimit(true);
    }
  };

  const removeImages = (index) => {
    imageFiles.splice(index, 1);
    sentImageFiles.splice(index, 1);
    setImageFiles(imageFiles);
    setSentImageFiles(sentImageFiles);
    setIsParentChanged(!isParentChanged);
  };

  let $imagePreview;

  if (imageFiles.length > 0) {
    $imagePreview = imageFiles.map((image, index) => {
      return (
        <div key={index} className="createProduct__previewImage">
          <button
            type="button"
            className="createProduct__close"
            aria-label="Close"
            onClick={() => removeImages(index)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <img
            alt=""
            className="img-thumbnail previewSize"
            src={image.imagePreviewUrl}
          />
        </div>
      );
    });
  } else {
    if (limit) {
      $imagePreview = <div className="red">Image limit exceeds from 6</div>;
    }
  }
  return (
    <TransitionsModal open={openModal} isParentChanged={isParentChanged}>
      <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      <div className="createProduct">
        {/* Header of the modal */}
        <div className="createProduct__header">
          <h3>Add Product to your store </h3>
        </div>
        {/* form details */}
        <form action="" className="createProduct__form">
          <div className="createProduct__form_common">
            <label htmlFor="">Enter Product title</label>
            <input
              type="text"
              value={title}
              accept="image/png, image/jpeg"
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <small className="createProduct__validationErrors">
                {errors.title}
              </small>
            )}
          </div>
          <div className="createProduct__form_common">
            <label htmlFor="">Enter Product Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && (
              <small className="createProduct__validationErrors">
                {errors.price}
              </small>
            )}
          </div>
          <div className="createProduct__form_common">
            <label htmlFor="">Enter initial Rating</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            {errors.rating && (
              <small className="createProduct__validationErrors">
                {errors.rating}
              </small>
            )}
          </div>
          <div className="createProduct__form_common">
            <label htmlFor="">Enter Store Name</label>
            <input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
            {errors.storeName && (
              <small className="createProduct__validationErrors">
                {errors.storeName}
              </small>
            )}
          </div>
        </form>

        {/* MultiImage upload with preview */}
        <div className=" createProduct__form_common createProduct__images">
          <label htmlFor="">Choose Product Image</label>
          <input
            type="file"
            name=""
            multiple="multiple"
            id="product_images"
            onChange={_handleImageChange}
          />
        </div>
        {showPreview ? <div className="imgPreview">{$imagePreview}</div> : null}
        {errors.imageFiles && (
          <small className="createProduct__validationErrors">
            {errors.imageFiles}
          </small>
        )}
      </div>
      {/* button to save  the modal */}
      <div className="createProduct__button">
        <button
          type="button"
          className="createProduct__create"
          onClick={handleCreateProduct}
        >
          Create
        </button>
        <button
          type="button"
          className="createProduct__cancel"
          onClick={(e) => cancelModal(e)}
        >
          Cancel
        </button>
      </div>
    </TransitionsModal>
  );
}

export default withRouter(CreateProduct);
