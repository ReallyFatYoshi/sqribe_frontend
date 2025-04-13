/**
 * Converts a string to snake_case.
 * 
 * @param input - The string to convert.
 * @returns The snake_case string.
 */
export default function (input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Insert underscore between lowercase and uppercase letters
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9_]/g, '') // Remove non-alphanumeric characters except underscores
    .replace(/__+/g, '_') // Remove consecutive underscores
    .replace(/^_+|_+$/g, ''); // Remove leading and trailing underscores
}
