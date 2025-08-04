"use client"
import Image, { StaticImageData } from "next/image";

export function ImageComponents({
  src,
  alt,
  className,
  width,
  height,
}: {
  src: string | StaticImageData;
  alt: string;
  className: string;
  width?: number;
  height?: number;
}) {
  return <Image src={src} alt={alt} className={`${className}`} width={width ?? 200} height={height ?? 200} />;
}
