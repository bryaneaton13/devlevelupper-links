import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainChannelName } from "@/lib/config";

export default function TitleCard() {
  return (
    <Card className="flex justify-center flex-col items-center w-3/4 border-none flex-none pb-10">
      <CardHeader>
        <CardTitle>
          <p className="pb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{MainChannelName}</p>
        </CardTitle>
        <CardDescription className="flex justify-center pb-2">
          <Image src="/assets/dev_highlights.png" alt="dev" width={150} height={150} />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
