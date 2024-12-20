import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC, useMemo } from "react";
import { imageData } from "@utils/dummyData";
import AutoScroll from "@homielab/react-native-auto-scroll";
import { screenWidth } from "@utils/Scaling";

const ProductSlider = () => {
  const rows = useMemo(() => {
    let results = [];
    for (let i = 0; i < imageData.length; i += 4) {
      results.push(imageData.slice(i, i + 4));
    }
    return results;
  }, [imageData]);

  return (
    <View pointerEvents="none">
      <AutoScroll style={styles.autoScroll} endPaddingWidth={0} duration={5000}>
        <View style={styles.gridContainer}>
          {rows.map((row, rowIndex) => {
            return <MemoizedRow key={rowIndex} row={row} rowIndex={rowIndex} />;
          })}
        </View>
      </AutoScroll>
    </View>
  );
};

const Row: FC<{ row: typeof imageData; rowIndex: number }> = ({
  row,
  rowIndex,
}) => {
  return (
    <View style={styles.row}>
      {row.map((image, imageIndex) => {
        const horizontalShift = rowIndex % 2 === 0 ? -18 : 18;
        return (
          <View
            key={imageIndex}
            style={[
              styles.itemContainer,
              { transform: [{ translateX: horizontalShift }] },
            ]}
          >
            <Image source={image} style={styles.image} />
          </View>
        );
      })}
    </View>
  );
};

const MemoizedRow = React.memo(Row);

export default ProductSlider;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    width: screenWidth * 0.26,
    height: screenWidth * 0.26,
    marginBottom: 12,
    marginHorizontal: 10,
    backgroundColor: "#e9f7f8",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  autoScroll: {
    position: "absolute",
    zIndex: -2,
  },
  gridContainer: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  },
  row: {
    flexDirection: "row",
  },
});
