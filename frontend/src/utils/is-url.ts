/**
 *
 * @param string String to validate
 * @returns true/false
 */
export function isUrl(string: string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
}
