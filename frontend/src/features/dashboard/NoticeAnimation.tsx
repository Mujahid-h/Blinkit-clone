import { StyleSheet, View, Animated as RNAnimated } from "react-native";
import React, { FC } from "react";
import { NoticeHeight } from "@utils/Scaling";
import Notice from "@components/dashboard/Notice";

const NOTICE_HEIGHT = -(NoticeHeight + 12);

const NoticeAnimation: FC<{
  NoticePostion: any;
  children: React.ReactElement;
}> = ({ NoticePostion, children }) => {
  return (
    <View style={styles.container}>
      <RNAnimated.View
        style={[
          styles.noticeContainer,
          { transform: [{ translateY: NoticePostion }] },
        ]}
      >
        <Notice />
      </RNAnimated.View>

      <RNAnimated.View
        style={[
          styles.contentContainer,
          {
            paddingTop: NoticePostion.interpolate({
              inputRange: [NOTICE_HEIGHT, 0],
              outputRange: [0, NOTICE_HEIGHT + 10],
            }),
          },
        ]}
      >
        {children}
      </RNAnimated.View>
    </View>
  );
};

export default NoticeAnimation;

const styles = StyleSheet.create({
  noticeContainer: {
    width: "100%",
    zIndex: 999,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
