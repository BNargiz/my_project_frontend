import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");
  //   console.log(age);

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
            <form noValidate autoComplete="off">
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                required
                margin="dense"
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
                required
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Location"
                variant="outlined"
                fullWidth
                required
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Price"
                type="number"
                variant="outlined"
                fullWidth
                required
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Image"
                type="file"
                variant="outlined"
                fullWidth
                required
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                required
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Date"
                type="date"
                variant="outlined"
                fullWidth
                required
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                label="Age"
                variant="outlined"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                select
                fullWidth
                required
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
                required
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Latitude"
                variant="outlined"
                type="number"
                fullWidth
                required
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button variant="contained">Modify</Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
