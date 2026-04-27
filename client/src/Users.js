import { useEffect, useState } from "react";
import axios from "axios";
import { ORDERS_API_URL } from "./api";

function Users() {
  const [orders, setOrders] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedOrder, setEditedOrder] = useState({});

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get(ORDERS_API_URL)
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  };

  const handleEdit = (order) => {
    setEditingId(order._id);
    setEditedOrder({ ...order });
  };

  const handleSave = () => {
    axios.put(`${ORDERS_API_URL}/${editingId}`, editedOrder)
      .then((res) => {
        setOrders(orders.map(order => order._id === editingId ? res.data.order : order));
        setEditingId(null);
        setEditedOrder({});
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedOrder({});
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      axios.delete(`${ORDERS_API_URL}/${id}`)
        .then(() => {
          setOrders(orders.filter(order => order._id !== id));
        })
        .catch((err) => console.log(err));
    }
  };

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
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr key={order._id}>
                    <td>{index + 1}</td>
                    {editingId === order._id ? (
                      <>
                        <td><input type="text" value={editedOrder.username} onChange={(e) => setEditedOrder({...editedOrder, username: e.target.value})} /></td>
                        <td><input type="text" value={editedOrder.mobile} onChange={(e) => setEditedOrder({...editedOrder, mobile: e.target.value})} /></td>
                        <td><input type="text" value={editedOrder.product} onChange={(e) => setEditedOrder({...editedOrder, product: e.target.value})} /></td>
                        <td><input type="number" value={editedOrder.quantity} onChange={(e) => setEditedOrder({...editedOrder, quantity: e.target.value})} /></td>
                        <td>{new Date(order.createdAt).toLocaleString()}</td>
                        <td>
                          <button onClick={handleSave} className="btn btn-success btn-sm me-2">Save</button>
                          <button onClick={handleCancel} className="btn btn-secondary btn-sm">Cancel</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{order.username}</td>
                        <td>{order.mobile}</td>
                        <td>{order.product}</td>
                        <td>{order.quantity}</td>
                        <td>{new Date(order.createdAt).toLocaleString()}</td>
                        <td>
                          <button onClick={() => handleEdit(order)} className="btn btn-primary btn-sm me-2">Update</button>
                          <button onClick={() => handleDelete(order._id)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </>
                    )}
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
