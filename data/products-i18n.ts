import type { Product } from "./products";

type LocalizedProductOverride = Partial<
  Pick<
    Product,
    | "price"
    | "oldPrice"
    | "description"
    | "features"
    | "specifications"
    | "applications"
  >
>;

const PRODUCT_TRANSLATIONS: Record<
  "en" | "zh",
  Record<string, LocalizedProductOverride>
> = {
  en: {
    "ke-selective": {
      price: "From 1,850,000 VND",
      oldPrice: "2,100,000 VND",
      description:
        "Selective Pallet Racking is the international standard heavy-duty industrial storage solution. Built with perforated Omega uprights and heavy-duty box beams secured by 4-claw safety connectors, it is ideal for high-turnover warehouses with diverse SKUs requiring immediate access to every pallet.",
      features: [
        {
          title: "100% Direct Pallet Access",
          description:
            "Select and retrieve any pallet in the warehouse immediately, perfectly supporting FIFO (First In, First Out) inventory management.",
        },
        {
          title: "Outstanding Load Capacity",
          description:
            "Heavy-duty box beams engineered for 1,000kg to 3,500kg per pallet level with a European FEM safety factor above 1.5x.",
        },
        {
          title: "Compatible With All Forklifts",
          description:
            "Works seamlessly with counterbalanced forklifts, high-reach trucks, and stackers without technical barriers.",
        },
        {
          title: "Easy Expansion & Reconfiguration",
          description:
            "Beam heights adjust easily in 50mm or 75mm increments whenever pallet or carton dimensions change.",
        },
      ],
      specifications: [
        {
          label: "Design Load Capacity",
          value: "1,000kg - 3,500kg / pallet (up to 7,000kg / beam level)",
        },
        {
          label: "Maximum Rack Height",
          value: "Up to 12,800mm (depending on warehouse ceiling & forklift reach)",
        },
        {
          label: "Beam Length",
          value: "2,300mm, 2,500mm, 2,700mm, 3,300mm, 3,600mm",
        },
        {
          label: "Upright Profile",
          value: "Omega 90x60mm or 100x67mm, thickness 1.8mm - 2.5mm",
        },
        {
          label: "Material",
          value: "SPCC / JIS G3101 SS400 Japanese-standard cold-rolled steel",
        },
        {
          label: "Surface Finish",
          value: "Outdoor-grade Polyester powder coating cured at 200°C",
        },
        {
          label: "Inventory Flow",
          value: "FIFO (First In, First Out) or LIFO",
        },
      ],
      applications: [
        "3PL Logistics & Distribution Centers with high SKU variety",
        "FMCG, food, beverage, and consumer goods warehouses",
        "Industrial manufacturing raw material & finished goods storage",
        "E-commerce & wholesale fulfillment hubs",
      ],
    },
    "ke-trung-tai": {
      price: "From 1,250,000 VND",
      oldPrice: "1,450,000 VND",
      description:
        "Medium Duty Racking is a smart boltless hand-loaded shelving system designed for cartons, spare parts, components, and medium-weight supplies. Its interlocking beam-and-upright structure allows quick assembly and flexible tier adjustments without specialized tools.",
      features: [
        {
          title: "Boltless Interlocking Assembly",
          description:
            "Quick installation and disassembly with self-locking beam connectors, making layout changes effortless.",
        },
        {
          title: "Flexible Multi-Tier Decks",
          description:
            "Configure 3 to 6 levels with reinforced steel decks or plywood panels suited to carton and box sizes.",
        },
        {
          title: "Stable Medium Load Capacity",
          description:
            "Supports 300kg to 800kg per shelf level evenly distributed, ideal for daily manual picking.",
        },
        {
          title: "Durable Powder-Coated Finish",
          description:
            "Anti-rust electrostatic powder coating keeps shelves clean, scratch-resistant, and long-lasting.",
        },
      ],
      specifications: [
        {
          label: "Design Load Capacity",
          value: "300kg - 800kg / level (uniformly distributed)",
        },
        {
          label: "Standard Dimensions",
          value: "L 1,500 - 2,000mm × W 600 - 800mm × H 2,000 - 3,000mm",
        },
        {
          label: "Number of Levels",
          value: "3, 4, 5, or 6 levels (customizable on request)",
        },
        {
          label: "Upright Profile",
          value: "Omega 50x55mm or 50x60mm, thickness 1.5mm - 1.8mm",
        },
        {
          label: "Deck Material",
          value: "Reinforced steel deck, wire mesh, or industrial plywood",
        },
        {
          label: "Surface Finish",
          value: "Electrostatic powder coating (Blue & Orange or custom)",
        },
        {
          label: "Handling Method",
          value: "Manual hand-picking or rolling ladder",
        },
      ],
      applications: [
        "Spare parts, electronics, and mechanical component warehouses",
        "Garment, textile, packaging, and archive storage rooms",
        "Retail backrooms and e-commerce order picking zones",
        "Factory workshop material & tool storage",
      ],
    },
    "ke-v-lo": {
      price: "From 650,000 VND",
      oldPrice: "780,000 VND",
      description:
        "Slotted Angle (V-Hole) Racking is a versatile, cost-effective modular shelving system made from punched V-angle steel uprights and reinforced steel trays. It is easy to assemble, customize in height, and relocate for warehouses, retail stores, offices, and workshops.",
      features: [
        {
          title: "Adjustable Shelf Spacing",
          description:
            "Continuously punched V-angle uprights allow effortless height adjustments for items of any size.",
        },
        {
          title: "Quick & Convenient Assembly",
          description:
            "Assembled with standard bolts and corner gussets; easy to dismantle and move when needed.",
        },
        {
          title: "Space-Saving Organization",
          description:
            "Maximizes vertical space in compact stores, stockrooms, and workshops while keeping goods neat.",
        },
        {
          title: "Rust-Resistant Finish",
          description:
            "Double-sided electrostatic powder coating prevents corrosion and maintains a clean appearance.",
        },
      ],
      specifications: [
        {
          label: "Design Load Capacity",
          value: "80kg - 150kg / shelf level",
        },
        {
          label: "Standard Dimensions",
          value: "L 1,000 - 1,500mm × W 300 - 600mm × H 1,500 - 2,400mm",
        },
        {
          label: "Number of Levels",
          value: "3, 4, 5, or 6 levels (flexible adjustment)",
        },
        {
          label: "Upright Steel",
          value: "Slotted V-angle steel 30x50mm or 40x60mm (1.6mm - 2.0mm)",
        },
        {
          label: "Shelf Deck",
          value: "Ribbed cold-rolled steel tray (0.6mm - 0.8mm)",
        },
        {
          label: "Surface Finish",
          value: "Electrostatic powder coating (Light Grey / White)",
        },
        {
          label: "Handling Method",
          value: "Manual hand-picking",
        },
      ],
      applications: [
        "Retail stores, mini-marts, and hardware shops",
        "Office document & archive storage rooms",
        "Small spare parts, tools, and workshop supplies",
        "Household and e-commerce stockrooms",
      ],
    },
  },
  zh: {
    "ke-selective": {
      price: "1,850,000 越南盾起",
      oldPrice: "2,100,000 越南盾",
      description:
        "横梁式托盘货架（Selective）是国际标准的重型工业仓储方案。采用冲孔欧米茄立柱与高强度箱型横梁四爪安全卡扣连接，非常适合 SKU 品类多、周转频繁且需要 100% 直接存取每个托盘的现代化仓库。",
      features: [
        {
          title: "100% 托盘直接存取",
          description:
            "无需移动周边托盘即可直接拣选任意货位，完美支持先进先出（FIFO）库存管理。",
        },
        {
          title: "卓越重型承重能力",
          description:
            "箱型承重横梁设计单托盘承重 1,000kg 至 3,500kg，符合欧洲 FEM 安全系数 > 1.5 倍标准。",
        },
        {
          title: "兼容各类工业叉车",
          description:
            "全面兼容平衡重叉车、高位前移式叉车及堆高车，无作业障碍。",
        },
        {
          title: "灵活扩展与层高调节",
          description:
            "横梁高度可按 50mm 或 75mm 节距轻松调节，随时适配货物尺寸变化。",
        },
      ],
      specifications: [
        {
          label: "设计承重",
          value: "1,000kg - 3,500kg / 托盘（单层横梁最高 7,000kg）",
        },
        {
          label: "最大货架高度",
          value: "最高 12,800mm（视仓库净高与叉车举升高度而定）",
        },
        {
          label: "横梁长度",
          value: "2,300mm、2,500mm、2,700mm、3,300mm、3,600mm",
        },
        {
          label: "立柱截面",
          value: "欧米茄立柱 90x60mm 或 100x67mm，厚度 1.8mm - 2.5mm",
        },
        {
          label: "制造材质",
          value: "日本标准 SPCC / JIS G3101 SS400 优质冷轧钢",
        },
        {
          label: "表面处理",
          value: "200°C 高温固化户外级聚酯静电喷粉防锈工艺",
        },
        {
          label: "出入库方式",
          value: "FIFO（先进先出）或 LIFO（后进先出）",
        },
      ],
      applications: [
        "多 SKU 第三方物流（3PL）与区域分拨中心",
        "快消品、食品、饮料及日用品仓库",
        "制造工厂原材料与成品重型仓储",
        "电商与批发配送中心",
      ],
    },
    "ke-trung-tai": {
      price: "1,250,000 越南盾起",
      oldPrice: "1,450,000 越南盾",
      description:
        "中型货架采用智能无螺栓插接结构，专为纸箱、物料、零配件及中等重量货物的人工存取设计。安装快捷、层高调节灵活，广泛适用于各类工厂物料仓与商业仓库。",
      features: [
        {
          title: "无螺栓插接快速安装",
          description:
            "自锁卡扣结构拆装快捷，无需复杂工具即可灵活调整仓库布局。",
        },
        {
          title: "多层层板灵活组合",
          description:
            "可按需配置 3 至 6 层加强筋钢层板或木板，适配多种箱装货物。",
        },
        {
          title: "稳定可靠的中型承重",
          description:
            "单层均匀承重 300kg 至 800kg，满足日常高频人工拣货需求。",
        },
        {
          title: "耐磨防锈静电喷涂",
          description:
            "表面静电喷涂防锈抗刮擦，保持仓库整洁耐用。",
        },
      ],
      specifications: [
        {
          label: "设计承重",
          value: "300kg - 800kg / 层（均匀分布）",
        },
        {
          label: "常用规格尺寸",
          value: "长 1,500 - 2,000mm × 宽 600 - 800mm × 高 2,000 - 3,000mm",
        },
        {
          label: "层数配置",
          value: "3、4、5 或 6 层（支持按需定制）",
        },
        {
          label: "立柱截面",
          value: "欧米茄立柱 50x55mm 或 50x60mm，厚度 1.5mm - 1.8mm",
        },
        {
          label: "层板材质",
          value: "加强筋钢层板、网格层板或工业夹板",
        },
        {
          label: "表面处理",
          value: "静电喷涂（经典蓝橙配色或定制颜色）",
        },
        {
          label: "存取方式",
          value: "人工手拣或配合登高梯作业",
        },
      ],
      applications: [
        "零配件、电子元件及机械备件仓库",
        "服装、纺织、包装材料及档案存储室",
        "零售后仓及电商订单分拣区",
        "生产车间物料与工具存放区",
      ],
    },
    "ke-v-lo": {
      price: "650,000 越南盾起",
      oldPrice: "780,000 越南盾",
      description:
        "万能角钢货架（V 孔货架）是一款高性价比、灵活拼装的多功能存储货架，采用冲孔角钢立柱配加强筋钢层板，拆装简便、层距可自由调节，适用于仓库、零售门店、办公室及车间。",
      features: [
        {
          title: "层高自由灵活调节",
          description:
            "连续冲孔角钢立柱，随时按货物高度调整各层间距。",
        },
        {
          title: "拼装便捷易于搬迁",
          description:
            "标准螺栓与三角片连接，结构稳固且方便随时拆卸移动。",
        },
        {
          title: "高效利用立体空间",
          description:
            "充分挖掘门店、小仓库和车间的垂直空间，物品摆放整齐直观。",
        },
        {
          title: "双面静电喷涂防锈",
          description:
            "双面防锈喷涂工艺，美观洁净、经久耐用。",
        },
      ],
      specifications: [
        {
          label: "设计承重",
          value: "80kg - 150kg / 层",
        },
        {
          label: "常用规格尺寸",
          value: "长 1,000 - 1,500mm × 宽 300 - 600mm × 高 1,500 - 2,400mm",
        },
        {
          label: "层数配置",
          value: "3、4、5 或 6 层（灵活调节）",
        },
        {
          label: "立柱材质",
          value: "冲孔万能角钢 30x50mm 或 40x60mm（厚 1.6mm - 2.0mm）",
        },
        {
          label: "层板材质",
          value: "加强筋冷轧钢层板（厚 0.6mm - 0.8mm）",
        },
        {
          label: "表面处理",
          value: "静电喷涂（浅灰色 / 白色）",
        },
        {
          label: "存取方式",
          value: "人工直接存取",
        },
      ],
      applications: [
        "零售门店、便利店及五金杂货店",
        "办公室文件与财务档案存储室",
        "小型零配件、工具及车间物料存放",
        "家庭储物及电商小型备货仓",
      ],
    },
  },
};

export function getLocalizedProduct(product: Product, locale: string): Product {
  if (locale !== "en" && locale !== "zh") {
    return product;
  }
  const override = PRODUCT_TRANSLATIONS[locale][product.slug];
  if (!override) {
    return product;
  }
  return {
    ...product,
    ...override,
  };
}
