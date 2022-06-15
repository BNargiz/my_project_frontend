import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { newActivityCreated } from "../store/user/actions";
import Modal from "@mui/material/Modal";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const Form = (props) => {
  const ageRanges = [
    { value: "infant", label: "infant" },
    { value: "pre-schooler", label: "pre-schooler" },
    { value: "school-age", label: "school-age" },
    { value: "all-ages", label: "all-ages" },
  ];
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  const today = moment().format("YYYY-MM-DD");
  const [date, setDate] = useState(today);
  const [age, setAge] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
    height: "100%",
  };

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();

    const newActivity = {
      title,
      description,
      location,
      // address,
      price,
      image,
      email,
      phone,
      date,
      age,
    };

    dispatch(newActivityCreated(newActivity));

    setTitle("");
    setDescription("");
    setLocation("");
    setPrice(0);
    setImage();
    setEmail("");
    setPhone("");
    setDate(today);
    setAge("");
    // setAddress("");
    handleClose(false);

    // props.closeForm();
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    //first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "tnvu24xd");

    //post request to Cloudinary, remember to change to your own link
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dgaoprtww/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    console.log("file", file); //check if you are getting the url back
    setImage(file.url); //put the url in local state, next step you can send it to the backend
  };

  return (
    <div style={{ width: "100%" }}>
      <Button onClick={handleOpen}>Post an activity</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Activity
          </Typography>
          {/* addform */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={submit} noValidate autoComplete="off">
              <TextField
                required
                label="Title"
                type="text"
                variant="outlined"
                fullWidth
                margin="dense"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></TextField>
              <TextField
                required
                label="Description"
                multiline
                rows={5}
                variant="outlined"
                fullWidth
                margin="dense"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></TextField>
              <TextField
                required
                label="Address (Street/City)"
                variant="outlined"
                fullWidth
                margin="dense"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></TextField>
              {/* <TextField
                required
                label="Street Number City Country"
                variant="outlined"
                fullWidth
                margin="dense"
                type="text"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />{" "} */}
              <TextField
                required
                label="Price"
                variant="outlined"
                fullWidth
                margin="dense"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></TextField>
              <TextField
                required
                label="Image"
                type="file"
                variant="outlined"
                fullWidth
                margin="dense"
                onChange={uploadImage}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {/* {" "}
                <div>
                  <img
                    alt="img"
                    src={
                      image
                        ? image
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                    }
                    style={{ maxWidth: 100 }}
                  />
                  {image ? (
                    <div style={{ fontSize: 20 }}>Succesfully uploaded!</div>
                  ) : (
                    ""
                  )}
                </div> */}
              </TextField>
              <TextField
                required
                label="Email"
                variant="outlined"
                fullWidth
                margin="dense"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
              <TextField
                required
                label="Contact number"
                variant="outlined"
                fullWidth
                margin="dense"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></TextField>
              <TextField
                required
                label="Date"
                type="date"
                variant="outlined"
                fullWidth
                margin="dense"
                defaultValue={date}
                InputProps={{ inputProps: { min: `${today}` } }}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              ></TextField>
              <TextField
                required
                label="Age category"
                variant="outlined"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                select
                fullWidth
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {ageRanges.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button type="submit">Add this activity!</Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default Form;
