import { Card, CardTitle } from '@/components/ui/card';
import { Affiliates, AffiliateType } from '@/lib/config';
import Link from 'next/link';

function getSrc({ type }: { type: AffiliateType }) {
  if (type === 'nuphy') return '/assets/nuphy_keyboard.jpeg';
}

function getHref({ type }: { type: AffiliateType }) {
  if (type === 'nuphy') return Affiliates.nuphy;
  return Affiliates.nuphy;
}

export default function AffiliateCard({ type, description }: { type: AffiliateType; description: string }) {
  return (
    <Card className="group hover:shadow relative  w-full h-[200px] aspect-square">
      <Link target="_blank" href={getHref({ type })}>
        <div className="">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="object-cover hover:scale-110 transition-all h-[400px] w-full"
              src={getSrc({ type })}
              alt={type}
            />
          </div>

          <div className="absolute pointer-events-none inset-0 flex items-center justify-center p-6 bg-slate-800/70">
            <CardTitle className="text-white text-2xl font-bold">{description}</CardTitle>
          </div>
        </div>
      </Link>
    </Card>
  );
}
