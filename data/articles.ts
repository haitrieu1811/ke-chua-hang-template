export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  callout?: {
    type: "tip" | "warning" | "note";
    title: string;
    content: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  image?: {
    src: string;
    caption: string;
  };
  bullets?: string[];
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  category: "design" | "standard" | "compare" | "cold";
  categoryName: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  views: string;
  isSpotlight?: boolean;
  keyTakeaways: string[];
  tableOfContents: { id: string; title: string }[];
  sections: ArticleSection[];
  relatedSlugs: string[];
}

export const articlesData: Article[] = [
  {
    id: 1,
    slug: "thiet-ke-layout-kho-bai",
    title: "Bí quyết thiết kế layout kho bãi giúp xe nâng di chuyển an toàn và tăng 70% sức chứa",
    category: "design",
    categoryName: "Thiết Kế Layout",
    image: "/images/blog-layout.jpg",
    date: "18/11/2026",
    readTime: "6 phút đọc",
    author: "Ban biên tập Kim Phú",
    authorRole: "Trưởng phòng Kết cấu Kho vận",
    views: "3.240 lượt xem",
    isSpotlight: true,
    excerpt:
      "Phân tích khoảng cách lối đi tối ưu cho xe nâng Reach Truck và Forklift counterbalanced, bố trí cửa xuất nhập hàng để tránh tắc nghẽn luồng vận chuyển và tối ưu hóa diện tích mặt bằng.",
    keyTakeaways: [
      "Xác định chính xác thông số bán kính quay xe (Aisle Width - AST) của từng dòng xe nâng trước khi cố định khoảng cách hàng kệ.",
      "Thiết kế luồng di chuyển 1 chiều (One-way traffic) tại khu vực xuất nhập để giảm 80% xung đột giao thông trong kho.",
      "Ứng dụng nguyên lý ABC để bố trí các mặt hàng luân chuyển nhanh gần cửa xuất, hàng chậm ở tầng cao và sâu bên trong.",
      "Luôn dự phòng tối thiểu 10% - 15% diện tích mặt sàn cho vùng đệm phân loại (Staging Area) và sạc xe nâng điện.",
    ],
    tableOfContents: [
      { id: "tong-quan-tam-quan-trong", title: "1. Tầm quan trọng của việc quy hoạch Layout kho" },
      { id: "khoang-cach-loi-di-xe-nang", title: "2. Cách tính toán độ rộng lối đi xe nâng chuẩn xác" },
      { id: "so-do-luong-hang-hoa", title: "3. Thiết kế luồng hàng hóa theo nguyên tắc chữ U và I" },
      { id: "bang-so-sanh-loi-di", title: "4. Bảng tra cứu khoảng cách lối đi theo dòng xe nâng" },
      { id: "loi-khuyen-chuyen-gia", title: "5. Lời khuyên an toàn từ kỹ sư kết cấu" },
    ],
    sections: [
      {
        id: "tong-quan-tam-quan-trong",
        heading: "1. Tầm quan trọng của việc quy hoạch Layout kho",
        paragraphs: [
          "Một bản thiết kế layout kho bãi khoa học không đơn thuần là việc xếp càng nhiều giá kệ vào phòng trống càng tốt. Ngược lại, nếu chỉ chăm chú vào việc nhồi nhét diện tích mà bỏ quên bán kính quay xe nâng hoặc vùng đệm xếp dỡ, kho hàng của bạn sẽ nhanh chóng rơi vào tình trạng tắc nghẽn cục bộ.",
          "Theo số liệu thực tế từ hơn 300 dự án kho vận do chúng tôi triển khai, việc tái cấu trúc layout hợp lý có thể giúp doanh nghiệp tăng từ 40% đến 70% dung tích lưu trữ hữu dụng, đồng thời cắt giảm tới 35% thời gian di chuyển của công nhân lấy hàng.",
        ],
        callout: {
          type: "tip",
          title: "Quy tắc vàng trong phân bổ diện tích kho:",
          content:
            "Tỷ lệ tiêu chuẩn cho một kho công nghiệp tối ưu: 60% diện tích dành cho hệ thống giá kệ lưu trữ, 25% diện tích cho lối đi xe nâng và 15% cho khu vực tiếp nhận, kiểm đếm và staging.",
        },
      },
      {
        id: "khoang-cach-loi-di-xe-nang",
        heading: "2. Cách tính toán độ rộng lối đi xe nâng chuẩn xác",
        paragraphs: [
          "Sai lầm phổ biến nhất của các chủ kho khi tự bố trí giá kệ là lấy chiều rộng thân xe nâng làm khoảng cách lối đi. Trên thực tế, khoảng cách lối đi làm việc (Working Aisle Width) phải được tính theo thông số AST (Right Angle Stacking Aisle Width) do nhà sản xuất xe nâng cung cấp.",
          "Công thức tiêu chuẩn để tính bề rộng lối đi an toàn: W = AST + 200mm (khoảng đệm an toàn mỗi bên 100mm). Nếu sử dụng pallet có kích thước vượt tiêu chuẩn 1.200mm x 1.000mm, cần cộng thêm phần nhô ra của kiện hàng.",
        ],
        bullets: [
          "Xe nâng điện Reach Truck: Bán kính quay nhỏ, lối đi yêu cầu từ 2.7m đến 3.2m.",
          "Xe nâng ngồi lái Counterbalance 3 bánh: Lối đi yêu cầu từ 3.2m đến 3.5m.",
          "Xe nâng dầu / điện 4 bánh ngồi lái tiêu chuẩn: Lối đi yêu cầu từ 3.6m đến 4.2m.",
          "Xe nâng lối đi rất hẹp VNA (Very Narrow Aisle): Lối đi chỉ từ 1.6m đến 1.9m.",
        ],
      },
      {
        id: "so-do-luong-hang-hoa",
        heading: "3. Thiết kế luồng hàng hóa theo nguyên tắc chữ U và I",
        paragraphs: [
          "Luồng di chuyển của hàng hóa quyết định tốc độ luân chuyển đơn hàng. Hiện nay có 2 mô hình phổ biến nhất được các tập đoàn logistics áp dụng:",
          "Mô hình dòng chảy chữ U (U-shaped flow): Cửa nhập hàng và cửa xuất hàng nằm cùng một phía nhà xưởng. Lợi thế là tận dụng chung sân bãi cho xe tải, nhân sự kiểm hàng có thể hỗ trợ chéo cho nhau, giảm thất thoát nhiệt độ đối với kho mát.",
          "Mô hình dòng chảy xuyên suốt chữ I (Through flow): Cửa nhập hàng ở một đầu và cửa xuất hàng ở đầu đối diện. Mô hình này triệt tiêu hoàn toàn nguy cơ va chạm giữa luồng hàng nhập và hàng xuất, cực kỳ phù hợp với các kho phân phối quy mô cực lớn có lưu lượng xe container vào liên tục.",
        ],
        image: {
          src: "/images/blog-layout.jpg",
          caption: "Bố trí layout giá kệ Selective phân luồng một chiều chữ U tại kho trung tâm",
        },
      },
      {
        id: "bang-so-sanh-loi-di",
        heading: "4. Bảng tra cứu khoảng cách lối đi theo dòng xe nâng",
        paragraphs: [
          "Dưới đây là bảng tổng hợp kích thước lối đi tham chiếu cho các loại xe nâng thông dụng tại thị trường Việt Nam:",
        ],
        table: {
          headers: ["Loại Xe Nâng", "Tải Trọng Nâng", "Tầm Với Chiều Cao", "Độ Rộng Lối Đi Tối Thiểu"],
          rows: [
            ["Xe nâng tay / Stacker bán tự động", "1.000 - 1.500 kg", "1.6m - 3.5m", "2.0m - 2.4m"],
            ["Xe nâng Reach Truck tầm cao", "1.500 - 2.500 kg", "6.0m - 12.5m", "2.8m - 3.2m"],
            ["Xe nâng Counterbalance ngồi lái", "2.000 - 3.500 kg", "3.0m - 6.0m", "3.6m - 4.2m"],
            ["Xe nâng lối đi hẹp VNA", "1.000 - 1.500 kg", "8.0m - 15.0m", "1.7m - 1.9m"],
          ],
        },
      },
      {
        id: "loi-khuyen-chuyen-gia",
        heading: "5. Lời khuyên an toàn từ kỹ sư kết cấu",
        paragraphs: [
          "Khi lập bản vẽ layout, đừng bao giờ quên các cấu kiện bảo vệ thụ động. Việc lắp đặt thêm ốp chân cột chữ U, rào chắn bảo vệ đầu dãy kệ (Row End Protector) chỉ chiếm khoảng 2% tổng chi phí dự án nhưng có thể cứu bạn khỏi những thảm họa sập đổ kệ dây chuyền có thiệt hại hàng tỷ đồng.",
          "Nếu quý doanh nghiệp đang chuẩn bị thuê mặt bằng mới hoặc muốn đo đạc đánh giá lại hiệu suất nhà kho hiện tại, hãy liên hệ đội ngũ kỹ sư của chúng tôi để được hỗ trợ đo đạc khảo sát 3D Laser và dựng bản vẽ AutoCAD hoàn toàn miễn phí.",
        ],
      },
    ],
    relatedSlugs: [
      "so-sanh-ke-selective-va-drive-in",
      "tieu-chuan-kiem-dinh-do-vong-beam",
      "ke-tu-dong-radio-shuttle",
    ],
  },
  {
    id: 2,
    slug: "so-sanh-ke-selective-va-drive-in",
    title: "So sánh chi tiết Kệ Selective và Kệ Drive-In: Doanh nghiệp nên đầu tư loại nào?",
    category: "compare",
    categoryName: "So Sánh Giải Pháp",
    image: "/images/blog-compare.jpg",
    date: "14/11/2026",
    readTime: "8 phút đọc",
    author: "Ban biên tập Kim Phú",
    authorRole: "Kỹ sư Tư vấn Dự án",
    views: "2.850 lượt xem",
    excerpt:
      "Bảng phân tích chi phí đầu tư trên từng pallet, mật độ lưu kho và khả năng tiếp cận hàng hóa giữa 2 hệ thống giá kệ công nghiệp phổ biến nhất hiện nay trên thị trường.",
    keyTakeaways: [
      "Kệ Selective cho khả năng tiếp cận 100% pallet, chi phí đầu tư ban đầu thấp nhất, thích hợp kho nhiều mã SKU.",
      "Kệ Drive-In tăng mật độ lưu trữ lên 80% thể tích kho, tiết kiệm chi phí làm lạnh, phù hợp hàng đồng nhất số lượng lớn.",
      "Selective áp dụng phương pháp FIFO tự nhiên, trong khi Drive-In theo phương pháp LIFO (hoặc Drive-Thru theo FIFO).",
      "Thời gian hoàn vốn ROI của Drive-In vượt trội hơn khi chi phí thuê mặt bằng hoặc tiền điện kho lạnh ở mức cao.",
    ],
    tableOfContents: [
      { id: "tong-quan-hai-he-thong", title: "1. Tổng quan nguyên lý vận hành của Selective và Drive-In" },
      { id: "bang-so-sanh-thong-so", title: "2. Bảng so sánh 8 tiêu chí kỹ thuật then chốt" },
      { id: "uu-nhuoc-diem-selective", title: "3. Điểm mạnh và giới hạn của Kệ Selective" },
      { id: "uu-nhuoc-diem-drive-in", title: "4. Điểm mạnh và giới hạn của Kệ Drive-In" },
      { id: "kich-ban-doanh-nghiep", title: "5. Bài toán lựa chọn: Doanh nghiệp nào nên dùng loại nào?" },
    ],
    sections: [
      {
        id: "tong-quan-hai-he-thong",
        heading: "1. Tổng quan nguyên lý vận hành của Selective và Drive-In",
        paragraphs: [
          "Trong ngành lưu trữ kho vận công nghiệp, kệ Selective và kệ Drive-In chiếm tới hơn 85% tổng thị phần giá kệ tải trọng nặng. Tuy nhiên, hai hệ thống này đại diện cho hai triết lý quản trị kho hoàn toàn trái ngược nhau:",
          "Kệ Selective hướng tới sự linh hoạt tối đa: mỗi pallet có một vị trí độc lập, xe nâng tiếp cận trực tiếp không cần di chuyển bất kỳ pallet nào khác.",
          "Kệ Drive-In hướng tới mật độ lưu trữ tối đa: triệt tiêu hầu hết lối đi xe nâng, đưa hàng hóa vào các hầm chứa sâu từ 4 đến 10 pallet liền kề.",
        ],
      },
      {
        id: "bang-so-sanh-thong-so",
        heading: "2. Bảng so sánh 8 tiêu chí kỹ thuật then chốt",
        paragraphs: [
          "Để có góc nhìn trực quan nhất, chúng tôi xây dựng bảng so sánh dựa trên các thông số kỹ thuật và chi phí thực tế:",
        ],
        table: {
          headers: ["Tiêu Chí Đánh Giá", "Kệ Selective Heavy Duty", "Kệ Drive-In Mật Độ Cao"],
          rows: [
            ["Khả năng tiếp cận pallet", "100% tiếp cận trực tiếp mọi vị trí", "Chỉ tiếp cận pallet ngoài cùng mỗi hầm"],
            ["Tỷ lệ sử dụng diện tích sàn", "35% - 45% diện tích kho", "70% - 85% diện tích kho"],
            ["Phương pháp quản lý xuất nhập", "FIFO (Nhập trước - Xuất trước)", "LIFO (Nhập trước - Xuất sau)"],
            ["Đa dạng chủng loại hàng (SKU)", "Rất cao, phù hợp kho hàng nghìn mã", "Thấp, chỉ phù hợp hàng đồng nhất lô lớn"],
            ["Tốc độ xuất nhập hàng", "Rất nhanh, xe nâng thao tác ngoài lối đi", "Trung bình, xe nâng phải lái vào trong kệ"],
            ["Yêu cầu tay nghề tài xế", "Cơ bản, dễ vận hành", "Cao, cần lái cẩn trọng trong đường ray hẹp"],
            ["Chi phí đầu tư / vị trí pallet", "Khoảng 1.800.000đ - 2.200.000đ", "Khoảng 2.200.000đ - 2.800.000đ"],
            ["Ứng dụng tối ưu nhất", "Logistics 3PL, FMCG, Phụ tùng ô tô", "Kho lạnh thủy sản, bia nước ngọt, bao bì"],
          ],
        },
      },
      {
        id: "uu-nhuoc-diem-selective",
        heading: "3. Điểm mạnh và giới hạn của Kệ Selective",
        paragraphs: [
          "Ưu điểm lớn nhất của kệ Selective là tính tương thích 100% với mọi loại xe nâng tiêu chuẩn và không kén kích thước pallet. Khi doanh nghiệp đổi mã bao bì hay đổi chiều cao kiện hàng, kỹ sư chỉ cần tháo ngàm beam và chỉnh bước lỗ trong 5 phút.",
          "Nhược điểm duy nhất là hệ thống này tiêu tốn rất nhiều diện tích mặt sàn cho lối đi xe nâng (thường từ 3.0m - 3.8m). Với các kho có giá thuê đất đắt đỏ hoặc kho lạnh tiêu hao nhiều tiền điện, kệ Selective sẽ đẩy chi phí vận hành bình quân trên mỗi pallet lên cao.",
        ],
      },
      {
        id: "uu-nhuoc-diem-drive-in",
        heading: "4. Điểm mạnh và giới hạn của Kệ Drive-In",
        paragraphs: [
          "Với kệ Drive-In, bạn có thể chứa được gấp đôi số lượng hàng hóa trong cùng một thể tích nhà xưởng. Đây là cứu cánh cho các tổng kho đông lạnh thủy hải sản, kho kem hoặc các nhà máy bia, sữa đóng hộp xuất kho theo lô container.",
          "Hạn chế cần lưu ý là nguyên lý LIFO (Last In First Out) khiến pallet nhập trước sẽ bị kẹt bên trong cho đến khi các pallet phía ngoài được dỡ hết. Do đó, các mặt hàng có hạn sử dụng (date) ngắn và luân chuyển lẻ không phù hợp với hệ thống này.",
        ],
        callout: {
          type: "warning",
          title: "Lưu ý an toàn quan trọng với Kệ Drive-In:",
          content:
            "Do xe nâng phải di chuyển sâu vào trong thân kệ, việc trang bị ray dẫn hướng sàn (Floor Guide Rail) và đào tạo tài xế xe nâng chạy tốc độ quy định dưới 5km/h là điều kiện bắt buộc để bảo vệ kết cấu.",
        },
      },
      {
        id: "kich-ban-doanh-nghiep",
        heading: "5. Bài toán lựa chọn: Doanh nghiệp nào nên dùng loại nào?",
        paragraphs: [
          "Doanh nghiệp nên chọn Kệ Selective nếu:",
          "1. Kho có hàng trăm hoặc hàng nghìn mã sản phẩm (SKU) cần xuất nhập lẻ hàng ngày.",
          "2. Doanh nghiệp cần quản lý chặt chẽ theo hạn sử dụng (FIFO).",
          "3. Ngân sách đầu tư ban đầu cần tối ưu mức tối đa.",
          "Doanh nghiệp nên chọn Kệ Drive-In nếu:",
          "1. Kho đông lạnh âm sâu (-20°C đến -25°C) cần nén mật độ để giảm chi phí điện lạnh.",
          "2. Hàng hóa sản xuất hàng loạt theo lô lớn, mùa vụ (bia, nước ngọt, đường, gạo).",
          "3. Diện tích kho bị hạn chế và không thể cơi nới mở rộng mặt bằng.",
        ],
      },
    ],
    relatedSlugs: [
      "thiet-ke-layout-kho-bai",
      "giai-phap-ke-kho-dong-lanh",
      "ke-tu-dong-radio-shuttle",
    ],
  },
  {
    id: 3,
    slug: "tieu-chuan-kiem-dinh-do-vong-beam",
    title: "Tiêu chuẩn kiểm định độ võng dầm beam và hệ số an toàn FEM 10.2.02 cho kệ pallet",
    category: "standard",
    categoryName: "Tiêu Chuẩn FEM",
    image: "/images/blog-standard.jpg",
    date: "09/11/2026",
    readTime: "5 phút đọc",
    author: "Ban biên tập Kim Phú",
    authorRole: "Chuyên gia Thẩm định An toàn",
    views: "2.410 lượt xem",
    excerpt:
      "Hướng dẫn nhận biết độ võng cho phép (L/200), cách kiểm tra định kỳ bu-lông chân trụ và tải trọng phân bố đều để ngăn ngừa rủi ro sập đổ giá kệ trong kho hàng công nghiệp.",
    keyTakeaways: [
      "Theo tiêu chuẩn châu Âu FEM 10.2.02, độ võng đàn hồi tối đa của thanh dầm beam chịu tải không được vượt quá L/200.",
      "Sau khi dỡ tải hoàn toàn, thanh beam bắt buộc phải phục hồi trạng thái phẳng ban đầu, không được xuất hiện biến dạng dẻo vĩnh viễn.",
      "Chốt an toàn ngàm beam (Safety Pin) bắt buộc phải được gắn đủ 100% tại cả hai đầu dầm để chống tuột beam khi càng xe nâng va chạm.",
      "Định kỳ 6 tháng hoặc 12 tháng phải thực hiện kiểm định thử tải tĩnh bằng thiết bị đo độ lún Laser chuyên dụng.",
    ],
    tableOfContents: [
      { id: "tieu-chuan-fem-la-gi", title: "1. Tiêu chuẩn FEM 10.2.02 trong sản xuất giá kệ là gì?" },
      { id: "cong-thuc-tinh-do-vong", title: "2. Công thức tính giới hạn độ võng dầm Beam L/200" },
      { id: "cac-nguyen-nhan-gay-vong", title: "3. Nguyên nhân gây võng dầm vượt ngưỡng an toàn" },
      { id: "checklist-kiem-tra-dinh-ky", title: "4. Checklist 5 bước kiểm tra an toàn tại kho" },
    ],
    sections: [
      {
        id: "tieu-chuan-fem-la-gi",
        heading: "1. Tiêu chuẩn FEM 10.2.02 trong sản xuất giá kệ là gì?",
        paragraphs: [
          "FEM (Fédération Européenne de la Manutention) là hiệp hội xử lý vật liệu châu Âu, cơ quan đặt ra các tiêu chuẩn khắt khe nhất thế giới về thiết kế kết cấu giá kệ thép tĩnh. Tiêu chuẩn FEM 10.2.02 quy định chi tiết về phương pháp tính toán dầm, cột, hệ giằng và kiểm soát biến dạng đàn hồi dưới tải trọng tĩnh.",
          "Mọi hệ thống giá kệ công nghiệp đạt tiêu chuẩn FEM đều phải trải qua quá trình tính toán phần tử hữu hạn (FEA) và thử nghiệm phá hủy thực tế trong phòng thí nghiệm để xác định hệ số an toàn tối thiểu từ 1.5 đến 1.65 lần tải trọng thiết kế công bố.",
        ],
      },
      {
        id: "cong-thuc-tinh-do-vong",
        heading: "2. Công thức tính giới hạn độ võng dầm Beam L/200",
        paragraphs: [
          "Khi hàng hóa nặng được đặt lên tầng kệ, thanh dầm thép tự nhiên sẽ có xu hướng cong nhẹ xuống ở điểm chính giữa. Đây là hiện tượng võng đàn hồi bình thường của kim loại.",
          "Theo FEM 10.2.02, giới hạn độ võng thẳng đứng tối đa cho phép δ_max = L / 200 (trong đó L là chiều dài lọt lòng của thanh dầm beam).",
        ],
        table: {
          headers: ["Chiều Dài Beam (L)", "Tải Trọng Thiết Kế / Tầng", "Độ Võng Tối Đa Cho Phép (L/200)"],
          rows: [
            ["2.300 mm (chứa 2 pallet)", "2.000 kg", "11.5 mm"],
            ["2.700 mm (chứa 2 pallet lớn)", "2.500 kg - 3.000 kg", "13.5 mm"],
            ["3.300 mm (chứa 3 pallet)", "3.000 kg", "16.5 mm"],
            ["3.600 mm (chứa 3 pallet lớn)", "3.500 kg", "18.0 mm"],
          ],
        },
        callout: {
          type: "note",
          title: "Cách kiểm tra độ võng nhanh tại hiện trường:",
          content:
            "Dùng một sợi dây cước căng thẳng mép đáy dầm beam từ đầu ngàm trái sang ngàm phải khi kệ đang chịu 100% tải trọng. Dùng thước lá kim loại đo khoảng cách từ điểm võng sâu nhất đến sợi dây. Nếu con số đo được vượt quá L/200, dầm đã bị quá tải hoặc thép không đạt chuẩn.",
        },
      },
      {
        id: "cac-nguyen-nhan-gay-vong",
        heading: "3. Nguyên nhân gây võng dầm vượt ngưỡng an toàn",
        paragraphs: [
          "Dựa trên các ca kiểm định sự cố kho bãi, chúng tôi ghi nhận 3 nguyên nhân hàng đầu dẫn đến biến dạng dầm beam:",
          "1. Tập trung tải điểm (Point load): Thay vì rải đều 2 pallet cân đối, tài xế đặt 1 pallet siêu nặng 2.5 tấn vào đúng chính giữa dầm.",
          "2. Xe nâng móc càng vào dầm khi rút pallet: Lực nâng của xe kéo giật dầm lên trên, làm bung chốt an toàn và vẹo ngàm móc.",
          "3. Nhà sản xuất kém uy tín bớt xén độ dày thép: Sử dụng thép mỏng hơn 0.3mm hoặc dùng phôi thép tái chế có mô-đun đàn hồi kém.",
        ],
      },
      {
        id: "checklist-kiem-tra-dinh-ky",
        heading: "4. Checklist 5 bước kiểm tra an toàn tại kho",
        paragraphs: [
          "Để đảm bảo an toàn tuyệt đối cho công nhân và hàng hóa, quản lý kho cần duy trì checklist kiểm tra hàng tháng:",
          "Bước 1: Rà soát 100% chốt an toàn màu cam/vàng tại các khớp nối dầm beam và chân trụ.",
          "Bước 2: Kiểm tra bu-lông neo chân trụ xuống sàn bê tông xem có bị lỏng hay nứt vỡ chân móng.",
          "Bước 3: Dùng thước bọt nivo kiểm tra độ thẳng đứng của cột trụ (độ lệch cho phép không quá H/500).",
          "Bước 4: Kiểm tra các thanh giằng chéo và giằng ngang chữ C xem có bị xe nâng va móp méo hay không.",
          "Bước 5: Lập biên bản niêm phong các tầng kệ có hiện tượng biến dạng vĩnh viễn và liên hệ đơn vị sản xuất thay thế dầm mới.",
        ],
      },
    ],
    relatedSlugs: [
      "quy-trinh-bao-duong-dinh-ky",
      "thiet-ke-layout-kho-bai",
      "so-sanh-ke-selective-va-drive-in",
    ],
  },
  {
    id: 4,
    slug: "giai-phap-ke-kho-dong-lanh",
    title: "Giải pháp kệ kho đông lạnh âm sâu (-25°C): Lựa chọn sơn tĩnh điện hay mạ kẽm nhúng nóng?",
    category: "cold",
    categoryName: "Kho Chuyên Dụng",
    image: "/images/blog-cold-storage.jpg",
    date: "03/11/2026",
    readTime: "7 phút đọc",
    author: "Ban biên tập Kim Phú",
    authorRole: "Kỹ sư Vật liệu Kim loại",
    views: "1.980 lượt xem",
    excerpt:
      "Đặc tính ăn mòn và đọng sương trong môi trường âm sâu. Vì sao lớp mạ kẽm nhúng nóng đạt độ bền gấp 3 lần sơn tĩnh điện tiêu chuẩn trong kho thủy sản xuất khẩu.",
    keyTakeaways: [
      "Hiện tượng đọng sương (Dew Point) khi đóng mở cửa kho lạnh là tác nhân chính gây rỉ sét kim loại từ các khe kẽ ngàm móc.",
      "Ở nhiệt độ âm sâu (-20°C đến -30°C), thép thông thường có xu hướng chuyển biến giòn lạnh (Cold Shortness), đòi hỏi vật liệu có hàm lượng Carbon kiểm soát chặt chẽ.",
      "Mạ kẽm nhúng nóng tạo liên kết hợp kim đa tầng Fe-Zn bám chặt vào cốt thép, chống bong tróc khi va quẹt càng xe nâng.",
      "Chi phí đầu tư mạ kẽm cao hơn 25% - 30% so với sơn tĩnh điện nhưng tiết kiệm 100% chi phí cạo rỉ sơn sửa lại trong suốt 15 năm.",
    ],
    tableOfContents: [
      { id: "thach-thuc-moi-truong-kho-lanh", title: "1. Những thách thức vật liệu trong kho lạnh âm sâu" },
      { id: "so-sanh-son-tinh-dien-va-ma-kem", title: "2. So sánh Sơn tĩnh điện vs Mạ kẽm nhúng nóng" },
      { id: "hien-tuong-gion-lanh", title: "3. Lưu ý hiện tượng thép bị giòn lạnh ở nhiệt độ âm" },
      { id: "khuyen-nghi-chuyen-gia", title: "4. Khuyến nghị giải pháp cho doanh nghiệp thủy sản & thực phẩm" },
    ],
    sections: [
      {
        id: "thach-thuc-moi-truong-kho-lanh",
        heading: "1. Những thách thức vật liệu trong kho lạnh âm sâu",
        paragraphs: [
          "Môi trường kho đông lạnh bảo quản cá tra fillet, tôm đông lạnh, thịt bò nhập khẩu thường duy trì liên tục ở mức -18°C đến -25°C với độ ẩm không khí rất cao. Khi xe nâng mở cửa kho chạy ra ngoài vùng đệm ấm và quay trở lại, hơi ẩm ngưng tụ lập tức thành những giọt nước li ti đọng trên bề mặt giá kệ.",
          "Nước đọng kết hợp với nồng độ muối biển tự nhiên bốc ra từ kiện hàng thủy sản tạo thành môi trường điện ly ăn mòn cực kỳ khốc liệt. Nếu lớp bảo vệ bề mặt bị trầy xước chỉ một vệt nhỏ, rỉ sét sẽ luồn sâu vào chân sơn và phá hủy kết cấu dầm chịu lực từ bên trong.",
        ],
      },
      {
        id: "so-sanh-son-tinh-dien-va-ma-kem",
        heading: "2. So sánh Sơn tĩnh điện vs Mạ kẽm nhúng nóng",
        paragraphs: [
          "Bảng so sánh chi tiết giữa hai phương pháp xử lý bề mặt kim loại trong môi trường âm sâu:",
        ],
        table: {
          headers: ["Tiêu Chí", "Sơn Tĩnh Điện Polyester", "Mạ Kẽm Nhúng Nóng (Hot-dip Galv)"],
          rows: [
            ["Độ dày lớp bảo vệ", "60 - 80 micromet", "85 - 120 micromet hợp kim kẽm"],
            ["Cơ chế bảo vệ", "Màng chắn cơ học che phủ bề mặt", "Bảo vệ điện hóa hy sinh (Anode kẽm)"],
            ["Khả năng chịu va quẹt càng xe", "Dễ bong tróc lớp màng sơn", "Không bong tróc nhờ liên kết luyện kim"],
            ["Khả năng phủ khe kẽ lòng ống", "Súng phun khó tới các hốc khuất", "Kẽm lỏng nhúng ngập 100% mặt trong ngoài"],
            ["Tuổi thọ trong kho lạnh", "3 - 5 năm xuất hiện rỉ ố", "15 - 25 năm không rỉ sét"],
            ["Chênh lệch chi phí đầu tư", "Giá thành tiêu chuẩn", "Cao hơn khoảng 25% - 30%"],
          ],
        },
      },
      {
        id: "hien-tuong-gion-lanh",
        heading: "3. Lưu ý hiện tượng thép bị giòn lạnh ở nhiệt độ âm",
        paragraphs: [
          "Ngoài vấn đề ăn mòn, một rủi ro kỹ thuật ít người để ý là hiện tượng chuyển pha giòn lạnh (Ductile-to-Brittle Transition Temperature - DBTT). Ở nhiệt độ dưới -15°C, các loại thép tạp chất chứa hàm lượng lưu huỳnh và photpho cao sẽ bị giảm mạnh độ dai va đập.",
          "Chỉ cần càng xe nâng va nhẹ với vận tốc 3km/h, chân trụ thép kém chất lượng có thể bị nứt toác giòn như thủy tinh thay vì uốn cong biến dạng đàn hồi như ở nhiệt độ phòng. Do đó, toàn bộ sản phẩm kệ kho lạnh của chúng tôi đều cam kết sử dụng phôi thép JIS G3101 SS400 đạt chuẩn chứng chỉ kiểm định va đập Charpy ở -20°C.",
        ],
        callout: {
          type: "warning",
          title: "Cảnh báo an toàn kho lạnh:",
          content:
            "Không bao giờ tận dụng giá kệ sơn tĩnh điện thanh lý từ kho hàng khô thông thường để lắp đặt vào kho âm sâu. Tuổi thọ của chúng sẽ sụt giảm nghiêm trọng và tiềm ẩn rủi ro sập đổ bất ngờ.",
        },
      },
      {
        id: "khuyen-nghi-chuyen-gia",
        heading: "4. Khuyến nghị giải pháp cho doanh nghiệp thủy sản & thực phẩm",
        paragraphs: [
          "Phương án kinh tế và bền bỉ nhất được các tập đoàn thủy sản lớn lựa chọn hiện nay là:",
          "Khung chân trụ và giằng: Sử dụng phương pháp Mạ kẽm nhúng nóng toàn phần để chống chọi tuyệt đối với nước đọng ở chân sàn.",
          "Dầm beam chịu tải: Có thể mạ kẽm nhúng nóng hoặc mạ kẽm điện phân dập định hình C-beam để tối ưu chi phí mà vẫn đảm bảo độ bền trên 15 năm.",
        ],
      },
    ],
    relatedSlugs: [
      "so-sanh-ke-selective-va-drive-in",
      "ke-tu-dong-radio-shuttle",
      "tieu-chuan-kiem-dinh-do-vong-beam",
    ],
  },
  {
    id: 5,
    slug: "ke-tu-dong-radio-shuttle",
    title: "Hệ thống kệ tự động Radio Shuttle Robot: Tối ưu 80% thời gian xuất nhập pallet",
    category: "compare",
    categoryName: "So Sánh Giải Pháp",
    image: "/images/racking-shuttle.jpg",
    date: "28/10/2026",
    readTime: "6 phút đọc",
    author: "Ban biên tập Kim Phú",
    authorRole: "Trưởng phòng Kết cấu Kho vận",
    views: "1.750 lượt xem",
    excerpt:
      "Nguyên lý vận hành xe robot tự hành luân chuyển pallet trong đường ray hẹp. Phân tích điểm hòa vốn ROI khi chuyển đổi từ kho truyền thống sang kho bán tự động.",
    keyTakeaways: [
      "Robot Radio Shuttle chạy độc lập trong đường ray làn kệ, nâng hạ pallet với tốc độ 1.1m/s.",
      "Xe nâng chỉ đứng ở đầu dãy thao tác bốc dỡ, giảm 90% quãng đường di chuyển và loại bỏ hoàn toàn nguy cơ đâm vào chân kệ.",
      "Hỗ trợ cả 2 chế độ FIFO và LIFO chỉ bằng thao tác bấm chuyển đổi trên remote điều khiển.",
      "Thời gian hoàn vốn ROI trung bình từ 18 đến 24 tháng nhờ cắt giảm xe nâng và giảm tiêu hao nhân lực vận hành.",
    ],
    tableOfContents: [
      { id: "nguyen-ly-radio-shuttle", title: "1. Nguyên lý hoạt động của robot Radio Shuttle" },
      { id: "loi-ich-vuot-troi", title: "2. 4 lợi ích vượt trội so với kho truyền thống" },
      { id: "bai-toan-kinh-te-roi", title: "3. Phân tích điểm hòa vốn đầu tư (ROI)" },
      { id: "tieu-chi-chuyen-doi", title: "4. Khi nào doanh nghiệp nên chuyển sang kho Shuttle?" },
    ],
    sections: [
      {
        id: "nguyen-ly-radio-shuttle",
        heading: "1. Nguyên lý hoạt động của robot Radio Shuttle",
        paragraphs: [
          "Hệ thống Radio Shuttle Racking là bước tiến vượt bậc của tự động hóa kho bán tự động (Semi-Automated Warehouse). Cốt lõi của hệ thống là những chú robot tự hành chạy trên ray thép định hình chuyên dụng lắp dọc theo lòng các dãy kệ sâu.",
          "Quy trình vận hành cực kỳ tinh gọn: Xe nâng đưa robot vào làn kệ cần xuất/nhập, sau đó đặt pallet lên trên robot tại đầu đường ray. Tài xế bấm nút remote, robot sẽ tự động luồn dưới đáy pallet, kích nâng pallet lên khỏi ray và chạy với vận tốc 1.0m/s đưa pallet vào tận cùng vị trí trống sâu bên trong khoang.",
        ],
      },
      {
        id: "loi-ich-vuot-troi",
        heading: "2. 4 lợi ích vượt trội so với kho truyền thống",
        paragraphs: [
          "So với kệ Drive-In truyền thống, Radio Shuttle giải quyết triệt để 4 nút thắt lớn nhất:",
          "1. Tốc độ xuất nhập thần tốc: Tài xế xe nâng không phải bò vào lòng kệ với vận tốc rùa bò, một ca làm việc có thể luân chuyển nhiều hơn 60% số lượng pallet.",
          "2. Triệt tiêu hư hỏng va chạm: Xe nâng chỉ đứng ở ngoài mặt kệ, giảm thiểu 99% các vụ đâm quẹt làm biến dạng chân trụ.",
          "3. Tận dụng chiều sâu không giới hạn: Làn kệ có thể dài 30m - 50m (tương đương 30 - 45 pallet chiều sâu) mà vẫn đảm bảo thao tác ổn định.",
          "4. Linh hoạt chuyển đổi FIFO và LIFO: Cho phép xuất nhập 2 đầu hoặc 1 đầu tùy theo mùa vụ và mã hàng.",
        ],
      },
      {
        id: "bai-toan-kinh-te-roi",
        heading: "3. Phân tích điểm hòa vốn đầu tư (ROI)",
        paragraphs: [
          "Nhiều chủ doanh nghiệp e ngại chi phí robot Shuttle ban đầu. Tuy nhiên khi phân tích bài toán tài chính tổng thể (TCO) trong 3 năm:",
          "Kho 3.000 pallet dùng Drive-In cần tối thiểu 6 xe nâng và 6 tài xế mỗi ca. Chuyển sang Radio Shuttle chỉ cần 2 xe nâng và 3 robot tự hành.",
          "Tiết kiệm chi phí đầu tư 4 xe nâng (khoảng 1.6 tỷ đồng), tiết kiệm chi phí lương thưởng 4 tài xế hàng năm (khoảng 600 triệu/năm), cộng với khoản tiết kiệm điện lạnh nhờ mật độ nén cao hơn 20%. Điểm hòa vốn dự án thường đạt được sau 18 - 22 tháng vận hành.",
        ],
        callout: {
          type: "tip",
          title: "Thông số pin lithium thế hệ mới:",
          content:
            "Robot Radio Shuttle hiện nay sử dụng pin Lithium LiFePO4 dung lượng cao, chỉ cần 3 giờ sạc nhanh là có thể hoạt động liên tục 8-10 giờ ca đêm, tuổi thọ pin đạt trên 3.000 chu kỳ nạp xả.",
        },
      },
      {
        id: "tieu-chi-chuyen-doi",
        heading: "4. Khi nào doanh nghiệp nên chuyển sang kho Shuttle?",
        paragraphs: [
          "Giải pháp này đem lại hiệu quả cao nhất cho các doanh nghiệp có đặc điểm sau:",
          "- Kho có quy mô từ 1.000 pallet trở lên.",
          "- Số lượng mã hàng (SKU) ở mức trung bình và xuất nhập theo lô lớn.",
          "- Kho lạnh thực phẩm, kho nước giải khát, kho logistics thương mại điện tử cần tốc độ xuất đơn cực nhanh.",
        ],
      },
    ],
    relatedSlugs: [
      "so-sanh-ke-selective-va-drive-in",
      "giai-phap-ke-kho-dong-lanh",
      "thiet-ke-layout-kho-bai",
    ],
  },
  {
    id: 6,
    slug: "ke-san-lung-mezzanine-floor",
    title: "Kệ sàn lửng Mezzanine Floor nhân đôi diện tích kho phụ tùng và linh kiện điện tử",
    category: "design",
    categoryName: "Thiết Kế Layout",
    image: "/images/racking-mezzanine.jpg",
    date: "22/10/2026",
    readTime: "5 phút đọc",
    author: "Ban biên tập Kim Phú",
    authorRole: "Chuyên gia Thẩm định An toàn",
    views: "1.520 lượt xem",
    excerpt:
      "Giải pháp tận dụng tối đa chiều cao nhà xưởng mà không cần cơi nới diện tích đất. Cách tính toán kết cấu dầm chính, dầm phụ và tải trọng mặt sàn an toàn.",
    keyTakeaways: [
      "Sàn lửng Mezzanine tăng 100% đến 200% diện tích sử dụng mặt bằng mà không cần xin giấy phép xây dựng cơi nới công trình.",
      "Kết cấu hoàn toàn độc lập, lắp ghép bu-lông 100%, dễ dàng tháo dỡ và tái sử dụng khi di dời nhà xưởng.",
      "Tải trọng thiết kế đa dạng từ 300kg/m² (văn phòng / hàng nhẹ) đến 1.200kg/m² (kho máy móc công nghiệp).",
      "Tích hợp linh hoạt thang bộ, lan can an toàn và cửa cẩu hàng pallet chuyên dụng.",
    ],
    tableOfContents: [
      { id: "tong-quan-san-lung", title: "1. Sàn Mezzanine Floor là gì?" },
      { id: "cau-tao-ket-cau-thep", title: "2. Cấu tạo kết cấu dầm chính, dầm phụ và bản sàn" },
      { id: "cac-phuong-an-mat-san", title: "3. So sánh các loại vật liệu lót mặt sàn" },
      { id: "quy-chuan-an-toan", title: "4. Quy chuẩn an toàn tải trọng và lối thoát hiểm" },
    ],
    sections: [
      {
        id: "tong-quan-san-lung",
        heading: "1. Sàn Mezzanine Floor là gì?",
        paragraphs: [
          "Trong các nhà xưởng có chiều cao trần từ 6m đến 10m, việc chỉ sử dụng mặt sàn bên dưới đồng nghĩa với việc lãng phí hơn 50% thể tích không gian thuê. Sàn lửng Mezzanine Floor là kết cấu sàn thép bán cố định được dựng đứng độc lập bên trong nhà xưởng.",
          "Hệ sàn tạo ra một hoặc hai tầng làm việc mới ngay phía trên khu vực sản xuất hoặc kho chứa hiện hữu. Bạn có thể bố trí văn phòng điều hành, phòng thí nghiệm, phòng QA/QC hoặc kho linh kiện nhẹ ở tầng trên trong khi dây chuyền lắp ráp bên dưới vẫn hoạt động bình thường.",
        ],
      },
      {
        id: "cau-tao-ket-cau-thep",
        heading: "2. Cấu tạo kết cấu dầm chính, dầm phụ và bản sàn",
        paragraphs: [
          "Một hệ thống sàn lửng Mezzanine đạt chuẩn kết cấu xây dựng bao gồm 4 thành phần chính:",
          "1. Cột chịu lực: Làm từ thép hộp vuông dày hoặc thép hình I đúc (I150, I200), chân cột liên kết với nền xưởng bằng bản mã dày 12-16mm và bu-lông nở hóa chất chuyên dụng.",
          "2. Dầm chính (Main Beam): Thép hình I hoặc H vượt nhịp từ 3m đến 7m, đảm bảo độ võng giới hạn dưới L/350.",
          "3. Dầm phụ (Secondary Purlin): Xà gồ thép dập C hoặc Z mạ kẽm bố trí khoảng cách 400 - 600mm để đỡ trực tiếp mặt sàn.",
          "4. Lan can & Cầu thang: Lan can ống thép cao 1.1m có thanh chắn gờ chân 15cm chống rơi vật tư dụng cụ.",
        ],
      },
      {
        id: "cac-phuong-an-mat-san",
        heading: "3. So sánh các loại vật liệu lót mặt sàn",
        paragraphs: [
          "Tùy theo nhu cầu và ngân sách, khách hàng có thể chọn các loại vật liệu hoàn thiện mặt sàn sau:",
        ],
        table: {
          headers: ["Vật Liệu Mặt Sàn", "Ưu Điểm", "Nhược Điểm", "Ứng Dụng Phổ Biến"],
          rows: [
            ["Tole gân chống trượt 3-4mm", "Chịu tải cực cao, chống cháy 100%, không trơn trượt", "Trọng lượng bản thân nặng, giá thành cao", "Kho phụ tùng máy móc nặng, xe nâng tay chạy"],
            ["Tấm Cemboard xi măng chịu nước", "Chống cháy lan, êm chân, giá thành hợp lý", "Cần xử lý mối nối phẳng trước khi dán decal", "Văn phòng làm việc trên cao, phòng đóng gói"],
            ["Ván ép công nghiệp phủ Melamine", "Thẩm mỹ đẹp, thi công siêu nhanh", "Kém bền trong môi trường ẩm ướt nhiều nước", "Kho hàng thời trang, mỹ phẩm, studio chụp ảnh"],
            ["Sàn lưới grating mạ kẽm", "Thông thoáng ánh sáng và nước chữa cháy qua sàn", "Không đi giày gót nhọn, lọt bụi bẩn xuống dưới", "Kho nguyên vật liệu cần thông gió tự nhiên"],
          ],
        },
      },
      {
        id: "quy-chuan-an-toan",
        heading: "4. Quy chuẩn an toàn tải trọng và lối thoát hiểm",
        paragraphs: [
          "Theo quy chuẩn phòng cháy chữa cháy và an toàn lao động, sàn lửng có diện tích trên 100m² bắt buộc phải bố trí tối thiểu 2 cầu thang bộ thoát hiểm ở hai phía đối xứng.",
          "Ngoài ra, cửa cẩu hàng pallet (Pallet Safety Gate) cần trang bị cơ chế khóa lật đối trọng: khi mở cửa cẩu từ phía ngoài thì lan can bảo vệ phía trong tự động hạ xuống, ngăn ngừa tuyệt đối nguy cơ công nhân bước hụt ngã từ độ cao tầng lửng.",
        ],
      },
    ],
    relatedSlugs: [
      "thiet-ke-layout-kho-bai",
      "quy-trinh-bao-duong-dinh-ky",
      "so-sanh-ke-selective-va-drive-in",
    ],
  },
  {
    id: 7,
    slug: "quy-trinh-bao-duong-dinh-ky",
    title: "Quy trình kiểm tra bảo dưỡng và thử tải định kỳ cho hệ thống giá kệ công nghiệp nặng",
    category: "standard",
    categoryName: "Tiêu Chuẩn FEM",
    image: "/images/racking-selective.jpg",
    date: "15/10/2026",
    readTime: "6 phút đọc",
    author: "Ban biên tập Kim Phú",
    authorRole: "Kỹ sư Tư vấn Dự án",
    views: "1.340 lượt xem",
    excerpt:
      "Danh mục checklist 10 điểm vàng cần rà soát hàng quý: chốt an toàn dầm beam, ốp bảo vệ chân trụ, độ nghiêng lệch và tải trọng phân bố trên từng tầng kệ.",
    keyTakeaways: [
      "Kiểm tra bằng mắt thường (Visual Inspection) cần được thủ kho thực hiện hàng tuần để phát hiện sớm các chấn động va đập mới.",
      "Kiểm tra chuyên sâu bởi kỹ sư kết cấu độc lập (Expert Inspection) bắt buộc thực hiện tối thiểu 12 tháng một lần theo EN 15635.",
      "Phân loại mức độ hư hỏng theo 3 mã màu: Xanh (Theo dõi) - Vàng (Sửa chữa trong 4 tuần) - Đỏ (Dỡ tải lập tức trong 24h).",
      "Mọi vị trí va móp cột trụ có độ lõm vượt quá 3mm trên chiều dài 1m cần được thay thế khung chân mới ngay lập tức.",
    ],
    tableOfContents: [
      { id: "tai-sao-can-bao-duong", title: "1. Vì sao không thể bỏ qua bảo dưỡng định kỳ giá kệ?" },
      { id: "tieu-chuan-en-15635", title: "2. Hệ thống phân loại rủi ro 3 mức theo chuẩn EN 15635" },
      { id: "checklist-10-diem-vang", title: "3. Checklist 10 điểm vàng kiểm tra an toàn kết cấu" },
      { id: "thu-tuc-thu-tai-tinh", title: "4. Quy trình thử tải tĩnh (Load Testing) và cấp chứng chỉ" },
    ],
    sections: [
      {
        id: "tai-sao-can-bao-duong",
        heading: "1. Vì sao không thể bỏ qua bảo dưỡng định kỳ giá kệ?",
        paragraphs: [
          "Một dãy kệ pallet cao 8m chứa hàng trăm tấn hàng hóa trên đầu công nhân làm việc. Dù được chế tạo bằng thép cường độ cao, giá kệ vẫn phải chịu những tác động tiêu cực hàng ngày: va chạm từ bánh xe nâng, rung động mặt sàn, tải trọng giật khi thả pallet và sự nới lỏng của bu-lông neo chân.",
          "Những vết nứt vi mô hay biến dạng cong cột nếu không được phát hiện sớm sẽ tích tụ ứng suất cục bộ, dẫn đến nguy cơ sập đổ dây chuyền (Domino Collapse) thảm khốc chỉ sau một va chạm rất nhẹ.",
        ],
      },
      {
        id: "tieu-chuan-en-15635",
        heading: "2. Hệ thống phân loại rủi ro 3 mức theo chuẩn EN 15635",
        paragraphs: [
          "Tiêu chuẩn an toàn kho vận EN 15635 của châu Âu phân định hư hại kết cấu kệ thành 3 cấp độ mã màu rõ ràng:",
        ],
        table: {
          headers: ["Mức Độ Nguy Hiểm", "Mô Tả Biến Dạng", "Hành Động Khắc Phục Bắt Buộc"],
          rows: [
            ["Mức Xanh (Green Level)", "Biến dạng nhẹ dưới 1.5mm, trầy xước nhẹ lớp sơn", "Ghi nhật ký theo dõi, sơn chống rỉ dặm lại tại chỗ"],
            ["Mức Vàng (Amber Level)", "Độ lõm cột từ 1.5mm - 3.0mm, cong vênh thanh giằng nhẹ", "Lên kế hoạch thay thế phụ tùng trong vòng tối đa 4 tuần, không tăng tải"],
            ["Mức Đỏ (Red Level)", "Độ lõm cột > 3.0mm, dầm beam nứt ngàm móc, chân bung neo", "Dỡ hàng khỏi tầng kệ lập tức trong 24h, giăng dây niêm phong khu vực"],
          ],
        },
      },
      {
        id: "checklist-10-diem-vang",
        heading: "3. Checklist 10 điểm vàng kiểm tra an toàn kết cấu",
        paragraphs: [
          "Đội ngũ an toàn kho cần in bản danh mục này và rà soát định kỳ hàng tháng:",
          "1. Kiểm tra 100% chốt an toàn ngàm beam chống tuột.",
          "2. Độ thẳng đứng của khung cột (dùng quả rọi hoặc máy cân mực laser).",
          "3. Tình trạng bu-lông móng nở đâm sàn bê tông có bị trồi lỏng hay không.",
          "4. Vỏ bọc ốp bảo vệ chân cột chữ U / L có bị đâm rách biến dạng.",
          "5. Bề mặt thanh beam có bị võng vĩnh viễn sau khi dỡ pallet xuống.",
          "6. Tình trạng thanh giằng ngang và giằng chéo sau lưng kệ.",
          "7. Pallet gỗ/nhựa đặt trên kệ có bị nứt gãy đáy tiềm ẩn nguy cơ sụp tầng.",
          "8. Bảng tải trọng định mức (Load Notice) gắn tại đầu hồi dãy kệ còn rõ nét.",
          "9. Khoảng cách hở an toàn tối thiểu 100mm giữa kiện hàng và thanh beam trên.",
          "10. Hệ thống đèn chiếu sáng lối đi và bình cứu hỏa không bị che khuất.",
        ],
        callout: {
          type: "tip",
          title: "Khuyến cáo từ chuyên gia kiểm định:",
          content:
            "Tuyệt đối không dùng búa tạ gõ nắn lại cột thép đã bị móp gập. Thép sau khi bị uốn dẻo đã thay đổi cấu trúc tinh thể nội tại, việc gõ ngược lại sẽ tạo vết nứt tế vi gây gãy đứt giòn bất ngờ.",
        },
      },
      {
        id: "thu-tuc-thu-tai-tinh",
        heading: "4. Quy trình thử tải tĩnh (Load Testing) và cấp chứng chỉ",
        paragraphs: [
          "Theo khuyến nghị của trung tâm kiểm định kỹ thuật an toàn, các kho hàng công nghiệp nên thực hiện thử tải tĩnh định kỳ 2 năm một lần:",
          "- Chất tải tĩnh thử nghiệm bằng 125% tải trọng thiết kế lớn nhất trong thời gian 24 giờ liên tục.",
          "- Dùng đồng hồ so điện tử đo độ biến dạng đàn hồi và độ lún chân móng.",
          "- Lập hồ sơ kiểm định an toàn có dấu thị thực của kỹ sư chuyên ngành để phục vụ công tác thanh tra bảo hiểm và phòng cháy chữa cháy.",
        ],
      },
    ],
    relatedSlugs: [
      "tieu-chuan-kiem-dinh-do-vong-beam",
      "thiet-ke-layout-kho-bai",
      "ke-san-lung-mezzanine-floor",
    ],
  },
];

export function getAllArticles(): Article[] {
  return articlesData;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articlesData.find((a) => a.slug === slug || a.slug === `/bai-viet/${slug}`);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return articlesData.slice(0, limit);
  const related = current.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is Article => Boolean(a));
  if (related.length >= limit) return related.slice(0, limit);
  const others = articlesData.filter(
    (a) => a.slug !== current.slug && !current.relatedSlugs.includes(a.slug)
  );
  return [...related, ...others].slice(0, limit);
}
