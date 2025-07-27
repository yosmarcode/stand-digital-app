"use client"
import Image, { StaticImageData } from "next/image";

export function ImageComponents({
  src,
  alt,
  className,
  width,
}: {
  src: string | StaticImageData;
  alt: string;
  className: string;
  width?: number;
}) {
  return <Image src={src} alt={alt} className={`${className}`} width={width} height={width} />;
}
