import { HeroTop } from '@/components/hero-top/hero-top';
import { ShortServices } from '@/components/services/shortServices';
import { Divider } from '@/components/divider/divider';
import { Typography } from '@/components/ui/typography';
import React from 'react';
import { ShortNews } from '@/components/publications/shortNews';
import { PublicationModel } from '@/shared/models/publication/Publication.model';
import { getPublicationsWithPhotos } from '@/database/publications.service';
import { ContactContainer } from '@/components/contact/contactContainer';
import { Partners } from '@/components/divider/partners';
import { ButtonLink } from '@/components/ui/buttonLink';
import { RiInstagramLine } from 'react-icons/ri';

export default async function Home(): Promise<React.JSX.Element> {
  const publications: PublicationModel[] = await getPublicationsWithPhotos(3);

  return (
    <div className={'w-full h-full'}>
      <HeroTop />
      <ShortServices />
      <Divider>
        <Typography comp={'div'} variant={'t-3'} theme={'white'} weight={'light'} className={'text-center lg:text-left leading-7 md:space-y-2'}>
          <p>Vous avez un projet <span className={'font-extrabold uppercase'}>d’installation</span></p>
          <p>ou de <span className={'font-extrabold uppercase'}>rénovation</span> ?</p>
        </Typography>
        <div className={'flex flex-col items-center justify-center lg:justify-normal space-y-3 pt-5 md:flex-row md:space-y-0 md:gap-x-5'}>
          <ButtonLink path={'/contact'}>Contactez - moi</ButtonLink>
          <ButtonLink variant={'outline'} path={'https://www.instagram.com/eurl.franckgaumont/'}>
            <RiInstagramLine size={20}/>
            Suivez-moi sur instagram
          </ButtonLink>
        </div>
      </Divider>
      <ShortNews publications={publications}/>
      <Divider hasPhone={false}>
        <Typography comp={'div'} variant={'t-3'} theme={'white'} weight={'light'} className={'text-center pb-8'}>
          <h2 className={'uppercase font-extrabold text-base md:text-3xl'}>Les partenaires</h2>
          <div className={' py-4'}>
            <p className={'text-md md:text-base'}>Etant artisan partenaire avec des entreprises telle que Schluter, Cédéo, Point P.</p>
            <p className={'text-md md:text-base'}>je dispose de produits durables et innovants pour votre utilisation quotidienne.</p>
          </div>
          <Partners/>
        </Typography>
      </Divider>
      <ContactContainer/>
    </div>
  );
}

