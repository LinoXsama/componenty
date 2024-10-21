'use client';

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const Quizz = () => {

   const [progress, setProgress] = useState(13);

   useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);

      return () => clearTimeout(timer);
   });

   return (
      <>
         <div className="border border-red-500 absolute bottom-0 w-full flex justify-between px-4 py-2 items-center">
            <Progress value={progress} className="w-[18%]" />
            <Progress value={progress} className="w-[18%]" />
            <Button className="uppercase">
               next question
            </Button>
         </div>
      </>
   );
};

export default Quizz;