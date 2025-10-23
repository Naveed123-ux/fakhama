import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Check, Star, ArrowLeft } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import { getImage, getImages } from '../utils/images';

export function CurtainTypesPage() {
  const curtainTypes = [
    {
      id: 1,
      name: 'ستائر غرف المعيشة',
      description: 'ستائر فاخرة مصممة خصيصاً لإضفاء لمسة من الأناقة والدفء على صالة منزلك',
      image: getImage(7),
      features: [
        'أقمشة فاخرة ومتينة',
        'تصاميم عصرية وكلاسيكية',
        'ألوان متنوعة تناسب جميع الديكورات',
        'عازلة للضوء والحرارة',
        'سهلة التنظيف والصيانة',
      ],
      priceRange: '2,000 - 5,000 ريال',
      popular: true,
    },
    {
      id: 2,
      name: 'ستائر غرف النوم',
      description: 'ستائر توفر الخصوصية والراحة مع تصاميم هادئة تساعد على الاسترخاء والنوم العميق',
      image: getImage(8),
      features: [
        'عازلة تماماً للضوء',
        'توفر الخصوصية الكاملة',
        'ألوان هادئة ومريحة للنظر',
        'أقمشة ناعمة ومريحة',
        'تقلل من الضوضاء الخارجية',
      ],
      priceRange: '1,500 - 4,000 ريال',
      popular: true,
    },
    {
      id: 3,
      name: 'ستائر المكاتب',
      description: 'ستائر عملية وأنيقة مصممة لبيئة العمل الاحترافية مع التحكم في الإضاءة',
      image: getImage(9),
      features: [
        'تصاميم عملية واحترافية',
        'تحكم ممتاز في الإضاءة',
        'سهلة الاستخدام والصيانة',
        'مقاومة للاتساخ',
        'ألوان محايدة ومريحة',
      ],
      priceRange: '1,800 - 4,500 ريال',
      popular: false,
    },
    {
      id: 4,
      name: 'ستائر التعتيم (Blackout)',
      description: 'ستائر تحجب الضوء بنسبة 100% مثالية لغرف النوم وصالات السينما المنزلية',
      image: getImage(10),
      features: [
        'حجب كامل للضوء (100%)',
        'عزل حراري ممتاز',
        'تقليل الضوضاء',
        'توفير الطاقة',
        'مثالية للنوم النهاري',
      ],
      priceRange: '2,200 - 5,500 ريال',
      popular: true,
    },
    {
      id: 5,
      name: 'الستائر الشفافة (Sheer)',
      description: 'ستائر خفيفة وشفافة تسمح بمرور الضوء الطبيعي مع الحفاظ على الخصوصية',
      image: getImage(11),
      features: [
        'إضاءة طبيعية ناعمة',
        'أقمشة خفيفة وأنيقة',
        'خصوصية جزئية',
        'تصاميم رومانسية',
        'سهلة التنظيف',
      ],
      priceRange: '800 - 2,500 ريال',
      popular: false,
    },
    {
      id: 6,
      name: 'ستائر المخمل',
      description: 'ستائر فاخرة من المخمل الناعم تضيف لمسة من الفخامة الملكية لمنزلك',
      image: getImage(12),
      features: [
        'قماش مخمل فاخر',
        'عزل ممتاز للحرارة والصوت',
        'ألوان غنية وجذابة',
        'ملمس ناعم وفخم',
        'تصاميم ملكية فاخرة',
      ],
      priceRange: '3,000 - 7,000 ريال',
      popular: true,
    },
  ];

  const galleryImages = getImages(4, 13);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-[400px] md:h-[600px]">
        <Carousel
          opts={{
            loop: true,
            direction: 'rtl',
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-[400px] md:h-[600px]">
            {galleryImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[400px] md:h-[600px]">
                  <ImageWithFallback
                    src={image}
                    alt={`معرض الستائر ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center text-white">
                      <h1 className="text-4xl md:text-6xl mb-4 text-white">أنواع الستائر</h1>
                      <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        اكتشف مجموعتنا المتنوعة من الستائر الفاخرة
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="right-4 left-auto" />
          <CarouselNext className="left-4 right-auto" />
        </Carousel>
      </section>

      {/* Types Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {curtainTypes.map((type) => (
              <Card
                key={type.id}
                className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto">
                    <ImageWithFallback
                      src={type.image}
                      alt={type.name}
                      className="w-full h-full object-cover"
                    />
                    {type.popular && (
                      <div className="absolute top-4 right-4 bg-[#d4af37] text-white px-4 py-2 rounded-full flex items-center gap-2">
                        <Star className="w-4 h-4 fill-white" />
                        <span className="text-sm">الأكثر طلباً</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between bg-gradient-to-br from-white to-[#faf8f5]">
                    <div>
                      <h2 className="text-2xl md:text-3xl mb-3 text-gray-800">{type.name}</h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {type.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div>
                      <div className="mb-4 pb-4 border-t border-gray-200 pt-4">
                        <div className="text-sm text-gray-500 mb-1">النطاق السعري</div>
                        <div className="text-2xl text-[#d4af37]">{type.priceRange}</div>
                      </div>
                      <Button className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-white">
                        اطلب استشارة مجانية
                        <ArrowLeft className="mr-2 w-4 h-4 rotate-180" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#d4af37] to-[#b8941f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl mb-6">لماذا تختار ستائرنا؟</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            نقدم لك أفضل جودة وأسعار تنافسية مع ضمان الرضا الكامل
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl mb-3">جودة مضمونة</h3>
              <p className="opacity-90">نستخدم أجود الأقمشة المستوردة</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl mb-3">تصاميم حصرية</h3>
              <p className="opacity-90">مصممة خصيصاً حسب ذوقك</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl mb-3">تركيب سريع</h3>
              <p className="opacity-90">فريق محترف في التركيب</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
