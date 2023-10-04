import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-screen items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{name}</h1>
            {description}
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
