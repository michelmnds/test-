import { isAndroid, isIOS } from 'react-device-detect';

const usePhoneType = () => {
  if (isAndroid) {
    return 'android';
  } else if (isIOS) {
    return 'ios';
  } else {
    console.log('Unsupported device');
  }
};

export default usePhoneType;
