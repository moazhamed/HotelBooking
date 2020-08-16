import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import HotelBookingScreen from './src/screens/HotelBookingScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import TransactionSuccessScreen from './src/screens/TransactionSuccessScreen';
import TransactionFailedScreen from './src/screens/TransactionFailedScreen copy';

const switchNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  startFlow: createStackNavigator({
    Onboarding: OnBoardingScreen,
    Login: LoginScreen,
  }),
  mainFlow: createStackNavigator({
    Home: HomeScreen,
    Description: DetailsScreen,
    Booking: HotelBookingScreen,
    Profile: ProfileScreen,
    Success: TransactionSuccessScreen,
    Fail: TransactionFailedScreen
  })

})



export default createAppContainer(switchNavigator)