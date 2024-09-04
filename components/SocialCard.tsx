'use client';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { SocialType } from '@/lib/config';
import { useTheme } from 'next-themes';
import Link from 'next/link';

interface SocialCardProps {
  key: string;
  type: SocialType;
  description: string;
  href: string;
}

const bitSounds = [
  '/sounds/8-bit-game-1-186975.mp3',
  '/sounds/8-bit-game-2-186976.mp3',
  '/sounds/8-bit-game-4-188106.mp3',
  '/sounds/8-bit-game-5-188107.mp3',
  '/sounds/8-bit-laser-151672.mp3',
  '/sounds/8-bit-powerup-6768.mp3',
  '/sounds/negative_beeps-6008.mp3',
];

function getSrc({ type, theme }: { type: SocialType; theme: 'dark' | 'light' }) {
  if (type === 'twitter') {
    if (theme === 'dark') return '/assets/twitter_dark.svg';
    return '/assets/twitter_light.svg';
  }
  if (type === 'youtube') {
    return '/assets/youtube.svg';
  }
  if (type === 'tiktok') {
    return '/assets/tiktok.svg';
  }
  if (type === 'instagram') {
    if (theme === 'dark') return '/assets/instagram_dark.svg';
    return '/assets/instagram_light.svg';
  }
  if (type === 'github') {
    if (theme === 'dark') return '/assets/github_dark.svg';
    return '/assets/github_light.svg';
  }
}

function SocialIcon({ type }: { type: SocialType }) {
  const { theme } = useTheme();
  return (
    <>
      <img
        className="group-hover:hidden"
        src={getSrc({ type, theme: theme === 'dark' ? 'dark' : 'light' })}
        alt="twitter"
        width="32"
        height="32"
      />
      <img
        className="hidden group-hover:flex"
        src={getSrc({ type, theme: theme === 'dark' ? 'light' : 'dark' })}
        alt="twitter"
        width="32"
        height="32"
      />
    </>
  );
}

function SocialCard({ key, type, description, href }: SocialCardProps) {
  function playSound(sounds: string[]) {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const audio = new Audio(sounds[randomIndex]);
    audio.play();
  }

  // handle click event for social card
  const handleClick = () => {
    playSound(bitSounds);
  };

  return (
    <Card
      key={key + '-social-card'}
      className="hover:bg-foreground/80 hover:text-background group hover:shadow"
      onClick={handleClick}
    >
      <Link target="_blank" href={href}>
        <CardHeader className="flex-row gap-5 items-center">
          <CardTitle>
            <SocialIcon type={type} />
          </CardTitle>
          <CardTitle className="text-xl font-extrabold">{description}</CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
}

export default SocialCard;
