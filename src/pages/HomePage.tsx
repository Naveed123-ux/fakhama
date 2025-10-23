import { HeroSection } from "../components/HeroSection";
import { ProductsSection } from "../components/ProductsSection";
import { ProductCarousel } from "../components/ProductCarousel";
import { AboutSection } from "../components/AboutSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactSection } from "../components/ContactSection";
import { Card } from "../components/ui/card";
import { getImage } from "../utils/images";

import { Sparkles, Award, TrendingUp } from "lucide-react";

export function HomePage() {
  const heroImage = getImage(0);

  const products = [
    {
      id: 1,
      title: "ستائر غرفة المعيشة الفاخرة",
      category: "غرف المعيشة",
      price: "2,500",
      image: getImage(1),
      rating: 5,
    },
    {
      id: 2,
      title: "ستائر غرفة النوم الأنيقة",
      category: "غرف النوم",
      price: "1,800",
      image: getImage(2),
      rating: 5,
    },
    {
      id: 3,
      title: "ستائر المكاتب العصرية",
      category: "المكاتب",
      price: "2,200",
      image: getImage(3),
      rating: 5,
    },
    {
      id: 4,
      title: "ستائر بيج كلاسيكية",
      category: "تصميم خاص",
      price: "3,000",
      image: getImage(4),
      rating: 5,
    },
    {
      id: 5,
      title: "ستائر بيضاء راقية",
      category: "جاهزة",
      price: "1,500",
      image: getImage(5),
      rating: 4,
    },
    {
      id: 6,
      title: "ستائر فخمة للصالات",
      category: "غرف المعيشة",
      price: "3,500",
      image: getImage(6),
      rating: 5,
    },
  ];

  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <HeroSection heroImage={heroImage} />

      {/* Featured Products Carousel */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
              <span className="text-[#d4af37]">منتجاتنا المميزة</span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">
              أحدث التصاميم
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اكتشف مجموعتنا الحصرية من الستائر الفاخرة
            </p>
          </div>
          <ProductCarousel products={featuredProducts} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
              <span className="text-[#d4af37]">لماذا نحن</span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">
              ما يميزنا
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-gray-800">أقمشة فاخرة</h3>
              <p className="text-gray-600 leading-relaxed">
                نستخدم أجود أنواع الأقمشة المستوردة من أفضل المصانع العالمية
              </p>
            </Card>

            <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-gray-800">جودة مضمونة</h3>
              <p className="text-gray-600 leading-relaxed">
                ضمان شامل على جميع منتجاتنا مع خدمة ما بعد البيع المتميزة
              </p>
            </Card>

            <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-gray-800">تصاميم عصرية</h3>
              <p className="text-gray-600 leading-relaxed">
                نواكب أحدث صيحات الموضة العالمية في تصميم الستائر
              </p>
            </Card>
          </div>
        </div>
      </section>

      <ProductsSection products={products} />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
