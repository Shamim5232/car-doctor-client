import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../../AuthProvider/AuthProvider";
import CheckOutRow from "./CheckOutRow";
import axios from "axios";

const MyCart = () => {
  const { user } = useContext(ContextProvider);
  const [booking, setBooking] = useState([]);
  const url = `http://localhost:5000/booking?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, [url]);
  const deleteCart = (id) => {
    fetch(`http://localhost:5000/booking/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Bookin Delete Deletetd");
        }
        const remaining = booking.filter((book) => book._id !== id);
        setBooking(remaining);
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((book) => (
            <CheckOutRow
              key={book._id}
              book={book}
              deleteCart={deleteCart}
            ></CheckOutRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCart;
