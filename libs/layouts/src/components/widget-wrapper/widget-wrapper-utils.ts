function findMenuItemById(menu, id): any {
  for (const item of menu) {
    if (item.id === id) return item;
    if (item.children && item.children.length > 0) {
      const found = findMenuItemById(item.children, id);
      if (found) return found;
    }
  }
  return null;
}

export function getWidgetTitle(menu, targetHref) {
  const widgetTitle: string[] = [];

  if (targetHref === '/home') return widgetTitle;

  function findMenuItem(items, parentId) {
    for (const item of items) {
      if (item.v3_href === targetHref) {
        let currentParentId = parentId;
        while (currentParentId) {
          const parent = findMenuItemById(menu, currentParentId);
          if (parent) {
            widgetTitle.unshift(parent.title);
            currentParentId = parent.parentId;
          } else {
            break;
          }
        }

        widgetTitle.push(item.title);
        return true;
      }

      if (item.children && item.children.length > 0) {
        if (findMenuItem(item.children, item.id)) {
          return true;
        }
      }
    }
    return false;
  }

  findMenuItem(menu, null);
  return widgetTitle;
}
