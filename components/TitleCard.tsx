import { MainChannelName } from '@/lib/config';
import { Card, CardHeader, CardTitle } from './ui/card';

export default function TitleCard() {
  return (
    <>
      <div className="mt-16 relative w-full h-[175px] md:h-[200px] 2xl:h-[300px] bg-gradient-to-b from-[#1a202c] to-[#2d3748]">
        <div
          className="absolute left-0 right-0 w-full h-[175px] md:h-[200px] 2xl:h-[300px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/devlevelupper_banner_2.png)' }}
        />
        {/* <div
          className="md:hidden absolute left-0 right-0 w-full h-[175px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/devlevelupper_logo.png)' }}
        /> */}
      </div>

      <Card className="flex text-center shadow-none justify-center flex-col items-center w-3/4 border-none flex-none mx-auto mt-4">
        <CardHeader>
          <CardTitle>
            <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">@{MainChannelName}</p>
          </CardTitle>
        </CardHeader>
      </Card>
    </>
  );
}
