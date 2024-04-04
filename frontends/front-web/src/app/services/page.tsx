import bg from '@/public/images/background-tools.png';
import { ShortNews } from '@/components/news/shortNews';
import { LiveInstagramAction } from '@/components/ui/liveInstagramAction';
import React from 'react';
import { PublicationModel } from '@/shared/models/publication/Publication.model';
import { getPublicationsWithPhotos } from '@/database/publications.service';
import { Typography } from '@/components/ui/typography';
import { Divider } from '@/components/divider/divider';
import { ContactMe } from '@/components/ui/contactMe';
import { InstaLink } from '@/components/ui/instaLink';
import { Logo } from '@/components/ui/logo';
import { Container } from '@/components/ui/container';
import Image from 'next/image';
import tankWater from '@/public/images/photos/hot-water-tank.png';
import stairs from '@/public/images/photos/stairs.png';
import franckPipe from '@/public/images/photos/franck-pipe.png';
import bathroom from '@/public/images/bathroom.png';
import plumbing from '@/public/images/plumbing.png';
import repair from '@/public/images/repair.png';

export default async function Services() {
  const publications: PublicationModel[] = await getPublicationsWithPhotos();
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <div className={'grid grid-cols-12 gap-2 items-center'}>
          <Typography variant={'t-4'} weight={'extrabold'} comp={'div'} className={'col-span-6 flex items-center'}>
            <Logo className={''} size={'very-small'}/>
            <div>
              <p className={'font-light text-sm uppercase text-grey-400'}>Services</p>
              <h1 className={'uppercase pb-6'}>Les interventions</h1>
            </div>
          </Typography>
          <div className={'col-span-6 border-b border-grey-400'}></div>
        </div>

        <section className={'space-y-20 py-10 lg:mb-20'}>
          <div className={'flex flex-col'}>
            <div className={'flex gap-20'}>

              <div className={'flex-1 space-y-5'}>
                <div className={'flex md:flex-col'}>
                  <figure className={'w-10 md:w-12 flex'}>
                    <Image src={plumbing} alt={'icon plomberie'} className={'object-contain w-full'}/>
                  </figure>
                  <Typography comp={'h3'} variant={'t-2'} weight={'semibold'}
                              className={'relative pl-5 md:pl-0 md:pt-5 pb-2 serviceTitle'}>
                    Plombderie
                  </Typography>
                </div>
                <Typography comp={'article'} variant={'base'} className={'space-y-5'}>
                  <p>
                    {`En tant que professionnel de la plomberie, je m'engage à vous offrir des services de haute qualité.
                    Que ce soit pour des réparations de robinets, de radiateurs, des installations d’adoucisseurs,
                    de ballon d’eau chaude ou des urgences sur le réseau d’eau sanitaire, je réponds à vos besoins.`}
                  </p>
                  <p>
                    Je modèle le cuivre avec précision grâce au cintrage au sable. Mon expertise artisanale assure des
                    formes
                    impeccables pour des installations durables.
                  </p>
                  <p>
                    Contactez-moi pour un service fiable et rapide.
                  </p>
                </Typography>
                <ContactMe className={'inline-flex'}/>
              </div>

              <figure className={'flex-1 hidden md:flex w-full relative'}>
                <Image src={tankWater} alt={`photo d'installation d'un ballon d'eau chaude`} className={'md:object-contain w-full'}/>
              </figure>

            </div>
          </div>

          <div className={'flex flex-col'}>
            <div className={'flex gap-20'}>

              <figure className={'flex-1 hidden md:flex w-full relative'}>
                <Image src={stairs} alt={`photo d'installation d'un ballon d'eau chaude`} className={'object-contain w-full'}/>
              </figure>

              <div className={'flex-1 space-y-5'}>
                <div className={'flex md:flex-col'}>
                  <figure className={'w-10 md:w-12 flex'}>
                    <Image src={bathroom} alt={'icon plomberie'} className={'object-contain w-full'}/>
                  </figure>
                  <Typography comp={'h3'} variant={'t-2'} weight={'semibold'}
                              className={'relative pl-5 md:pl-0 md:pt-5 pb-2 serviceTitle'}>
                    Agencement salle de bain et cuisine
                  </Typography>
                </div>
                <Typography comp={'article'} variant={'base'}  className={'space-y-5'}>
                  <p>
                    Je vous aide à concrétiser vos projets de création ou de rénovation avec des conseils personnalisés.
                  </p>
                  <p>
                    {`En tant qu'expert polyvalent, je prends en charge la démolition, l'évacuation, l'électricité,
                    la pose d'accessoires, de carrelage, de cloison, le ponçage et la peinture, un chantier clé en main.`}
                  </p>
                  <p>
                    Contactez-moi pour transformer votre salle de bain ou votre cuisine en un espace qui vous ressemble.
                  </p>
                </Typography>
                <ContactMe className={'inline-flex'}/>
              </div>

            </div>
          </div>

          <div className={'flex flex-col'}>
            <div className={'flex md:gap-0 lg:gap-20'}>

              <div className={'flex-1 space-y-5'}>
                <div className={'flex md:flex-col'}>
                  <figure className={'w-10 md:w-12 flex'}>
                    <Image src={repair} alt={'icon plomberie'} className={'object-contain w-full'}/>
                  </figure>
                  <Typography comp={'h3'} variant={'t-2'} weight={'semibold'}
                              className={'relative pl-5 md:pl-0 md:pt-5 pb-2 serviceTitle'}>
                    Dépannage
                  </Typography>
                </div>
                <Typography comp={'article'} variant={'base'} className={'space-y-5'}>
                  <p>{`Besoin d'une solution rapide ?`}</p>
                  <p>Je suis prêt à intervenir pour résoudre vos problèmes. </p>
                  <p>
                    Ma mission est de garantir une assistance efficace sur un problème de fuite ou de remplacement
                    d’accessoire.
                    Faites-moi confiance pour des réparations rapides et professionnelles, assurant le bon
                    fonctionnement de vos équipements.
                  </p>
                  <p>Contactez-moi dès maintenant.</p>
                </Typography>
                <ContactMe className={'inline-flex'}/>
              </div>

              <figure className={'flex-1 hidden md:flex w-full relative'}>
                <Image src={franckPipe} alt={`photo d'installation d'un ballon d'eau chaude`} className={'object-contain w-full'}/>
              </figure>

            </div>
          </div>
        </section>


      </Container>
      <Divider>
        <Typography variant={'t-3'} theme={'white'} weight={'light'} className={'text-center lg:text-left'}>
          Vous avez un projet <span className={'font-extrabold'}>d’installation</span> ou de <span
          className={'font-extrabold'}>rénovation</span> ?
        </Typography>
        <div className={'flex flex-col space-y-3 pt-5 md:flex-row md:space-y-0 md:gap-x-5'}>
          <ContactMe/>
          <InstaLink/>
        </div>
      </Divider>
      <ShortNews publications={publications}/>
      <div className={'relative flex items-center justify-center pb-20'}>
        <LiveInstagramAction/>
      </div>
    </div>
  );
}