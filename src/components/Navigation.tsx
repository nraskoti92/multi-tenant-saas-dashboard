import { NavLink } from "react-router-dom";
import { PIcon, type IconName } from "@porsche-design-system/components-react";
import { NAVIGATION_ITEMS } from "../data/mockData";

export function Navigation() {
  // TODO: Filter NAVIGATION_ITEMS so that only features the current user can access are shown in the nav.
  const accessibleItems = NAVIGATION_ITEMS;

  return (
    <nav className="w-80 bg-surface border-r-2 border-contrast-low min-h-screen p-fluid-md">
      <ul className="flex flex-col gap-static-xs">
        {accessibleItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-static-md p-static-md rounded-md transition-colors ${
                  isActive
                    ? "bg-canvas text-primary"
                    : "text-contrast-medium hover:bg-canvas hover:text-primary"
                }`
              }
            >
              <PIcon
                name={item.icon as IconName}
                size="medium"
                aria-hidden="true"
              />
              <span className="prose-text-md">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
