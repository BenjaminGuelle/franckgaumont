import { Typography } from '@/components/ui/typography';
import { ActionLink } from '@/components/ui/actionLink';
import { cn } from '@/lib/utils';

interface Props {
  text: string;
  buttonText?: string;
  path?: string;
  className?: string;
}

export const SubtitleSection: ({ text, className }: Props) => JSX.Element = ({text, buttonText, path, className}: Props) => {
  return (
    <div className={cn('flex justify-between pt-0 md:pt-10 lg:pt-5', className)}>
      <Typography className={'lg:border-l lg:pl-5 lg:pr-20 flex-1'}>
        {text}
      </Typography>
      {(path && buttonText) && <ActionLink path={path} text={buttonText}/>}
    </div>
  )
}