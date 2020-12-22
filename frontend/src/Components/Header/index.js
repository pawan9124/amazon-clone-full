import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import CreateProduct from "../CreateProduct/CreateProduct";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  const userStore = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  let isChanged = false;
  const handleAuthentication = () => {
    if (userStore.user.id) {
      auth.signOut();
      history.push("/login");
    }
  };

  const setModalState = (response) => {
    isChanged = false;

    setOpen(response);
  };
  const handleModalOpen = (e) => {
    isChanged = !isChanged;
    e.preventDefault();
    setOpen(true);
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={"/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!userStore.user.id ? "Guest" : userStore?.user?.name}
            </span>
            <span className="header__optionLineTwo">
              {userStore.user.id ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        {userStore.user.isSeller && (
          <div className="header__option">
            <span className="header__optionLineOne">As Seller</span>
            <span
              className="header__optionLineTwo header__openModal"
              onClick={(e) => handleModalOpen(e)}
            >
              Add Product
            </span>
            <CreateProduct
              isChanged={isChanged}
              open={open}
              setModalState={setModalState}
            />
          </div>
        )}
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
