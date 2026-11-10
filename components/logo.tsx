import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Lumi Key home">
      <Image className="brand-logo" src="/lumi-key-logo.jpg" alt="" width={1254} height={1254} sizes="40px" />
      <span>Lumi Key</span>
    </Link>
  );
}