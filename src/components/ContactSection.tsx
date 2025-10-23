import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("شكراً لتواصلك معنا! سنرد عليك في أقرب وقت.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      value: "0539569004",
      link: "tel:+966501234567",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "rajasalarahmed11@gmail.com",
      link: "mailto:rajasalarahmed11@gmail.com",
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "الرياض، حي الملقا، شارع الأمير سلطان",
      link: "#",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "السبت - الخميس: 9 صباحاً - 9 مساءً",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#faf8f5] to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#f4e4c1] rounded-full mb-4">
            <span className="text-[#d4af37]">تواصل معنا</span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">
            نسعد بخدمتكم
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            لا تتردد في التواصل معنا لأي استفسار أو للحصول على استشارة مجانية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 border-none shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-gray-800">{info.title}</h3>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-[#d4af37] transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="h-64 border-none shadow-md overflow-hidden">
              {/* <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-[#d4af37]" />
                  <p>خريطة الموقع</p>
                </div>
              </div> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3619.8295388087795!2d46.6201553753712!3d24.869670877923298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUyJzEwLjgiTiA0NsKwMzcnMjEuOCJF!5e0!3m2!1sen!2s!4v1761141792464!5m2!1sen!2s"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-none shadow-xl">
            <h3 className="text-2xl mb-6 text-gray-800">أرسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700">الاسم</label>
                <Input
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">رقم الهاتف</label>
                <Input
                  type="tel"
                  placeholder="05xxxxxxxx"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">
                  البريد الإلكتروني (اختياري)
                </label>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">رسالتك</label>
                <Textarea
                  placeholder="أخبرنا كيف يمكننا مساعدتك..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full min-h-32"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-white py-6"
              >
                <Send className="ml-2 w-5 h-5" />
                إرسال الرسالة
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
