"use client";

import { useEffect } from "react";

/*
  Store links that depend on the device. Cards render with the App Store URL
  (good for iPhone, iPad and Mac); any link carrying `data-android-href` is
  switched to its Play Store URL for everyone else (Android, Windows, Linux).
  Runs after load, so the server-rendered HTML always has a working link.
*/
export default function StoreLinks() {
  useEffect(() => {
    const isApple = /iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent);
    if (isApple) return;
    document.querySelectorAll<HTMLAnchorElement>("a[data-android-href]").forEach((a) => {
      const url = a.dataset.androidHref;
      if (url) a.href = url;
    });
  }, []);

  return null;
}
