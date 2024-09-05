import TitleCard from '@/components/TitleCard';
import SocialCard from '@/components/SocialCard';
import Footer from '@/components/Footer';
import AffiliateCard from '@/components/AffiliateCard';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen pt-0">
        <TitleCard />
        <hr className="my-4" />

        <h2 className="text-center text-2xl font-semibold">Socials</h2>
        <div className="flex flex-col w-full justify-center gap-5 py-4 px-6 md:px-12">
          <SocialCard type="twitter" description="Follow me on X / Twitter" />
          <SocialCard type="youtube" description="Subscribe to my YouTube" />
          <SocialCard type="tiktok" description="Follow me on TikTok" />
          <SocialCard type="instagram" description="Follow me on Instagram" />
          <SocialCard type="github" description="Check out my GitHub" />
        </div>
        <hr className="my-4" />

        <h2 className="text-center text-2xl font-semibold">Support Me</h2>
        <div className="flex flex-col w-full justify-center gap-5 py-4 px-6 md:px-12">
          <AffiliateCard type="nuphy" description="10% off at NuPhy - keyboards and more" />
          <AffiliateCard type="screenStudio" description="Screen Studio - the best screen recorder" />
        </div>
        <hr />

        <Footer />
      </div>
    </>
  );
}
