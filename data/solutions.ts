export type SolutionSectorKey =
  | "all"
  | "logistics"
  | "cold-storage"
  | "manufacturing"
  | "ecommerce"
  | "pharma"
  | "materials";

export interface RecommendedSystem {
  name: string;
  slug: string;
}

export interface IndustrySolution {
  id: string;
  sector: Exclude<SolutionSectorKey, "all">;
  sectorLabel: string;
  title: string;
  badge: string;
  metricHighlight: string;
  image: string;
  summary: string;
  challenges: string[];
  benefits: string[];
  recommendedSystems: RecommendedSystem[];
}

export interface SolutionComparisonRow {
  name: string;
  slug: string;
  density: string;
  densityLevel: "Cao" | "Rất cao" | "Trung bình";
  accessibility: string;
  flowMethod: string;
  loadCapacity: string;
  bestFor: string;
}

export interface SolutionCaseStudy {
  id: string;
  title: string;
  sector: string;
  location: string;
  scale: string;
  solutionUsed: string;
  resultBadge: string;
  summary: string;
  image: string;
  productSlug: string;
}

export const solutionSectorTabs: { key: SolutionSectorKey; label: string }[] = [
  { key: "all", label: "Tất Cả Ngành Hàng" },
  { key: "logistics", label: "Logistics & 3PL" },
  { key: "cold-storage", label: "Kho Lạnh & Thực Phẩm" },
  { key: "manufacturing", label: "Nhà Máy Sản Xuất" },
  { key: "ecommerce", label: "Thương Mại Điện Tử" },
  { key: "pharma", label: "Dược Phẩm & Hóa Chất" },
  { key: "materials", label: "Vật Liệu & Hàng Dài" },
];

