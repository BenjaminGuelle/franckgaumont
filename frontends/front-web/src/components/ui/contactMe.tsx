import Link from 'next/link';
import { RiInstagramLine } from 'react-icons/ri';
import React from 'react';
import { cn } from '@/lib/utils';
import { SizeType } from '@/types/ui/Size.type';

interface Props {
  variant?: 'outline' | 'default' | 'phone';
  size?: SizeType;
}

export const ContactMe = ({variant = 'default', size = 'small'}: Props) => {

  let variantStyles: string = '';
  switch (variant) {
    case 'default':
      variantStyles = 'justify-center rounded bg-secondary';
      break;
    case 'outline':
      variantStyles = 'justify-center border rounded';
      break;
    case 'phone':
      variantStyles = '';
      break;
  }

  let sizeStyles: string = 'min-w-40 text-sm';
  switch (size) {
    case 'very-small':
    case 'small':
      sizeStyles = `${sizeStyles} h-9 px-4 py-2 rounded`;
      break;
    case 'medium':
      sizeStyles = `${sizeStyles} h-8 rounded px-3`;
      break;
    case 'large':
      sizeStyles = `${sizeStyles} h-10 rounded px-8`;
      break;
  }

  return (
    <Link href={'/contact'} className={cn('text-center text-white flex items-center gap-2 px-4 py-6', variantStyles, sizeStyles)}>
      Contactez - moi
    </Link>
  )
}