import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
      links: [
        { text: 'Pressure Vessels',   href: '/services#pressure-vessels' },
        { text: 'Heat Exchangers',    href: '/services#heat-exchangers' },
        { text: 'Columns & Reactors', href: '/services#columns-reactors' },
        { text: 'Storage Tanks',      href: '/services#storage-tanks' },
        { text: 'Vacuum Vessels',     href: '/services#vacuum-vessels' },
        { text: 'Pharma Equipment',   href: '/services#pharma-equipment' },
        { text: 'Shell Rolling',      href: '/services#shell-rolling' },
        { text: 'WTP / ETP Systems',  href: '/services#wtp-etp' },
        { text: 'Industrial Chimneys',href: '/services#industrial-chimneys' },
      ],
    },
    {
      text: 'Request a Quote',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Contact',
      href: '/#contact',
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Pressure Vessels',   href: '/services#pressure-vessels' },
        { text: 'Heat Exchangers',    href: '/services#heat-exchangers' },
        { text: 'Columns & Reactors', href: '/services#columns-reactors' },
        { text: 'Vacuum Vessels',     href: '/services#vacuum-vessels' },
        { text: 'Pharma Equipment',   href: '/services#pharma-equipment' },
        { text: 'Shell Rolling',      href: '/services#shell-rolling' },
        { text: 'WTP / ETP Systems',  href: '/services#wtp-etp' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} Arun Iron Works. All rights reserved.`,
};
