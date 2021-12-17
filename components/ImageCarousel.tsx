import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
  ViewToken,
  Text,
} from "react-native";
import Indicator from "./Indicator";

interface ImageCarouselProps {
  imageSrcs: string[];
}

const ImageCarousel = ({ imageSrcs }: ImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>();

  const handleViewedImageChange = useCallback(
    (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
      if (info.viewableItems.length > 0) {
        setActiveIndex(info.viewableItems[0].index);
      }
    },
    []
  );

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
    minimumViewTime: 10,
  });

  return (
    // add some temporary margin for now so the text is
    // not behind the status bar
    <View style={{ marginTop: 250 }}>
      <FlatList
        snapToInterval={Dimensions.get("screen").width}
        viewabilityConfig={viewabilityConfig.current}
        onViewableItemsChanged={handleViewedImageChange}
        decelerationRate="fast"
        horizontal
        data={imageSrcs}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ImageBackground style={styles.image} source={{ uri: item }} />
        )}
      />
      <View style={styles.indicatorContainer}>
        {imageSrcs.map((_, index) => (
          <Indicator isActive={index === activeIndex} key={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get("screen").height * 0.4,
    width: Dimensions.get("screen").width,
  },
  indicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 8,
    alignSelf: "center",
  },
});

export default ImageCarousel;
