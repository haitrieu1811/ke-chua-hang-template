"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
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

interface FaqBullet {
  label?: string;
  text: string;
}

interface FaqItem {
  id: number;
  category: "products" | "load" | "order" | "delivery";
  categoryLabel: string;
  question: string;
  intro: string;
  bullets: FaqBullet[];
  outro?: string;
}

export default function FaqSection() {
  const t = useTranslations("HomePage.faq");
  const [activeTab, setActiveTab] = React.useState<string>("all");

  const faqList: FaqItem[] = [
    {
      id: 1,
      category: "products",
      categoryLabel: t("items.q1.categoryLabel"),
      question: t("items.q1.question"),
      intro: t("items.q1.intro"),
      bullets: [
        {
          label: t("items.q1.bullet1Label"),
          text: t("items.q1.bullet1Text"),
        },
        {
          label: t("items.q1.bullet2Label"),
          text: t("items.q1.bullet2Text"),
        },
        {
          label: t("items.q1.bullet3Label"),
          text: t("items.q1.bullet3Text"),
        },
      ],
      outro: t("items.q1.outro"),
    },
    {
      id: 2,
      category: "load",
      categoryLabel: t("items.q2.categoryLabel"),
      question: t("items.q2.question"),
      intro: t("items.q2.intro"),
      bullets: [
        {
          label: t("items.q2.bullet1Label"),
          text: t("items.q2.bullet1Text"),
        },
        {
          label: t("items.q2.bullet2Label"),
          text: t("items.q2.bullet2Text"),
        },
      ],
    },
    {
      id: 3,
      category: "order",
      categoryLabel: t("items.q3.categoryLabel"),
      question: t("items.q3.question"),
      intro: t("items.q3.intro"),
      bullets: [
        { text: t("items.q3.bullet1Text") },
        { text: t("items.q3.bullet2Text") },
        { text: t("items.q3.bullet3Text") },
        { text: t("items.q3.bullet4Text") },
      ],
      outro: t("items.q3.outro"),
    },
    {
      id: 4,
      category: "order",
      categoryLabel: t("items.q4.categoryLabel"),
      question: t("items.q4.question"),
      intro: t("items.q4.intro"),
      bullets: [
        { text: t("items.q4.bullet1Text") },
        { text: t("items.q4.bullet2Text") },
        { text: t("items.q4.bullet3Text") },
      ],
    },
    {
      id: 5,
      category: "products",
      categoryLabel: t("items.q5.categoryLabel"),
      question: t("items.q5.question"),
      intro: t("items.q5.intro"),
      bullets: [
        {
          label: t("items.q5.bullet1Label"),
          text: t("items.q5.bullet1Text"),
        },
        {
          label: t("items.q5.bullet2Label"),
          text: t("items.q5.bullet2Text"),
        },
        {
          label: t("items.q5.bullet3Label"),
          text: t("items.q5.bullet3Text"),
        },
      ],
    },
    {
      id: 6,
      category: "load",
      categoryLabel: t("items.q6.categoryLabel"),
      question: t("items.q6.question"),
      intro: t("items.q6.intro"),
      bullets: [
        { text: t("items.q6.bullet1Text") },
        { text: t("items.q6.bullet2Text") },
        { text: t("items.q6.bullet3Text") },
      ],
    },
    {
      id: 7,
      category: "delivery",
      categoryLabel: t("items.q7.categoryLabel"),
      question: t("items.q7.question"),
      intro: t("items.q7.intro"),
      bullets: [
        { text: t("items.q7.bullet1Text") },
        { text: t("items.q7.bullet2Text") },
        { text: t("items.q7.bullet3Text") },
      ],
    },
    {
      id: 8,
      category: "delivery",
      categoryLabel: t("items.q8.categoryLabel"),
      question: t("items.q8.question"),
      intro: t("items.q8.intro"),
      bullets: [
        { text: t("items.q8.bullet1Text") },
        { text: t("items.q8.bullet2Text") },
      ],
    },
    {
      id: 9,
      category: "order",
      categoryLabel: t("items.q9.categoryLabel"),
      question: t("items.q9.question"),
      intro: t("items.q9.intro"),
      bullets: [
        {
          label: t("items.q9.bullet1Label"),
          text: t("items.q9.bullet1Text"),
        },
        {
          label: t("items.q9.bullet2Label"),
          text: t("items.q9.bullet2Text"),
        },
      ],
      outro: t("items.q9.outro"),
    },
    {
      id: 10,
      category: "delivery",
      categoryLabel: t("items.q10.categoryLabel"),
      question: t("items.q10.question"),
      intro: t("items.q10.intro"),
      bullets: [
        {
          label: t("items.q10.bullet1Label"),
          text: t("items.q10.bullet1Text", {
            hotline: SHOP_INFO.HOTLINE.TEXT,
          }),
        },
        {
          label: t("items.q10.bullet2Label"),
          text: t("items.q10.bullet2Text"),
        },
        {
          label: t("items.q10.bullet3Label"),
          text: t("items.q10.bullet3Text"),
        },
      ],
      outro: t("items.q10.outro"),
    },
  ];

  const categoryTabs = [
    { key: "all", label: t("tabs.all") },
    { key: "products", label: t("tabs.products") },
    { key: "load", label: t("tabs.load") },
    { key: "order", label: t("tabs.order") },
    { key: "delivery", label: t("tabs.delivery") },
  ] as const;

  const filteredFaqs =
    activeTab === "all"
      ? faqList
      : faqList.filter((item) => item.category === activeTab);

  return (
    <section className="relative border-b border-border/80 bg-muted/30 py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header Section với ScrollReveal */}
        <ScrollReveal direction="up" duration={700}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wider uppercase">
              <HelpCircle className="size-4 text-orange-500" />
              {t("badge")}
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-4xl uppercase">
              {t("title")}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t("desc")}
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
                {t("emptyTitle")}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t("emptyDesc")}
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
                          <div className="mb-1 rounded-md bg-muted px-2 py-0.5 text-sm font-semibold text-muted-foreground uppercase tracking-wider ring-1 ring-border hidden sm:inline-block">
                            {faq.categoryLabel}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="border-t border-border/60 bg-muted/20 px-5 py-4.5 sm:px-6 sm:py-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <div className="space-y-2.5">
                        <p>{faq.intro}</p>
                        {faq.bullets.length > 0 && (
                          <ul className="list-disc pl-5 space-y-1.5">
                            {faq.bullets.map((bullet, bulletIdx) => (
                              <li key={bulletIdx}>
                                {bullet.label ? (
                                  <>
                                    <strong className="text-foreground">
                                      {bullet.label}
                                    </strong>{" "}
                                    {bullet.text}
                                  </>
                                ) : (
                                  bullet.text
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                        {faq.outro && <p>{faq.outro}</p>}
                      </div>
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
                    {t("support.title")}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                    {t("support.desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`tel:${SHOP_INFO.HOTLINE.NUMBER}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-2.5 text-sm sm:text-base font-bold text-white shadow-md shadow-orange-500/20 transition-all cursor-pointer"
                >
                  <PhoneCall className="size-4" />
                  {t("support.callBtn", { hotline: SHOP_INFO.HOTLINE.TEXT })}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
