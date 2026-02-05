import { Button } from '@/components';
import { HeartHandshake, Star, University } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
    <section dir='auto' className="pt-45" >
      {/* <div className='absolute inset-0 pt-12 rounded-[8rem]  overflow-hidden blur-[2px] -z-50'><div className='bg-white/50  absolute inset-0 w-full h-full z-10'></div><img className=' absolute z-0 inset-0 ' src="./Home/hero1.png" alt="" /></div> */}
      
      <div className="w-full">
        <div className="max-w-3xl mx-auto">
          <span dir='auto' className="text-xs uppercase">
            #YoungStudentOffice
          </span>
          <div className='w-full flex flex-col gap-6 '>

          <h1 className="text-6xl font-bold bg-linear-to-t from-[#154275] to-purple-400 bg-clip-text text-transparent">
            مكتب شباب وطلبة آت تجنينت بالعاصمة
          </h1>
          
          <p className="text-md">
            مكتب آت تجنينت بالعاصمة هو كيان تنظيمي وتنموي رائد، يسعى إلى تمكين الطاقات الشابة وربط الجيل الصاعد بالخبرات الميدانية الملهمة. يتبنى المكتب رؤية تجمع بين الأصالة القيمية ومتطلبات العصر.
          </p>
          
          <div className="flex w-full gap-2">
            <Button className="bg-[#154275] w-full  text-white px-8 py-4 rounded-xl font-bold  transition-all">
              انضم إلينا الآن
            </Button>
            <Button variant={'secondary'} className=" px-8 py-4 rounded-xl font-bold border-2 transition-all">
              اكتشف برامجنا
            </Button>
          </div>
        </div>
        </div>
      </div>

     


    </section>
  );
};

export default HeroSection;