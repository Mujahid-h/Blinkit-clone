// import StackActions, { useRouter } from "expo-router";

// /**
//  * Custom hook to provide navigation actions
//  */
// export const useNavigationUtils = () => {
//   const router = useRouter();

//   // Navigate to a screen, pushing it to the top of the stack
//   const navigate = (screen: string, params?: object) => {
//     router.push({ pathname: screen, params });
//   };

//   // Replace the current screen with a new one
//   const replace = (screen: string, params?: object) => {
//     router.replace({ pathname: screen, params });
//   };

//   // Go back to the previous screen in the stack
//   const goBack = () => {
//     router.back();
//   };

//   // Reset navigation to the root and navigate to a specific screen
//   const resetAndNavigate = (screen: string, params?: object) => {
//     router.dispatch(StackActions.popToTop()); // Clear the stack
//     router.replace({ pathname: screen, params }); // Navigate to the specified screen
//   };

//   // Pop to the root screen in the stack without navigating elsewhere
//   const popToTop = () => {
//     router.popToTop();
//   };

//   return { navigate, replace, goBack, resetAndNavigate, popToTop };
// };
