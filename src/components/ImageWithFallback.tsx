"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { BRANDED_FALLBACK } from "@/data/images";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
}

export default function ImageWithFallback({
  src,
  fallbackSrc = BRANDED_FALLBACK,
  alt,
  ...rest
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);
  const [trackedSrc, setTrackedSrc] = useState(src);

  if (src !== trackedSrc) {
    setTrackedSrc(src);
    if (errored) setErrored(false);
  }

  return (
    <Image
      {...rest}
      src={errored ? fallbackSrc : src}
      alt={alt}
      onError={() => setErrored(true)}
    />
  );
}
