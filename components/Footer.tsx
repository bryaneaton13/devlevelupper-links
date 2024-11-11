import { MainChannelName } from '@/lib/config';
import { ModeToggle } from './ModeToggle';

export default function Footer() {
  return (
    <footer className="bg-background rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-3 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          <a href="/" className="hover:underline">
            {MainChannelName}
          </a>
        </span>
        <ModeToggle />
      </div>
    </footer>
  );
}
