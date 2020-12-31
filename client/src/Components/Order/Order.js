import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment(order.created).format("MMMM Do YYYY, h:mma")}</p>
      <p>
        <strong>Delivery</strong>: {order.addressId.area}(
        {order.addressId.phone}
        ),
        {order.addressId.city},{order.addressId.state},{order.addressId.country}
      </p>
      <p className="order__id">
        <small>{order.paymentId}</small>
      </p>
      {order.orders?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hidebutton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Order Total : <strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={order.paymentAmount}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
