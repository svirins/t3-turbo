export function isActiveLink(href: string, currentPath: string): boolean {
  if (href === currentPath) {
    return true;
  }
  // if (href === "/groups" && currentPath.search("groups") > 0) {
  //   return true;
  // }
  return false;
}
