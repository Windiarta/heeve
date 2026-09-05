import { useEffect, useState } from "react";

const basePath = import.meta.env.PROD ? "/heeve" : "";

function stripBase(pathname: string) {
  return pathname.startsWith(basePath)
    ? pathname.slice(basePath.length) || "/"
    : pathname;
}

export function useRoute() {
  const [path, setPath] = useState(() => stripBase(location.pathname));

  useEffect(() => {
    const onPop = () => setPath(stripBase(location.pathname));
    addEventListener("popstate", onPop);
    return () => removeEventListener("popstate", onPop);
  }, []);

  const navigate = (next: string) => {
    history.pushState({}, "", `${basePath}${next}`);
    setPath(next);
    scrollTo(0, 0);
  };

  return { path, navigate };
}
