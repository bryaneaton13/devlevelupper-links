export const MainChannelName = 'devlevelupper';

export type SocialType = 'twitter' | 'youtube' | 'tiktok' | 'instagram' | 'github';

export const socials: {
  type: SocialType;
  href: string;
  description: string;
}[] = [
  {
    type: 'instagram',
    href: 'https://www.instagram.com/devlevelupper',
    description: 'Instagram',
  },
  {
    type: 'youtube',
    href: 'https://www.youtube.com/@DevLevelUpper',
    description: 'Shorts for now, maybe longer videos soon',
  },
  {
    type: 'tiktok',
    href: 'https://www.tiktok.com/@devlevelupper',
    description: 'TikTok',
  },
  {
    type: 'twitter',
    href: 'https://twitter.com/dev_highlights',
    description: 'Check out the latest highlights.',
  },
  // {
  //   type: 'github',
  //   href: 'https://github.com/bryaneaton13',
  //   description: 'GitHub',
  // },
];
