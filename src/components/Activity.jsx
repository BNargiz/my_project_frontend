import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { GiAges } from "react-icons/gi";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Activity = (props) => {
  return (
    <Card
      sx={{
        marginBottom: 7,
        maxWidth: 800,
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          boxSizing: "border-box",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 3,
        }}
      >
        <CardMedia
          sx={{ width: "60%", display: "flex", flex: "none" }}
          component="img"
          height="350"
          image={props.imageUrl}
          alt="img"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "40%",
            flex: "none",
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ color: "#56225e " }}
          >
            {props.title}
          </Typography>

          <Typography variant="body1">
            <HiOutlineLocationMarker /> {props.location}
          </Typography>
          <Typography variant="body1">
            <MdDateRange /> {"  "}
            {props.date}
          </Typography>
          <Typography variant="body1">
            <GiAges /> {"   "}
            {props.ageRange}
          </Typography>

          <Link to={`/activities/${props.id}`}>
            <CardActions>
              <Button size="small">Read More </Button>
            </CardActions>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Activity;
