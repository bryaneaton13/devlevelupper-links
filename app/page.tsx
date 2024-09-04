import TitleCard from '@/components/TitleCard';
import SocialCard from '@/components/SocialCard';
import { socials } from '@/lib/config';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen pt-0">
        <TitleCard />
        <div className="flex flex-col w-full justify-center gap-5 p-6 md:p-12">
          {socials.map((social) => (
            <SocialCard key={social.type} type={social.type} description={social.description} href={social.href} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
