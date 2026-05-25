import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";

// FIX ICON ISSUE
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MapPicker = ({ setLocationData, setShowMap }) => {

  const [position, setPosition] = useState({
    lat: 13.0827,
    lng: 80.2707,
  });

  const [address, setAddress] = useState("");

  // ✅ GET ADDRESS
  const fetchAddress = async (lat, lng) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );

    const data = await res.json();
    const a = data.address || {};

    setAddress(data.display_name || "");

    return {
      street: a.road || "",
      city: a.city || a.town || a.village || "",
      landmark: a.neighbourhood || "",
      pincode: a.postcode || "",
      fullAddress: data.display_name || "",
    };
  };

  useEffect(() => {
    fetchAddress(position.lat, position.lng);
  }, [position]);

  // MAP EVENTS
  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });

    return (
      <Marker
        position={position}
        draggable={true}
        eventHandlers={{
          dragend: (e) => {
            const pos = e.target.getLatLng();
            setPosition(pos);
          },
        }}
      />
    );
  }

  // CONFIRM
  const handleConfirm = async () => {
    const data = await fetchAddress(position.lat, position.lng);

    setLocationData(data);
    setShowMap(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white w-[95%] max-w-3xl rounded-2xl overflow-hidden">

        {/* MAP */}
        <div className="h-[400px] w-full">
          <MapContainer
            center={position}
            zoom={13}
            className="h-full w-full"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationMarker />
          </MapContainer>
        </div>

        {/* INFO */}
        <div className="p-4">

          <p className="text-sm text-gray-600">
            Selected Address
          </p>

          <p className="text-sm font-semibold mt-1">
            {address}
          </p>

          <div className="flex gap-3 mt-4">

            <button
              onClick={() => setShowMap(false)}
              className="w-full bg-gray-200 py-2 rounded-xl"
            >
              Cancel
            </button>

            <button
              onClick={handleConfirm}
              className="w-full bg-teal-500 text-white py-2 rounded-xl hover:bg-teal-700"
            >
              Use This Location
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default MapPicker;