export const industrySolutions: IndustrySolution[] = [
  {
    id: "sol-logistics",
    sector: "logistics",
    sectorLabel: "Logistics & Trung Tâm Phân Phối 3PL",
    title: "Giải Pháp Kho Phân Phối Tốc Độ Cao & Đa Mã SKU",
    badge: "Tiếp cận 100% Pallet",
    metricHighlight: "+45% tốc độ xuất nhập",
    image: "/images/racking-selective.jpg",
    summary:
      "Tối ưu luồng xe nâng cho các trung tâm phân phối có hàng nghìn mã SKU luân chuyển liên tục mỗi ngày, đảm bảo xuất nhập theo nguyên tắc FIFO chuẩn xác.",
    challenges: [
      "Số lượng mã hàng lớn, kích thước kiện hàng thay đổi theo từng khách hàng thuê kho",
      "Áp lực thời gian quay vòng xe tải và yêu cầu truy xuất trực tiếp từng pallet ngay lập tức",
    ],
    benefits: [
      "Tiếp cận 100% vị trí pallet không cần dịch chuyển hàng chắn phía trước",
      "Tương thích mọi dòng xe nâng Reach Truck, Counterbalance và phần mềm WMS",
      "Dễ dàng nâng cấp bước beam linh hoạt khi thay đổi quy cách hàng hóa",
    ],
    recommendedSystems: [
      { name: "Kệ Pallet Selective", slug: "ke-selective" },
      { name: "Pallet Thép Công Nghiệp", slug: "pallet-thep" },
    ],
  },
  {
    id: "sol-cold-storage",
    sector: "cold-storage",
    sectorLabel: "Kho Lạnh & Chế Biến Thực Phẩm",
    title: "Giải Pháp Lưu Trữ Mật Độ Cao Cho Kho Lạnh Âm Sâu (-30°C)",
    badge: "Tối ưu 80% thể tích lạnh",
    metricHighlight: "-30% điện năng làm lạnh",
    image: "/images/blog-cold-storage.jpg",
    summary:
      "Triệt tiêu lối đi dư thừa để tối đa hóa sức chứa trên từng mét khối kho lạnh, sử dụng thép mạ kẽm hoặc sơn tĩnh điện kháng ẩm bền bỉ trong môi trường âm sâu.",
    challenges: [
      "Chi phí đầu tư panel cách nhiệt và vận hành máy nén lạnh trên mỗi m³ cực kỳ đắt đỏ",
      "Môi trường ẩm lạnh dễ gây ăn mòn kết cấu thép và giảm hiệu suất thao tác của tài xế xe nâng",
    ],
    benefits: [
      "Tăng mật độ chứa pallet lên tới 80% so với phương án kệ lối đi truyền thống",
      "Tích hợp Robot Radio Shuttle giúp xe nâng không cần đi sâu vào kho lạnh",
      "Hỗ trợ kiểm soát hạn sử dụng lô hàng chuẩn FIFO/FEFO cho thủy sản, sữa, đồ uống",
    ],
    recommendedSystems: [
      { name: "Kệ Drive-In / Drive-Thru", slug: "ke-drive-in" },
      { name: "Kệ Tự Động Radio Shuttle", slug: "ke-shuttle" },
    ],
  },
  {
    id: "sol-manufacturing",
    sector: "manufacturing",
    sectorLabel: "Nhà Máy Sản Xuất & Công Nghiệp Nặng",
    title: "Giải Pháp Kho Nguyên Liệu & Thành Phẩm Tải Trọng Lớn",
    badge: "Chịu tải 3.500kg / Pallet",
    metricHighlight: "Hệ số an toàn FEM > 1.5x",
    image: "/images/racking-shuttle.jpg",
    summary:
      "Đồng bộ hóa kho nguyên vật liệu đầu vào và kho thành phẩm xuất xưởng với kết cấu thép JIS G3101 chịu tải nặng, đảm bảo an toàn vận hành liên tục 3 ca.",
    challenges: [
      "Hàng hóa nặng từ 1.5 - 3.5 tấn/pallet, khuôn mẫu cơ khí và bán thành phẩm cồng kềnh",
      "Cần phân tách rõ khu vực nguyên liệu, khu bán thành phẩm và khu chờ xuất container",
    ],
    benefits: [
      "Kết cấu cột Omega & dầm beam chịu tải lớn, đi kèm chứng nhận CO/CQ và thử tải tĩnh",
      "Tối ưu lưu trữ theo lô sản xuất lớn với Radio Shuttle hoặc Selective kết hợp",
      "Trang bị đầy đủ ốp bảo vệ chân trụ, thanh chắn pallet và rào an toàn đầu dãy",
    ],
    recommendedSystems: [
      { name: "Kệ Pallet Selective", slug: "ke-selective" },
      { name: "Kệ Tự Động Radio Shuttle", slug: "ke-shuttle" },
      { name: "Pallet Thép Sơn Tĩnh Điện", slug: "pallet-thep" },
    ],
  },
  {
    id: "sol-ecommerce",
    sector: "ecommerce",
    sectorLabel: "Thương Mại Điện Tử & Fulfillment",
    title: "Giải Pháp Kho Chia Chọn Đơn Hàng & Nhân Đôi Mặt Sàn",
    badge: "Nhân đôi 200% diện tích",
    metricHighlight: "+60% năng suất soạn đơn",
    image: "/images/racking-mezzanine.jpg",
    summary:
      "Kết hợp sàn lửng Mezzanine nhiều tầng cùng hệ kệ trung tải bốc tay giúp kho E-Commerce xử lý hàng chục nghìn đơn lẻ mỗi ngày ngay trong mặt bằng hiện hữu.",
    challenges: [
      "Hàng nghìn mã hàng nhỏ lẻ cần thao tác lấy hàng bằng tay nhanh chóng, chính xác",
      "Giá thuê kho nội đô cao trong khi chiều cao trần xưởng (6m - 9m) bị bỏ trống lãng phí",
    ],
    benefits: [
      "Tạo thêm 1 - 2 tầng sàn làm việc mà không cần xin phép xây dựng cơi nới",
      "Tầng dưới bố trí khu đóng gói & xuất vận, tầng trên lắp kệ trung tải chia chọn SKU",
      "Tích hợp cầu thang, lan can an toàn, cửa cẩu hàng và băng tải chuyển hàng nhanh",
    ],
    recommendedSystems: [
      { name: "Kệ Sàn Lửng Mezzanine", slug: "ke-san-mezzanine" },
      { name: "Kệ Trung Tải Medium Duty", slug: "ke-trung-tai" },
      { name: "Kệ Sắt V Lỗ Đa Năng", slug: "ke-v-lo" },
    ],
  },
  {
    id: "sol-pharma",
    sector: "pharma",
    sectorLabel: "Dược Phẩm, Y Tế & Hóa Chất",
    title: "Giải Pháp Kho Sạch Chuẩn GMP & An Toàn Phòng Cháy",
    badge: "Đạt chuẩn GMP / HACCP",
    metricHighlight: "100% chống ẩm & chống cháy",
    image: "/images/racking-pallet-thep.jpg",
    summary:
      "Hệ thống lưu trữ không bám bụi, kháng khuẩn, chịu hóa chất và chống cháy nổ hoàn toàn thay thế pallet gỗ truyền thống trong kho dược phẩm, phòng sạch và hóa chất.",
    challenges: [
      "Yêu cầu khắt khe về vệ sinh phòng sạch, kiểm soát lô sản xuất - hạn sử dụng (FEFO)",
      "Hóa chất dễ cháy và dung môi đòi hỏi vật liệu lưu trữ không bắt lửa, chống ăn mòn",
    ],
    benefits: [
      "Sơn tĩnh điện mịn kháng khuẩn hoặc mạ kẽm nhúng nóng dễ dàng vệ sinh sát khuẩn",
      "Pallet thép chống cháy nổ 100%, không mối mọt, không hấp thụ mùi hay độ ẩm",
      "Bố trí lối đi chuẩn kiểm định PCCC và dễ dàng quét mã vạch quản lý từng lô",
    ],
    recommendedSystems: [
      { name: "Pallet Thép & Phụ Kiện", slug: "pallet-thep" },
      { name: "Kệ Pallet Selective", slug: "ke-selective" },
      { name: "Kệ Trung Tải Medium Duty", slug: "ke-trung-tai" },
    ],
  },
  {
    id: "sol-materials",
    sector: "materials",
    sectorLabel: "Vật Liệu Xây Dựng, Thép & Nội Thất Gỗ",
    title: "Giải Pháp Lưu Trữ Vật Tư Dài & Hàng Quá Khổ",
    badge: "Không giới hạn chiều dài",
    metricHighlight: "Chịu tải 4.000kg / tầng",
    image: "/images/racking-cantilever.jpg",
    summary:
      "Thiết kế chuyên biệt loại bỏ cột chắn phía trước giúp xe nâng dễ dàng xếp dỡ ống thép, nhôm thanh định hình, ván gỗ ép công nghiệp và cuộn cáp dài 6m - 12m.",
    challenges: [
      "Vật tư dài cồng kềnh không thể đặt lên pallet chuẩn, xếp chồng dưới sàn gây cong vênh và nguy hiểm",
      "Khó phân loại theo đường kính, độ dày và tốn nhiều thời gian tìm kiếm vật tư khi xuất xưởng",
    ],
    benefits: [
      "Tay đỡ chịu lực vươn tự do, điều chỉnh cao độ linh hoạt và có chốt chặn chống trượt",
      "Tùy chọn kết cấu 1 mặt áp tường hoặc 2 mặt giữa kho, dùng tốt cả ngoài trời mạ kẽm",
      "Giảm tối đa hư hại trầy xước bề mặt nhôm, gỗ tấm và rút ngắn 50% thời gian bốc xếp",
    ],
    recommendedSystems: [
      { name: "Kệ Tay Đỡ Cantilever", slug: "ke-cantilever" },
      { name: "Kệ Pallet Selective", slug: "ke-selective" },
    ],
  },
];

