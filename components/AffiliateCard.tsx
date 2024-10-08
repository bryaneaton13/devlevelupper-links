import { Card, CardTitle } from '@/components/ui/card';
import { Affiliates, AffiliateType } from '@/lib/config';
import Link from 'next/link';

function getSrc({ type }: { type: AffiliateType }) {
  // if (type === 'nuphy') return '/assets/nuphy_keyboard.jpeg';
  if (type === 'nuphy') return '/assets/nuphy_new2.webp';
  if (type === 'screenStudio') return '/assets/screenstudio_logo.png';
}

function getHref({ type }: { type: AffiliateType }) {
  return Affiliates[type] || Affiliates.nuphy;
}

export default function AffiliateCard({ type, description }: { type: AffiliateType; description: string }) {
  return (
    <Card className="group hover:shadow relative w-full h-[200px] aspect-square transition-all">
      <Link target="_blank" href={getHref({ type })}>
        <div className="">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="object-cover hover:scale-110 transition-all h-[200px] md:h-[300px] w-full"
              src={getSrc({ type })}
              alt={type}
            />
          </div>

          <div className="absolute pointer-events-none inset-0 flex items-center justify-center p-6 bg-slate-800/70 text-center">
            <CardTitle className="text-white text-2xl font-bold">{description}</CardTitle>
          </div>
        </div>
      </Link>
    </Card>
  );
}
