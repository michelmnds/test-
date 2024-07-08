import { useState, useEffect } from 'react';
import { isDesktop, isMobile, isTablet } from 'react-device-detect';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const detectDeviceType = () => {
      if (isTablet) {
        return 'tablet';
      } else if (isMobile) {
        return 'mobile';
      } else if (isDesktop) {
        return 'desktop';
      } else {
        return 'unknown';
      }
    };

    const detectedDeviceType = detectDeviceType();
    setDeviceType(detectedDeviceType);
  }, []);

  return deviceType;
};

export default useDeviceType;
