"use client";

import * as React from "react";
import SHOP_INFO from "@/constants/info";
import {
  HelpCircle,
  PhoneCall,
  MessageCircleQuestion,
  Headphones,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/scroll-reveal";

interface FaqItem {
  id: number;
  question: string;
  answer: string | React.ReactNode;
  category: "survey" | "tech" | "warranty" | "custom";
  categoryLabel: string;
}

const faqList: FaqItem[] = [
  {
    id: 1,
    category: "survey",
    categoryLabel: "Khảo Sát & Thiết Kế",
    question: "Công ty có hỗ trợ khảo sát và lên bản vẽ thiết kế 2D/3D tận nơi không?",
    answer:
      "Có, hoàn toàn miễn phí 100%. Ngay sau khi tiếp nhận thông tin, đội ngũ kỹ sư kết cấu của chúng tôi sẽ đến tận nhà xưởng của quý khách trong vòng 24 giờ (tại Hà Nội, TP.HCM và các tỉnh lân cận) để đo đạc hiện trạng nền kho, kiểm tra chiều cao tĩnh không và lên bản vẽ bố trí 2D, phối cảnh 3D mô phỏng luồng di chuyển của xe nâng tối ưu nhất.",
  },
  {
    id: 2,
    category: "tech",
    categoryLabel: "Thời Gian & Tiến Độ",
    question: "Thời gian sản xuất và lắp đặt hoàn thiện một hệ thống kệ kho mất bao lâu?",
    answer:
      "Với các dòng kệ tiêu chuẩn (kệ trung tải, kệ Selective có sẵn phôi), thời gian bàn giao và lắp đặt hoàn thiện từ 3 - 5 ngày làm việc. Với các dự án kho tổng quy mô lớn (Heavy Duty, Drive-in, Sàn Mezzanine từ 1.000m² - 10.000m²), tiến độ sản xuất và lắp đặt trọn gói thường từ 10 - 20 ngày, cam kết đúng 100% tiến độ theo hợp đồng ký kết.",
  },
  {
    id: 3,
    category: "tech",
    categoryLabel: "Tải Trọng & Kỹ Thuật",
    question: "Hệ thống kệ chứa hàng chịu được tải trọng bao nhiêu trên mỗi tầng?",
    answer: (
      <div className="space-y-2">
        <p>Chúng tôi cung ứng giải pháp chịu tải linh hoạt từ nhẹ đến siêu trường, siêu trọng:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Kệ V lỗ đa năng:</strong> Chịu tải từ 50kg - 120kg/tầng mâm tole.</li>
          <li><strong>Kệ Trung tải (Medium Duty):</strong> Chịu tải từ 200kg - 600kg/tầng (dùng mâm tôn cuộn gân hoặc ván ép công nghiệp).</li>
          <li><strong>Kệ Hạng nặng (Heavy Duty - Selective, Double Deep, Drive-in):</strong> Chịu tải từ 1.000kg - 3.500kg/pallet (tương đương 3.000kg - 8.000kg/khoang dầm beam).</li>
        </ul>
        <p>Toàn bộ kết cấu đều được tính toán hệ số an toàn nghiêm ngặt theo tiêu chuẩn JIS G3101 và FEM 10.2.02.</p>
      </div>
    ),
  },
  {
    id: 4,
    category: "warranty",
    categoryLabel: "Bảo Hành & Bảo Trì",
    question: "Chính sách bảo hành và bảo trì định kỳ sau lắp đặt như thế nào?",
    answer:
      "Toàn bộ sản phẩm giá kệ công nghiệp được bảo hành chính hãng từ 3 đến 5 năm đối với kết cấu thép chịu lực và lớp sơn tĩnh điện. Định kỳ 6 tháng một lần, kỹ sư của chúng tôi sẽ đến kiểm tra độ cân bằng bu-lông chân trụ, độ võng của thanh dầm beam và độ an toàn vận hành hoàn toàn miễn phí. Đội phản ứng nhanh hỗ trợ kỹ thuật trong 24h khi khách hàng cần điều chỉnh kho.",
  },
  {
    id: 5,
    category: "custom",
    categoryLabel: "Yêu Cầu Nền Kho",
    question: "Nền nhà kho có yêu cầu gì đặc biệt để lắp đặt kệ pallet tải trọng nặng không?",
    answer:
      "Nền kho lý tưởng cần bê tông cốt thép có mác từ 250 trở lên, độ dày tối thiểu 150mm - 200mm và bề mặt phẳng nhẵn để xe nâng di chuyển an toàn. Trong quá trình khảo sát thực địa, kỹ sư của chúng tôi sẽ đo đạc độ phẳng và tư vấn kích thước bản mã chân trụ (Baseplate) cùng tắc-kê nở đạn chuyên dụng phù hợp nhất để phân bổ đều tải trọng.",
  },
  {
    id: 6,
    category: "custom",
    categoryLabel: "Gia Công Theo Yêu Cầu",
    question: "Tôi có thể đặt hàng kích thước phi tiêu chuẩn theo kích thước hàng hóa của tôi không?",
    answer:
      "Hoàn toàn được. Là nhà máy trực tiếp sở hữu dây chuyền cán thép định hình và dây chuyền sơn tĩnh điện tự động, chúng tôi chuyên nhận thiết kế và gia công giá kệ theo kích thước quy cách riêng biệt của từng loại pallet, thùng hàng, chiều cao tĩnh không trần kho và thông số loại xe nâng khách hàng đang sử dụng.",
  },
  {
    id: 7,
    category: "warranty",
    categoryLabel: "Di Dời & Cơi Nới",
    question: "Công ty có nhận tháo dỡ, di dời hoặc nâng cấp hệ thống kệ cũ không?",
    answer:
      "Có. Chúng tôi cung cấp dịch vụ tháo dỡ, đóng gói vận chuyển và tái lắp đặt hệ thống kệ công nghiệp khi doanh nghiệp thay đổi địa điểm kho bãi. Đồng thời cung cấp đầy đủ linh phụ kiện lắp thêm (thanh beam, cross beam, thanh support pallet, ốp chân trụ chống va đập, rào chắn bảo vệ) để nâng tầng hoặc mở rộng diện tích kho bất cứ lúc nào.",
  },
  {
    id: 8,
    category: "survey",
    categoryLabel: "Hợp Đồng & Thanh Toán",
    question: "Quy trình ký kết hợp đồng và phương thức thanh toán ra sao?",
    answer:
      "Sau khi hai bên thống nhất phương án bản vẽ 2D/3D và bảng báo giá chi tiết, hai bên ký kết hợp đồng kinh tế rõ ràng kèm chứng nhận kiểm định chất lượng CO/CQ. Doanh nghiệp tạm ứng 30% - 50% khi ký kết, phần còn lại được thanh toán sau khi nghiệm thu bàn giao và tiến hành chạy thử tải thực tế tại công trình.",
  },
];

const categoryTabs = [
  { key: "all", label: "Tất Cả Câu Hỏi" },
  { key: "survey", label: "Khảo Sát & Thiết Kế" },
  { key: "tech", label: "Kỹ Thuật & Tải Trọng" },
  { key: "warranty", label: "Bảo Hành & Bảo Trì" },
  { key: "custom", label: "Gia Công & Nền Kho" },
] as const;

export default function FaqSection() {
  const [activeTab, setActiveTab] = React.useState<string>("all");

  const filteredFaqs = React.useMemo(() => {
    if (activeTab === "all") return faqList;
    return faqList.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section className="relative border-b border-border/80 bg-muted/30 py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header Section với ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
              <HelpCircle className="size-4 text-orange-500" />
              Giải Đáp Thắc Mắc & Hướng Dẫn
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-4xl">
              Câu Hỏi Thường Gặp (FAQ)
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Tổng hợp câu trả lời chi tiết cho những băn khoăn phổ biến nhất của
              khách hàng về lựa chọn giải pháp, tải trọng và quy trình lắp đặt kệ
              kho.
            </p>
          </div>
        </ScrollReveal>

        {/* Tự code Tabs danh mục (Animation mượt mà) */}
        <ScrollReveal direction="up" delay={100} duration={600}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-border/80 bg-card p-1 shadow-2xs">
              {categoryTabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Accordion FAQ Component của shadcn (Stagger reveal các câu hỏi) */}
        <div className="mt-8">
          {filteredFaqs.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <MessageCircleQuestion className="mx-auto size-10 text-muted-foreground/60" />
              <h3 className="mt-3 text-base font-bold text-foreground">
                Không tìm thấy câu hỏi phù hợp
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Vui lòng chọn danh mục khác hoặc liên hệ hotline để được tư vấn
                trực tiếp.
              </p>
            </div>
          ) : (
            <Accordion
              multiple
              defaultValue={["faq-1", "faq-2"]}
              className="space-y-4"
            >
              {filteredFaqs.map((faq, index) => (
                <ScrollReveal
                  key={faq.id}
                  direction="up"
                  delay={(index % 4) * 70}
                  duration={600}
                >
                  <AccordionItem
                    value={`faq-${faq.id}`}
                    className="overflow-hidden rounded-2xl border border-border/80 bg-card not-last:border-b-border/80 shadow-xs transition-all data-open:border-primary/50 data-open:shadow-sm"
                  >
                    <AccordionTrigger className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left hover:no-underline cursor-pointer group">
                      <div className="flex items-start gap-3 sm:gap-4 pr-2">
                        <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg text-sm font-bold bg-primary/10 text-primary group-data-open:bg-primary group-data-open:text-primary-foreground transition-colors">
                          Q{faq.id}
                        </div>
                        <div>
                          <div className="mb-1 inline-block rounded-md bg-muted px-2 py-0.5 text-sm font-semibold text-muted-foreground uppercase tracking-wider ring-1 ring-border hidden sm:inline-block">
                            {faq.categoryLabel}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="border-t border-border/60 bg-muted/20 px-5 py-4.5 sm:px-6 sm:py-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          )}
        </div>

        {/* Hộp hỗ trợ trực tiếp bên dưới với ScrollReveal */}
        <ScrollReveal direction="up" delay={150} duration={700}>
          <div className="mt-12 rounded-2xl border border-primary/20 bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Headphones className="size-7" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    Vẫn còn câu hỏi chưa được giải đáp?
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                    Kỹ sư trưởng của chúng tôi sẵn sàng giải đáp mọi thắc mắc kỹ
                    thuật và đưa ra giải pháp lưu trữ tối ưu nhất.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-2.5 text-sm sm:text-base font-bold text-white shadow-md shadow-orange-500/20 transition-all cursor-pointer"
                >
                  <PhoneCall className="size-4" />
                  Gọi {SHOP_INFO.HOTLINE.TEXT}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