export const solutionComparisonRows: SolutionComparisonRow[] = [
  {
    name: "Kệ Pallet Selective",
    slug: "ke-selective",
    density: "Trung bình - Khá",
    densityLevel: "Trung bình",
    accessibility: "100% trực tiếp từng pallet",
    flowMethod: "FIFO / LIFO",
    loadCapacity: "1.000 - 3.500 kg/pallet",
    bestFor: "Kho Logistics 3PL, đa mã hàng SKU",
  },
  {
    name: "Kệ Drive-In / Drive-Thru",
    slug: "ke-drive-in",
    density: "Tối ưu tới 80% sàn",
    densityLevel: "Rất cao",
    accessibility: "Theo từng làn hàng",
    flowMethod: "LIFO / FIFO",
    loadCapacity: "1.500 - 2.500 kg/pallet",
    bestFor: "Kho lạnh, thực phẩm, hàng đồng nhất",
  },
  {
    name: "Kệ Tự Động Radio Shuttle",
    slug: "ke-shuttle",
    density: "Cực cao (sâu 20 - 50 pallet)",
    densityLevel: "Rất cao",
    accessibility: "Bán tự động bằng Robot",
    flowMethod: "FIFO & LIFO linh hoạt",
    loadCapacity: "1.500 kg/pallet",
    bestFor: "Kho lạnh âm sâu, FMCG xuất nhập nhanh",
  },
  {
    name: "Kệ Sàn Lửng Mezzanine",
    slug: "ke-san-mezzanine",
    density: "Nhân đôi 100 - 200% sàn",
    densityLevel: "Cao",
    accessibility: "Tiếp cận 100% bốc tay",
    flowMethod: "Linh hoạt nhiều tầng",
    loadCapacity: "300 - 1.200 kg/m²",
    bestFor: "Kho E-Commerce, phụ tùng, kết hợp văn phòng",
  },
  {
    name: "Kệ Trung Tải Medium Duty",
    slug: "ke-trung-tai",
    density: "Khá cao theo tầng mâm",
    densityLevel: "Cao",
    accessibility: "100% lấy hàng thủ công",
    flowMethod: "FIFO linh hoạt",
    loadCapacity: "300 - 800 kg/tầng",
    bestFor: "Kho phụ tùng, may mặc, bao bì, fulfillment",
  },
  {
    name: "Kệ Tay Đỡ Cantilever",
    slug: "ke-cantilever",
    density: "Tối ưu theo chiều cao",
    densityLevel: "Cao",
    accessibility: "100% không cột chắn",
    flowMethod: "FIFO / LIFO",
    loadCapacity: "1.000 - 4.000 kg/tầng",
    bestFor: "Ống thép, nhôm thanh, ván gỗ dài 6 - 12m",
  },
];

