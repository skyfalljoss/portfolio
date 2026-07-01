const getFrameNumber = (path) => {
  const match = path.match(/ezgif-frame-(\d+)\.jpg$/);

  return Number(match?.[1] ?? 0);
};

const sortFrames = (frameEntries) =>
  Object.entries(frameEntries)
    .sort(([pathA], [pathB]) => getFrameNumber(pathA) - getFrameNumber(pathB))
    .map(([, src]) => src);

const lightFrameModules = import.meta.glob('../assets/images/light-frame/*.jpg', {
  eager: true,
  import: 'default',
});

const darkFrameModules = import.meta.glob('../assets/images/dark-frame/*.jpg', {
  eager: true,
  import: 'default',
});

export const lightBackgroundFrames = sortFrames(lightFrameModules);
export const darkBackgroundFrames = sortFrames(darkFrameModules);
