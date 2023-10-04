import {FC, memo} from 'react';


const Footer: FC = memo(() => (
  <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pt-14 sm:pb-8">
    <div className="flex flex-col items-center gap-y-6">
      <span className="text-sm text-neutral-700">© Copyright 2022 Anton Hansson</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
