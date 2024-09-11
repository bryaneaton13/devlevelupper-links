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
          {/* <SocialCard type="twitter" description="Follow me on X / Twitter" /> */}
          <SocialCard type="youtube" description="YouTube" />
          <SocialCard type="tiktok" description="TikTok" />
          <SocialCard type="instagram" description="Instagram" />
          <SocialCard type="github" description="GitHub" />
        </div>
        <hr className="my-4" />

        <h2 className="text-center text-2xl font-semibold">Support Me</h2>
        <div className="flex flex-col w-full justify-center gap-5 py-4 px-6 md:px-12">
          <AffiliateCard type="nuphy" description="NuPhy - mechanical keyboards and more" />
          <AffiliateCard type="screenStudio" description="Screen Studio - the best screen recorder" />
        </div>
        <hr className="my-4" />

        <h2 className="text-center text-2xl font-semibold">VSCode Playlist</h2>

        <div className="flex flex-col items-center w-full justify-center gap-5 py-4 px-6 md:px-12">
          {/* Youtube embed of VSCode playlist */}
          <iframe
            width="340"
            height="650"
            src="https://www.youtube.com/embed/videoseries?si=-M4S6hcs_GF8M0jd&list=PLIQ6VR3c4M4NZhc2tOBPnzkTjyukbZwsm"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <Footer />
      </div>
    </>
  );
}
