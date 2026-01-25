export const scenarios = [
  {
    category: "Đấu tranh giai cấp",
    title: "Công nhân đình công đòi tăng lương",
    description:
      "Công nhân tại các nhà máy lớn đình công, yêu cầu tăng lương và cải thiện điều kiện làm việc. Đây là biểu hiện của mâu thuẫn giai cấp.",
    theory:
      "Theo Mác, đấu tranh giai cấp là động lực phát triển xã hội. Mâu thuẫn giữa tư sản và vô sản là tất yếu trong chủ nghĩa tư bản.",
    choices: [
      {
        text: "Ủng hộ đình công, tổ chức giáo dục ý thức giai cấp",
        effects: {
          production: -10,
          workers: +15,
          consciousness: +20,
          solidarity: +15,
        },
      },
      {
        text: "Thương lượng, tăng lương một phần nhưng không thay đổi cơ bản",
        effects: {
          production: -5,
          workers: +5,
          consciousness: -5,
          solidarity: 0,
        },
      },
      {
        text: "Đàn áp đình công, giữ trật tự sản xuất",
        effects: {
          production: +10,
          workers: -20,
          consciousness: -15,
          solidarity: -20,
        },
      },
    ],
  },
  {
    category: "Biện chứng duy vật",
    title: "Công nghiệp hóa hay phát triển nông nghiệp?",
    description:
      "Xã hội đang ở giai đoạn chuyển đổi. Bạn cần quyết định ưu tiên phát triển công nghiệp hay nông nghiệp. Đây là mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất.",
    theory:
      "Chủ nghĩa duy vật biện chứng: Sự phát triển diễn ra thông qua mâu thuẫn và thống nhất đối lập. Cần cân bằng giữa các lực lượng sản xuất.",
    choices: [
      {
        text: "Ưu tiên công nghiệp hóa, tập trung nguồn lực vào nhà máy",
        effects: {
          production: +15,
          workers: -10,
          consciousness: +5,
          solidarity: -5,
        },
      },
      {
        text: "Phát triển đồng đều cả công nghiệp và nông nghiệp",
        effects: {
          production: +5,
          workers: +5,
          consciousness: +10,
          solidarity: +10,
        },
      },
      {
        text: "Ưu tiên nông nghiệp, đảm bảo lương thực cho nhân dân",
        effects: {
          production: -5,
          workers: +15,
          consciousness: 0,
          solidarity: +10,
        },
      },
    ],
  },
  {
    category: "Duy vật lịch sử",
    title: "Tư hữu hóa hay công hữu hóa tư liệu sản xuất?",
    description:
      "Một số nhà tư bản đề nghị tư nhân hóa các nhà máy để tăng hiệu quả. Đây là câu hỏi về quan hệ sở hữu - cốt lõi của chủ nghĩa Mác.",
    theory:
      "Quan hệ sản xuất quyết định bản chất của xã hội. Công hữu hóa tư liệu sản xuất là nền tảng của chủ nghĩa xã hội.",
    choices: [
      {
        text: "Công hữu hóa hoàn toàn, tất cả thuộc về nhân dân",
        effects: {
          production: -5,
          workers: +20,
          consciousness: +20,
          solidarity: +15,
        },
      },
      {
        text: "Kinh tế hỗn hợp, có cả công hữu và tư hữu",
        effects: {
          production: +10,
          workers: 0,
          consciousness: -10,
          solidarity: -5,
        },
      },
      {
        text: "Tư nhân hóa để tăng hiệu quả",
        effects: {
          production: +15,
          workers: -15,
          consciousness: -20,
          solidarity: -15,
        },
      },
    ],
  },
  {
    category: "Nhà nước và cách mạng",
    title: "Xây dựng nhà nước như thế nào?",
    description:
      "Sau khi giành được quyền lực, bạn cần quyết định hình thức tổ chức nhà nước. Theo Lênin, nhà nước vô sản là công cụ đàn áp giai cấp tư sản.",
    theory:
      "Lênin: Nhà nước là bộ máy đàn áp của giai cấp thống trị. Chuyên chính vô sản cần thiết để bảo vệ cách mạng.",
    choices: [
      {
        text: "Xây dựng chuyên chính vô sản mạnh mẽ",
        effects: {
          production: +5,
          workers: +10,
          consciousness: +15,
          solidarity: +10,
        },
      },
      {
        text: "Dân chủ đa nguyên, cho phép nhiều tiếng nói",
        effects: {
          production: -5,
          workers: -10,
          consciousness: -15,
          solidarity: -10,
        },
      },
      {
        text: "Tập trung quyền lực để đẩy nhanh phát triển",
        effects: {
          production: +15,
          workers: -5,
          consciousness: -5,
          solidarity: -10,
        },
      },
    ],
  },
  {
    category: "Giá trị thặng dư",
    title: "Phân phối thặng dư sản xuất",
    description:
      "Sản xuất có thặng dư lớn. Bạn sẽ phân phối như thế nào? Đây liên quan đến học thuyết giá trị thặng dư của Mác.",
    theory:
      "Mác: Giá trị thặng dư là phần giá trị do công nhân tạo ra nhưng bị tư bản chiếm đoạt. Đây là nguồn gốc của bóc lột.",
    choices: [
      {
        text: "Chia đều cho công nhân theo lao động",
        effects: {
          production: -5,
          workers: +20,
          consciousness: +15,
          solidarity: +15,
        },
      },
      {
        text: "Tái đầu tư vào sản xuất để phát triển",
        effects: {
          production: +20,
          workers: -5,
          consciousness: +5,
          solidarity: 0,
        },
      },
      {
        text: "Cân bằng: một phần cho công nhân, một phần tái đầu tư",
        effects: {
          production: +10,
          workers: +10,
          consciousness: +10,
          solidarity: +10,
        },
      },
    ],
  },
  {
    category: "Quốc tế chủ nghĩa",
    title: "Hỗ trợ cách mạng quốc tế?",
    description:
      "Một quốc gia khác đang có phong trào cách mạng, họ yêu cầu hỗ trợ. Theo Mác-Lênin, giai cấp vô sản không có tổ quốc.",
    theory:
      "Quốc tế chủ nghĩa vô sản: 'Vô sản toàn thế giới, liên kết lại!' - Cách mạng xã hội chủ nghĩa là sự nghiệp của toàn nhân loại.",
    choices: [
      {
        text: "Hỗ trợ tích cực cách mạng quốc tế",
        effects: {
          production: -10,
          workers: -5,
          consciousness: +20,
          solidarity: +20,
        },
      },
      {
        text: "Tập trung xây dựng trong nước trước",
        effects: {
          production: +10,
          workers: +10,
          consciousness: -10,
          solidarity: -10,
        },
      },
      {
        text: "Hỗ trợ hữu hạn, cân nhắc lợi ích quốc gia",
        effects: {
          production: 0,
          workers: 0,
          consciousness: +5,
          solidarity: +5,
        },
      },
    ],
  },
  {
    category: "Giáo dục và văn hóa",
    title: "Cải tạo văn hóa và tư tưởng",
    description:
      "Nhiều giá trị văn hóa cũ còn tồn tại, ảnh hưởng đến ý thức người dân. Bạn cần có chiến lược giáo dục và văn hóa.",
    theory:
      "Kiến trúc thượng tầng (văn hóa, tư tưởng) phải phù hợp với cơ sở hạ tầng (quan hệ sản xuất). Cần cải tạo tư tưởng theo chủ nghĩa xã hội.",
    choices: [
      {
        text: "Cách mạng văn hóa mạnh mẽ, xóa bỏ giá trị cũ",
        effects: {
          production: -10,
          workers: -10,
          consciousness: +20,
          solidarity: -5,
        },
      },
      {
        text: "Giáo dục dần dần, kế thừa tinh hoa dân tộc",
        effects: {
          production: 0,
          workers: +5,
          consciousness: +10,
          solidarity: +15,
        },
      },
      {
        text: "Để tự nhiên phát triển, không can thiệp",
        effects: {
          production: +5,
          workers: 0,
          consciousness: -15,
          solidarity: -10,
        },
      },
    ],
  },
  {
    category: "Kinh tế kế hoạch",
    title: "Quản lý kinh tế: Kế hoạch hay thị trường?",
    description:
      "Nền kinh tế cần được điều tiết. Bạn chọn kinh tế kế hoạch tập trung hay cho phép cơ chế thị trường?",
    theory:
      "Mác phê phán sự vô chính phủ của thị trường tư bản. Kinh tế xã hội chủ nghĩa cần có kế hoạch, nhưng cũng cần linh hoạt.",
    choices: [
      {
        text: "Kinh tế kế hoạch tập trung hoàn toàn",
        effects: {
          production: +5,
          workers: +10,
          consciousness: +15,
          solidarity: +10,
        },
      },
      {
        text: "Kinh tế thị trường định hướng xã hội chủ nghĩa",
        effects: {
          production: +15,
          workers: +5,
          consciousness: -5,
          solidarity: 0,
        },
      },
      {
        text: "Thả lỏng hoàn toàn cho thị trường tự điều tiết",
        effects: {
          production: +10,
          workers: -15,
          consciousness: -20,
          solidarity: -15,
        },
      },
    ],
  },
  {
    category: "Mâu thuẫn biện chứng",
    title: "Xung đột giữa các bộ phận trong Đảng",
    description:
      "Nội bộ Đảng xuất hiện bất đồng về đường lối. Một số chủ trương cấp tiến, một số thận trọng. Đây là mâu thuẫn trong nội bộ.",
    theory:
      "Mâu thuẫn là động lực phát triển. Mâu thuẫn nội bộ nhân dân cần giải quyết bằng thảo luận, phê bình và tự phê bình.",
    choices: [
      {
        text: "Khuyến khích tranh luận, phê bình và tự phê bình",
        effects: {
          production: -5,
          workers: +5,
          consciousness: +15,
          solidarity: +10,
        },
      },
      {
        text: "Thống nhất tư tưởng bằng nguyên tắc tập trung dân chủ",
        effects: {
          production: +10,
          workers: +10,
          consciousness: +10,
          solidarity: +15,
        },
      },
      {
        text: "Trấn áp bất đồng, duy trì đoàn kết tuyệt đối",
        effects: {
          production: +5,
          workers: -10,
          consciousness: -15,
          solidarity: -10,
        },
      },
    ],
  },
  {
    category: "Giai cấp nông dân",
    title: "Cải cách ruộng đất",
    description:
      "Nông dân chiếm đa số dân số, nhưng đất đai tập trung ở địa chủ. Cần có chính sách cải cách ruộng đất.",
    theory:
      "Mác-Lênin: Liên minh công nông là nền tảng cách mạng. Cải cách ruộng đất giải phóng nông dân khỏi chế độ phong kiến.",
    choices: [
      {
        text: "Tịch thu đất đai, chia đều cho nông dân",
        effects: {
          production: -5,
          workers: +20,
          consciousness: +15,
          solidarity: +20,
        },
      },
      {
        text: "Hợp tác xã hóa nông nghiệp từng bước",
        effects: {
          production: +10,
          workers: +10,
          consciousness: +10,
          solidarity: +10,
        },
      },
      {
        text: "Giữ nguyên, tập trung vào công nghiệp",
        effects: {
          production: +15,
          workers: -20,
          consciousness: -15,
          solidarity: -20,
        },
      },
    ],
  },
  {
    category: "Khoa học và công nghệ",
    title: "Đầu tư nghiên cứu khoa học",
    description:
      "Khoa học và công nghệ là lực lượng sản xuất quan trọng. Bạn có muốn đầu tư lớn vào nghiên cứu không?",
    theory:
      "Lực lượng sản xuất bao gồm người lao động, công cụ lao động và đối tượng lao động. Khoa học kỹ thuật là yếu tố then chốt.",
    choices: [
      {
        text: "Đầu tư mạnh vào khoa học, giáo dục",
        effects: {
          production: +15,
          workers: +10,
          consciousness: +15,
          solidarity: +5,
        },
      },
      {
        text: "Cân bằng giữa đầu tư khoa học và phúc lợi",
        effects: {
          production: +10,
          workers: +10,
          consciousness: +10,
          solidarity: +10,
        },
      },
      {
        text: "Tập trung vào sản xuất trước mắt",
        effects: {
          production: +10,
          workers: -5,
          consciousness: -10,
          solidarity: 0,
        },
      },
    ],
  },
  {
    category: "Đấu tranh tư tưởng",
    title: "Tư tưởng tư sản xâm nhập",
    description:
      "Tư tưởng cá nhân chủ nghĩa, hưởng thụ đang lan tỏa trong xã hội. Đây là sự xâm nhập của ý thức hệ tư sản.",
    theory:
      "Đấu tranh giữa hai con đường, hai tư tưởng là thường xuyên và gay gắt. Cần giữ vững định hướng xã hội chủ nghĩa.",
    choices: [
      {
        text: "Đẩy mạnh giáo dục tư tưởng Mác-Lênin",
        effects: {
          production: -5,
          workers: +5,
          consciousness: +20,
          solidarity: +15,
        },
      },
      {
        text: "Kết hợp giáo dục và cải thiện đời sống",
        effects: {
          production: +5,
          workers: +15,
          consciousness: +10,
          solidarity: +15,
        },
      },
      {
        text: "Mở cửa, cho phép tự do tư tưởng",
        effects: {
          production: +10,
          workers: +5,
          consciousness: -20,
          solidarity: -15,
        },
      },
    ],
  },
];
