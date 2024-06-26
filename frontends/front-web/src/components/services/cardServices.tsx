import Image, { StaticImageData } from 'next/image';
import bathroom from '@/public/images/bathroom.png';
import plumbing from '@/public/images/plumbing.png';
import repair from '@/public/images/repair.png';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';
import { RiAddFill } from 'react-icons/ri';

interface Props {
  services: ServicesModel;
}

export const CardServices = ({ services }: Props) => {
  const { type, title, shortDescription } = services;

  let icon: StaticImageData;
  let alt: string = '';
  let imageStyles: string = 'justify-center item-center';

  switch (type) {
    case 'plumbing':
      icon = plumbing;
      alt = 'plomberie';
      imageStyles = `${imageStyles} w-10 md:w-12 flex`;
      break;
    case 'bathroom':
      icon = bathroom;
      alt = 'salle de bain';
      imageStyles = `${imageStyles} w-20 md:w-12 flex`;
      break;
    case 'repair':
      icon = repair;
      alt = 'dépannage';
      imageStyles = `${imageStyles} w-10 md:w-12 flex`;
      break;
  }

  return (
    <article
      className={'bg-white p-10 rounded-tr-[40px] rounded-bl-[40px] shadow-[0_25px_50px_rgba(0,0,0,0.25)] serviceCard group'}>
      <Link href={'/services'} className={'flex min-h-[250px] md:min-h-[250px] lg:min-h-[350px] flex-col justify-between'}>
        <div>
          <div className={'flex md:flex-col'}>
            <div className={imageStyles}>
              <Image src={icon} alt={alt} className={'object-contain w-full'}/>
            </div>
            <Typography comp={'div'} variant={'t-2'} weight={'semibold'}
                        className={'relative pl-5 md:pl-0 md:py-4 serviceTitle'}>
              <h2>{title}</h2>
            </Typography>
          </div>
          <Typography className={'leading-6 py-5 md:py-10'}>
            {shortDescription}
          </Typography>
        </div>
        <Typography comp={'div'} className={'inline-flex gap-2'}>
          <p className={'text-md md:text-base font-semibold'}>Découvrir</p>
          <div className={'rounded-full bg-accent text-primary p-2'}>
            <RiAddFill/>
          </div>
        </Typography>
      </Link>
    </article>
  );
};
