export type SolutionSectorKey =
  | "all"
  | "logistics"
  | "manufacturing"
  | "retail"
  | "materials"
  | "storage";

export interface RecommendedSystem {
  name: string;
  slug: "ke-selective" | "ke-trung-tai" | "ke-v-lo";
}

export interface IndustrySolution {
  id: string;
  sector: Exclude<SolutionSectorKey, "all">;
  sectorLabel: string;
  title: string;
  badge: string;
  image: string;
  summary: string;
  challenges: string[];
  benefits: string[];
  recommendedSystems: RecommendedSystem[];
}

export const solutionSectorTabs: { key: SolutionSectorKey; label: string }[] = [
  { key: "all", label: "Tất cả nhu cầu" },
  { key: "logistics", label: "Kho hàng & Logistics" },
  { key: "manufacturing", label: "Nhà xưởng & Sản xuất" },
  { key: "retail", label: "Cửa hàng & Kinh doanh" },
  { key: "materials", label: "Kho vật tư & Linh kiện" },
  { key: "storage", label: "Lưu trữ hàng hóa" },
];

export const industrySolutions: IndustrySolution[] = [
  {
    id: "sol-logistics",
    sector: "logistics",
    sectorLabel: "KHO HÀNG & LOGISTICS",
    title: "Giải pháp kệ Selective cho kho hàng & Logistics",
    badge: "Tiếp cận 100% Pallet",
    image: "/images/racking-selective.jpg",
    summary:
      "Đối với kho hàng phân phối và logistics, khả năng tiếp cận hàng hóa nhanh chóng là yếu tố quan trọng. Kệ Selective giúp bố trí pallet theo từng vị trí riêng biệt, thuận tiện cho hoạt động xuất nhập và quản lý nhiều mã hàng.",
    challenges: [
      "Số lượng pallet lớn, nhiều chủng loại hàng hóa cần phân chia vị trí.",
      "Cần sử dụng xe nâng để xuất nhập hàng thường xuyên.",
      "Khó kiểm soát vị trí lưu trữ khi hàng hóa sắp xếp thiếu khoa học.",
    ],
    benefits: [
      "Tiếp cận trực tiếp từng vị trí pallet mà không cần di chuyển các pallet khác.",
      "Tận dụng chiều cao kho để bố trí nhiều tầng lưu trữ.",
      "Phù hợp với kho có nhiều mã hàng và nhu cầu xuất nhập thường xuyên.",
    ],
    recommendedSystems: [
      { name: "Kệ Selective", slug: "ke-selective" },
      { name: "Kệ Trung tải", slug: "ke-trung-tai" },
    ],
  },
  {
    id: "sol-manufacturing",
    sector: "manufacturing",
    sectorLabel: "NHÀ XƯỞNG & SẢN XUẤT",
    title: "Giải pháp kệ sắt cho nhà xưởng & khu vực sản xuất",
    badge: "Phân loại vật tư khoa học",
    image: "/images/factory-production.jpg",
    summary:
      "Nhà xưởng thường cần lưu trữ nhiều loại nguyên vật liệu, bán thành phẩm, phụ tùng và dụng cụ phục vụ hoạt động sản xuất. Lựa chọn hệ thống kệ phù hợp giúp phân chia khu vực lưu trữ, thuận tiện quản lý và lấy hàng khi cần.",
    challenges: [
      "Vật tư, phụ tùng và hàng hóa được lưu trữ tại nhiều khu vực khác nhau.",
      "Không gian nhà xưởng cần được bố trí hợp lý để thuận tiện di chuyển.",
      "Kích thước và tải trọng hàng hóa không đồng nhất.",
    ],
    benefits: [
      "Phân loại vật tư, phụ tùng theo từng tầng và khu vực.",
      "Tận dụng không gian lưu trữ theo chiều cao.",
      "Lựa chọn kệ trung tải theo quy cách phù hợp với đặc điểm hàng hóa.",
    ],
    recommendedSystems: [
      { name: "Kệ Trung tải", slug: "ke-trung-tai" },
      { name: "Kệ V lỗ", slug: "ke-v-lo" },
    ],
  },
  {
    id: "sol-retail",
    sector: "retail",
    sectorLabel: "CỬA HÀNG & KINH DOANH",
    title: "Giải pháp kệ sắt cho cửa hàng & cơ sở kinh doanh",
    badge: "Lắp ghép linh hoạt",
    image: "/images/racking-v-lo.jpg",
    summary:
      "Đối với cửa hàng và cơ sở kinh doanh, việc sắp xếp hàng hóa khoa học giúp không gian gọn gàng, dễ quan sát và thuận tiện trong quá trình lấy hàng. Kệ sắt lắp ghép là lựa chọn phù hợp cho nhiều mô hình lưu trữ và trưng bày.",
    challenges: [
      "Hàng hóa nhiều chủng loại, cần phân chia theo từng nhóm sản phẩm.",
      "Diện tích cửa hàng hạn chế, cần tận dụng không gian theo chiều cao.",
      "Nhu cầu thay đổi cách sắp xếp theo lượng hàng và mùa vụ kinh doanh.",
    ],
    benefits: [
      "Sắp xếp hàng hóa theo từng tầng, thuận tiện quan sát và lấy hàng.",
      "Tận dụng diện tích sử dụng, giữ không gian kinh doanh ngăn nắp.",
      "Linh hoạt điều chỉnh số tầng và cách bố trí theo nhu cầu.",
    ],
    recommendedSystems: [
      { name: "Kệ Trung tải", slug: "ke-trung-tai" },
      { name: "Kệ V lỗ", slug: "ke-v-lo" },
    ],
  },
  {
    id: "sol-materials",
    sector: "materials",
    sectorLabel: "KHO VẬT TƯ & LINH KIỆN",
    title: "Giải pháp kệ trung tải & kệ V lỗ cho kho vật tư",
    badge: "Dễ kiểm kê & phân loại",
    image: "/images/racking-medium.jpg",
    summary:
      "Kho vật tư và linh kiện thường chứa nhiều mặt hàng có kích thước nhỏ, vừa và không đồng nhất. Sử dụng kệ sắt phù hợp giúp phân chia hàng hóa theo từng khu vực, hỗ trợ kiểm kê và quản lý tồn kho thuận tiện hơn.",
    challenges: [
      "Nhiều loại linh kiện, phụ tùng và vật tư cần được phân loại riêng.",
      "Hàng hóa để trực tiếp trên sàn gây khó khăn khi tìm kiếm.",
      "Cần thay đổi cách bố trí tầng kệ theo kích thước vật tư.",
    ],
    benefits: [
      "Phân chia vật tư theo từng tầng và vị trí lưu trữ.",
      "Thuận tiện nhận diện, kiểm kê và lấy hàng.",
      "Có thể lựa chọn kích thước và cấu hình kệ phù hợp với hàng hóa.",
    ],
    recommendedSystems: [
      { name: "Kệ Trung tải", slug: "ke-trung-tai" },
      { name: "Kệ V lỗ", slug: "ke-v-lo" },
    ],
  },
  {
    id: "sol-storage",
    sector: "storage",
    sectorLabel: "LƯU TRỮ HÀNG HÓA",
    title: "Giải pháp kệ sắt cho nhu cầu lưu trữ hàng hóa",
    badge: "Đa dạng kết cấu",
    image: "/images/hero-warehouse.jpg",
    summary:
      "Tùy theo đặc điểm hàng hóa và không gian sử dụng, doanh nghiệp có thể lựa chọn hệ thống kệ với kết cấu, kích thước và tải trọng khác nhau. Kim Phú hỗ trợ tư vấn các dòng kệ phù hợp để sắp xếp hàng hóa thuận tiện và khoa học.",
    challenges: [
      "Hàng hóa có nhiều kích thước, trọng lượng và cách đóng gói.",
      "Cần bố trí khu vực lưu trữ riêng cho từng nhóm hàng.",
      "Không gian kho chưa được khai thác hiệu quả.",
    ],
    benefits: [
      "Tổ chức hàng hóa theo từng khu vực và tầng kệ.",
      "Lựa chọn kết cấu phù hợp với tải trọng và kích thước hàng hóa.",
      "Thuận tiện sắp xếp, bảo quản và quản lý hàng lưu trữ.",
    ],
    recommendedSystems: [
      { name: "Kệ Selective", slug: "ke-selective" },
      { name: "Kệ V lỗ", slug: "ke-v-lo" },
      { name: "Kệ Trung tải", slug: "ke-trung-tai" },
    ],
  },
];
