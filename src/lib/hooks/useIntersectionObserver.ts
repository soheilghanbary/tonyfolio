import { useEffect, useState } from "react";

export default function useIntersectionObserver(
  elementRef: React.RefObject<HTMLElement>,
  { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}
