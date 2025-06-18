import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

function ComfortMap() {
    const center = useMemo(() => ({lat: 48.921223, lng: 24.769727}), [])
    const containerStyle = {
        width: '100%',
        height: '400px'
    }
    const { isLoaded } = useLoadScript({googleMapsApiKey: 'AIzaSyBFwcX6iO3FuHpNP9GDev71jFbCQls_tnE'})
    if (!isLoaded){
        return (<div>Loading...</div>)
    } else {
        return (
                <GoogleMap
                    zoom={10}
                    center={center}
                    mapContainerStyle = {containerStyle}>
                    <Marker position={center} title={'GUESTHOUSES'}/>
                </GoogleMap>
        )
    }
    
}

export default ComfortMap