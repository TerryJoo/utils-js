export function str2b(str: string) {
  switch (str.toLowerCase()) {
    case "":
    case "0":
    case "null":
    case "undefined":
    case "false":
    case "NaN":
    case "Invalid Date":
      return false;
    default:
      return true;
  }
}
