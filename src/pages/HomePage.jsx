import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 5,
        margin: 0,
        maxWidth: 2000,
      }}
    >
      <Banner />
      <Grid item xs={12}>
        <h2 className="homepage-section-header">
          Entertainment and development ideas for your little ones
        </h2>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/CuL6YJpiAIg"
            title="YouTube video player"
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Learn the basics of how to play the Piano and how to play a simple
              pattern in just a few minutes!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/7gl3PogKfuA"
            title="YouTube video player"
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Learn how to make clay projects from slabs.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/rZd_hzFWVNc"
            title="YouTube video player"
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Short clip of the De Parade Festival
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/VDuX74tD2EE"
            title="YouTube video player"
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Great tutorial to start learning swimming!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/sD_FrkKcjwk"
            title="YouTube video player"
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Ga mee op virtuele reis door de vaste tentoonstelling van het
              Joods Historisch Museum.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/slYX1OUKuhI"
            title="YouTube video player"
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Art classes for kids!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/Pyb0z_YQjjI"
            title="YouTube video player"
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              A collection of games for kindergarten (or early primary)
              teachers.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/p0zcy8FSfcQ"
            title="YouTube video player"
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              In this video, there are both fun and educational preschool
              activities for your toddlers.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/8ZEMXpAvf3s"
            title="YouTube video player"
          />

          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Kids Learning Games Healthy Game Activity For Physical Development
              - Kids Learning Games .
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
