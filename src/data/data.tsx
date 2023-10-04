import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import porfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import porfolioImage15 from '../images/portfolio/portfolio-15.jpg';
import porfolioImage16 from '../images/portfolio/portfolio-16.jpg';
import porfolioImage17 from '../images/portfolio/portfolio-17.jpg';
import porfolioImage18 from '../images/portfolio/portfolio-18.jpg';
import porfolioImage19 from '../images/portfolio/portfolio-19.jpg';
import porfolioImage20 from '../images/portfolio/portfolio-20.jpg';
import porfolioImage21 from '../images/portfolio/portfolio-21.jpg';
import porfolioImage22 from '../images/portfolio/portfolio-22.jpg';
import porfolioImage23 from '../images/portfolio/portfolio-23.jpg';
import porfolioImage24 from '../images/portfolio/portfolio-24.jpg';
import porfolioImage25 from '../images/portfolio/portfolio-25.jpg';
import porfolioImage26 from '../images/portfolio/portfolio-26.jpg';
import porfolioImage27 from '../images/portfolio/portfolio-27.jpg';
import porfolioImage28 from '../images/portfolio/portfolio-28.jpg';
import porfolioImage29 from '../images/portfolio/portfolio-29.jpg';
import profilepic from '../images/profilepic.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Portfolio',
  description: "Example site built with Anton Hansson's resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Anton Hansson.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Game and Smart Contract Developer </strong> 
        with over 7+ years of experience in writing clean code which brings<br></br>
        <strong className="text-stone-100">2D, 3D, NFT games and MMORPG.</strong> 
        Excellent reputation for resolving problems, improving satisfaction, 
        and driving overall operational improvements.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Consistently saved costs and time while increasing profits.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1i9qAOZvcX_D3JnlBUlFJAdHomhxI29BE/view?usp=drive_link',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hello, There! This is Anton Hansson from Sweden who has 7+ years rich experiences working in development of Smart Contract, Android & iOS App and Unity 2D, 3D Game Development. During my university days, I have learnt a lot of things about IT technology and also got No-How technologies from Teachers. After graduating from university, I also worked as a Remote Freelancer Game Developer for about 7 years for several Game Company. During that time, I made my knowledges more firmly and also learned new Technologies of Unity Game Development, Smart Contract and Online NFT Games also. Nowadays I have also experience working in IT company as Lead Engineer developing Neuroplasticity Game which can help people to change their bad habits. Like this 7 years passed from graduation of university and I have completed 30+ projects which requires 2D, 3D, WebGL game engine and Block Chain skills, etc... And I am always ready for you with doing my best :). Give me your idea then you will get wonderful results. Best Regards from Anton`,
  aboutItems: [
    {label: 'Location', text: 'Stockholm', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Swedish', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Leiden', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Swedish',
        level: 10,
      },
    ],
  },
  {
    name: 'Game development',
    skills: [
      {
        name: 'Unity',
        level: 9,
      },
      {
        name: 'Cocos Creator',
        level: 8,
      },
      {
        name: 'Cocos2dx',
        level: 8,
      },
      {
        name: 'WebGL',
        level: 7,
      },
    ],
  },
  {
    name: 'MMOG Server Development',
    skills: [
      {
        name: 'SmatFoxServer',
        level: 9,
      },
      {
        name: 'Photon',
        level: 9,
      },
      {
        name: 'KBEngine',
        level: 8,
      },
    ],
  },
  {
    name: 'Smart Contract',
    skills: [
      {
        name: 'Solidity',
        level: 9,
      },
      {
        name: 'DevOps',
        level: 9,
      },
      {
        name: 'Docker',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'ReactJS',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'GraphQL',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'Rust',
        level: 8,
      },
      {
        name: 'Golang',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Ares',
    description: 'ARES is an MMORPG game that utilizes blockchain to provide a user experience of real-world owned game assets.',
    url: 'https://ares.icicb.com/',
    image: porfolioImage12,
  },
  {
    title: 'Pokeone',
    description: 'The prototype of Pokeone game filled with the small town where players can work around, battle with each other as well as NPC, catch wild Pokemon.',
    url: 'https://pokeoneblame.web.app/',
    image: porfolioImage27,
  },
  {
    title: 'PowVista',
    description: 'Skate into a multiplayer world, battle legendary creatures, and craft your own epic adventure!',
    url: 'https://powvista.com/',
    image: porfolioImage28,
  },
  {
    title: 'Spin Game based on Phaser',
    description: 'Spin Game based on Phaser',
    url: 'https://spinongame.web.app/',
    image: porfolioImage29,
  },
  {
    title: 'Jumping',
    description: 'Unity + MetaMask game with specific jumping physics mechanism',
    url: 'https://jumping-c2d3d.web.app/',
    image: porfolioImage7,
  },
  {
    title: 'Chess Game',
    description: 'Online Chess Game with Unity and Photon Cloud',
    url: 'https://chess-blame.web.app/',
    image: porfolioImage10,
  },
  {
    title: 'Ludo Game',
    description: 'Online Pad Game with Unity and NodeJS where you can play Ludo Game in Online Mode.',
    url: 'https://screenpal.com/watch/c0fY6DVz6Py',
    image: porfolioImage16,
  },
  {
    title: 'ChatBot',
    description: 'ChatBot talk to user using the OpenAI and TTS Service.',
    url: 'https://chatbot-openai.web.app/',
    image: porfolioImage11,
  },
  {
    title: 'Gallery Design',
    description: 'Gallery Design Project where you can place several kinds of props in the UI Bar to the 3D Roomd Model. Please use the following user authentication to login the admin site.(SiteLink:https://gallery-design.web.app/, Username:Blame Password:123)',
    url: 'https://somup.com/c0e0Xpys5o',
    image: porfolioImage15,
  },
  {
    title: 'City Builder',
    description: 'City Build type game where players can manage the economy, infrastructure and services to create a thriving and sustainable city that supports a growing population',
    url: 'https://somup.com/c0fYei4wDl',
    image: porfolioImage20,
  },
  {
    title: 'Hunting Game',
    description: 'Huntime game where players try to improve their shooting skills through various levels of difficulties',
    url: 'https://somup.com/c0fb2p4OYL',
    image: porfolioImage19,
  },
  {
    title: 'StarFox',
    description: 'StarFox prototype where a Spaceship shoots the enemies in the rail system space',
    url: 'https://somup.com/c0fDeZ4ZBn',
    image: porfolioImage18,
  },
  {
    title: 'Ship Simulation',
    description: 'THe Simulation Project which immerses the player in controlling the ship with peculiar device where the captain, ship, route, weather should be selected.',
    url: 'https://screencast-o-matic.com/watch/c3lVIwVUN84',
    image: porfolioImage13,
  },
  {
    title: 'Cutting Cube Bunny Girl',
    description: 'Bunny Girl Bot cut the cube with the specific accuracy and speed.',
    url: 'https://screencast-o-matic.com/watch/c3XTDwVUgSf',
    image: porfolioImage14,
  },
  {
    title: 'Brave Climber',
    description: 'Climb Simulation Project which immerses you in feeling like climbing along the precipice.',
    url: 'https://screenpal.com/watch/c0fY6YVz69l',
    image: porfolioImage17,
  },
  {
    title: 'Fight Club',
    description: '3D Action game where player fight and kill the enemy to complete the quests.',
    url: 'https://screenpal.com/watch/c0fO2EVzunJ',
    image: porfolioImage22,
  },
  {
    title: 'BringBackMemory',
    description: 'Point Click 2d Adventure Game where main character picks up the objects in the room and brings back the memory of the past.',
    url: 'https://somup.com/c0f3e144pn',
    image: porfolioImage21,
  },
  {
    title: 'Car Simulation',
    description: 'Simulate the Physics of Driving Car',
    url: 'https://screenpal.com/watch/c0fYoQVzXsa',
    image: porfolioImage6,
  },
  {
    title: 'GtaType Game',
    description: 'GtaType Game where players can drive car, ride motocycle, shoot a gun and so on.',
    url: 'https://screenpal.com/watch/c0fYolVzXM3',
    image: porfolioImage8,
  },
  {
    title: 'Wheel',
    description: 'Endless Runner game where the player earns the diamonds dodging the obstacles.',
    url: 'https://screenpal.com/watch/c0fYqDVzlBm',
    image: porfolioImage23,
  },
  {
    title: 'Color Rush',
    description: 'Runner game where the player earns money dodging the obstacles',
    url: 'https://screenpal.com/watch/c0fYoNVzlcC',
    image: porfolioImage4,
  },
  {
    title: 'Puzzle Blust',
    description: 'Hyper casual game of three match mechanism.',
    url: 'https://screenpal.com/watch/c0fYo8VzlcL',
    image: porfolioImage1,
  },
  {
    title: '8 Ball Game',
    description: '8 Ball Game with AI bot and Mutiplayer mechanics',
    url: 'https://screenpal.com/watch/c0euVHVa17n',
    image: porfolioImage3,
  },
  {
    title: 'Bubble Shooter',
    description: 'Hyper casual game of bubble shooter',
    url: 'https://screenpal.com/watch/c0fYDeVzlnU',
    image: porfolioImage2,
  },
  {
    title: 'Gold Miner',
    description: 'Hyper casual game of Gold Miner',
    url: 'https://screencast-o-matic.com/watch/c0eo2ZV4w81',
    image: porfolioImage9,
  },
  {
    title: 'Candy Crush Sugar',
    description: 'Hyper casual 3 Match Game.',
    url: 'https://screenpal.com/watch/c0hVlUVzkD8',
    image: porfolioImage5,
  },
  {
    title: 'Plinko',
    description: 'Casino Game where the ball is falling and bouncing off the triangle pattern pegs and eventually lands in one of the slots in the bottom of the screen.',
    url: 'https://plinkoblame.web.app/',
    image: porfolioImage26,
  },
  {
    title: 'SlotMachine',
    description: 'Slot Mahcine Game 777 using Unity C#.',
    url: 'https://screenpal.com/watch/c0hlqYVAlLr',
    image: porfolioImage24,
  },
  {
    title: 'Lucky Spin',
    description: 'Spin Game where players can spin a wheel to win prizes and rewards. This game is based on chance and players have no control over outcomes.',
    url: 'https://luckyspinblame-beta.web.app/',
    image: porfolioImage25,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2015',
    location: 'Leiden',
    title: 'Bachelor of Computer Science',
    content: <p><b>IT specialties</b> : Data Science, System Analysis, Math, Software Engineering, Computer Science, Computer Engineering, Information Systems and Information Technology</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2023 - July 2023',
    location: 'Texas, United States',
    title: 'Unity Developer',
    content: (
      <p>
        • Discussing with Game Designer about the new ideas on Online Mobile Game
        <br></br>
        • Developing Online Game Unity Project based on Mirror Networking
        <br></br>
        • Optimizing game performance involving Graphics and CPU, Memory Usage
      </p>
    ),
  },
  {
    date: 'November 2022 - February 2023',
    location: 'West Seattle, United States',
    title: 'Lead Engineer(Part Time Job)',
    content: (
      <p>
        • Discussing with Game Designer for the Mental Exercise game to reboot human's brain
        <br></br>
        • Developing Unity Project based on Neuroplasticity Science
        <br></br>
        • Suggesting idea about the ways to monetize MVP and final product of Startup Company
      </p>
    ),
  },
  {
    date: 'May 2022 - October 2022',
    location: 'Ontario, Canada',
    title: 'Remote Freelancer',
    content: (
      <p>
        • Several Online action and pad Games with Unity + Photon
        <br></br>
        • Ship Simulation Unity project
        <br></br>
        • Cutting Cube Simulation Unity project
        <br></br>
        • Room Management Simulation Unity project
      </p>
    ),
  },
  {
    date: 'March 2021 - April 2022',
    location: 'ICICB Group',
    title: 'P2E Game Developer(Remote Freelancer)',
    content: (
      <p>
        • Integrating Smart Contract to Unity by Moralis
        <br></br>
        • API creation / management
        <br></br>
        • Use Online Game Server Engine such as SFS, Photon, KBEngine etc.
        <br></br>
        • Familiar with NFT Online Game development by Smart Contract and Web3
        <br></br>
        • Source code management in a collaborative environment
        <br></br>
        • Quickly learn complex systems and new technologies
      </p>
    ),
  },
  {
    date: 'March 2015 - Feb 2021',
    location: 'Nintendo,GhostShark Games',
    title: 'Game Developer(Remote Freelancer)',
    content: (
      <p>
        • Strong knowledge of OOP, design patterns and data structures
        <br></br>
        • Excellent knowledge of Unity3D, including experience with scripting, materials/shaders, and Unity GUI
        <br></br>
        • Expert knowledge of Unity3D Pro including building asset bundles
        <br></br>
        • Multi Platform Game Development with Cocos Creator and Cocos2dx, WebGL
        <br></br>
        • Collaborating closely with artists and designers to build and iterate on prototypes to achieve a shared creative vision
        <br></br>
        • Strong experience shipping consumer products across several platforms
        <br></br>
        • Assist in architecting a new game engine
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'azuredevil053@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Stockholm, Sweden',
    },
    {
      type: ContactType.Instagram,
      text: 'https://t.me/untechguru2',
    },
    {
      type: ContactType.Instagram,
      text: 'live:.cid.d273217cdc3a472',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];