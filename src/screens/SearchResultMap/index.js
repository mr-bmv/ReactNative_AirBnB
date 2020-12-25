import React, { useState } from 'react'
import { View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import places from '../../../assets/data/feed'
import CustomMarker from '../../components/CustomMarker';

const SearchResultMap = () => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    return (
        <View style={{ width: '100%', height: "100%" }}>
            <MapView
                style={{ width: '100%', height: "100%" }}
                // need to be sure that google maps would been used
                provider={PROVIDER_GOOGLE}
                region={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                }}
            >
                {places.map((place) => (
                    <CustomMarker
                        coordinate={place.coordinate}
                        price={place.newPrice}
                        isSelected={place.id === selectedPlaceId}
                        onPress={() => setSelectedPlaceId(place.id)}
                    />
                ))}

            </MapView>
        </View>
    )
}

export default SearchResultMap;
