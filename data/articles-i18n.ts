import type { Article, ArticleSection } from "./articles";

interface LocalizedArticleOverride {
  views: string;
  tableOfContents: { id: string; title: string }[];
  sections: ArticleSection[];
}

const ARTICLE_TRANSLATIONS: Record<
  "en" | "zh",
  Record<number, LocalizedArticleOverride>
> = {
  en: {
    1: {
      views: "3,240 views",
      tableOfContents: [
        { id: "aisle-width", title: "1. Optimal forklift aisle widths" },
        { id: "dock-flow", title: "2. Inbound & outbound dock flow" },
        { id: "safety-tips", title: "3. Key layout safety recommendations" },
      ],
      sections: [
        {
          id: "aisle-width",
          heading: "1. Optimal forklift aisle widths",
          paragraphs: [
            "Designing the right aisle width directly determines both storage density and operator safety. Aisles that are too wide waste valuable floor area, while overly narrow aisles increase rack collision risks.",
          ],
          bullets: [
            "Counterbalanced Forklift: recommended aisle width 3.5m – 4.0m.",
            "Reach Truck: recommended aisle width 2.8m – 3.2m (increases storage capacity by up to 35%).",
            "VNA (Very Narrow Aisle) Truck: aisle width 1.7m – 2.0m for maximum vertical density.",
          ],
        },
        {
          id: "dock-flow",
          heading: "2. Inbound & outbound dock flow",
          paragraphs: [
            "Separating receiving and dispatch zones prevents traffic congestion during peak hours. High-turnover SKUs (Group A) should be placed nearest to the shipping docks to minimize forklift travel distance.",
          ],
          callout: {
            type: "tip",
            title: "Practical Layout Tip",
            content:
              "Combining Selective Racking for fast-moving SKUs with Medium Duty Racking for carton picking creates a smooth, bottleneck-free warehouse workflow.",
          },
        },
        {
          id: "safety-tips",
          heading: "3. Key layout safety recommendations",
          paragraphs: [
            "Always install upright column protectors, end-of-aisle barriers, and clear floor markings. Contact Kim Phu for tailored racking specifications suited to your warehouse dimensions.",
          ],
        },
      ],
    },
    2: {
      views: "2,850 views",
      tableOfContents: [
        { id: "overview", title: "1. Core differences between Selective & Drive-In" },
        { id: "comparison", title: "2. Quick comparison table" },
        { id: "selection", title: "3. How to choose the right system" },
      ],
      sections: [
        {
          id: "overview",
          heading: "1. Core differences between Selective & Drive-In",
          paragraphs: [
            "Selective Racking prioritizes 100% direct pallet accessibility, whereas Drive-In Racking eliminates intermediate aisles to maximize storage density for homogeneous pallet batches.",
          ],
        },
        {
          id: "comparison",
          heading: "2. Quick comparison table",
          paragraphs: [
            "Below is a summary comparing the two systems across key operational criteria:",
          ],
          table: {
            headers: ["Criteria", "Selective Racking", "Drive-In Racking"],
            rows: [
              ["Pallet Accessibility", "100% direct access", "By lane (LIFO/FIFO)"],
              ["SKU Diversity", "High (hundreds of SKUs)", "Low (uniform batches)"],
              ["Space Utilization", "Standard (40% – 50%)", "High (up to 75% – 80%)"],
              ["Investment Cost / Pallet", "Low – Economical", "Medium"],
            ],
          },
        },
        {
          id: "selection",
          heading: "3. How to choose the right system",
          paragraphs: [
            "Choose Selective Racking if your warehouse manages many different product codes and rotates stock frequently. Reach out to Kim Phu for specific sizing and quotation advice.",
          ],
        },
      ],
    },
    3: {
      views: "2,410 views",
      tableOfContents: [
        { id: "deflection", title: "1. Allowable beam deflection (L/200)" },
        { id: "inspection", title: "2. Routine upright & bolt checks" },
      ],
      sections: [
        {
          id: "deflection",
          heading: "1. Allowable beam deflection (L/200)",
          paragraphs: [
            "Under European FEM 10.2.02 standards, the maximum permissible beam deflection under full rated load is L/200 (beam length divided by 200). For example, a 2,700mm beam should not deflect more than 13.5mm.",
          ],
          callout: {
            type: "warning",
            title: "Safety Warning",
            content:
              "Never exceed the rated load per level or place concentrated point loads at the center of a beam without proper pallet support bars.",
          },
        },
        {
          id: "inspection",
          heading: "2. Routine upright & bolt checks",
          paragraphs: [
            "Inspect floor anchor bolts, beam safety locking pins, and upright plumbness quarterly to ensure long-term structural safety.",
          ],
        },
      ],
    },
    4: {
      views: "1,980 views",
      tableOfContents: [
        { id: "environment", title: "1. Sub-zero (-25°C) corrosion challenges" },
        { id: "finish", title: "2. Powder coating vs. hot-dip galvanizing" },
      ],
      sections: [
        {
          id: "environment",
          heading: "1. Sub-zero (-25°C) corrosion challenges",
          paragraphs: [
            "Cold storage warehouses experience constant condensation and temperature shifts whenever doors open, accelerating oxidation on untreated steel surfaces.",
          ],
        },
        {
          id: "finish",
          heading: "2. Powder coating vs. hot-dip galvanizing",
          paragraphs: [
            "High-grade polyester powder coating works well for chilled rooms (0°C to 10°C), while hot-dip galvanizing provides superior corrosion protection in deep-freeze environments (-18°C to -25°C).",
          ],
        },
      ],
    },
    5: {
      views: "1,750 views",
      tableOfContents: [
        { id: "zoning", title: "1. Zoning supplies with Medium Duty & V-Hole racks" },
        { id: "benefits", title: "2. Practical results in inventory management" },
      ],
      sections: [
        {
          id: "zoning",
          heading: "1. Zoning supplies with Medium Duty & V-Hole racks",
          paragraphs: [
            "Combining Medium Duty Racking for heavier cartons (300–800kg/level) with Slotted Angle V-Hole shelving for small tools and spare parts helps categorize every item cleanly.",
          ],
        },
        {
          id: "benefits",
          heading: "2. Practical results in inventory management",
          paragraphs: [
            "Clear shelf labeling and tiered organization significantly cut item search times, simplify stocktaking, and keep aisles uncluttered.",
          ],
        },
      ],
    },
    6: {
      views: "1,520 views",
      tableOfContents: [
        { id: "specs", title: "1. Choosing deck size & steel thickness" },
        { id: "layout", title: "2. Adjusting shelf levels for retail & workshops" },
      ],
      sections: [
        {
          id: "specs",
          heading: "1. Choosing deck size & steel thickness",
          paragraphs: [
            "Select deck depths (30cm, 40cm, 50cm, or 60cm) and steel thickness (0.6mm–0.8mm) based on the weight and dimensions of your stored merchandise.",
          ],
        },
        {
          id: "layout",
          heading: "2. Adjusting shelf levels for retail & workshops",
          paragraphs: [
            "Place heavier boxes on the bottom tiers and frequently picked items at eye level to maximize convenience and stability.",
          ],
        },
      ],
    },
    7: {
      views: "1,340 views",
      tableOfContents: [
        { id: "checklist", title: "1. Quarterly rack inspection checklist" },
        { id: "maintenance", title: "2. Preventive maintenance best practices" },
      ],
      sections: [
        {
          id: "checklist",
          heading: "1. Quarterly rack inspection checklist",
          paragraphs: [
            "Regular inspections prevent minor forklift bumps from escalating into costly structural issues.",
          ],
          bullets: [
            "Verify all beam safety locking pins are intact.",
            "Check upright columns for dents, bends, or loose floor anchors.",
            "Confirm load signage is visible and respected on every bay.",
          ],
        },
        {
          id: "maintenance",
          heading: "2. Preventive maintenance best practices",
          paragraphs: [
            "Replace damaged components promptly and train forklift operators on safe pallet placement habits.",
          ],
        },
      ],
    },
  },
  zh: {
    1: {
      views: "3,240 次阅读",
      tableOfContents: [
        { id: "aisle-width", title: "1. 叉车作业通道最佳宽度规划" },
        { id: "dock-flow", title: "2. 出入库动线与货位分区" },
        { id: "safety-tips", title: "3. 仓库布局安全建议" },
      ],
      sections: [
        {
          id: "aisle-width",
          heading: "1. 叉车作业通道最佳宽度规划",
          paragraphs: [
            "合理规划叉车通道宽度直接影响仓库存储密度与作业安全。通道过宽会浪费宝贵面积，过窄则容易导致叉车碰撞货架立柱。",
          ],
          bullets: [
            "平衡重式叉车：建议通道宽度 3.5m – 4.0m。",
            "前移式叉车（Reach Truck）：建议通道宽度 2.8m – 3.2m（可提升库容最高 35%）。",
            "窄通道叉车（VNA）：通道宽度仅需 1.7m – 2.0m，实现极致存储密度。",
          ],
        },
        {
          id: "dock-flow",
          heading: "2. 出入库动线与货位分区",
          paragraphs: [
            "将收货区与发货区清晰分离可避免高峰期拥堵。高频周转的 A 类货品应优先摆放在靠近装卸口的位置，缩短叉车搬运距离。",
          ],
          callout: {
            type: "tip",
            title: "实用规划建议",
            content:
              "将横梁式货架（存放托盘）与中型货架（人工拆零拣选）组合布局，可打造流畅高效的仓库作业动线。",
          },
        },
        {
          id: "safety-tips",
          heading: "3. 仓库布局安全建议",
          paragraphs: [
            "务必配齐立柱护脚、巷道端头防撞护栏及清晰的地面标线。欢迎联系金富获取契合您仓库尺寸的货架规格方案。",
          ],
        },
      ],
    },
    2: {
      views: "2,850 次阅读",
      tableOfContents: [
        { id: "overview", title: "1. 横梁式货架与驶入式货架核心差异" },
        { id: "comparison", title: "2. 关键指标快速对比表" },
        { id: "selection", title: "3. 企业该如何选择合适的系统" },
      ],
      sections: [
        {
          id: "overview",
          heading: "1. 横梁式货架与驶入式货架核心差异",
          paragraphs: [
            "横梁式货架（Selective）主打 100% 直接存取每个托盘，而驶入式货架（Drive-In）通过减少中间通道提升大批量同品类货物的存储密度。",
          ],
        },
        {
          id: "comparison",
          heading: "2. 关键指标快速对比表",
          paragraphs: ["以下从关键运营维度对比两种主流货架系统："],
          table: {
            headers: ["对比维度", "横梁式货架 (Selective)", "驶入式货架 (Drive-In)"],
            rows: [
              ["托盘存取方式", "100% 独立直接存取", "按巷道存取（LIFO/FIFO）"],
              ["SKU 品类数量", "高（数百种 SKU）", "低（大批量单一品类）"],
              ["空间利用率", "标准（40% – 50%）", "高（可达 75% – 80%）"],
              ["单托盘投资成本", "经济实惠", "中等"],
            ],
          },
        },
        {
          id: "selection",
          heading: "3. 企业该如何选择合适的系统",
          paragraphs: [
            "若仓库 SKU 种类繁多且出入库频繁，横梁式货架是最佳选择。欢迎联系金富获取详细规格与报价建议。",
          ],
        },
      ],
    },
    3: {
      views: "2,410 次阅读",
      tableOfContents: [
        { id: "deflection", title: "1. 横梁允许挠度标准（L/200）" },
        { id: "inspection", title: "2. 立柱与螺栓定期巡检要点" },
      ],
      sections: [
        {
          id: "deflection",
          heading: "1. 横梁允许挠度标准（L/200）",
          paragraphs: [
            "依据欧洲 FEM 10.2.02 标准，横梁在满载额定重量时的最大允许挠度为 L/200（横梁长度除以 200）。例如 2,700mm 横梁最大允许挠度不超过 13.5mm。",
          ],
          callout: {
            type: "warning",
            title: "安全警示",
            content:
              "严禁超载使用，避免在未加装跨梁的情况下将集中重物直接压在横梁中部。",
          },
        },
        {
          id: "inspection",
          heading: "2. 立柱与螺栓定期巡检要点",
          paragraphs: [
            "建议每季度检查地脚膨胀螺栓、横梁安全销及立柱垂直度，确保货架长期安全运行。",
          ],
        },
      ],
    },
    4: {
      views: "1,980 次阅读",
      tableOfContents: [
        { id: "environment", title: "1. 低温冷库（-25°C）防腐挑战" },
        { id: "finish", title: "2. 静电喷涂与热镀锌工艺对比" },
      ],
      sections: [
        {
          id: "environment",
          heading: "1. 低温冷库（-25°C）防腐挑战",
          paragraphs: [
            "冷库开关门时的温差易产生结露与高湿环境，加速普通钢材表面的氧化生锈。",
          ],
        },
        {
          id: "finish",
          heading: "2. 静电喷涂与热镀锌工艺对比",
          paragraphs: [
            "优质聚酯静电喷涂适用于 0°C 至 10°C 冷藏库，而在 -18°C 至 -25°C 深冷库中热镀锌工艺具备更卓越的防锈寿命。",
          ],
        },
      ],
    },
    5: {
      views: "1,750 次阅读",
      tableOfContents: [
        { id: "zoning", title: "1. 中型货架与角钢货架分区组合" },
        { id: "benefits", title: "2. 库存管理实际成效" },
      ],
      sections: [
        {
          id: "zoning",
          heading: "1. 中型货架与角钢货架分区组合",
          paragraphs: [
            "将承重 300–800kg/层的中型货架用于较重纸箱，搭配万能角钢货架存放小型工具与零配件，可让仓库分类一目了然。",
          ],
        },
        {
          id: "benefits",
          heading: "2. 库存管理实际成效",
          paragraphs: [
            "清晰的货位标签与分层管理大幅缩短找货时间，盘点更高效，通道更整洁。",
          ],
        },
      ],
    },
    6: {
      views: "1,520 次阅读",
      tableOfContents: [
        { id: "specs", title: "1. 层板尺寸与钢材厚度选择" },
        { id: "layout", title: "2. 门店与车间层距调节技巧" },
      ],
      sections: [
        {
          id: "specs",
          heading: "1. 层板尺寸与钢材厚度选择",
          paragraphs: [
            "根据所存货物的重量与尺寸，灵活选择 30cm、40cm、50cm 或 60cm 深度及 0.6mm–0.8mm 厚度钢层板。",
          ],
        },
        {
          id: "layout",
          heading: "2. 门店与车间层距调节技巧",
          paragraphs: [
            "遵循“重物放底层、高频商品放视线齐平层”的原则，兼顾结构稳固与取货便捷。",
          ],
        },
      ],
    },
    7: {
      views: "1,340 次阅读",
      tableOfContents: [
        { id: "checklist", title: "1. 货架季度安全巡检清单" },
        { id: "maintenance", title: "2. 预防性维护最佳实践" },
      ],
      sections: [
        {
          id: "checklist",
          heading: "1. 货架季度安全巡检清单",
          paragraphs: ["定期安全巡检能及时发现轻微碰撞隐患，避免演变为结构风险。"],
          bullets: [
            "检查所有横梁安全销是否完好无缺。",
            "检查立柱是否有变形、凹陷或地脚螺栓松动。",
            "确认各货位承重标识清晰并严格按额定载荷使用。",
          ],
        },
        {
          id: "maintenance",
          heading: "2. 预防性维护最佳实践",
          paragraphs: [
            "发现受损部件应及时更换，并定期对叉车司机进行规范放货培训。",
          ],
        },
      ],
    },
  },
};

export function getLocalizedArticle(
  article: Article,
  locale: string,
): Article {
  if (locale !== "en" && locale !== "zh") {
    return article;
  }
  const override = ARTICLE_TRANSLATIONS[locale][article.id];
  if (!override) {
    return article;
  }
  return {
    ...article,
    views: override.views,
    tableOfContents: override.tableOfContents,
    sections: override.sections,
  };
}
