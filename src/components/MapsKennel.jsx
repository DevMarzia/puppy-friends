import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapsKennel() {
  // Coordinate iniziali della mappa
  const posizioneIniziale = [42.5, 12.5];

  return (
    <MapContainer
      center={posizioneIniziale}
      zoom={6}
      style={{
        height: "250px",
        width: "100%",
        border: "2px solid #685243",
        borderRadius: "10px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* coordinate del rifugio */}
      <Marker position={[40.175483, 18.014486]}>
        <Popup>
          PuppyFreinds. <br /> I nostri cani vi aspettano!
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapsKennel;
