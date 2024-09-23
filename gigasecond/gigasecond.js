//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (startDate) => {
  const GIGASECOND_IN_MS = 1e12;
  const newDate = new Date(startDate.getTime() + GIGASECOND_IN_MS);

  return newDate;
};
