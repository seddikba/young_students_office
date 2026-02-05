import { HeartHandshake, Star, University, Users } from 'lucide-react'
import React from 'react'

const features = [
  {
    title: 'التوجيه الجامعي',
    desc: 'مرافقة للطلبة في اختيار المسار والتخصص المناسب',
    icon: University
  },
  {
    title: 'الأنشطة الثقافية',
    desc: 'ورشات وفعاليات لتنمية المهارات والتفكير',
    icon: Star
  },
  {
    title: 'شبكة العلاقات',
    desc: 'بناء علاقات مع طلبة ومهنيين ومؤسسات',
    icon: HeartHandshake
  },
  {
    title: 'مجتمع طلابي',
    desc: 'بيئة داعمة للتعاون وتبادل الخبرات',
    icon: Users
  }
]

function Features() {
  return (
    <section className="max-w-7xl mx-auto mt-10 px-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {features.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-[#E7F1EC] bg-white p-5 shadow-sm transition-all duration-300 "
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#3A7255]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex flex-col items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1F8F4] text-[#2F6E53]">
                  <Icon size={20} />
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-[#0D4433] text-sm">
                    {item.title}
                  </span>
                  <span className="text-xs text-[#4E6E60] mt-1 leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Features