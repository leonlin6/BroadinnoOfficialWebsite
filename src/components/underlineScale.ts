const clamp = (value: number) => Math.max(0, Math.min(1, value));

export function getUnderlineScale(centerY: number, viewportHeight: number) {
  // Viewport Y grows downward; scrolling moves the title toward smaller Y values.
  const growStartY = viewportHeight * .50;
  const growDistance = 100;
  const shrinkStartY = viewportHeight * .10;
  const shrinkEndY = viewportHeight * .025;

  const growProgress = clamp((growStartY - centerY) / growDistance);
  const shrinkProgress = clamp((shrinkStartY - centerY) / (shrinkStartY - shrinkEndY));
  return Math.min(growProgress, 1 - shrinkProgress);
}
