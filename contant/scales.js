import {Dimensions} from 'react-native';
const dimensions = {};
const {width, height} = Dimensions.get('window');
dimensions.window = {
  width,
  height,
};
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;
const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
dimensions.spacing = {
  vertical: 10,
  horizontal: 15,
};
const DEVICE = {
  WIDTH: width,
  HEIGHT: height,
};
dimensions.borderRadius = 9;
export {dimensions, scale, verticalScale, moderateScale, DEVICE};
