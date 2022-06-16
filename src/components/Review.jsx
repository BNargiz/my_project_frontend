import { Divider, Grid } from "@mui/material";

const Review = (props) => {
  return (
    <div>
      {" "}
      <Grid container wrap="nowrap" spacing={2}>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{props.name}</h4>
          <p style={{ textAlign: "left" }}>{props.text}</p>
          <p style={{ textAlign: "left", color: "gray" }}>{props.date}</p>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
    </div>
  );
};

export default Review;
