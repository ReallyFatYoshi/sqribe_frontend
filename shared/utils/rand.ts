/**
 * Rand is a random number between given min and max values.
 * @param min {number} - The maximum value (inclusive).
 * @param max {number} - The minimum value (inclusive).
 * @returns {number}
 **/
export default function range(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
