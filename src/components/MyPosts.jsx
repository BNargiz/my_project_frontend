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
        maxWidth: 700,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        padding: 6,
        margin: 5,
        textAlign: "justify",
      }}
    >
      <Typography gutterBottom variant="h3" component="div">
        {props.title}
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
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
        sx={{ maxWidth: 300 }}
        component="img"
        height="350"
        image={props.imageUrl}
        alt="img"
      ></CardMedia>
      <CardContent>
        <Box sx={{ display: "flex", gap: 10 }}>
          <Button onClick={() => dispatch(deleteOneActivity(props.id))}>
            Delete post
          </Button>
          <BasicModal id={props.id} />
        </Box>
      </CardContent>
    </Card>
  );
};
export default MyPosts;
