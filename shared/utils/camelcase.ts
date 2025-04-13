/**
 * Converts a string to camel case.
 * 
 * @param input - The string to convert.
 * @returns The camel case string.
 */
export default function (input: string): string {
  return input
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) return ""; // Remove spaces and underscores
      return index === 0 ? match.toLowerCase() : match.toUpperCase(); // Convert first character to lowercase, others to uppercase
    })
    .replace(/[^a-zA-Z0-9]/g, ""); // Remove non-alphanumeric characters
}