export const featuredCaseStudies: SolutionCaseStudy[] = [
  {
    id: "case-1",
    title: "Trung Tâm Phân Phối Logistics 6.500m² Tại Bắc Ninh",
    sector: "Logistics & 3PL",
    location: "KCN VSIP Bắc Ninh",
    scale: "6.500 m² • 8.200 vị trí pallet",
    solutionUsed: "Kệ Selective 6 tầng cao 10.5m",
    resultBadge: "+62% sức chứa kho",
    summary:
      "Thiết kế lại toàn bộ mặt bằng lối đi xe nâng Reach Truck 3.0m giúp tăng từ 5.050 lên 8.200 vị trí pallet mà không cần mở rộng nhà xưởng.",
    image: "/images/hero-warehouse.jpg",
    productSlug: "ke-selective",
  },
  {
    id: "case-2",
    title: "Hệ Thống Kho Lạnh Thủy Sản Âm -25°C Tại Cần Thơ",
    sector: "Kho Lạnh & Thực Phẩm",
    location: "KCN Trà Nóc, Cần Thơ",
    scale: "2.800 m² • 4.600 vị trí pallet",
    solutionUsed: "Kệ Radio Shuttle + Drive-In mạ kẽm",
    resultBadge: "-28% chi phí điện lạnh",
    summary:
      "Ứng dụng 3 robot Radio Shuttle vận hành trong môi trường -25°C giúp cắt giảm 70% thời gian xe nâng di chuyển và bảo vệ tối đa kết cấu khung kệ.",
    image: "/images/blog-cold-storage.jpg",
    productSlug: "ke-shuttle",
  },
  {
    id: "case-3",
    title: "Kho Fulfillment & Phụ Tùng 2 Tầng Tại TP.HCM",
    sector: "E-Commerce & Phụ Tùng",
    location: "KCN Tân Bình, TP.HCM",
    scale: "1.800 m² sàn → 3.400 m² sử dụng",
    solutionUsed: "Sàn lửng Mezzanine + Kệ Trung Tải",
    resultBadge: "Nhân đôi diện tích kho",
    summary:
      "Tận dụng chiều cao trần 8.5m lắp đặt sàn Mezzanine chịu tải 600kg/m² kết hợp hệ kệ trung tải 4 tầng giúp rút ngắn 40% thời gian soạn đơn.",
    image: "/images/factory-production.jpg",
    productSlug: "ke-san-mezzanine",
  },
];
