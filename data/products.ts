export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: "all" | "heavy" | "medium" | "floor";
  categoryLabel: string;
  image: string;
  gallery: string[];
  loadCapacity: string;
  steelStandard: string;
  warranty: string;
  origin: string;
  price?: string;
  oldPrice?: string;
  showPrice?: boolean;
  tag: string;
  isHot?: boolean;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  description: string;
  features: ProductFeature[];
  specifications: ProductSpec[];
  applications: string[];
  faq: ProductFAQ[];
}

export const productsData: Product[] = [
  {
    id: 1,
    slug: "ke-selective",
    name: "Kệ Chứa Pallet Selective Heavy Duty",
    category: "heavy",
    categoryLabel: "Kệ Tải Nặng",
    image: "/images/racking-selective.jpg",
    gallery: [
      "/images/racking-selective.jpg",
      "/images/hero-warehouse.jpg",
      "/images/factory-production.jpg",
      "/images/racking-drive-in.jpg",
    ],
    loadCapacity: "1.000kg - 3.500kg / pallet",
    steelStandard: "Thép cán nguội JIS G3101",
    warranty: "Bảo hành 5 năm kết cấu",
    origin: "Nhà máy Kệ Chứa Hàng Pro (KCN Tân Bình, TP.HCM)",
    price: "Từ 1.850.000đ",
    oldPrice: "2.100.000đ",
    tag: "Bán Chạy Số 1",
    isHot: true,
    rating: 5,
    reviewCount: 248,
    shortDescription:
      "Hệ thống kệ chứa pallet phổ biến và linh hoạt nhất hiện nay, cho phép xe nâng tiếp cận 100% vị trí pallet mà không cần di chuyển các pallet xung quanh.",
    description:
      "Kệ Selective Racking là giải pháp lưu trữ công nghiệp tải trọng nặng tiêu chuẩn quốc tế. Hệ thống được cấu tạo từ các cột Omega đột lỗ kết hợp với thanh dầm beam chịu lực liên kết ngàm khóa an toàn 4 chấu. Đây là dòng kệ bắt buộc cho các kho hàng luân chuyển liên tục, đa dạng quy cách mã hàng (SKU) và yêu cầu tốc độ xuất nhập hàng hóa tối đa.",
    features: [
      {
        title: "Tiếp cận 100% pallet trực tiếp",
        description:
          "Cho phép chọn lựa bất kỳ pallet nào trong kho ngay lập tức, phù hợp hoàn hảo với phương pháp quản lý kho FIFO (Nhập trước - Xuất trước).",
      },
      {
        title: "Tải trọng chịu lực vượt trội",
        description:
          "Thiết kế dầm beam hộp chịu lực từ 1.000kg đến 3.500kg trên mỗi tầng pallet, hệ số an toàn FEM đạt trên 1.5 lần tải định mức.",
      },
      {
        title: "Tương thích mọi dòng xe nâng",
        description:
          "Tự do lựa chọn xe nâng Forklift ngồi lái tiêu chuẩn, Reach truck tầm cao hoặc Stacker mà không gặp rào cản kỹ thuật.",
      },
      {
        title: "Khả năng mở rộng và tái cấu hình",
        description:
          "Các thanh dầm beam có thể điều chỉnh bước cao 50mm hoặc 75mm dễ dàng khi quy cách kích thước hàng hóa hoặc kiện hàng thay đổi.",
      },
    ],
    specifications: [
      {
        label: "Tải trọng thiết kế",
        value: "1.000kg - 3.500kg / pallet (tối đa 7.000kg / tầng beam)",
      },
      {
        label: "Chiều cao kệ tối đa",
        value: "Lên đến 12.800mm (tùy trần kho và tầm với xe nâng)",
      },
      {
        label: "Chiều dài dầm Beam",
        value: "2.300mm, 2.500mm, 2.700mm, 3.300mm, 3.600mm",
      },
      {
        label: "Tiết diện chân trụ",
        value: "Chân Omega 90x60mm hoặc 100x67mm dày 1.8mm - 2.5mm",
      },
      {
        label: "Vật liệu chế tạo",
        value: "Thép cán nguội SPCC / JIS G3101 SS400 chuẩn Nhật",
      },
      {
        label: "Xử lý bề mặt",
        value: "Sơn tĩnh điện bột Polyester ngoài trời sấy 200°C chống gỉ sét",
      },
      {
        label: "Phương thức xuất nhập",
        value: "FIFO (First In First Out) hoặc LIFO",
      },
      { label: "Tiêu chuẩn an toàn", value: "FEM 10.2.02, ISO 9001:2015" },
    ],
    applications: [
      "Kho trung tâm phân phối logistics, thương mại điện tử 3PL",
      "Nhà máy sản xuất thực phẩm đóng hộp, nước giải khát, FMCG",
      "Kho thành phẩm ngành cơ khí, bao bì, hạt nhựa, sơn hóa chất",
      "Kho vật liệu xây dựng và chuỗi siêu thị bán lẻ quy mô lớn",
    ],
    faq: [
      {
        question:
          "Khoảng cách lối đi cho xe nâng kệ Selective cần tối thiểu bao nhiêu mét?",
        answer:
          "Khoảng cách lối đi phụ thuộc vào loại xe nâng: với xe nâng Reach Truck tầm cao cần từ 2.8m - 3.2m; với xe nâng ngồi lái Counterbalance 3-4 bánh cần từ 3.6m - 4.2m. Đội ngũ kỹ sư của chúng tôi sẽ khảo sát và lên layout CAD chính xác theo catalogue xe nâng của bạn.",
      },
      {
        question: "Hệ thống có được bảo hành và kiểm định định kỳ không?",
        answer:
          "Toàn bộ kết cấu thép chịu lực kệ Selective do chúng tôi sản xuất được cam kết bảo hành 5 năm. Đồng thời, kỹ sư sẽ hỗ trợ hồ sơ thử tải tĩnh, chứng nhận an toàn CO/CQ xuất xưởng đầy đủ.",
      },
      {
        question: "Thời gian sản xuất và lắp đặt hoàn thiện mất bao lâu?",
        answer:
          "Với kho từ 500 - 2.000 vị trí pallet, thời gian gia công tại xưởng từ 7 - 12 ngày làm việc và thi công lắp đặt tại công trình từ 3 - 5 ngày.",
      },
    ],
  },
  {
    id: 2,
    slug: "ke-drive-in",
    name: "Kệ Kho Drive-In / Drive-Thru Mật Độ Cao",
    category: "heavy",
    categoryLabel: "Kệ Tải Nặng",
    image: "/images/racking-drive-in.jpg",
    gallery: [
      "/images/racking-drive-in.jpg",
      "/images/racking-selective.jpg",
      "/images/factory-production.jpg",
      "/images/blog-cold-storage.jpg",
    ],
    loadCapacity: "1.500kg - 2.500kg / pallet",
    steelStandard: "Mạ kẽm hoặc sơn tĩnh điện công nghiệp",
    warranty: "Bảo hành 5 năm kết cấu",
    origin: "Nhà máy Kệ Chứa Hàng Pro (KCN Tân Bình, TP.HCM)",
    price: "Từ 2.200.000đ",
    oldPrice: "2.450.000đ",
    tag: "Tối Ưu 80% Kho",
    rating: 5,
    reviewCount: 185,
    shortDescription:
      "Tăng mật độ lưu trữ lên đến 80% diện tích mặt sàn bằng cách triệt tiêu các lối đi xe nâng thông thường, xe nâng chạy trực tiếp vào lòng giá kệ.",
    description:
      "Kệ Drive-In Racking là giải pháp chứa hàng mật độ cao nhất cho các sản phẩm đồng nhất số lượng lớn. Thay vì cần lối đi giữa từng dãy kệ như Selective, kệ Drive-In thiết kế các ray dẫn hướng pallet liền mạch giúp xe nâng đi sâu vào từng khoang để xếp hoặc dỡ pallet. Hệ thống cực kỳ phổ biến trong kho lạnh và kho công nghiệp chế biến xuất khẩu.",
    features: [
      {
        title: "Tối ưu hóa 80% không gian kho bãi",
        description:
          "Giảm thiểu tối đa diện tích lối đi vô ích, nâng công suất chứa pallet gấp 2 lần so với phương án sàn kệ truyền thống.",
      },
      {
        title: "Tiết kiệm chi phí vận hành kho lạnh",
        description:
          "Mật độ hàng hóa cao giúp giảm tiêu hao điện năng làm lạnh trên từng mét khối thể tích kho.",
      },
      {
        title: "Ray dẫn pallet chịu lực cao cấp",
        description:
          "Được dập nguội gân định hình nguyên khối, chống trượt pallet và có tấm dẫn hướng định vị an toàn cho càng xe nâng.",
      },
      {
        title: "Tùy chọn Drive-In (LIFO) hoặc Drive-Thru (FIFO)",
        description:
          "Thiết kế 1 đầu xuất nhập (LIFO) hoặc thông 2 đầu (FIFO) linh hoạt theo quy trình quản trị logistics của doanh nghiệp.",
      },
    ],
    specifications: [
      {
        label: "Tải trọng thiết kế",
        value: "1.500kg - 2.500kg / vị trí pallet",
      },
      {
        label: "Độ sâu khoang chứa",
        value: "Từ 3 đến 12 pallet chiều sâu trên mỗi dãy",
      },
      {
        label: "Chiều cao kệ tối đa",
        value: "Lên đến 11.500mm (tương đương 4 - 6 tầng pallet)",
      },
      {
        label: "Ray đỡ pallet",
        value: "Thép mạ kẽm nhúng nóng hoặc sơn tĩnh điện dập định hình C/Z",
      },
      {
        label: "Kết cấu rằng gia cường",
        value: "Giằng đỉnh và giằng lưng chữ X chịu lực gió và dao động",
      },
      {
        label: "Vật liệu khung chính",
        value: "Thép kết cấu tiêu chuẩn JIS G3101 SS400",
      },
      {
        label: "Phương thức xuất nhập",
        value: "LIFO (Drive-In) hoặc FIFO (Drive-Thru)",
      },
      {
        label: "Môi trường làm việc",
        value: "Nhiệt độ thường và kho lạnh âm sâu -25°C đến -30°C",
      },
    ],
    applications: [
      "Kho lạnh bảo quản thủy hải sản, thịt gia súc, kem tươi và nông sản",
      "Kho sản xuất bia, nước giải khát, sữa đóng chai tiêu thụ theo lô lớn",
      "Ngành hóa chất đóng phuy, hạt nhựa nhập khẩu nguyên container",
      "Doanh nghiệp sản xuất hàng công nghiệp theo mùa vụ số lượng lớn",
    ],
    faq: [
      {
        question:
          "Kệ Drive-In có an toàn khi xe nâng chạy trực tiếp vào trong kệ không?",
        answer:
          "Hệ thống Drive-In được thiết kế ray dẫn hướng chân sàn (floor guide rail) và ốp bảo vệ chân trụ chữ U/L dày 4-6mm nhằm dẫn hướng bánh xe nâng, ngăn chặn hoàn toàn việc xe nâng va chạm vào cột chịu lực.",
      },
      {
        question:
          "Kho có nhiều loại pallet kích cỡ khác nhau có dùng kệ Drive-In được không?",
        answer:
          "Kệ Drive-In tối ưu tốt nhất cho các pallet có quy cách đồng nhất. Nếu pallet có chênh lệch kích thước lớn, nên sửant dụng pallet thép lót đáy hoặc chuyển sang giải pháp Kệ Radio Shuttle.",
      },
      {
        question:
          "Nên chọn giải pháp Drive-In hay Selective cho kho thực phẩm?",
        answer:
          "Nếu doanh nghiệp có ít mã hàng (SKU) nhưng số lượng từng mã rất lớn thì Drive-In vượt trội về chi phí lưu trữ trên mỗi pallet. Nếu có hàng trăm mã hàng lẻ thì Selective là lựa chọn phù hợp hơn.",
      },
    ],
  },
  {
    id: 3,
    slug: "ke-trung-tai",
    name: "Kệ Trung Tải Medium Duty (Kho Phụ Tùng)",
    category: "medium",
    categoryLabel: "Kệ Trung Tải",
    image: "/images/racking-medium.jpg",
    gallery: [
      "/images/racking-medium.jpg",
      "/images/racking-v-lo.jpg",
      "/images/factory-production.jpg",
      "/images/hero-warehouse.jpg",
    ],
    loadCapacity: "300kg - 800kg / tầng",
    steelStandard: "Mâm tole cuộn gân tăng cứng định hình",
    warranty: "Bảo hành 3 năm chính hãng",
    origin: "Nhà máy Kệ Chứa Hàng Pro (KCN Tân Bình, TP.HCM)",
    price: "Từ 950.000đ",
    oldPrice: "1.150.000đ",
    tag: "Ưu Đãi -15%",
    isHot: true,
    rating: 5,
    reviewCount: 312,
    shortDescription:
      "Dòng kệ lắp ghép không cần bu-lông ốc vít chịu tải trung bình, chuyên dùng bốc xếp hàng thủ công hoặc kết hợp xe thang lấy hàng nhanh trong kho linh kiện.",
    description:
      "Kệ trung tải (Medium Duty Racking) là dòng kệ để hàng được ưa chuộng bậc nhất trong các kho nguyên phụ liệu, kho phụ tùng máy móc, thiết bị viễn thông và chuỗi bán lẻ. Thiết kế khung chân đột lỗ Omega kết hợp dầm beam cài ngàm giúp việc tháo lắp, thay đổi khoảng cách mâm tầng diễn ra chỉ trong vài phút.",
    features: [
      {
        title: "Tải trọng 300 - 800kg mỗi tầng mâm",
        description:
          "Mâm tole cán sóng dày 0.7 - 1.0mm có gân tăng cứng hàn gia cố bên dưới, không cong võng khi để đồ nặng.",
      },
      {
        title: "Lắp ráp ngàm khóa không cần ốc vít",
        description:
          "Cơ chế ngàm kết nối tự khóa an toàn, tháo dỡ và di chuyển dễ dàng mà không làm trầy xước nước sơn.",
      },
      {
        title: "Mặt sàn mâm tole hoặc ván ép công nghiệp",
        description:
          "Tùy chọn mặt tole sơn tĩnh điện chống rỉ hoặc mặt ván ép MDF/HDF chống ẩm phủ melamine theo nhu cầu.",
      },
      {
        title: "Màu sơn công nghiệp bền đẹp",
        description:
          "Phối màu chuẩn công nghiệp: Chân cột Xanh Dương (Blue 5015) và Beam/Mâm Cam (Orange 2004) nổi bật, dễ phân loại khu vực.",
      },
    ],
    specifications: [
      {
        label: "Tải trọng cho phép",
        value: "300kg - 800kg / tầng phân bố đều",
      },
      {
        label: "Kích thước tiêu chuẩn",
        value: "Cao 1.5m - 3.0m x Dài 1.5m - 2.5m x Sâu 0.5m - 0.8m",
      },
      {
        label: "Số tầng mâm",
        value: "Từ 3 đến 6 tầng (tùy chỉnh theo yêu cầu)",
      },
      {
        label: "Quy cách chân trụ",
        value: "Omega 50x50mm hoặc 55x60mm dày 1.5mm",
      },
      {
        label: "Thanh dầm Beam",
        value: "Dầm Z, dầm P hoặc hộp 25x50mm dày 1.5mm",
      },
      {
        label: "Chất liệu mặt mâm",
        value: "Tole dày 0.8mm có hàn gân tăng cứng chữ C dưới đáy",
      },
      {
        label: "Phương thức lấy hàng",
        value: "Thao tác bốc tay thủ công hoặc xe thang di động",
      },
      {
        label: "Chế độ bảo hành",
        value: "36 tháng đổi mới chi tiết lỗi do sản xuất",
      },
    ],
    applications: [
      "Kho phụ tùng ô tô, xe máy, linh kiện sửa chữa cơ điện tử",
      "Kho thành phẩm thời trang, may mặc, da giày xuất khẩu",
      "Kho chứa bao bì, tem nhãn, thùng carton xưởng đóng gói",
      "Hệ thống kho hàng thương mại điện tử, kho hoàn tất đơn hàng fulfillment",
    ],
    faq: [
      {
        question: "Kệ trung tải có thể nối tiếp nhiều bộ với nhau được không?",
        answer:
          "Có, hệ thống được thiết kế dạng Kệ Độc Lập (2 cột) và Kệ Nối Tiếp (1 cột chung chân) giúp tiết kiệm từ 15-25% chi phí đầu tư khi lắp đặt theo dãy dài.",
      },
      {
        question: "Tôi có thể tự lắp đặt tại nhà xưởng được không?",
        answer:
          "Hoàn toàn được. Bộ kệ sử dụng ngàm cài khóa chốt, chúng tôi cung cấp video hướng dẫn và bản vẽ kỹ thuật chi tiết giúp bạn tự lắp ráp chỉ trong 15 phút mỗi bộ.",
      },
    ],
  },
  {
    id: 4,
    slug: "ke-san-mezzanine",
    name: "Kệ Sàn Lửng Mezzanine Floor Nhân Đôi Diện Tích",
    category: "floor",
    categoryLabel: "Kệ Sàn & Đa Năng",
    image: "/images/racking-mezzanine.jpg",
    gallery: [
      "/images/racking-mezzanine.jpg",
      "/images/hero-warehouse.jpg",
      "/images/factory-production.jpg",
      "/images/racking-medium.jpg",
    ],
    loadCapacity: "300kg - 1.200kg / m²",
    steelStandard: "Dầm I đúc kết cấu chịu lực tải trọng cao",
    warranty: "Bảo hành 5 năm kết cấu",
    origin: "Nhà máy Kệ Chứa Hàng Pro (KCN Tân Bình, TP.HCM)",
    price: "Từ 1.250.000đ",
    tag: "Nhân Đôi Mặt Sàn",
    rating: 5,
    reviewCount: 140,
    shortDescription:
      "Tận dụng tối đa chiều cao nhà xưởng để tạo thêm 1 đến 3 tầng sàn làm việc hoặc lưu trữ mà không cần xin giấy phép xây dựng cơi nới công trình.",
    description:
      "Sàn lửng công nghiệp Mezzanine Floor là giải pháp đột phá biến không gian trên cao bị bỏ trống thành diện tích sử dụng hữu ích. Hệ kết cấu gồm cột thép chịu lực nặng, dầm chính I-beam, dầm phụ C-purlin và mặt sàn tole gân chống trượt hoặc ván ép công nghiệp. Tầng dưới có thể lắp đặt kệ chứa hàng hoặc xưởng gia công, tầng trên làm văn phòng điều hành hoặc kho linh kiện nhẹ.",
    features: [
      {
        title: "Tăng 100% đến 200% diện tích mặt bằng",
        description:
          "Giải quyết bài toán thiếu kho ngay trong khuôn viên hiện hữu, tiết kiệm hàng trăm triệu chi phí thuê thêm nhà xưởng mới.",
      },
      {
        title: "Không yêu cầu kết cấu chịu lực của tòa nhà",
        description:
          "Hệ sàn đứng độc lập 100% tự chịu tải, truyền lực trực tiếp xuống móng sàn bê tông qua bản mã neo hóa chất Hilti.",
      },
      {
        title: "Tích hợp đầy đủ cầu thang, lan can an toàn",
        description:
          "Được trang bị cầu thang bộ tay vịn, lan can cao 1.1m theo tiêu chuẩn an toàn lao động và cửa mở cẩu hàng tiện lợi.",
      },
      {
        title: "Dễ dàng tháo rời và di dời khi chuyển xưởng",
        description:
          "Liên kết hoàn toàn bằng bu-lông cấp bền 8.8, cho phép tháo dỡ và tái lắp đặt sang địa điểm mới mà không hư hại kết cấu.",
      },
    ],
    specifications: [
      {
        label: "Tải trọng sàn sàn",
        value: "300kg - 1.200kg / m² tùy yêu cầu công năng",
      },
      {
        label: "Khẩu độ dầm vượt nhịp",
        value: "Từ 3.0m đến 7.0m không vướng cột giữa",
      },
      {
        label: "Chiều cao tầng lửng",
        value: "Thông thủy từ 2.4m đến 3.8m mỗi tầng",
      },
      {
        label: "Cột chịu lực",
        value: "Thép hộp vuông 100x100mm, 150x150mm hoặc thép hình I",
      },
      {
        label: "Dầm chính & Dầm phụ",
        value: "Thép I150, I200, I250 và xà gồ dập C/Z mạ kẽm",
      },
      {
        label: "Mặt sàn hoàn thiện",
        value: "Tole gân chống trượt 3-4mm, tấm Cemboard hoặc ván MDF",
      },
      {
        label: "Hệ thống an toàn",
        value: "Lan can bảo vệ cao 1.100mm, gờ chân chống rơi 150mm",
      },
      {
        label: "Cấp bu-lông liên kết",
        value: "Bu-lông cường độ cao 8.8 mạ kẽm",
      },
    ],
    applications: [
      "Kho thương mại điện tử kết hợp văn phòng điều hành và phòng livestream",
      "Nhà máy may mặc, xưởng đóng gói bao bì cần chia khu kiểm tra chất lượng (QC)",
      "Kho linh kiện điện tử, phụ tùng xe máy tầng trên, tầng dưới làm khu bảo dưỡng",
      "Kho chứa tài liệu, hồ sơ lưu trữ ngân hàng, bệnh viện và cơ quan hành chính",
    ],
    faq: [
      {
        question:
          "Lắp đặt sàn lửng Mezzanine có làm nứt hoặc hỏng nền bê tông hiện hữu không?",
        answer:
          "Kỹ sư kết cấu của chúng tôi sẽ đo đạc độ dày bê tông mác nền (tối thiểu mác 250 dày 150mm) và phân bố diện tích bản mã chân cột phù hợp, sử dụng neo nở cơ khí hoặc cấy bu-lông keo Hilti chuyên dụng tuyệt đối an toàn.",
      },
      {
        question: "Làm thế nào để đưa hàng hóa nặng lên tầng lửng?",
        answer:
          "Hệ thống có thể thiết kế cửa cẩu hàng pallet chuyên dụng (pallet drop gate), hoặc tích hợp thêm bàn nâng thủy lực (scissor lift) và thang nâng hàng tải trọng 500kg - 2.000kg.",
      },
    ],
  },
  {
    id: 5,
    slug: "ke-v-lo",
    name: "Kệ Sắt V Lỗ Đa Năng Lắp Ghép Thông Minh",
    category: "floor",
    categoryLabel: "Kệ Sàn & Đa Năng",
    image: "/images/racking-v-lo.jpg",
    gallery: [
      "/images/racking-v-lo.jpg",
      "/images/racking-medium.jpg",
      "/images/factory-production.jpg",
      "/images/hero-warehouse.jpg",
    ],
    loadCapacity: "80kg - 120kg / tầng",
    steelStandard: "Sơn tĩnh điện bóng mịn 2 mặt chống gỉ",
    warranty: "Bảo hành 3 năm chính hãng",
    origin: "Nhà máy Kệ Chứa Hàng Pro (KCN Tân Bình, TP.HCM)",
    price: "Từ 480.000đ",
    oldPrice: "560.000đ",
    tag: "Giá Tốt Nhất",
    rating: 5,
    reviewCount: 520,
    shortDescription:
      "Giải pháp lưu trữ tài liệu văn phòng, hàng hóa gia đình, tiệm tạp hóa và cửa hàng bán lẻ tiện dụng, chi phí đầu tư tiết kiệm nhất thị trường.",
    description:
      "Kệ sắt V lỗ đa năng là sản phẩm quốc dân có mặt trong hầu hết mọi văn phòng, gia đình và kho bán lẻ tại Việt Nam. Sử dụng thanh thép V đục lỗ tiêu chuẩn (V3x3, V4x4, V4x6, V3x5) kết hợp mâm tole dập gân cuốn mép an toàn. Toàn bộ bề mặt được xử lý qua 4 bể hóa chất tẩy rỉ và phủ sơn tĩnh điện công nghệ cao chống trầy xước.",
    features: [
      {
        title: "Tải trọng ổn định 80 - 120kg / tầng",
        description:
          "Được gia cố ke góc tam giác mạ kẽm tại 8 góc đỉnh và đáy giúp triệt tiêu hiện tượng rung lắc lưỡng cực.",
      },
      {
        title: "Thay đổi khoảng cách tầng tự do",
        description:
          "Bước lỗ dọc thanh V chuẩn 10mm giúp bạn dịch chuyển mâm kệ lên xuống linh hoạt theo kích cỡ hồ sơ hoặc thùng hàng.",
      },
      {
        title: "Bền bỉ trên 10 năm không bong tróc",
        description:
          "Lớp sơn tĩnh điện bám dính siêu bền, chống ẩm mốc, thích hợp môi trường khí hậu nhiệt đới ẩm gió mùa.",
      },
      {
        title: "Đa dạng kích thước có sẵn",
        description:
          "Luôn có sẵn hàng số lượng lớn, giao ngay trong ngày tại TP.HCM và Hà Nội.",
      },
    ],
    specifications: [
      {
        label: "Tải trọng chịu lực",
        value: "80kg - 120kg / tầng mâm phân bố đều",
      },
      {
        label: "Quy cách thanh V",
        value: "V3x5cm, V4x4cm hoặc V4x6cm dày 1.5mm - 2.0mm",
      },
      {
        label: "Chiều cao kệ",
        value: "1.0m, 1.2m, 1.5m, 1.8m, 2.0m, 2.4m, 3.0m",
      },
      { label: "Chiều dài mâm", value: "0.8m, 1.0m, 1.2m, 1.5m" },
      { label: "Chiều rộng mâm", value: "0.3m, 0.4m, 0.5m, 0.6m" },
      {
        label: "Mặt mâm tole",
        value: "Tole dày 0.6 - 0.8mm có sống dập tăng cứng",
      },
      {
        label: "Màu sắc tiêu chuẩn",
        value: "Xám ghi công nghiệp (RAL 7035) hoặc Trắng sữa",
      },
      {
        label: "Phụ kiện đi kèm",
        value: "Ke góc tam giác mạ kẽm, ốc bu-lông M8, chân đế cao su",
      },
    ],
    applications: [
      "Kho hồ sơ kế toán, chứng từ lưu trữ ngân hàng, thư viện trường học",
      "Cửa hàng bán lẻ tạp hóa, siêu thị mini, tiệm thuốc tây và mỹ phẩm",
      "Kho phụ kiện thời trang, quần áo bán online tại nhà",
      "Trưng bày chậu cây cảnh, đồ gia dụng gia đình trong nhà kho và sân thượng",
    ],
    faq: [
      {
        question: "Kệ có bán kèm ốc vít và phụ kiện lắp đặt không?",
        answer:
          "Có, mỗi bộ kệ đều được đóng gói đầy đủ chân nhựa bảo vệ sàn, bát ke góc tam giác và ốc bu-lông chống rỉ, tặng kèm khóa siết ốc chuyên dụng.",
      },
      {
        question: "Cửa hàng có nhận cắt chiều dài theo yêu cầu không?",
        answer:
          "Chúng tôi nhận gia công cắt góc thanh sắt V lỗ và dập mâm theo kích thước lọt lòng vị trí nhà kho của khách hàng hoàn toàn miễn phí.",
      },
    ],
  },
  {
    id: 6,
    slug: "ke-cantilever",
    name: "Kệ Tay Đỡ Cantilever (Vật Tư Dài & Cồng Kềnh)",
    category: "heavy",
    categoryLabel: "Kệ Tải Nặng",
    image: "/images/racking-cantilever.jpg",
    gallery: [
      "/images/racking-cantilever.jpg",
      "/images/racking-selective.jpg",
      "/images/factory-production.jpg",
      "/images/hero-warehouse.jpg",
    ],
    loadCapacity: "1.000kg - 4.000kg / tầng",
    steelStandard: "Chân trụ I-beam chuyên dụng kết cấu thép cán nóng",
    warranty: "Bảo hành 5 năm kết cấu",
    origin: "Nhà máy Kệ Chứa Hàng Pro (KCN Tân Bình, TP.HCM)",
    price: "Từ 2.800.000đ",
    tag: "Ống Thép & Gỗ",
    rating: 5,
    reviewCount: 96,
    shortDescription:
      "Thiết kế chuyên biệt không có cột cản trở phía trước, giải pháp hoàn hảo để lưu trữ ống thép, thanh nhôm định hình, ván gỗ ép và thép cuộn.",
    description:
      "Kệ Cantilever Racking (Kệ tay vươn) được thiết kế đặc thù cho các loại hàng hóa có chiều dài quá khổ hoặc hình dáng đặc biệt không thể xếp trên pallet chuẩn. Nhờ loại bỏ hoàn toàn các cột chịu lực phía trước mặt kệ, xe nâng có thể tiếp cận và nâng hạ cả bó thép dài 6m - 12m nhanh chóng và an toàn tuyệt đối.",
    features: [
      {
        title: "Không giới hạn chiều dài hàng hóa",
        description:
          "Hàng hóa trải dài liên tục qua nhiều tay đỡ mà không bị chắn bởi khung cột trung gian như kệ truyền thống.",
      },
      {
        title: "Tay đỡ điều chỉnh độ nghiêng và chiều cao",
        description:
          "Các tay vươn có chốt an toàn và gờ chặn đầu (end-stop) chống rơi rớt, bước điều chỉnh cao độ 100mm.",
      },
      {
        title: "Tùy chọn kết cấu 1 mặt (Single) hoặc 2 mặt (Double)",
        description:
          "Đặt áp tường (kệ 1 phía) hoặc đặt ở lối đi giữa kho (kệ 2 phía) để nhân đôi công suất sử dụng.",
      },
      {
        title: "Thép hình cán nóng siêu chịu tải",
        description:
          "Thân cột chính làm từ thép I-beam kết cấu vững chãi, chống vặn xoắn dưới lực uốn tải trọng nặng.",
      },
    ],
    specifications: [
      {
        label: "Tải trọng tay đỡ",
        value: "500kg - 2.000kg / tay (tổng tải tầng lên tới 4.000kg)",
      },
      {
        label: "Chiều dài tay đỡ",
        value: "600mm, 800mm, 1.000mm, 1.200mm, 1.500mm",
      },
      { label: "Chiều cao cột trụ", value: "Từ 2.500mm đến 9.000mm" },
      {
        label: "Vật liệu khung chính",
        value: "Thép hình cán nóng I150, I200, I250, I300 tiêu chuẩn SS400",
      },
      {
        label: "Khoảng cách bước cột",
        value: "Từ 1.0m đến 2.5m tùy độ võng vật liệu lưu trữ",
      },
      {
        label: "Phụ kiện an toàn",
        value: "Chốt chặn chống trượt đầu tay, mâm lưới thép hoặc tôn lót tầng",
      },
      {
        label: "Chống gỉ ăn mòn",
        value:
          "Sơn tĩnh điện dày 80 micron hoặc mạ kẽm nhúng nóng dùng ngoài trời",
      },
    ],
    applications: [
      "Kho nhà máy sản xuất nhôm định hình, ống thép tròn, thép hộp công trình",
      "Tổng kho chế biến gỗ tấm công nghiệp, ván ép MDF, MFC, cốp pha",
      "Kho dây cáp điện cao thế, cuộn tôn tấm, ống nhựa PVC / HDPE cấp thoát nước",
      "Khu vực bãi tập kết vật tư xây dựng và cơ khí ngoài trời",
    ],
    faq: [
      {
        question: "Kệ Cantilever có để ngoài trời mưa nắng được không?",
        answer:
          "Được. Với vị trí bãi ngoài trời, chúng tôi xử lý mạ kẽm nhúng nóng toàn phần theo tiêu chuẩn ASTM A123 đảm bảo độ bền trên 20 năm không bị rỉ sét ăn mòn.",
      },
      {
        question: "Cần loại xe nâng nào để xếp hàng vào kệ tay đỡ?",
        answer:
          "Có thể sử dụng xe nâng thông thường với phụ kiện cọc đâm hoặc bộ càng dịch chuyển (side shift). Với hàng dài hơn 6m trong lối đi hẹp, xe nâng đa hướng (Multi-directional Forklift) là phương án tối ưu.",
      },
    ],
  },
  {
    id: 7,
    slug: "ke-shuttle",
    name: "Hệ Thống Kệ Tự Động Radio Shuttle Robot",
    category: "heavy",
    categoryLabel: "Kệ Tải Nặng",
    image: "/images/racking-shuttle.jpg",
    gallery: [
      "/images/racking-shuttle.jpg",
      "/images/hero-warehouse.jpg",
      "/images/racking-drive-in.jpg",
      "/images/factory-production.jpg",
    ],
    loadCapacity: "1.500kg / pallet (Robot tự hành)",
    steelStandard: "Ray dẫn hướng hợp kim nhôm định hình cao cấp",
    warranty: "Bảo hành 5 năm kết cấu & 2 năm robot",
    origin:
      "Hệ thống cơ khí chế tạo tại Việt Nam + Robot chuyển giao công nghệ",
    price: "",
    tag: "Kho Thông Minh",
    isHot: true,
    rating: 5,
    reviewCount: 78,
    shortDescription:
      "Giải pháp tự động hóa kho hàng bán tự động thế hệ mới, robot Shuttle chạy trên đường ray nhận lệnh điều khiển từ xa để vận chuyển pallet trong đường hầm sâu.",
    description:
      "Kệ Radio Shuttle là bước nhảy vọt công nghệ thay thế kệ Drive-In truyền thống. Xe nâng chỉ cần đặt pallet tại đầu dãy kệ, robot Shuttle tự hành thông minh sẽ nâng pallet và tự động chạy sâu vào bên trong để xếp vào vị trí trống gần nhất. Toàn bộ thao tác thực hiện qua bộ điều khiển cầm tay không dây (Remote RF) hoặc tích hợp với hệ thống phần mềm quản lý kho WMS.",
    features: [
      {
        title: "Tối ưu hóa thời gian xuất nhập kho 80%",
        description:
          "Tài xế xe nâng không cần lái xe vào trong lòng kệ, giảm thiểu 99% rủi ro va chạm hư hỏng chân kệ.",
      },
      {
        title: "Độ sâu khoang chứa không giới hạn",
        description:
          "Mỗi làn kệ có thể dài từ 20 đến 50 pallet chiều sâu, nâng hệ số lấp đầy kho bãi lên mức tối đa.",
      },
      {
        title: "Pin Lithium sạc nhanh & hoạt động kho lạnh",
        description:
          "Robot trang bị pin Li-ion chu kỳ 3.000 lần sạc, hoạt động ổn định ở nhiệt độ kho lạnh âm sâu tới -30°C.",
      },
      {
        title: "Hỗ trợ linh hoạt cả 2 chế độ FIFO và LIFO",
        description:
          "Chuyển đổi linh hoạt giữa nhập trước xuất trước và nhập trước xuất sau chỉ bằng một nút bấm trên remote.",
      },
    ],
    specifications: [
      {
        label: "Tải trọng robot nâng",
        value: "Tối đa 1.500kg / pallet tiêu chuẩn",
      },
      {
        label: "Tốc độ di chuyển robot",
        value: "0.8m/s (có tải) - 1.1m/s (không tải)",
      },
      { label: "Độ sâu làn chứa hàng", value: "Lên đến 40 - 50m / làn kệ" },
      {
        label: "Nguồn năng lượng robot",
        value: "Pin sạc Lithium LiFePO4 24V/40Ah hoặc 60Ah",
      },
      {
        label: "Thời gian hoạt động liên tục",
        value: "8 - 10 giờ làm việc (sạc nhanh đầy trong 3 giờ)",
      },
      {
        label: "Khoảng cách điều khiển",
        value: "Sóng vô tuyến RF lên đến 50m xuyên vật cản",
      },
      {
        label: "Hệ thống cảm biến",
        value: "Cảm biến quang Laser dò pallet và cảm biến chống rơi an toàn",
      },
      {
        label: "Nhiệt độ môi trường",
        value: "-30°C đến +45°C (chống đọng sương mạch điện tử)",
      },
    ],
    applications: [
      "Kho trung tâm phân phối chuỗi siêu thị lớn, hàng tiêu dùng nhanh (FMCG)",
      "Kho lạnh hải sản xuất khẩu, thịt đông lạnh, thực phẩm chế biến sẵn",
      "Nhà máy sản xuất nước ngọt, sữa tươi, bia rượu đóng thùng",
      "Doanh nghiệp hướng tới chuyển đổi số và kho thông minh Smart Warehouse",
    ],
    faq: [
      {
        question: "Một kho cần bao nhiêu con robot Radio Shuttle?",
        answer:
          "Tùy thuộc vào tần suất xuất nhập hàng mỗi ca. Trung bình một kho có từ 1.000 đến 3.000 pallet chỉ cần từ 2 đến 4 con robot Shuttle luân chuyển giữa các làn kệ bằng xe nâng.",
      },
      {
        question: "Khi robot hết pin giữa làn kệ thì xử lý thế nào?",
        answer:
          "Robot có tính năng tự động cảnh báo pin yếu và chạy về đầu ray trước khi hết pin. Trường hợp khẩn cấp, chúng tôi có xe cứu hộ (Rescue cart) kéo robot ra ngoài chỉ trong 2 phút.",
      },
    ],
  },
  {
    id: 8,
    slug: "pallet-thep",
    name: "Pallet Thép Sơn Tĩnh Điện & Mạ Kẽm",
    category: "floor",
    categoryLabel: "Kệ Sàn & Đa Năng",
    image: "/images/racking-pallet-thep.jpg",
    gallery: [
      "/images/racking-pallet-thep.jpg",
      "/images/racking-selective.jpg",
      "/images/factory-production.jpg",
      "/images/hero-warehouse.jpg",
    ],
    loadCapacity: "Tải động 2.000kg / tĩnh 5.000kg",
    steelStandard: "Chống cháy nổ, bền trên 15 năm",
    warranty: "Bảo hành 5 năm kết cấu",
    origin: "Nhà máy Kệ Chứa Hàng Pro (KCN Tân Bình, TP.HCM)",
    price: "Từ 390.000đ",
    oldPrice: "450.000đ",
    tag: "Độ Bền > 15 Năm",
    rating: 5,
    reviewCount: 164,
    shortDescription:
      "Thay thế hoàn toàn pallet gỗ và nhựa dễ nứt gãy, chống mối mọt, kháng khuẩn tuyệt đối, không hấp thu mùi và chịu tải trọng cực lớn.",
    description:
      "Pallet thép công nghiệp được chế tạo từ thép tấm cán nguội dập định hình tăng cứng hoặc thép hộp liên kết hàn Robot tự động. Đây là lựa chọn bắt buộc cho các kho hàng xuất khẩu tiêu chuẩn HACCP, GMP, kho hóa chất phòng chống cháy nổ và các kho có tải trọng pallet cực nặng trên 2 tấn.",
    features: [
      {
        title: "Tuổi thọ sử dụng trên 15 năm",
        description:
          "Không mục nát, không gãy vụn như pallet gỗ, không bị giòn gãy biến dạng như pallet nhựa khi để ngoài nắng.",
      },
      {
        title: "Kháng khuẩn, đạt chuẩn kiểm định an toàn",
        description:
          "Dễ dàng xịt rửa vệ sinh sát khuẩn, không lưu ẩm, đáp ứng nghiêm ngặt tiêu chuẩn xuất khẩu nông sản châu Âu và Mỹ.",
      },
      {
        title: "Chống cháy nổ 100%",
        description:
          "Vật liệu thép không bắt lửa, giúp doanh nghiệp hạ bậc rủi ro phòng cháy chữa cháy và giảm phí bảo hiểm kho hàng.",
      },
      {
        title: "Tái chế thu hồi giá trị cao",
        description:
          "Sau chu kỳ sử dụng hơn 15 năm, pallet thép vẫn giữ giá trị thanh lý phế liệu kim loại cao tới 30-40% giá trị đầu tư.",
      },
    ],
    specifications: [
      { label: "Tải trọng tĩnh (Static Load)", value: "3.000kg - 6.000kg" },
      {
        label: "Tải trọng động (Dynamic Load)",
        value: "1.500kg - 2.500kg (khi di chuyển bằng xe nâng)",
      },
      { label: "Tải trọng trên giá kệ (Racking)", value: "1.000kg - 1.800kg" },
      {
        label: "Kích thước phổ biến",
        value: "1.100x1.100mm, 1.200x1.000mm, 1.200x800mm (chuẩn Euro)",
      },
      {
        label: "Hướng nâng",
        value: "2 hướng nâng hoặc 4 hướng nâng (2-way / 4-way entry)",
      },
      {
        label: "Mặt sàn pallet",
        value: "Mặt nan tole dập gân cuốn mép hoặc mặt kín liền khối",
      },
      {
        label: "Lớp phủ bề mặt",
        value: "Sơn tĩnh điện kháng xước hoặc Mạ kẽm nhúng nóng",
      },
    ],
    applications: [
      "Kho dược phẩm, phòng sạch y tế, chế biến thực phẩm chuẩn GMP",
      "Kho hóa chất dễ cháy, sơn dung môi, dầu nhớt bôi trơn công nghiệp",
      "Kho máy móc hạng nặng, khuôn đúc đúc kim loại, phụ tùng đúc gang",
      "Hệ thống kho vận xuất khẩu hàng nặng vận chuyển container đường biển",
    ],
    faq: [
      {
        question: "Pallet thép có nặng hơn pallet gỗ nhiều không?",
        answer:
          "Với công nghệ dập gân chịu lực chữ U, pallet thép có trọng lượng dao động từ 16kg - 24kg, tương đương hoặc chỉ nhỉnh hơn một chút so với pallet gỗ đặc chủng nhưng độ bền gấp 5-7 lần.",
      },
      {
        question:
          "Có nhận sản xuất pallet theo kích thước phi tiêu chuẩn không?",
        answer:
          "Chúng tôi có dây chuyền dập chấn CNC tự động, sẵn sàng sản xuất theo bản vẽ riêng của khách hàng từ đơn hàng chỉ từ 20 chiếc.",
      },
    ],
  },
];

export function getAllProducts(): Product[] {
  return productsData;
}

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return productsData.slice(0, limit);
  const sameCategory = productsData.filter(
    (p) => p.category === current.category && p.slug !== slug,
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = productsData.filter(
    (p) => p.category !== current.category && p.slug !== slug,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
