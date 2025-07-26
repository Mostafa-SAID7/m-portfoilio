"use client";

import dynamic from "next/dynamic";
import { CSSProperties } from "react";

const LordIconClient = dynamic(() => import("./LordIconClient"), { ssr: false });

interface LordIconProps {
  src: string;
  trigger?: string;
  colors?: string;
  style?: CSSProperties;
}

export default function LordIcon({ src, trigger = "hover", colors, style }: LordIconProps) {
  return <LordIconClient src={src} trigger={trigger} colors={colors} style={style} />;
}
