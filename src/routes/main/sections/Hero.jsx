import { HeartHandshake, Star, University } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="px-4 py-12 bg-white font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto bg-[#FDFBE9] rounded-3xl overflow-hidden p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-8 text-right">
          <span className="text-[#3A7255] font-bold text-sm tracking-widest uppercase">
            #YoungStudentOffice
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#0D4433] leading-[1.2]">
            مكتب شباب وطلبة آت تجنينت بالعاصمة
          </h1>
          
          <p className="text-[#3A7255] text-lg max-w-xl leading-relaxed">
            مكتب آت تجنينت بالعاصمة هو كيان تنظيمي وتنموي رائد، يسعى إلى تمكين الطاقات الشابة وربط الجيل الصاعد بالخبرات الميدانية الملهمة. يتبنى المكتب رؤية تجمع بين الأصالة القيمية ومتطلبات العصر.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 justify-start">
            <button className="bg-[#0D4433] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#155a44] transition-all shadow-lg hover:shadow-[#0d44334d]">
              انضم إلينا الآن
            </button>
            <button className="bg-white text-[#0D4433] px-8 py-4 rounded-xl font-bold border-2 border-[#0D4433] hover:bg-[#0D4433] hover:text-white transition-all">
              اكتشف برامجنا
            </button>
          </div>
        </div>

        {/* Image Collage */}
        <div className="lg:w-1/2 relative h-[500px] w-full grid grid-cols-2 gap-4">
          <div className="space-y-4 flex flex-col justify-center">
            <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="./Home/hero1.png" 
                alt="Student Activity" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="./Home/hero2.png" 
                alt="Workshop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="h-[90%] w-full bg-gray-200 rounded-3xl overflow-hidden border-4 border-white shadow-xl relative">
              <img 
                src="./Home/hero3.png" 
                alt="Community Meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: 'التوجيه الجامعي', icon: <University /> },
          { title: 'الأنشطة الثقافية', icon: <Star/> },
          { title: 'شبكة العلاقات', icon: <HeartHandshake /> }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-center gap-3 p-5 border border-yellow-100 rounded-2xl bg-yellow-50 shadow-sm hover:shadow-md hover:border-[#3A7255] transition-all cursor-pointer">
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-bold text-[#0D4433]">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;