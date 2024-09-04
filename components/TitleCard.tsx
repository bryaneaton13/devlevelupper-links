import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MainChannelName } from '@/lib/config';

export default function TitleCard() {
  return (
    <>
      <div className="mt-16 relative w-full h-[175px] md:h-[200px] bg-gradient-to-b from-[#1a202c] to-[#2d3748]">
        <div
          className="max-md:hidden absolute left-0 right-0 w-full h-[200px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/devlevelupper_banner.png)' }}
        />
        <div
          className="md:hidden absolute left-0 right-0 w-full h-[175px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/devlevelupper_logo.png)' }}
        />
        {/* <div className="absolute w-full h-full bg-gradient-to-b from-[#1a202c] to-[#2d3748] opacity-10" /> */}
      </div>

      <Card className="flex text-center justify-center flex-col items-center w-3/4 border-none flex-none mb-4 mx-auto">
        <CardHeader>
          <CardTitle>
            <p className="pb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">@{MainChannelName}</p>
          </CardTitle>
          {/* <CardDescription className="flex justify-center pb-2">
            <Image src="/assets/devlevelupper_logo.png" alt="dev" width={150} height={150} />
          </CardDescription> */}
        </CardHeader>
      </Card>
    </>
  );
}
