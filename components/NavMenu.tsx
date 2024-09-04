'use client';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { MainChannelName, Socials } from '@/lib/config';
import { ModeToggle } from './ModeToggle';

export function NavMenu() {
  return (
    <NavigationMenu className="flex items-start fixed top-0">
      <NavigationMenuList className="w-screen h-auto flex-row items-start justify-start p-2 pr-5">
        <NavigationMenuItem className="">
          <NavigationMenuTrigger>@{MainChannelName}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  href="/"
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                >
                  <div className="mb-2 mt-4 text-lg font-medium">DevLevelUpper!</div>
                  <div className="text-sm leading-tight text-muted-foreground">
                    Check out the latest posts from {MainChannelName}
                  </div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>socials</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem type="twitter" href={Socials.twitter} target="_blank" />
              <ListItem type="youtube" href={Socials.youtube} target="_blank" />
              <ListItem type="tiktok" href={Socials.tiktok} target="_blank" />
              <ListItem type="instagram" href={Socials.instagram} target="_blank" />
              <ListItem type="github" href={Socials.github} target="_blank" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <div className="flex-auto" />
        <span className="!ml-4">
          <ModeToggle />
        </span>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ type, href, target }: { type: string; href: string; target: string }) {
  return (
    <li>
      <NavigationMenuLink
        href={href}
        target={target}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        )}
      >
        <div className="text-sm font-medium leading-none">{type}</div>
      </NavigationMenuLink>
    </li>
  );
}
