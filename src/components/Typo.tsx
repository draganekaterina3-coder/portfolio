import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { nb } from "@/lib/typography";

// Runs nb() over every text node inside `children` (links, <strong>, …), for
// copy that's written inline in JSX where wrapping each string by hand would
// be noisy.
function walk(node: ReactNode): ReactNode {
  if (typeof node === "string") return nb(node);
  if (Array.isArray(node)) return Children.map(node, walk);
  if (isValidElement<{ children?: ReactNode }>(node) && node.props.children !== undefined) {
    return cloneElement(node, undefined, walk(node.props.children));
  }
  return node;
}

export default function Typo({ children }: { children: ReactNode }) {
  return <>{walk(children)}</>;
}
