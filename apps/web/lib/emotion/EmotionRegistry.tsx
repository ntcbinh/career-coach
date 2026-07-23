"use client";

import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

/**
 * Collects Emotion styles produced during SSR and flushes them into the
 * document via `useServerInsertedHTML`, instead of letting Emotion inject
 * <style> tags inline in the streamed body. Inline injection puts a
 * <style data-emotion> node in a DOM position the client never renders,
 * which causes a hydration mismatch. Chakra UI v3 renders through Emotion,
 * so it needs this registry in the App Router.
 */
export function EmotionRegistry({ children }: Props) {
  const [cache] = useState(() => {
    const cache = createCache({ key: "css" });
    // compat mode tells Emotion to defer insertion to useServerInsertedHTML
    // rather than writing <style> tags into the stream itself.
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    const inserted = Object.keys(cache.inserted);
    if (inserted.length === 0) return null;
    return (
      <style
        data-emotion={`${cache.key} ${inserted.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: inserted.map((name) => cache.inserted[name]).join(""),
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
