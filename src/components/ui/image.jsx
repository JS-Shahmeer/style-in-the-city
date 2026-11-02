"use client";

import * as React from "react";

const FALLBACK_IMAGE_URL =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><rect width='4' height='5' fill='%23F7F7F7'/></svg>";

/**
 * Plain, host-agnostic image (works on Vercel and Hostinger alike).
 * Lazy-loads by default; pass loading="eager" / fetchPriority="high" for
 * above-the-fold images. Falls back to a neutral swatch if a file is missing.
 */
const Image = React.forwardRef(
  (
    {
      src,
      alt = "",
      loading = "lazy",
      decoding = "async",
      // Props kept for API compatibility with the original component.
      fittingType: _fittingType,
      originWidth: _originWidth,
      originHeight: _originHeight,
      focalPointX: _focalPointX,
      focalPointY: _focalPointY,
      quality: _quality,
      onError,
      ...props
    },
    ref
  ) => {
    const [failed, setFailed] = React.useState(false);
    React.useEffect(() => setFailed(false), [src]);

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={ref}
        src={!src || failed ? FALLBACK_IMAGE_URL : src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onError={(event) => {
          setFailed(true);
          onError?.(event);
        }}
        {...props}
      />
    );
  }
);
Image.displayName = "Image";

export { Image };
