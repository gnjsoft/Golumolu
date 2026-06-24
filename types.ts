import { LucideIcon } from 'lucide-react';

export interface SubMenuItem {
  title: string;
  description?: string;
  href: string;
  icon?: LucideIcon;
}

export interface MegaMenuLink {
  title: string;
  href: string;
}

export interface MegaMenuGroup {
  title: string;
  items: MegaMenuLink[];
}

export interface MegaMenuColumn {
  title?: string;
  items?: MegaMenuLink[];
  groups?: MegaMenuGroup[];
}

export interface MegaMenuConfig {
  leftContent?: {
    title: string;
    description: string;
    image?: string;
    badgeText?: string;
  };
  columns: MegaMenuColumn[];
}

export interface MenuItem {
  title: string;
  href: string;
  children?: SubMenuItem[];
  megaMenu?: MegaMenuConfig;
  featured?: {
    title: string;
    description: string;
    image: string;
    href: string;
  };
}