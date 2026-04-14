import { useEffect, useState } from "react";
import axios from "axios";
import { ORDERS_API_URL } from "./api";

function Users() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(ORDERS_API_URL)
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="section-block">
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-badge">User Orders</span>
          <h1 className="section-title">A clearer view of submitted product enquiries.</h1>
        </div>

        <div className="content-panel table-panel">
          <div className="table-responsive">
            <table className="table align-middle text-center admin-table mb-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Mobile</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr key={order._id}>
                    <td>{index + 1}</td>
                    <td>{order.username}</td>
                    <td>{order.mobile}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity}</td>
                    <td>{new Date(order.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Users;
