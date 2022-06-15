import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteOneActivity } from "../store/user/actions";
import BasicModal from "./ModifyPost";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const MyPosts = (props) => {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        width: 700,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        padding: 6,
        margin: 5,
        textAlign: "center",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{ color: "#56225e" }}
      >
        {props.title}
      </Typography>
      <Box sx={{ display: "flex", gap: 2, marginBottom: "20px" }}>
        <Typography variant="body1" color="text.secondary">
          {" "}
          <HiOutlineLocationMarker /> {"  "}
          {props.location}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {" "}
          <MdDateRange /> {props.date}
        </Typography>
      </Box>
      <CardMedia
        sx={{ width: "100%" }}
        component="img"
        height="350"
        image={props.imageUrl}
        alt="img"
      />
      <CardContent>
        <Box sx={{ display: "flex", gap: 10, marginTop: "25px" }}>
          <Button
            sx={{ backgroundColor: "#ff3076" }}
            variant="contained"
            onClick={() => dispatch(deleteOneActivity(props.id))}
          >
            Delete activity
          </Button>
          <BasicModal id={props.id} />
        </Box>
      </CardContent>
    </Card>
  );
};
export default MyPosts;
