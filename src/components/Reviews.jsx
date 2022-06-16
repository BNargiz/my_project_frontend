import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { Paper, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../store/user/selectors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReviews } from "../store/activity/action";
import Review from "./Review";

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
};

export default function Reviews(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();

    const newReview = { name: user.name, text, date: new Date() };
    dispatch(createReviews(newReview));
    setText("");
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#f0aa00" }}
        onClick={handleOpen}
      >
        Reviews
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Paper style={{ padding: "40px 20px" }}>
            {props.reviews.map((r) => (
              <Review key={r.id} name={r.name} text={r.text} date={r.date} />
            ))}
            {token ? (
              <form onSubmit={submit}>
                <TextField
                  label="text"
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />

                <Button
                  sx={{ backgroundColor: "#ff3076 " }}
                  variant="contained"
                  type="submit"
                >
                  Add review
                </Button>
              </form>
            ) : (
              <Typography variant="body2" color="text.secondary">
                {" "}
                You have to login to add review
              </Typography>
            )}
          </Paper>
        </Box>
      </Modal>
    </div>
  );
}
