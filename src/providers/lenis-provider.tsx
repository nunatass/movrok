"use client";

import React, { useRef, FC } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

type LenisScrollProviderProps = {
  children: React.ReactNode;
};

const LenisWrapper = ReactLenis as unknown as React.FC<any>; // ✅ fixes TS issue

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<any>(null); // ✅ useRef<any> since LenisRef isn't exported

  return (
    <LenisWrapper
      root
      ref={lenisRef}
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
    >
      {children}
    </LenisWrapper>
  );
};

export default LenisScrollProvider;
