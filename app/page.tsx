import TitleCard from '@/components/TitleCard';
import SocialCard from '@/components/SocialCard';
import { socials } from '@/lib/config';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-24 pt-0 ">
      <TitleCard />
      <div className="flex flex-col gap-5">
        {socials.map((social) => (
          <SocialCard
            key={social.title}
            title={social.title.toLowerCase()}
            description={social.description}
            href={social.href}
          />
        ))}
      </div>
    </div>
  );
}
