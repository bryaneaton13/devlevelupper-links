import { ModeToggle } from './ModeToggle';
import Image from 'next/image';
import Link from 'next/link';

export function NavMenu() {
  return (
    <div className="flex items-start fixed top-0 p-4 gap-4 w-full">
      <Link href="/">
        <Image
          src="/assets/devlevelupper_logo.png"
          alt="DevLevelUpper"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>

      <div className="flex-1" />
      <ModeToggle />
    </div>
  );
}
