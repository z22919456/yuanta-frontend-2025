'use client';

import { mediaLinks } from './data';

const MediaLinks = () => {
  return mediaLinks.map((Item) => {
    const Icon = Item.icon;
    return (
      <a
        key={Item.href}
        className="block grayscale-[0.4] hover:grayscale-0 md:grayscale-[0.8]"
        href={Item.href}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon className="w-8" />
      </a>
    );
  });
};

export default MediaLinks;
