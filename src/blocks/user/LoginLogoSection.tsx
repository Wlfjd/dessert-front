'use client';

import LogoSub from '@/commons/assets/logo_sub.svg';

interface Props {
  title: string;
  subTitle: string;
}

const LoginLogoSection = ({ title, subTitle }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
      <LogoSub />
      <div>
        <div className="text-16 leading-150 tracking-tight-4 font-semibold text-center text-gray-900 ">
          {title}
        </div>
        <div className="text-14 leading-150 tracking-tight-6 font-normal text-center text-gray-800">
          {subTitle}
        </div>
      </div>
    </div>
  );
};

export default LoginLogoSection;