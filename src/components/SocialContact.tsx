import React from 'react';
import { SiFacebook, SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

import {
  FACEBOOK_USERNAME,
  GITHUB_USERNAME,
  LINKEDIN_USERNAME,
  TWITTER_USERNAME,
} from '@/config';

interface SocialIconProps {
  icon: 'facebook' | 'twitter' | 'linkedin' | 'github';
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => {
  const icons = {
    facebook: <SiFacebook />,
    twitter: <SiTwitter />,
    linkedin: <SiLinkedin />,
    github: <SiGithub />,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl inline-block p-2 bg-zinc-600 hover:dark:bg-slate-500 hover:bg-slate-500 dark:bg-gray-700  rounded-xl  transition duration-200"
    >
      {icons[icon]}
    </a>
  );
};

const SocialIcons: React.FC = () => {
  const socialLinks = [
    { icon: 'facebook', href: `https://www.facebook.com/${FACEBOOK_USERNAME}` },
    { icon: 'twitter', href: `https://www.twitter.com/${TWITTER_USERNAME}` },
    { icon: 'linkedin', href: `https://www.linkedin.com/${LINKEDIN_USERNAME}` },
    {
      icon: 'github',
      href: `https://www.github.com/${GITHUB_USERNAME}/short4u`,
    },
  ];
  return (
    <>
      <div className="flex -ml-2 flex-col space-x-3 mt-2 border-t p-2">
        <span className="text-base font-normal text-start">Contact us </span>
        <div className="flex  gap-x-2 justify-start items-center mt-2 flex-wrap">
          {socialLinks.map((link, index) => (
            <SocialIcon
              key={index}
              icon={link.icon as SocialIconProps['icon']}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialIcons;
