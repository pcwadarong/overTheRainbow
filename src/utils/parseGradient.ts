export const parseGradient = (gradient: string) => {
  const stops = [];
  const regex = /rgba?\((\d+),\s*(\d+),\s*(\d+),\s*(\d*(?:\.\d+)?)\)/g;
  let match;

  while ((match = regex.exec(gradient)) !== null) {
    const [, r, g, b, a] = match;
    stops.push(`rgba(${r}, ${g}, ${b}, ${a})`);
  }

  return stops;
};
