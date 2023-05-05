import { useMemo } from 'react';
import {
  GoogleMap,
  Marker,
  useLoadScript,
} from '@react-google-maps/api';

const Map = () => {
  const position = useMemo(() => ({ lat: 40.1872, lng: 44.5152 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });
  return (
    <>
      {isLoaded && (
        <GoogleMap zoom={10} center={position} mapContainerClassName="map-cont">
          <Marker position={position} />
        </GoogleMap>
      )}
    </>
  );
};
export default Map;
