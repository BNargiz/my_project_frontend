import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { selectActivities } from "../store/activity/selector";

const Map = () => {
  const activities = useSelector(selectActivities);
  console.log("a", activities);
  return (
    <MapContainer
      style={{
        border: "2px solid",
        borderRadius: "10px",
        height: "50vw",
        width: "60vw",
        maxWidth: "325px",
        maxHeight: "350px",
        marginTop: 20,
      }}
      center={[52.36994, 4.906]}
      zoom={9}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {activities.map((a) => (
        <Marker key={a.id} position={[a.latitude, a.longitude]}>
          {/* when we click on the marker, we see the popup */}
          <Popup>
            <img
              alt={a.title}
              style={{ width: "100px", borderRadius: "0.5em" }}
              src={a.imageUrl}
            />
            <p>{a.title}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
