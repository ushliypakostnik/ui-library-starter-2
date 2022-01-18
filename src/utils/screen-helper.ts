// Viewport utils module
//////////////////////////////////////////////////////

import { DESIGN } from './constants';

const ScreenHelper = (() => {
  const TABLET = DESIGN.BREAKPOINTS.tablet;
  const DESKTOP = DESIGN.BREAKPOINTS.desktop;

  const isMobile = () => {
    return window.matchMedia(`(max-width: ${TABLET - 1}px)`).matches;
  };

  const isTablet = () => {
    return window.matchMedia(
      `(min-width: ${TABLET}px) and (max-width: ${DESKTOP - 1}px)`,
    ).matches;
  };

  const isDesktop = () => {
    return window.matchMedia(`(min-width: ${DESKTOP}px)`).matches;
  };

  const getOrientation = () => {
    if (window.matchMedia('(orientation: portrait)').matches) {
      return 'portrait';
    }
    return 'landscape';
  };

  return {
    isMobile,
    isTablet,
    isDesktop,
    getOrientation,
  };
})();

export default ScreenHelper;
