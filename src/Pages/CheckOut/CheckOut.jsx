import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ContextProvider } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const CheckOutData = useLoaderData();
  const { user } = useContext(ContextProvider);
  const { title, price, img, _id } = CheckOutData;
  const handleOrderConfirm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const order = {
      custorm_name: name,
      date,
      email,
      price,
      img,
      service_id: _id,
      title,
    };
    console.log(order);
    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Booking Conformed");
        }
      });
  };
  return (
    <div className="my-8">
      <h2 className="text-4xl font-bold text-center">
        Check Out {CheckOutData.title}
      </h2>
      <form className="card-body" onSubmit={handleOrderConfirm}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-lg">Order confrim</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
