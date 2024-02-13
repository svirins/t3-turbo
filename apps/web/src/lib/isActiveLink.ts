export function isActiveLink(href: string, currentPath: string): string {
  if (href === currentPath) {
    return "active";
  }
  return "";
}
