// AIzaSyCtkYNyrw9YPYcMYCyiTGM0-WDLbqdTiO0
import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

function Map() {
    const center = useMemo(() => ({lat: 48.906305, lng: 24.662879}), [])
    const containerStyle = {
        width: '100%',
        height: '400px'
    }
    const { isLoaded } = useLoadScript({googleMapsApiKey: 'AIzaSyAw-AVtvpx9nhS6rhXAR4qJ3af03KXhTj8'})
    if (!isLoaded){
        return (<div>Loading...</div>)
    } else {
        return (
            <div className="map-container">
                <h2 className="main-title map-title">Де нас знайти</h2>
                <GoogleMap
                    zoom={12}
                    center={center}
                    mapContainerStyle = {containerStyle}>
                    <Marker position={center} title={'West Town'}/>
                </GoogleMap>
            </div>
        )
    }
    
}

export default Map