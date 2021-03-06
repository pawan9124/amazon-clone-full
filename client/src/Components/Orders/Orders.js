import React, { useState, useEffect } from "react";
import "./Orders.css";
import { useStateValue } from "../../StateProvider";
import Order from "../Order/Order";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../../actions/paymentActions";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  //redux setup
  const userData = useSelector((state) => state.auth);
  const orderData = useSelector((state) => state.orders);
  const dispatchProps = useDispatch();
  useEffect(() => {
    if (userData.user.id) {
      dispatchProps(getOrders(userData.user.id));
    } else {
      setOrders([]);
    }
  }, [userData.user]);

  useEffect(() => {
    setOrders(orderData.orders);
  }, [orderData]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.length > 0 &&
          orders?.map((order) => <Order key={order._id} order={order} />)}
      </div>
    </div>
  );
}

export default Orders;
