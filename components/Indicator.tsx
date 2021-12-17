import React from "react";
import { View, StyleSheet } from "react-native";

interface IndicatorProps {
  isActive: boolean;
}

const Indicator = ({ isActive }: IndicatorProps) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isActive ? "darksalmon" : "white",
      }}
    />
  );
};
export default Indicator;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    height: 10,
    width: 10,
    borderRadius: 5,
  },
});
