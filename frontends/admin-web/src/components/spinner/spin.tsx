import { cn } from '@/lib/utils';

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'black' | 'white' | 'light' | 'secondary';
  className?: string;
  variant?: 'link' | 'secondary' | 'default' | 'defaultLine' | 'defaultOut' | 'secondaryLine' | 'secondaryOut' | 'disable' | null;
}

export const Spin = ({ size = 'sm', color = 'primary', className, variant }: Props) => {

  let sizeStyles = '';
  let withStyles = '';
  let colorStyles = '';

  switch (size) {
    case 'sm':
      sizeStyles = 'w-6 h-6';
      withStyles = 'w-5';
      break;
    case 'md':
      sizeStyles = 'w-8 h-8';
      withStyles = 'w-6';
      break;
    case 'lg':
      sizeStyles = 'w-10 h-10';
      withStyles = 'w-8';
      break;
    case 'xl':
      sizeStyles = 'w-20 h-20';
      withStyles = 'w-12';
      break;
  }

  switch (color) {
    case 'white':
      colorStyles = 'fill-white';
      break;
    case 'light':
      colorStyles = 'fill-primary-500';
      break;
    case 'primary':
      colorStyles = 'fill-primary';
      break;
    case 'secondary':
      colorStyles = 'fill-secondary';
      break;
    case 'black':
      colorStyles = 'fill-black';
      break;
  }

  switch (variant) {
    case 'defaultLine':
    case 'defaultOut':
      colorStyles = 'fill-primary';
      break;
    case 'default':
    case 'secondary':
      colorStyles = 'fill-white';
      break;
    case 'secondaryLine':
    case 'secondaryOut':
      colorStyles = 'fill-secondary';
      break;
    case 'disable':
      colorStyles = 'fill-grey';
      break;
  }

  return (
    <div aria-label="Loading..." className={cn('relative inline-block', className)} role="status">
      <svg className={cn('animate-spin', colorStyles, sizeStyles)} viewBox="3 3 18 18">
        <path className="opacity-20"
              d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z">
        </path>
        <path
          d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z">
        </path>
      </svg>
    </div>
  )
    ;
};