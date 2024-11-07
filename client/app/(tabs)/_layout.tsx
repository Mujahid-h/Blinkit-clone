// import React from "react";
// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerShown: false,
//       }}
//     />
//   );
// }

import React from "react";
import AppNavigator from "./index";

export default function Layout() {
  return <AppNavigator />;
}
