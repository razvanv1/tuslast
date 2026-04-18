import { forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";
import { useLocalizedPath } from "@/lib/useLocalizedPath";

/**
 * Drop-in replacement for react-router-dom's <Link> that auto-prefixes
 * EN-canonical paths with /ro when the active language is Romanian.
 * External URLs (mailto:, tel:, https:) and same-page anchors pass through.
 *
 * Usage: import { Link } from "@/components/LocalizedLink";
 */
const LocalizedLink = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...rest }, ref) => {
  const lp = useLocalizedPath();
  const target = typeof to === "string" ? lp(to) : to;
  return <Link ref={ref} to={target} {...rest} />;
});

LocalizedLink.displayName = "LocalizedLink";

export { LocalizedLink as Link };
export default LocalizedLink;
