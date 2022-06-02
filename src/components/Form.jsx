import { useState } from "react";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(Date.now());
  const [age, setAge] = useState("");
  //
  // const dispatch = useDispatch();
  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();
    const newActivity = {
      title,
      description,
      location,
      price,
      image,
      email,
      phone,
      date,
      age,
    };

    // dispatch(newStoryCreated(newStory));
    setTitle("");
    setDescription("");
    setLocation("");
    setPrice(0);
    setImage("");
    setEmail("");
    setPhone("");
    setDate(Date.now());
    setAge("");
  };

  return (
    <div>
      {/* addform */}
      <form onSubmit={submit}>
        <h2>Add a new activity</h2>
        <p>
          <label>
            Title:{" "}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Description:{" "}
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Location:{" "}
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Price:{" "}
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Image:{" "}
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <div>
            <img src={image} style={{ maxWidth: 200 }} />
          </div>
        </p>
        <p>
          <label>
            Contact email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Contact number:{" "}
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Date:{" "}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Age:{" "}
            <select
              onChange={(e) => {
                setAge(e.target.value);
              }}
            >
              <option value={age}> </option>
              <option value={"infant"}>Infant</option>
              <option value={"pre-schooler"}>Pre-schooler</option>
              <option value={"school-age"}>School age</option>
              <option value={"all-ages"}>All ages</option>
            </select>
          </label>
        </p>
        <p>
          <button type="submit">Add this activity!</button>
        </p>
      </form>
    </div>
  );
};
export default Form;
