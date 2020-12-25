import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from "../../components/CustomMarker";
import PostCarouselItem from "../../components/PostCarouselItem";

import places from '../../../assets/data/feed';

const SearchResultsMaps = (props) => {

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatlist = useRef();
  const map = useRef();
  // using hook Ref to prevent error
  // Invariant Violation: Changing onViewableItemsChanged on the fly is not supported
  const viewConfig = useRef({ itemVisiblePercentThreshold: 72 })
  const onViewChanged = useRef(({ viewableItems }) => {
    // if no item shown on the screen
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id)
    }
  })

  const width = useWindowDimensions().width;

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId)
    flatlist.current.scrollToIndex({ index })

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }
    // to move map to selected item
    map.current.animateToRegion(region);
  }, [selectedPlaceId])

  return (
    <View style={{ width: '100%', height: '100%' }}>
      {/* Need to Enable it jn billing account og Google developer */}
      <MapView
        ref={map}
        style={{ width: '100%', height: '100%' }}
        // need to be sure that google maps would been used
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />)
        )}
      </MapView>

      <View style={{ position: 'absolute', bottom: 10 }}>
        <FlatList
          ref={flatlist}
          data={places}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          // viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
          onViewableItemsChanged={onViewChanged.current}
        // onViewableItemsChanged={(value) => console.log(value)}
        />
      </View>
    </View>
  );
}

export default SearchResultsMaps;
