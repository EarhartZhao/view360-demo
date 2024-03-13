const options = {
  // rotate: { duration: 1000 },
  zoom: { duration: 500 },
  zoomRange: { min: 0.4, max: 2 },
  // yawRange: { min: -180, max: 180 },
  // pitchRange: { min: -35, max: 35 },
  // disableContextMenu: true,
  // disablePitch: true,
  rotate: { scrollable: true },
  // rotateControl: { scrollable: false },
  // 陀螺仪
  // gyro: false,
  scrollable: true,
  autoInit: false,
  // autoplay: {
  //   canInterrupt: true,
  //   delay: 3000,
  //   delayOnMouseLeave: 1000,
  //   disableOnInterrupt: true,
  //   speed: 0.4,
  // },
  // initialPitch: 60,
  // initialZoom:0.8,
  initialYaw: 0,
  autoResize: true,
  hotspot: { zoom: true },
};

export { options };
