import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { selectMyoneActivity } from "../store/user/selectors";
import { updateMyPost } from "../store/user/actions";

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

const ageRanges = [
  { value: "infant", label: "infant" },
  { value: "pre-schooler", label: "pre-schooler" },
  { value: "school-age", label: "school-age" },
  { value: "all-ages", label: "all-ages" },
];

export default function BasicModal(props) {
  const dispatch = useDispatch();
  //   const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const activity = useSelector(selectMyoneActivity(props.id));
  const [ageRange, setAgeRange] = React.useState(activity.ageRange);
  //   console.log(age);
  const [title, setTitle] = React.useState(activity.title);
  const [description, setDescription] = React.useState(activity.description);
  const [location, setLocation] = React.useState(activity.location);
  const [price, setPrice] = React.useState(activity.price);
  const [imageUrl, setImage] = React.useState(activity.imageUrl);
  const [email, setEmail] = React.useState(activity.email);
  const [phone, setPhone] = React.useState(activity.phone);
  const today = moment().format("YYYY-MM-DD");
  const [date, setDate] = React.useState(activity.date);
  const [longitude, setLongitude] = React.useState(activity.longitude);
  const [latitude, setLatitude] = React.useState(activity.latitude);

  console.log("act", activity);
  React.useEffect(() => {}, [activity]);

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();

    dispatch(
      updateMyPost(
        props.id,
        title,
        description,
        location,
        price,
        imageUrl,
        email,
        phone,
        date,
        ageRange,
        longitude,
        latitude
      )
    );
    // setTitle(activity.title);
    // setDescription(activity.description);
    // setLocation(activity.location);
    // setPrice(activity.price);
    // setImage(activity.imageUrl);
    // setEmail(activity.email);
    // setPhone(activity.phone);
    // setDate(activity.date);
    // setAgeRange(activity.ageRange);
    // setLatitude(activity.latitude);
    // setLongitude(activity.longitude);
    handleClose(false);
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
    <div>
      <Button onClick={handleOpen}>Modify post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modify your Activity
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form noValidate autoComplete="off" onSubmit={submit}>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="dense"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Description"
                variant="outlined"
                multiline
                rows={5}
                fullWidth
                margin="dense"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Location"
                variant="outlined"
                fullWidth
                margin="dense"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Price"
                type="number"
                variant="outlined"
                fullWidth
                margin="dense"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Image"
                type="file"
                variant="outlined"
                fullWidth
                margin="dense"
                onChange={uploadImage}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="dense"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                margin="dense"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
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
              />

              <TextField
                label="Age category"
                variant="outlined"
                value={ageRange}
                onChange={(e) => {
                  setAgeRange(e.target.value);
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

              <TextField
                label="Longitude"
                variant="outlined"
                type="number"
                fullWidth
                margin="dense"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Latitude"
                variant="outlined"
                type="number"
                fullWidth
                margin="dense"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button type="submit" variant="contained">
                Modify
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
