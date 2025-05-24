export function searchMenuItems(menu, query) {
  const result: any[] = [];
  const parentIds: any[] = [];

  if (!menu) return { result: null, parentIds: null };

  if (query?.trim() === '') {
    parentIds.splice(0, parentIds.length);
  }

  for (const item of menu) {
    if (item.title.includes(query)) {
      result.push(item);
      parentIds.push(item.id.toString());
    } else if (item.children && item.children.length > 0) {
      const childResult = searchMenuItems(item.children, query).result;
      if (childResult && childResult.length > 0) {
        result.push({ ...item, children: childResult });
        parentIds.push(item.id.toString());
      }
    }
  }
  return { result, parentIds };
}

export function findActiveMenuItem(menuItems, currentUrl) {
  if (!menuItems) return null;

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].v3_href && currentUrl && currentUrl === menuItems[i].v3_href) {
      return menuItems[i];
    } else if (menuItems[i].children) {
      const subMenuActiveItem = findActiveMenuItem(menuItems[i].children, currentUrl);
      if (subMenuActiveItem) {
        return subMenuActiveItem;
      }
    }
  }
  return null;
}

export function findActiveParentKeys(data, targetKey) {
  let parentChain: string[] = [];

  function recursiveSearchParentNode(nodes, chain) {
    for (const node of nodes) {
      const newChain = [...chain, node.id.toString()];
      if (node.id === targetKey) {
        parentChain = newChain;
        return true;
      }
      if (node.children && recursiveSearchParentNode(node.children, newChain)) {
        return true;
      }
    }
    return false;
  }
  recursiveSearchParentNode(data, []);
  return parentChain;
}

export function isPathAllowed(menu, path) {
  // Helper function to recursively search the menu
  // if (path === '/home') return true;

  function searchMenu(items) {
    if (path === '/home' || path === '/profile' || path === '/mobile-services-menu') return true;
    for (const item of items) {
      if (item.v3_href === path) {
        return true; // Path found
      }
      if (item.children && searchMenu(item.children)) {
        return true; // Path found in children
      }
    }
    return false; // Path not found
  }

  return searchMenu(menu);
}
