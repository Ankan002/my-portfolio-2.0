import { profileAtom } from 'atoms/profile-atom';
import { SectionHeader, HeroBtn } from 'components/elements';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Profile } from 'types/profile';
import Image from 'next/image';

const AboutMe = () => {

  const profile = useRecoilValue<Profile>(profileAtom);

  const onMyResumeBtnClick = () => {
    location.href = "#"
  }

  const onMyWorkBtnClick = () => {
    location.href = "#"
  }

  return (
    <div className="px-5 py-3 flex flex-col font-manrope" id="about-me">
      <SectionHeader title="About Me" />

      <div className="w-full flex sm:flex-row flex-col-reverse min-h-[55vh] mt-5">
        <div className="flex-1 flex flex-col items-center sm:max-w-[60%] w-full justify-center sm:mt-0 mt-[30px]">
          <p className="font-manrope font-thin text-primary-light md:text-2xl sm:text-xl text-lg sm:max-w-[80%] text-center tracking-widest">
            {
              profile.bio
            }
          </p>

          <div className="w-full flex justify-center items-center sm:flex-row flex-col mt-4">
            <HeroBtn title="My Work" onClick={onMyWorkBtnClick} type="filled" />
            <HeroBtn title="My Resume" onClick={onMyResumeBtnClick} type="outline" />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center sm:max-w-[30%] w-full sm:mt-0 mt-5">
          {
            profile.profile_picture.length > 0 && (
              <Image src={profile.profile_picture ?? ""} alt="" height={260} width={260} style={{borderRadius: 150}} />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default AboutMe;