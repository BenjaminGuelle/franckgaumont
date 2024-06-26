'use client'

import React, { useCallback, useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Image from 'next/image';
import bathroom from '@/public/images/bathroom.png';
import plumbing from '@/public/images/plumbing.png';
import repair from '@/public/images/repair.png';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { sendEmailContact } from '@/database/mail.service';
import { SendEmailRequest } from '@/shared/requests/mails/SendEmail.request';
import { ConfirmationResponse } from '@/shared/responses/Confirmation.response';
import { toast } from '@/components/ui/use-toast';

export interface Props {

}

export const ContactForm = ({}: Props) => {

  const [isLoading, setIsLoading] = useState(false);

  const categoryModel = z.union([
    z.literal('ARRANGEMENT'),
    z.literal('PLUMBING'),
    z.literal('REPAIR'),
  ]);

  const contactSchema = z.object({
    category: categoryModel,
    firstName: z.string().min(1, {message: `Vous devez renseigner votre nom`}),
    lastName: z.string(),
    email: z.string().min(1, {message: `Vous devez renseigner votre email`}),
    phone: z.string()
      .min(1, {message: `Le numéro de téléphone doit faire 10 chiffres ou moins`})
      .max(10, {message: `Le numéro de téléphone doit faire 10 chiffres ou moins`}),
    address: z.string().min(1, {message: `Vous devez renseigner votre adresse`}),
    postalCode: z.string()
      .min(1, {message: `Le code postal doit faire 5 chiffres ou moins`})
      .max(10, {message: `Le code postal doit faire 5 chiffres ou moins`}),
    city: z.string().min(1, {message: `Vous devez renseigner votre ville`}),
    message: z.string().min(1, {message: `Vous devez renseigner votre message`}),
    acceptUseData: z.boolean(),
  });

  type ContactValues = z.infer<typeof contactSchema>;

  const contactForm = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      email: '',
      postalCode: '',
      message: '',
      city: '',
      category: 'PLUMBING',
      acceptUseData: false,
    },
  });

  const onSubmit = useCallback(async (values: z.infer<typeof contactSchema>) => {
    setIsLoading(true);
    const request: SendEmailRequest = {
      ...values,
    }
    const result: ConfirmationResponse = await sendEmailContact(request);
    if (result.info) {
      contactForm.reset();
      toast({
        title: 'Nouvelle demande de contact',
        description: `Votre demande de contact à bien étée envoyée.`,
      });
    }
    setIsLoading(false);
  }, [contactForm]);

  return (
    <div className={'w-full md:w-2/3 md:pl-24'}>
      <Form {...contactForm}>
        <form onSubmit={contactForm.handleSubmit(onSubmit)} className="w-full focus-within:shadow-sm grid grid-cols-12 gap-4">
          <div className="hidden md:flex col-span-12 items-center gap-2 pb-5">
            <div className="w-6 border-b border-b-secondary"></div>
            <p className={'italic'}>Votre demande concerne</p>
          </div>

          <div className={'flex lg:hidden  col-span-12'}>
            <FormField
              control={contactForm.control}
              name="category"
              render={({ field }) => (
                <FormItem className={'w-full'}>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue className={'text-grey-400'} placeholder="Choisir une catégorie"/>
                      </SelectTrigger>
                      <SelectContent className={'bg-white'}>
                        <SelectGroup>
                          <SelectLabel>Catégories</SelectLabel>
                          <SelectItem value="ARRANGEMENT">Agencement</SelectItem>
                          <SelectItem value="PLUMBING">Plomberie</SelectItem>
                          <SelectItem value="REPAIR">Dépannage</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>

          <div className={'hidden md:block col-span-12 pb-14'}>
            <FormField
              control={contactForm.control}
              name="category"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl className={'text-black'}>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex justify-between gap-10"
                    >
                      <FormItem
                        className="flex relative bg-white aspect-square w-1/3 items-center shadow-lg border border-white hover:border-accent selection:border-accent">
                        <FormControl className={'rounded-none w-full h-full border-none z-10'}>
                          <RadioGroupItem value="PLUMBING"/>
                        </FormControl>
                        <FormLabel className="absolute top-0 left-0 w-full h-full z-0 ">
                          <div className={'flex flex-col items-center w-full h-full space-y-4 justify-center'}>
                            <div className={'w-10 lg:w-16'}>
                              <Image src={plumbing} alt={'icon service de plomberie'}
                                     className={'object-contain w-full'}/>
                            </div>
                            <p className={'font-extrabold text-sm lg:text-xl'}>Plomberie</p>
                          </div>
                        </FormLabel>
                      </FormItem>

                      <FormItem
                        className="flex relative bg-white aspect-square w-1/3 items-center shadow-lg border border-white hover:border-accent selection:border-accent">
                        <FormControl className={'rounded-none w-full h-full border-none z-10'}>
                          <RadioGroupItem value="ARRANGEMENT"/>
                        </FormControl>
                        <FormLabel className="absolute top-0 left-0 w-full h-full z-0 ">
                          <div className={'flex flex-col items-center w-full h-full space-y-4 justify-center'}>
                            <div className={'w-8 lg:w-14'}>
                              <Image src={bathroom} alt={'icon service de plomberie'}
                                     className={'object-contain w-full'}/>
                            </div>
                            <p className={'font-extrabold text-sm lg:text-xl'}>Agencement</p>
                          </div>
                        </FormLabel>
                      </FormItem>

                      <FormItem
                        className="flex relative bg-white aspect-square w-1/3 items-center shadow-lg border border-white hover:border-accent selection:border-accent">
                        <FormControl className={'rounded-none w-full h-full border-none z-10'}>
                          <RadioGroupItem value="REPAIR"/>
                        </FormControl>
                        <FormLabel className="absolute top-0 left-0 w-full h-full z-0 ">
                          <div className={'flex flex-col items-center space-y-4 justify-center w-full h-full'}>
                            <div className={'w-10 lg:w-16'}>
                              <Image src={repair} alt={'icon service de plomberie'}
                                     className={'object-contain w-full'}/>
                            </div>
                            <p className={'font-extrabold text-sm lg:text-xl'}>Dépannage</p>
                          </div>
                        </FormLabel>
                      </FormItem>

                    </RadioGroup>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>

          <div className="hidden md:flex col-span-12 items-center gap-2 pb-5">
            <div className="w-6 border-b border-b-secondary"></div>
            <p className={'italic'}>Vos informations de contact</p>
          </div>
          <FormField
            control={contactForm.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-6">
                <FormControl className={'bg-white text-black pl-2'}>
                  <Input placeholder="Nom" {...field} type={'text'}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-6">
                <FormControl className={'bg-white text-black pl-2'}>
                  <Input placeholder="Prénom" {...field} type={'text'}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-6">
                <FormControl className={'bg-white text-black pl-2'}>
                  <Input placeholder="Email" {...field} type={'text'}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-6">
                <FormControl className={'bg-white text-black pl-2'}>
                  <Input placeholder="Téléphone" {...field} type={'tel'}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-12">
                <FormControl className={'bg-white text-black pl-2'}>
                  <Input placeholder="Adresse" {...field} type={'text'}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          <FormField
            control={contactForm.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-6">
                <FormControl className={'bg-white text-black pl-2'}>
                  <Input placeholder="Code postal" {...field} type={'text'}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          <FormField
            control={contactForm.control}
            name="city"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-6">
                <FormControl className={'bg-white text-black pl-2'}>
                  <Input placeholder="Ville" {...field} type={'text'}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-12">
                <FormControl className={'bg-white text-black pl-2'}>
                  <Textarea placeholder="Message" {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          <FormField
            control={contactForm.control}
            name="acceptUseData"
            render={({ field }) => (
              <FormItem className="col-span-12 flex items-center">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className={'pl-4 text-grey-400'}>
                  J’accepte que les informations saisies soient stockées et utilisées pour permettre la bonne prise en charge de ma demande.
                </FormLabel>
              </FormItem>
            )}
          />

          <Button type={'submit'} className={'px-10 py-6 w-36 text-lg uppercase'}>
            Envoyer
          </Button>

        </form>
      </Form>
    </div>
  )
}