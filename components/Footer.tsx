import { MainChannelName } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-background rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          <a href="/" className="hover:underline">
            {MainChannelName}
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
