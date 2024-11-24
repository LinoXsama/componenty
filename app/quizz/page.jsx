'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { SlashIcon } from "@radix-ui/react-icons";
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import Image from 'next/image';

const Quizz = () => {
   const [progress, setProgress] = useState(13);
   const [selectedImage, setSelectedImage] = useState(null); // État pour l'image sélectionnée

   useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);

      return () => clearTimeout(timer);
   }, []);

   // Fonction pour gérer la sélection d'image
   const handleImageClick = (imageId) => {

      if(selectedImage === imageId) {
         setSelectedImage(null);
      } else {
         setSelectedImage(imageId);
      }
      console.log(selectedImage)
   };

   return (
      <>
         <div className='border border-blue-500 w-full h-screen flex flex-col justify-center items-center'>
            <div className='border border-green-500 w-[50%] mb-8'>
               <h1 className='uppercase border mb-3 text-cyan-500 text-xl font-bold'>
                  question 1
               </h1>
               <p className='border text-lg'>
                  Parmi ces 3 images, laquelles correspond le plus au besoin
                  évoqués précédemment ?
               </p>
            </div>
            <div className='border border-purple-500 w-[50%] flex justify-between items-center'>
               <Image
                  id="rocketlaunch"
                  src="/images/rocketlaunch.png"
                  width={200}
                  height={200}
                  className={`border cursor-pointer ${selectedImage === 1 ? 'border-4 border-blue-600' : ''}`}
                  onClick={() => handleImageClick(1)}
               />
               <Image
                  id="rocketman"
                  src="/images/rocketman.png"
                  width={200}
                  height={200}
                  className={`border cursor-pointer ${selectedImage === 2 ? 'border-4 border-blue-600' : ''}`}
                  onClick={() => handleImageClick(2)}
               />
               <Image
                  id="rocketride"
                  src="/images/rocketride.png"
                  width={200}
                  height={200}
                  className={`border cursor-pointer ${selectedImage === 3 ? 'border-4 border-blue-600' : ''}`}
                  onClick={() => handleImageClick(3)}
               />
            </div>
         </div>

         <div className="border border-red-500 absolute bottom-0 w-full flex justify-between px-4 py-2 items-center">
            <Button className="uppercase cursor-pointer">
               question précédente
            </Button>
           
            <Progress value={progress} className="w-[25%]" />

            <Button className="uppercase cursor-pointer">
               question suivante
            </Button>
         </div>
      </>
   );
};

export default Quizz;