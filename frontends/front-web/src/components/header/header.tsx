'use client'

import bg from '@/public/images/bg.png';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { Navigation } from '@/components/navigation/navigation';
import { ButtonBurger } from '@/components/ui/buttonBurger';
import { NavigationMobile } from '@/components/navigation/navigationMobile';
import React, { useState } from 'react';
import { ContactLink } from '@/components/ui/contactLink';
import Link from 'next/link';

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu: () => void = () => {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <header className={'sticky top-0 z-50'}>
      <div className={'relative z-50 '}>
        <div className={'h-16 bg-primary'} style={{
          backgroundImage: `url(${bg.src})`,
          backgroundPosition: 'left',
          backgroundSize: 'cover',
        }}>
          <Container className={'py-0 h-full '}>
            <div className={'h-full flex justify-end items-center space-x-10'}>
              <ContactLink contactLink={'ADDRESS'} className={'hidden lg:flex'} />
              <ContactLink contactLink={'MAIL'} className={'hidden lg:flex'}/>
              <ContactLink contactLink={'PHONE'} variant={'accent'} weight={'extrabold'}/>
            </div>
          </Container>
        </div>

        <nav className={'h-12 bg-gradient-to-r from-secondary-100 via-secondary to-secondary-300'}>
          <Container className={'py-0 flex h-12 justify-end relative'}>
            <div className={'absolute -top-5 md:-top-8 left-2 md:left-0 lg:-left-[1.5rem]'}>
              <Link href={'/'}>
                <Logo size={'large'}/>
              </Link>
            </div>
            <div className={'inline-flex h-full items-center gap-2'}>
              <Navigation/>
              <ContactLink contactLink={'INST'} />
              <ContactLink contactLink={'FB'} />
              <ButtonBurger toggleMenu={toggleMenu} isMenuActive={isMenuActive}/>
            </div>
          </Container>
        </nav>
      </div>
      <NavigationMobile isActive={isMenuActive} toggleMenu={toggleMenu}/>
    </header>
  )
}