export const MainChannelName = 'devlevelupper';

export const Socials = {
  twitter: 'https://twitter.com/devlevelupper',
  youtube: 'https://www.youtube.com/@DevLevelUpper',
  tiktok: 'https://www.tiktok.com/@devlevelupper',
  instagram: 'https://www.instagram.com/devlevelupper',
  github: 'https://www.github.com/bryaneaton13/devlevelupper-links',
} as const;

export type SocialType = keyof typeof Socials;

export const Affiliates = {
  nuphy: 'https://nuphy.com?sca_ref=6910595.FHI02nrbfY',
  // screenStudio: 'https://screen.studio?ref=devlevelupper',
} as const;
export type AffiliateType = keyof typeof Affiliates;
