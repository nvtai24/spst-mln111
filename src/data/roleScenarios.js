export const roleScenarios = {
  worker: [
    {
      title: "Đình công hay im lặng?",
      description:
        "Nhà máy cắt giảm 20% lương vì 'khó khăn kinh tế'. Một số công nhân bí mật thảo luận về đình công. Bạn nghe được tin này.",
      theory:
        "Đấu tranh giai cấp là động lực phát triển lịch sử. Công nhân phải tổ chức lại để chống bóc lột.",
      choices: [
        {
          text: "Tham gia tổ chức đình công, vận động công nhân khác",
          effects: {
            classConsciousness: +25,
            solidarity: +20,
            economicStatus: -15,
            familyWelfare: -10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Im lặng, giữ công việc để lo cho gia đình",
          effects: {
            classConsciousness: -15,
            solidarity: -20,
            economicStatus: +5,
            familyWelfare: +10,
          },
          tags: ["passive"],
        },
        {
          text: "Tìm hiểu thêm, thương lượng với ban giám đốc",
          effects: {
            classConsciousness: +5,
            solidarity: +10,
            economicStatus: +0,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Học tập lý luận sau giờ làm",
      description:
        "Một cán bộ Đảng mời bạn tham gia lớp học về chủ nghĩa Mác-Lênin vào tối thứ 7. Vợ bạn than phiền vì thứ 7 là ngày duy nhất có thể nghỉ ngơi với gia đình.",
      theory:
        "Nâng cao ý thức giai cấp là tiền đề cho cách mạng thành công. Công nhân phải vũ trang về mặt tư tưởng.",
      choices: [
        {
          text: "Tham gia học tập, thuyết phục vợ hiểu",
          effects: {
            classConsciousness: +30,
            solidarity: +15,
            economicStatus: 0,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Dành thời gian cho gia đình, từ chối lớp học",
          effects: {
            classConsciousness: -10,
            solidarity: -5,
            economicStatus: 0,
            familyWelfare: +20,
          },
          tags: ["passive"],
        },
        {
          text: "Tham gia 1 tháng 2 buổi, vừa học vừa có thời gian gia đình",
          effects: {
            classConsciousness: +15,
            solidarity: +10,
            economicStatus: 0,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Cơ hội thăng chức",
      description:
        "Ban giám đốc đề nghị bạn lên làm tổ trưởng, lương tăng 30%. Nhưng bạn sẽ phải giám sát công nhân khác, báo cáo những người 'có vấn đề'.",
      theory:
        "Giai cấp vô sản phải đoàn kết. Kẻ phản bội giai cấp sẽ trở thành công cụ của tư sản.",
      choices: [
        {
          text: "Từ chối thăng chức, ở lại với anh em công nhân",
          effects: {
            classConsciousness: +20,
            solidarity: +25,
            economicStatus: -10,
            familyWelfare: -5,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Nhận thăng chức để cải thiện cuộc sống gia đình",
          effects: {
            classConsciousness: -25,
            solidarity: -30,
            economicStatus: +25,
            familyWelfare: +20,
          },
          tags: ["passive"],
        },
        {
          text: "Nhận nhưng hứa sẽ không phản bội công nhân",
          effects: {
            classConsciousness: +5,
            solidarity: -10,
            economicStatus: +15,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Công nhân khác bị sa thải",
      description:
        "Anh Tùng - người từng giúp bạn rất nhiều - bị sa thải vì tham gia đình công năm trước. Gia đình anh đang rất khó khăn. Một số công nhân góp tiền giúp.",
      theory:
        "Đoàn kết giai cấp là sức mạnh. 'Người người vì ta, ta vì người người'.",
      choices: [
        {
          text: "Góp 1 tuần lương dù gia đình khó khăn",
          effects: {
            classConsciousness: +15,
            solidarity: +30,
            economicStatus: -20,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Không góp tiền, lo cho gia đình mình trước",
          effects: {
            classConsciousness: -20,
            solidarity: -25,
            economicStatus: +10,
            familyWelfare: +10,
          },
          tags: ["passive"],
        },
        {
          text: "Góp ít tiền và tìm việc làm thêm cho anh ấy",
          effects: {
            classConsciousness: +10,
            solidarity: +20,
            economicStatus: -5,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Tuyên truyền hay an toàn?",
      description:
        "Bạn được giao phát tờ rơi tuyên truyền cho công nhân các nhà máy khác. Cảnh sát đang truy lùng người phát tờ rơi. Nếu bị bắt, gia đình sẽ mất trụ cột.",
      theory:
        "Cách mạng đòi hỏi hy sinh. Lợi ích giai cấp cao hơn lợi ích cá nhân.",
      choices: [
        {
          text: "Kiên quyết thực hiện nhiệm vụ dù nguy hiểm",
          effects: {
            classConsciousness: +30,
            solidarity: +20,
            economicStatus: -25,
            familyWelfare: -20,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Từ chối, không muốn liều mạng",
          effects: {
            classConsciousness: -20,
            solidarity: -25,
            economicStatus: +10,
            familyWelfare: +15,
          },
          tags: ["passive"],
        },
        {
          text: "Thực hiện nhưng cẩn thận, chọn nơi an toàn hơn",
          effects: {
            classConsciousness: +15,
            solidarity: +10,
            economicStatus: -10,
            familyWelfare: -5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Bữa trưa 'xịn' hay tiết kiệm?",
      description:
        "Hôm nay là ngày lương! Bạn thấy quán phở bên đường (50k) và quán cơm bình dân (15k). Vợ dặn tiết kiệm nhưng bạn đã ăn cơm bình dân cả tháng rồi... 😅",
      theory:
        "Tiêu dùng phản ánh ý thức giai cấp. Công nhân phải biết tiết kiệm nhưng cũng cần chăm sóc sức khỏe.",
      choices: [
        {
          text: "Ăn phở! Đã làm việc vất vả, xứng đáng được thưởng",
          effects: {
            classConsciousness: -5,
            solidarity: 0,
            economicStatus: -15,
            familyWelfare: +10,
          },
          tags: ["passive"],
        },
        {
          text: "Ăn cơm bình dân, tiết kiệm tiền cho gia đình",
          effects: {
            classConsciousness: +10,
            solidarity: +5,
            economicStatus: +10,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
        {
          text: "Mua cơm về nhà, cả nhà cùng ăn vui vẻ",
          effects: {
            classConsciousness: +15,
            solidarity: +20,
            economicStatus: +5,
            familyWelfare: +15,
          },
          tags: ["revolutionary"],
        },
      ],
    },
    {
      title: "Đồng nghiệp 'mách lẻo'",
      description:
        "Anh Nam - đồng nghiệp thân thiết - bị phát hiện đang 'mách lẻo' với giám đốc về hoạt động bí mật của công nhân. Mọi người muốn 'xử lý' anh ấy. Bạn biết anh ấy có hoàn cảnh khó khăn.",
      theory:
        "Xử lý mâu thuẫn trong nội bộ cần có nguyên tắc. Giáo dục, cảm hóa quan trọng hơn trừng phạt.",
      choices: [
        {
          text: "Tố cáo anh ấy, đuổi khỏi nhóm",
          effects: {
            classConsciousness: +5,
            solidarity: -20,
            economicStatus: 0,
            familyWelfare: 0,
          },
          tags: ["passive"],
        },
        {
          text: "Giáo dục, cảm hóa, cho cơ hội sửa chữa",
          effects: {
            classConsciousness: +25,
            solidarity: +25,
            economicStatus: 0,
            familyWelfare: +5,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Cảnh cáo, theo dõi thêm",
          effects: {
            classConsciousness: +10,
            solidarity: +5,
            economicStatus: 0,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Con trai muốn bỏ học đi làm",
      description:
        "Con trai 16 tuổi muốn bỏ học đi làm phụ giúp gia đình. Vợ bạn khóc vì muốn con học tiếp. Bạn biết học vấn quan trọng nhưng gia đình đang thiếu tiền...",
      theory:
        "Giáo dục là quyền cơ bản. Trẻ em phải được học tập để phát triển toàn diện, không vì khó khăn tạm thời mà hy sinh tương lai.",
      choices: [
        {
          text: "Cho con đi làm, gia đình cần tiền",
          effects: {
            classConsciousness: -20,
            solidarity: -10,
            economicStatus: +20,
            familyWelfare: -15,
          },
          tags: ["passive"],
        },
        {
          text: "Bắt con học tiếp, tìm việc làm thêm để lo",
          effects: {
            classConsciousness: +30,
            solidarity: +15,
            economicStatus: -15,
            familyWelfare: +20,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Cho con học buổi sáng, làm thêm buổi chiều",
          effects: {
            classConsciousness: +10,
            solidarity: +10,
            economicStatus: +10,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Nhà máy mới tuyển với lương cao",
      description:
        "Nhà máy mới mở gần nhà, lương cao hơn 40%, điều kiện tốt hơn. Nhưng họ yêu cầu ký hợp đồng 3 năm và không được tham gia công đoàn. Đồng nghiệp khuyên bạn ở lại.",
      theory:
        "Lợi ích cá nhân và lợi ích tập thể. Công nhân phải đoàn kết, không vì lợi ích cá nhân mà phá vỡ tổ chức.",
      choices: [
        {
          text: "Chuyển việc ngay, lương cao quan trọng hơn",
          effects: {
            classConsciousness: -30,
            solidarity: -35,
            economicStatus: +30,
            familyWelfare: +25,
          },
          tags: ["passive"],
        },
        {
          text: "Ở lại, đoàn kết với đồng nghiệp",
          effects: {
            classConsciousness: +25,
            solidarity: +30,
            economicStatus: -10,
            familyWelfare: -5,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Thương lượng với nhà máy mới về quyền công đoàn",
          effects: {
            classConsciousness: +15,
            solidarity: +15,
            economicStatus: +15,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Bị 'điểm danh' sai giờ làm",
      description:
        "Giám đốc 'điểm danh' bạn đi muộn dù bạn đến đúng giờ. Anh ấy muốn bạn 'biết điều' để không bị trừ lương. Nhiều người khác cũng bị như vậy nhưng im lặng.",
      theory:
        "Bóc lột không chỉ ở giá trị thặng dư mà còn ở việc xâm phạm quyền lợi. Công nhân phải đấu tranh bảo vệ quyền lợi chính đáng.",
      choices: [
        {
          text: "Im lặng, 'biết điều' để giữ việc",
          effects: {
            classConsciousness: -25,
            solidarity: -20,
            economicStatus: +5,
            familyWelfare: +5,
          },
          tags: ["passive"],
        },
        {
          text: "Tố cáo, đấu tranh cùng đồng nghiệp",
          effects: {
            classConsciousness: +30,
            solidarity: +30,
            economicStatus: -20,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Ghi chép bằng chứng, tìm cơ hội tố cáo",
          effects: {
            classConsciousness: +15,
            solidarity: +10,
            economicStatus: -5,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
      ],
    },
  ],

  farmer: [
    {
      title: "Nộp thuế hay giữ lúa?",
      description:
        "Năm nay mất mùa, thu hoạch ít. Địa chủ vẫn đòi 60% như thường lệ. Nếu nộp đủ, gia đình sẽ đói. Nếu không nộp, có thể bị đuổi khỏi ruộng.",
      theory:
        "Bóc lột phong kiến là mâu thuẫn chính của xã hội nửa phong kiến. Nông dân cần giác ngộ để đấu tranh.",
      choices: [
        {
          text: "Tập hợp nông dân khác phản đối, yêu cầu giảm thuế",
          effects: {
            classConsciousness: +30,
            solidarity: +25,
            economicStatus: -15,
            familyWelfare: -10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Nộp đủ 60%, bán bò để mua gạo",
          effects: {
            classConsciousness: -15,
            solidarity: -10,
            economicStatus: -25,
            familyWelfare: -20,
          },
          tags: ["passive"],
        },
        {
          text: "Xin nợ địa chủ, hứa trả vào vụ sau",
          effects: {
            classConsciousness: -5,
            solidarity: 0,
            economicStatus: -20,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Hợp tác xã hay cày riêng?",
      description:
        "Chính quyền mới khuyến khích lập hợp tác xã, cùng cày cùng thu hoạch, chia đều. Nhiều người nghi ngờ, sợ 'làm chung thì lười'.",
      theory:
        "Hợp tác xã hóa nông nghiệp là con đường đi lên chủ nghĩa xã hội ở nông thôn. Từ cá thể lên tập thể.",
      choices: [
        {
          text: "Tích cực tham gia, vận động người khác",
          effects: {
            classConsciousness: +25,
            solidarity: +30,
            economicStatus: +10,
            familyWelfare: +15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Từ chối, cày riêng yên tâm hơn",
          effects: {
            classConsciousness: -20,
            solidarity: -25,
            economicStatus: +5,
            familyWelfare: +10,
          },
          tags: ["passive"],
        },
        {
          text: "Thử nghiệm 1 năm xem sao",
          effects: {
            classConsciousness: +10,
            solidarity: +15,
            economicStatus: +5,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Học chữ hay làm ruộng?",
      description:
        "Làng mở lớp xóa mù chữ buổi tối. Vợ bạn nói đàn ông nông dân không cần biết chữ, tối về nên nghỉ ngơi cho khỏe.",
      theory:
        "Văn hóa là vũ khí của giai cấp bị trị. Nông dân biết chữ mới hiểu được quyền lợi của mình.",
      choices: [
        {
          text: "Kiên quyết đi học, rủ vợ cùng đi",
          effects: {
            classConsciousness: +30,
            solidarity: +15,
            economicStatus: -5,
            familyWelfare: +20,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Không đi học, làm ruộng quan trọng hơn",
          effects: {
            classConsciousness: -25,
            solidarity: -15,
            economicStatus: +5,
            familyWelfare: 0,
          },
          tags: ["passive"],
        },
        {
          text: "Học 3 buổi/tuần, vừa đủ",
          effects: {
            classConsciousness: +15,
            solidarity: +10,
            economicStatus: 0,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Chia ruộng cho ai?",
      description:
        "Cách mạng thành công, ruộng đất của địa chủ được tịch thu chia lại. Bạn được phân công vào ban chia ruộng. Có người muốn 'chạy' để xin ruộng tốt.",
      theory:
        "Cải cách ruộng đất phải công bằng. Người cán bộ phải liêm chính, đặt lợi ích chung lên trên.",
      choices: [
        {
          text: "Chia đều theo công lao và hoàn cảnh, không thiên vị",
          effects: {
            classConsciousness: +30,
            solidarity: +25,
            economicStatus: +10,
            familyWelfare: +10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Xin ruộng tốt cho gia đình mình trước",
          effects: {
            classConsciousness: -30,
            solidarity: -30,
            economicStatus: +25,
            familyWelfare: +20,
          },
          tags: ["passive"],
        },
        {
          text: "Chia công bằng nhưng ưu tiên gia đình liệt sĩ",
          effects: {
            classConsciousness: +20,
            solidarity: +20,
            economicStatus: +10,
            familyWelfare: +15,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Đóng góp cho kháng chiến",
      description:
        "Đất nước đang kháng chiến. Chính quyền kêu gọi nông dân đóng góp lúa gạo. Vụ này nhà bạn thu hoạch khá, nhưng cũng cần dành dụm.",
      theory:
        "Kháng chiến là sự nghiệp của toàn dân. Lợi ích dân tộc cao hơn lợi ích cá nhân.",
      choices: [
        {
          text: "Đóng góp 40% thu hoạch cho bộ đội",
          effects: {
            classConsciousness: +25,
            solidarity: +30,
            economicStatus: -20,
            familyWelfare: -10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Đóng góp mức tối thiểu 10%",
          effects: {
            classConsciousness: -10,
            solidarity: -15,
            economicStatus: +10,
            familyWelfare: +15,
          },
          tags: ["passive"],
        },
        {
          text: "Đóng góp 25% và tham gia dân công",
          effects: {
            classConsciousness: +20,
            solidarity: +25,
            economicStatus: -10,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Trâu ốm, mùa cày đến rồi!",
      description:
        "Trâu nhà bạn ốm nặng, không cày được. Mùa cày đã đến, nếu không cày kịp sẽ mất mùa. Có 2 lựa chọn: mượn trâu của địa chủ (phải trả 30% thu hoạch) hoặc hợp tác với hàng xóm.",
      theory:
        "Hợp tác lao động là hình thức sơ khai của quan hệ sản xuất mới. Nông dân phải đoàn kết, không phụ thuộc vào địa chủ.",
      choices: [
        {
          text: "Mượn trâu địa chủ, chấp nhận bóc lột",
          effects: {
            classConsciousness: -20,
            solidarity: -15,
            economicStatus: -15,
            familyWelfare: -10,
          },
          tags: ["passive"],
        },
        {
          text: "Hợp tác với hàng xóm, cùng cày cùng thu hoạch",
          effects: {
            classConsciousness: +25,
            solidarity: +30,
            economicStatus: +10,
            familyWelfare: +15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Thuê trâu từ nông dân khác với giá hợp lý",
          effects: {
            classConsciousness: +10,
            solidarity: +15,
            economicStatus: -5,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Con gái muốn lấy chồng giàu",
      description:
        "Con gái 18 tuổi muốn lấy con trai địa chủ (giàu nhưng gia đình bóc lột nông dân). Bạn biết con sẽ sung sướng nhưng sẽ phản bội giai cấp. Vợ bạn ủng hộ vì 'đổi đời'.",
      theory:
        "Hôn nhân trong xã hội có giai cấp không chỉ là tình cảm mà còn là quan hệ giai cấp. Phải giáo dục con cái về ý thức giai cấp.",
      choices: [
        {
          text: "Đồng ý, con gái sẽ có cuộc sống tốt",
          effects: {
            classConsciousness: -30,
            solidarity: -25,
            economicStatus: +25,
            familyWelfare: +20,
          },
          tags: ["passive"],
        },
        {
          text: "Từ chối, giáo dục con về ý thức giai cấp",
          effects: {
            classConsciousness: +30,
            solidarity: +20,
            economicStatus: -10,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Cho con tự quyết, nhưng giải thích rõ ràng",
          effects: {
            classConsciousness: +15,
            solidarity: +10,
            economicStatus: +5,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Lũ lụt, mất mùa",
      description:
        "Lũ lụt lớn, mất hết lúa. Gia đình sắp đói. Địa chủ đề nghị cho vay với lãi suất 50%/năm. Hợp tác xã đề nghị hỗ trợ nhưng phải tham gia công việc tập thể.",
      theory:
        "Thiên tai là khách quan, nhưng cách ứng phó phản ánh ý thức. Phải dựa vào tập thể, không rơi vào bẫy cho vay nặng lãi.",
      choices: [
        {
          text: "Vay tiền địa chủ, chấp nhận lãi suất cao",
          effects: {
            classConsciousness: -25,
            solidarity: -20,
            economicStatus: -20,
            familyWelfare: -15,
          },
          tags: ["passive"],
        },
        {
          text: "Tham gia hợp tác xã, nhận hỗ trợ tập thể",
          effects: {
            classConsciousness: +30,
            solidarity: +35,
            economicStatus: +15,
            familyWelfare: +20,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Vay ít từ địa chủ, tham gia hợp tác xã một phần",
          effects: {
            classConsciousness: +5,
            solidarity: +10,
            economicStatus: -5,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Bị 'ăn chặn' khi bán lúa",
      description:
        "Khi bán lúa, thương lái dùng cân gian, 'ăn chặn' 20% giá trị. Nhiều nông dân khác cũng bị như vậy nhưng im lặng vì 'quen rồi'. Bạn phát hiện ra.",
      theory:
        "Bóc lột thương nghiệp là một hình thức bóc lột. Nông dân phải tổ chức lại để chống bóc lột, không cam chịu.",
      choices: [
        {
          text: "Im lặng, 'quen rồi'",
          effects: {
            classConsciousness: -20,
            solidarity: -25,
            economicStatus: -10,
            familyWelfare: -10,
          },
          tags: ["passive"],
        },
        {
          text: "Tố cáo, tổ chức nông dân đấu tranh",
          effects: {
            classConsciousness: +30,
            solidarity: +35,
            economicStatus: +20,
            familyWelfare: +15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Tìm thương lái khác, cảnh báo mọi người",
          effects: {
            classConsciousness: +15,
            solidarity: +20,
            economicStatus: +10,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Học cách trồng lúa mới",
      description:
        "Cán bộ nông nghiệp dạy cách trồng lúa mới, năng suất cao hơn 30% nhưng phức tạp hơn. Nhiều người không tin, nói 'cách cũ đã ổn rồi'. Bạn có muốn thử không?",
      theory:
        "Khoa học kỹ thuật là lực lượng sản xuất. Phải tiếp thu tiến bộ khoa học, không bảo thủ.",
      choices: [
        {
          text: "Không thử, cách cũ đã ổn",
          effects: {
            classConsciousness: -15,
            solidarity: -10,
            economicStatus: 0,
            familyWelfare: 0,
          },
          tags: ["passive"],
        },
        {
          text: "Thử ngay, áp dụng toàn bộ ruộng",
          effects: {
            classConsciousness: +25,
            solidarity: +15,
            economicStatus: +25,
            familyWelfare: +20,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Thử một phần ruộng trước, xem kết quả",
          effects: {
            classConsciousness: +15,
            solidarity: +10,
            economicStatus: +15,
            familyWelfare: +15,
          },
          tags: ["moderate"],
        },
      ],
    },
  ],

  intellectual: [
    {
      title: "Tuyên truyền hay nghiên cứu?",
      description:
        "Đảng giao nhiệm vụ đi tuyên truyền ở các làng xa. Nhưng bạn đang viết một bài nghiên cứu lý luận quan trọng sắp hoàn thành.",
      theory:
        "Kết hợp lý luận và thực tiễn. Trí thức phải gắn bó với quần chúng, không được xa rời thực tế.",
      choices: [
        {
          text: "Gác nghiên cứu, đi tuyên truyền ngay",
          effects: {
            classConsciousness: +20,
            solidarity: +25,
            economicStatus: -10,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Hoàn thành bài viết trước, tuyên truyền sau",
          effects: {
            classConsciousness: +10,
            solidarity: -15,
            economicStatus: +15,
            familyWelfare: +10,
          },
          tags: ["passive"],
        },
        {
          text: "Làm song song, viết ban đêm, tuyên truyền ban ngày",
          effects: {
            classConsciousness: +15,
            solidarity: +15,
            economicStatus: 0,
            familyWelfare: -5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Chọn cuốn sách nào?",
      description:
        "Nhà xuất bản mời bạn dịch một cuốn sách. Có 2 lựa chọn: Sách lý luận Mác sâu (ít người đọc) hoặc sách văn học cách mạng đại chúng (nhiều người đọc).",
      theory:
        "Văn nghệ phục vụ công nông binh. Phải vừa có chiều sâu lý luận, vừa phổ biến đến quần chúng.",
      choices: [
        {
          text: "Dịch sách lý luận, nâng cao trình độ cán bộ",
          effects: {
            classConsciousness: +25,
            solidarity: +10,
            economicStatus: +5,
            familyWelfare: +5,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Dịch sách văn học, dễ tiếp cận quần chúng",
          effects: {
            classConsciousness: +10,
            solidarity: +25,
            economicStatus: +15,
            familyWelfare: +15,
          },
          tags: ["moderate"],
        },
        {
          text: "Đề nghị dịch cả hai, tìm người cùng làm",
          effects: {
            classConsciousness: +20,
            solidarity: +20,
            economicStatus: +5,
            familyWelfare: 0,
          },
          tags: ["revolutionary"],
        },
      ],
    },
    {
      title: "Phê phán hay im lặng?",
      description:
        "Bạn phát hiện một chính sách của địa phương có vấn đề, không phù hợp thực tế. Nhưng lãnh đạo rất uy tín. Phê bình có thể bị coi là 'phản động'.",
      theory:
        "Phê bình và tự phê bình là nguyên tắc của Đảng. Chân lý phải được bảo vệ.",
      choices: [
        {
          text: "Viết báo cáo phê bình công khai",
          effects: {
            classConsciousness: +30,
            solidarity: +15,
            economicStatus: -20,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Im lặng để giữ an toàn",
          effects: {
            classConsciousness: -25,
            solidarity: -20,
            economicStatus: +10,
            familyWelfare: +15,
          },
          tags: ["passive"],
        },
        {
          text: "Góp ý riêng với lãnh đạo, kín đáo",
          effects: {
            classConsciousness: +10,
            solidarity: +5,
            economicStatus: 0,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Về quê hay ở thành phố?",
      description:
        "Đảng kêu gọi trí thức về quê giúp nông dân. Ở thành phố bạn có thể làm việc hiệu quả hơn, nhưng quê hương đang thiếu giáo viên.",
      theory:
        "Trí thức phải đến với nhân dân. Nhân dân là thầy giáo vĩ đại nhất.",
      choices: [
        {
          text: "Về quê ngay, tình nguyện dạy học",
          effects: {
            classConsciousness: +30,
            solidarity: +30,
            economicStatus: -25,
            familyWelfare: -20,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Ở lại thành phố, đóng góp theo cách khác",
          effects: {
            classConsciousness: -15,
            solidarity: -20,
            economicStatus: +20,
            familyWelfare: +20,
          },
          tags: ["passive"],
        },
        {
          text: "Về quê hè, nghỉ lễ để giúp dân",
          effects: {
            classConsciousness: +15,
            solidarity: +15,
            economicStatus: +5,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Chấp nhận quan điểm sai?",
      description:
        "Trong một cuộc họp, lãnh đạo cao cấp nêu quan điểm lệch lạc khỏi lý luận Mác. Mọi người đều im lặng. Bạn biết rõ điều này sai.",
      theory:
        "Nguyên tắc tập trung dân chủ: tôn trọng lãnh đạo nhưng chân lý quan trọng hơn cá nhân.",
      choices: [
        {
          text: "Đứng lên tranh luận, bảo vệ chân lý",
          effects: {
            classConsciousness: +35,
            solidarity: +10,
            economicStatus: -25,
            familyWelfare: -20,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Im lặng, theo đa số",
          effects: {
            classConsciousness: -30,
            solidarity: -15,
            economicStatus: +15,
            familyWelfare: +15,
          },
          tags: ["passive"],
        },
        {
          text: "Đặt câu hỏi khéo léo, gợi ý suy nghĩ lại",
          effects: {
            classConsciousness: +20,
            solidarity: +10,
            economicStatus: -5,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Học sinh hỏi câu 'khó'",
      description:
        "Một học sinh hỏi: 'Thầy ơi, tại sao chủ nghĩa tư bản giàu mà chủ nghĩa xã hội nghèo?' 😱 Cả lớp im lặng chờ câu trả lời. Bạn có thể trả lời đơn giản hoặc giải thích sâu về bóc lột giá trị thặng dư...",
      theory:
        "Giáo dục phải chân thực, khoa học. Không được né tránh câu hỏi khó, phải giải thích rõ ràng dựa trên lý luận Mác-Lênin.",
      choices: [
        {
          text: "Nói 'câu hỏi khó, để thầy tìm hiểu sau'",
          effects: {
            classConsciousness: -20,
            solidarity: -15,
            economicStatus: +5,
            familyWelfare: +5,
          },
          tags: ["passive"],
        },
        {
          text: "Giải thích chi tiết về bóc lột, giá trị thặng dư",
          effects: {
            classConsciousness: +30,
            solidarity: +20,
            economicStatus: -10,
            familyWelfare: -5,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Trả lời đơn giản, hẹn giải thích sâu hơn sau giờ",
          effects: {
            classConsciousness: +15,
            solidarity: +10,
            economicStatus: 0,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Viết sách 'hot' hay sách lý luận?",
      description:
        "Nhà xuất bản đề nghị bạn viết sách về 'Bí quyết thành công' (bán chạy, tiền nhiều) hoặc sách 'Lý luận Mác-Lênin cho thanh niên' (ít người đọc, tiền ít nhưng có ý nghĩa).",
      theory:
        "Văn hóa phục vụ giai cấp. Trí thức cách mạng phải tạo ra sản phẩm văn hóa tiến bộ, không chạy theo thị trường.",
      choices: [
        {
          text: "Viết sách 'hot', kiếm tiền trước",
          effects: {
            classConsciousness: -25,
            solidarity: -20,
            economicStatus: +30,
            familyWelfare: +25,
          },
          tags: ["passive"],
        },
        {
          text: "Viết sách lý luận, phục vụ giáo dục",
          effects: {
            classConsciousness: +35,
            solidarity: +25,
            economicStatus: -20,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Viết cả hai, dùng tiền sách 'hot' để in sách lý luận",
          effects: {
            classConsciousness: +20,
            solidarity: +15,
            economicStatus: +10,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Bị 'ném đá' trên mạng xã hội",
      description:
        "Bạn đăng bài về chủ nghĩa Mác-Lênin, bị nhiều người 'ném đá', chửi là 'giáo điều', 'lạc hậu'. Nhiều người khuyên bạn xóa bài. Bạn sẽ làm gì?",
      theory:
        "Đấu tranh tư tưởng là thường xuyên. Phải kiên định bảo vệ chân lý, không sợ phản ứng.",
      choices: [
        {
          text: "Xóa bài, tránh rắc rối",
          effects: {
            classConsciousness: -30,
            solidarity: -25,
            economicStatus: +10,
            familyWelfare: +10,
          },
          tags: ["passive"],
        },
        {
          text: "Giữ bài, tranh luận khoa học",
          effects: {
            classConsciousness: +35,
            solidarity: +20,
            economicStatus: -15,
            familyWelfare: -10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Chỉnh sửa bài, làm rõ hơn",
          effects: {
            classConsciousness: +15,
            solidarity: +10,
            economicStatus: 0,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Được mời làm cố vấn cho doanh nghiệp",
      description:
        "Một doanh nghiệp lớn mời bạn làm cố vấn với mức lương 'khủng' (gấp 5 lương hiện tại). Nhưng họ muốn bạn 'tư vấn' cách tối ưu hóa lao động (nghĩa là bóc lột công nhân hiệu quả hơn).",
      theory:
        "Trí thức không được bán rẻ lương tâm. Không thể phục vụ lợi ích tư bản, phải đứng về phía lao động.",
      choices: [
        {
          text: "Nhận việc, lương cao quan trọng",
          effects: {
            classConsciousness: -35,
            solidarity: -30,
            economicStatus: +40,
            familyWelfare: +35,
          },
          tags: ["passive"],
        },
        {
          text: "Từ chối, giữ nguyên tắc",
          effects: {
            classConsciousness: +35,
            solidarity: +30,
            economicStatus: -20,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Nhận nhưng tư vấn cải thiện điều kiện lao động",
          effects: {
            classConsciousness: +10,
            solidarity: +15,
            economicStatus: +20,
            familyWelfare: +15,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Học trò muốn 'học lệch'",
      description:
        "Nhiều học sinh chỉ học Toán, Lý, Hóa (dễ kiếm tiền) mà bỏ qua môn Triết học Mác-Lênin. Họ nói 'học triết để làm gì?'. Bạn là giáo viên triết, sẽ làm gì?",
      theory:
        "Giáo dục toàn diện là mục tiêu. Triết học trang bị thế giới quan, phương pháp luận, không thể thiếu.",
      choices: [
        {
          text: "Cho qua, học sinh tự quyết",
          effects: {
            classConsciousness: -20,
            solidarity: -15,
            economicStatus: +5,
            familyWelfare: +5,
          },
          tags: ["passive"],
        },
        {
          text: "Giáo dục về tầm quan trọng của triết học",
          effects: {
            classConsciousness: +30,
            solidarity: +25,
            economicStatus: -10,
            familyWelfare: -5,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Kết hợp dạy triết với ví dụ thực tế, dễ hiểu",
          effects: {
            classConsciousness: +20,
            solidarity: +20,
            economicStatus: +5,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
  ],

  party_member: [
    {
      title: "Chỉ thị hay thực tế?",
      description:
        "Chỉ thị từ trên yêu cầu hoàn thành chỉ tiêu tăng sản xuất 50% trong 3 tháng. Bạn biết rõ đây là không thể với tình hình thực tế địa phương.",
      theory:
        "Tập trung dân chủ: vừa tuân thủ kỷ luật, vừa phải xuất phát từ thực tế. Chủ nghĩa giáo điều là tai hại.",
      choices: [
        {
          text: "Báo cáo lên trên, đề xuất điều chỉnh chỉ tiêu",
          effects: {
            classConsciousness: +25,
            solidarity: +20,
            economicStatus: +5,
            familyWelfare: -10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Thực hiện đúng chỉ thị, ép dân hoàn thành",
          effects: {
            classConsciousness: -15,
            solidarity: -30,
            economicStatus: -10,
            familyWelfare: -20,
          },
          tags: ["passive"],
        },
        {
          text: "Thực hiện linh hoạt, cố gắng hết sức có thể",
          effects: {
            classConsciousness: +10,
            solidarity: +15,
            economicStatus: +10,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Xử lý cán bộ tham nhũng",
      description:
        "Bạn phát hiện một cán bộ cấp dưới tham ô. Người này là bạn thân, có công lao cách mạng, gia đình khó khăn. Số tiền không nhiều.",
      theory:
        "Đảng phải trong sạch. Không có đặc quyền đặc lợi. Kỷ luật sắt là sức mạnh của Đảng.",
      choices: [
        {
          text: "Xử lý kỷ luật nghiêm minh, báo cáo lên trên",
          effects: {
            classConsciousness: +30,
            solidarity: -10,
            economicStatus: -5,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Che giấu, nhắc nhở riêng để bảo vệ bạn",
          effects: {
            classConsciousness: -35,
            solidarity: -25,
            economicStatus: +10,
            familyWelfare: +10,
          },
          tags: ["passive"],
        },
        {
          text: "Yêu cầu trả lại tiền, rút kinh nghiệm nhưng không kỷ luật nặng",
          effects: {
            classConsciousness: +5,
            solidarity: +5,
            economicStatus: +5,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Đại hội bầu cử",
      description:
        "Đại hội chi bộ bầu bí thư. Bạn và đồng chí A đều được đề cử. Đồng chí A có năng lực tốt hơn bạn, nhưng bạn có nhiều mối quan hệ hơn.",
      theory:
        "Dân chủ trong Đảng. Bầu người có đức có tài, không bè phái, cơ hội chủ nghĩa.",
      choices: [
        {
          text: "Rút lui, đề nghị bầu đồng chí A",
          effects: {
            classConsciousness: +30,
            solidarity: +25,
            economicStatus: -15,
            familyWelfare: -10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Vận động để được bầu",
          effects: {
            classConsciousness: -25,
            solidarity: -20,
            economicStatus: +25,
            familyWelfare: +20,
          },
          tags: ["passive"],
        },
        {
          text: "Để tập thể quyết định, không vận động",
          effects: {
            classConsciousness: +15,
            solidarity: +15,
            economicStatus: +5,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Phê bình và tự phê bình",
      description:
        "Cuộc họp sinh hoạt Đảng. Bạn phải tự phê bình về sai lầm của mình. Có thể nói qua loa hoặc thẳng thắn nhưng sẽ ảnh hưởng danh tiếng.",
      theory:
        "Phê bình và tự phê bình là vũ khí sắc bén, giúp Đảng trong sạch vững mạnh.",
      choices: [
        {
          text: "Tự phê bình thẳng thắn, sâu sắc",
          effects: {
            classConsciousness: +30,
            solidarity: +20,
            economicStatus: -10,
            familyWelfare: -5,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Tự phê bình qua loa, chung chung",
          effects: {
            classConsciousness: -20,
            solidarity: -25,
            economicStatus: +10,
            familyWelfare: +10,
          },
          tags: ["passive"],
        },
        {
          text: "Tự phê bình trung thực nhưng không quá chi tiết",
          effects: {
            classConsciousness: +15,
            solidarity: +10,
            economicStatus: 0,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Gia đình hay nhiệm vụ?",
      description:
        "Con bạn bệnh nặng, cần chăm sóc. Nhưng Đảng giao nhiệm vụ cấp bách, phải đi công tác xa 2 tuần. Không ai thay thế được.",
      theory:
        "Đảng viên phải hy sinh lợi ích cá nhân, gia đình để phục vụ cách mạng. Nhưng con người không phải máy móc.",
      choices: [
        {
          text: "Đi công tác, nhờ người thân chăm con",
          effects: {
            classConsciousness: +25,
            solidarity: +20,
            economicStatus: +10,
            familyWelfare: -30,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Ở lại chăm con, xin hoãn nhiệm vụ",
          effects: {
            classConsciousness: -15,
            solidarity: -20,
            economicStatus: -10,
            familyWelfare: +30,
          },
          tags: ["passive"],
        },
        {
          text: "Thương lượng: hoàn thành nhanh trong 1 tuần, về chăm con",
          effects: {
            classConsciousness: +10,
            solidarity: +10,
            economicStatus: 0,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Báo cáo 'đẹp' hay báo cáo thật?",
      description:
        "Cấp trên yêu cầu báo cáo tình hình. Thực tế có nhiều vấn đề nhưng nếu báo cáo đúng sẽ bị 'phê bình'. Nhiều người khuyên báo cáo 'đẹp' để được khen. Bạn sẽ làm gì?",
      theory:
        "Trung thực là nguyên tắc của Đảng. Báo cáo sai là vi phạm kỷ luật, gây hại cho cách mạng.",
      choices: [
        {
          text: "Báo cáo 'đẹp', giấu vấn đề",
          effects: {
            classConsciousness: -30,
            solidarity: -25,
            economicStatus: +15,
            familyWelfare: +15,
          },
          tags: ["passive"],
        },
        {
          text: "Báo cáo trung thực, nêu rõ vấn đề và giải pháp",
          effects: {
            classConsciousness: +35,
            solidarity: +25,
            economicStatus: -15,
            familyWelfare: -10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Báo cáo có chọn lọc, nêu vấn đề nhẹ nhàng",
          effects: {
            classConsciousness: +10,
            solidarity: +5,
            economicStatus: +5,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Người thân xin 'ưu tiên'",
      description:
        "Anh trai bạn xin 'ưu tiên' trong việc phân phối đất đai (bạn đang phụ trách). Anh nói 'mình là anh em, giúp một chút'. Nhiều người khác cũng xin nhưng bạn từ chối.",
      theory:
        "Đảng viên không được lợi dụng chức quyền. Công bằng, minh bạch là nguyên tắc.",
      choices: [
        {
          text: "Ưu tiên cho anh trai, 'một chút thôi'",
          effects: {
            classConsciousness: -35,
            solidarity: -30,
            economicStatus: +20,
            familyWelfare: +25,
          },
          tags: ["passive"],
        },
        {
          text: "Từ chối, xử lý công bằng như mọi người",
          effects: {
            classConsciousness: +35,
            solidarity: +30,
            economicStatus: -20,
            familyWelfare: -25,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Giải thích, hướng dẫn anh làm đúng quy trình",
          effects: {
            classConsciousness: +20,
            solidarity: +15,
            economicStatus: 0,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Quần chúng phản đối chính sách",
      description:
        "Một chính sách mới của bạn gây phản ứng mạnh từ quần chúng. Họ tập trung phản đối. Cấp trên yêu cầu 'giữ vững', không được 'dao động'. Bạn biết chính sách có vấn đề.",
      theory:
        "Nguyên tắc tập trung dân chủ: vừa tuân thủ kỷ luật, vừa phải lắng nghe quần chúng. Sai lầm phải sửa.",
      choices: [
        {
          text: "Ép quần chúng chấp nhận, 'giữ vững'",
          effects: {
            classConsciousness: -25,
            solidarity: -35,
            economicStatus: -10,
            familyWelfare: -15,
          },
          tags: ["passive"],
        },
        {
          text: "Báo cáo lên trên, đề nghị điều chỉnh",
          effects: {
            classConsciousness: +35,
            solidarity: +30,
            economicStatus: -15,
            familyWelfare: -10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Giải thích cho quần chúng, tìm cách thỏa hiệp",
          effects: {
            classConsciousness: +15,
            solidarity: +20,
            economicStatus: -5,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Được 'biếu xén'",
      description:
        "Một doanh nghiệp 'biếu' bạn một khoản tiền lớn để 'cảm ơn' vì đã giúp đỡ. Họ nói 'đây là lòng thành, không có gì'. Bạn biết đây là hối lộ nhưng số tiền rất lớn...",
      theory:
        "Tham nhũng là kẻ thù của Đảng. Đảng viên phải liêm chính, không được nhận hối lộ dù dưới bất kỳ hình thức nào.",
      choices: [
        {
          text: "Nhận tiền, 'lòng thành' mà",
          effects: {
            classConsciousness: -40,
            solidarity: -35,
            economicStatus: +40,
            familyWelfare: +35,
          },
          tags: ["passive"],
        },
        {
          text: "Từ chối, báo cáo lên trên",
          effects: {
            classConsciousness: +40,
            solidarity: +35,
            economicStatus: -20,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Từ chối nhưng không báo cáo, 'giữ thể diện'",
          effects: {
            classConsciousness: +10,
            solidarity: +10,
            economicStatus: 0,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Bị 'điều' đi nơi xa",
      description:
        "Đảng điều bạn đi công tác ở vùng xa xôi, khó khăn trong 3 năm. Gia đình phản đối vì con cái đang học, vợ/chồng đang ốm. Bạn có thể từ chối nhưng sẽ ảnh hưởng sự nghiệp.",
      theory:
        "Đảng viên phải chấp nhận phân công công tác. Nơi khó khăn càng cần cán bộ tốt. Nhưng cũng cần quan tâm hoàn cảnh gia đình.",
      choices: [
        {
          text: "Từ chối, lo cho gia đình",
          effects: {
            classConsciousness: -20,
            solidarity: -25,
            economicStatus: -10,
            familyWelfare: +25,
          },
          tags: ["passive"],
        },
        {
          text: "Nhận nhiệm vụ, sắp xếp gia đình",
          effects: {
            classConsciousness: +35,
            solidarity: +30,
            economicStatus: -15,
            familyWelfare: -20,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Xin hoãn 1 năm, sắp xếp xong rồi đi",
          effects: {
            classConsciousness: +20,
            solidarity: +20,
            economicStatus: -5,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
  ],

  student: [
    {
      title: "Xuống đường biểu tình?",
      description:
        "Sinh viên tổ chức biểu tình phản đối chính sách bất công. Nhà trường cảnh báo người tham gia sẽ bị kỷ luật. Bạn rất muốn tham gia.",
      theory:
        "Thanh niên là lực lượng xung kích của cách mạng. Đấu tranh là nghĩa vụ, nhưng cũng cần khôn ngoan.",
      choices: [
        {
          text: "Tham gia biểu tình, sẵn sàng chịu kỷ luật",
          effects: {
            classConsciousness: +30,
            solidarity: +25,
            economicStatus: -20,
            familyWelfare: -25,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Không tham gia, lo học tập",
          effects: {
            classConsciousness: -20,
            solidarity: -30,
            economicStatus: +15,
            familyWelfare: +20,
          },
          tags: ["passive"],
        },
        {
          text: "Tham gia nhưng không đứng hàng đầu",
          effects: {
            classConsciousness: +15,
            solidarity: +15,
            economicStatus: -5,
            familyWelfare: -5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Đề tài nghiên cứu",
      description:
        "Chọn đề tài luận văn: 'Ứng dụng Mác-Lênin vào thực tiễn Việt Nam' (khó, ít điểm) hoặc 'Phân tích tư tưởng Hồ Chí Minh' (dễ, điểm cao).",
      theory:
        "Học tập phải gắn với thực tiễn. Không học vẹt mà phải vận dụng sáng tạo.",
      choices: [
        {
          text: "Chọn đề tài khó, thách thức bản thân",
          effects: {
            classConsciousness: +25,
            solidarity: +10,
            economicStatus: -10,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Chọn đề tài dễ, đảm bảo điểm số",
          effects: {
            classConsciousness: -10,
            solidarity: -5,
            economicStatus: +20,
            familyWelfare: +20,
          },
          tags: ["passive"],
        },
        {
          text: "Chọn đề tài vừa sức, cân bằng",
          effects: {
            classConsciousness: +10,
            solidarity: +10,
            economicStatus: +10,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Thực tập ở đâu?",
      description:
        "Chọn nơi thực tập: Công ty nước ngoài (lương cao, học được nhiều) hay tổ chức xã hội (lương thấp, phục vụ cộng đồng).",
      theory:
        "Thanh niên cần rèn luyện trong thực tiễn. Phục vụ nhân dân là mục đích cao cả.",
      choices: [
        {
          text: "Chọn tổ chức xã hội, đóng góp cho cộng đồng",
          effects: {
            classConsciousness: +30,
            solidarity: +25,
            economicStatus: -15,
            familyWelfare: -10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Chọn công ty nước ngoài, tích lũy kinh nghiệm",
          effects: {
            classConsciousness: -15,
            solidarity: -10,
            economicStatus: +25,
            familyWelfare: +20,
          },
          tags: ["passive"],
        },
        {
          text: "Làm công ty nhưng tình nguyện cuối tuần",
          effects: {
            classConsciousness: +10,
            solidarity: +15,
            economicStatus: +15,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Chia sẻ kiến thức",
      description:
        "Bạn học giỏi. Bạn cùng lớp rủ làm gia sư kiếm tiền (500k/buổi) hoặc dạy miễn phí cho trẻ em vùng khó khăn.",
      theory:
        "Tri thức là của chung. Người có học phải giúp đỡ người chưa có điều kiện.",
      choices: [
        {
          text: "Dạy miễn phí cho trẻ em nghèo",
          effects: {
            classConsciousness: +30,
            solidarity: +30,
            economicStatus: -20,
            familyWelfare: -10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Làm gia sư kiếm tiền",
          effects: {
            classConsciousness: -15,
            solidarity: -20,
            economicStatus: +30,
            familyWelfare: +25,
          },
          tags: ["passive"],
        },
        {
          text: "Làm gia sư nhưng bớt giá cho học sinh nghèo",
          effects: {
            classConsciousness: +10,
            solidarity: +15,
            economicStatus: +15,
            familyWelfare: +15,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Tham gia Đoàn - Đảng?",
      description:
        "Được mời kết nạp Đảng. Điều này đòi hỏi trách nhiệm lớn, sinh hoạt thường xuyên, có thể ảnh hưởng thời gian học tập.",
      theory:
        "Đảng là đội tiên phong. Thanh niên ưu tú phải sẵn sàng gánh vác trách nhiệm.",
      choices: [
        {
          text: "Vui vẻ nhận, sẵn sàng cống hiến",
          effects: {
            classConsciousness: +35,
            solidarity: +30,
            economicStatus: -10,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Từ chối, tập trung học tập trước",
          effects: {
            classConsciousness: -20,
            solidarity: -25,
            economicStatus: +15,
            familyWelfare: +15,
          },
          tags: ["passive"],
        },
        {
          text: "Nhận nhưng đề nghị sắp xếp thời gian hợp lý",
          effects: {
            classConsciousness: +20,
            solidarity: +20,
            economicStatus: +5,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Bạn bè rủ đi 'chơi' thay vì học",
      description:
        "Bạn bè rủ bạn đi xem phim, shopping thay vì học nhóm về Mác-Lênin. Họ nói 'học triết làm gì, điểm qua là được'. Bạn đang chuẩn bị thi nhưng cũng muốn đi chơi...",
      theory:
        "Học tập là nhiệm vụ chính của thanh niên. Phải có kỷ luật, không được sa đà vào giải trí.",
      choices: [
        {
          text: "Đi chơi, học sau",
          effects: {
            classConsciousness: -20,
            solidarity: -15,
            economicStatus: +10,
            familyWelfare: +15,
          },
          tags: ["passive"],
        },
        {
          text: "Từ chối, tập trung học",
          effects: {
            classConsciousness: +30,
            solidarity: +20,
            economicStatus: -10,
            familyWelfare: -5,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Học xong rồi mới đi chơi",
          effects: {
            classConsciousness: +15,
            solidarity: +15,
            economicStatus: +5,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Thấy bạn gian lận trong thi",
      description:
        "Trong kỳ thi, bạn thấy bạn cùng bàn đang quay cóp. Giám thị không phát hiện. Bạn biết nếu tố cáo, bạn ấy sẽ bị đuổi học. Nhưng gian lận là sai...",
      theory:
        "Trung thực là phẩm chất cơ bản. Phải đấu tranh chống gian lận, nhưng cũng cần giáo dục, cảm hóa.",
      choices: [
        {
          text: "Im lặng, 'không liên quan'",
          effects: {
            classConsciousness: -25,
            solidarity: -20,
            economicStatus: +5,
            familyWelfare: +5,
          },
          tags: ["passive"],
        },
        {
          text: "Tố cáo ngay lập tức",
          effects: {
            classConsciousness: +20,
            solidarity: -15,
            economicStatus: 0,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
        {
          text: "Nhắc nhở riêng, khuyên tự giác",
          effects: {
            classConsciousness: +25,
            solidarity: +20,
            economicStatus: 0,
            familyWelfare: +5,
          },
          tags: ["revolutionary"],
        },
      ],
    },
    {
      title: "Được mời làm 'cò' cho công ty",
      description:
        "Một công ty mời bạn làm 'cò' tuyển sinh viên đi làm thêm với mức lương 'hấp dẫn'. Nhưng bạn biết họ sẽ bóc lột sinh viên, trả lương thấp. Bạn sẽ nhận không?",
      theory:
        "Không được tham gia vào việc bóc lột. Thanh niên phải đứng về phía lao động, không làm tay sai cho tư bản.",
      choices: [
        {
          text: "Nhận, kiếm tiền trước",
          effects: {
            classConsciousness: -30,
            solidarity: -35,
            economicStatus: +30,
            familyWelfare: +25,
          },
          tags: ["passive"],
        },
        {
          text: "Từ chối, tố cáo công ty",
          effects: {
            classConsciousness: +35,
            solidarity: +35,
            economicStatus: -15,
            familyWelfare: -10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Từ chối, cảnh báo bạn bè",
          effects: {
            classConsciousness: +20,
            solidarity: +25,
            economicStatus: -5,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Tham gia 'tụ tập' phản đối",
      description:
        "Một nhóm sinh viên tổ chức 'tụ tập' phản đối một chính sách (theo bạn là đúng). Họ rủ bạn tham gia. Nếu không tham gia, bạn sẽ bị coi là 'không đoàn kết'.",
      theory:
        "Đoàn kết phải có nguyên tắc. Không thể đoàn kết với hành động sai trái. Phải phân tích, giáo dục.",
      choices: [
        {
          text: "Tham gia, 'đoàn kết' với bạn bè",
          effects: {
            classConsciousness: -25,
            solidarity: +10,
            economicStatus: +5,
            familyWelfare: +5,
          },
          tags: ["passive"],
        },
        {
          text: "Từ chối, giải thích lý do",
          effects: {
            classConsciousness: +30,
            solidarity: -10,
            economicStatus: -10,
            familyWelfare: -5,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Không tham gia nhưng giải thích nhẹ nhàng",
          effects: {
            classConsciousness: +15,
            solidarity: +5,
            economicStatus: 0,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Được 'mời' vào câu lạc bộ 'sang chảnh'",
      description:
        "Một câu lạc bộ 'sang chảnh' mời bạn tham gia (phí rất cao nhưng có nhiều 'mối quan hệ'). Họ nói 'vào đây để có tương lai tốt'. Bạn biết đây là nơi của giới 'thượng lưu'.",
      theory:
        "Thanh niên không được chạy theo lối sống tư sản. Phải giữ bản chất lao động, không mê hoặc bởi vật chất.",
      choices: [
        {
          text: "Tham gia, 'đầu tư' cho tương lai",
          effects: {
            classConsciousness: -30,
            solidarity: -25,
            economicStatus: -20,
            familyWelfare: -15,
          },
          tags: ["passive"],
        },
        {
          text: "Từ chối, tham gia câu lạc bộ học thuật",
          effects: {
            classConsciousness: +30,
            solidarity: +25,
            economicStatus: +10,
            familyWelfare: +15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Tham gia nhưng giữ nguyên tắc",
          effects: {
            classConsciousness: +5,
            solidarity: +5,
            economicStatus: -10,
            familyWelfare: -5,
          },
          tags: ["moderate"],
        },
      ],
    },
  ],

  capitalist: [
    {
      title: "Tăng lương công nhân?",
      description:
        "Công nhân đòi tăng lương 20%. Tăng thì lợi nhuận giảm mạnh, không tăng thì họ đe dọa đình công. Đối thủ cũng đang gặp tình huống tương tự.",
      theory:
        "Mâu thuẫn giữa vốn và lao động là bản chất tư bản chủ nghĩa. Tư sản dân tộc có thể chọn đứng về phía nhân dân.",
      choices: [
        {
          text: "Tăng lương 20%, chia sẻ lợi nhuận",
          effects: {
            classConsciousness: +25,
            solidarity: +30,
            economicStatus: -20,
            familyWelfare: -10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Từ chối, duy trì lợi nhuận",
          effects: {
            classConsciousness: -30,
            solidarity: -35,
            economicStatus: +25,
            familyWelfare: +20,
          },
          tags: ["passive"],
        },
        {
          text: "Tăng 10%, cải thiện điều kiện làm việc",
          effects: {
            classConsciousness: +10,
            solidarity: +15,
            economicStatus: +5,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Hợp tác với nhà nước?",
      description:
        "Nhà nước đề nghị 'cải tạo công thương nghiệp' - chuyển sang công tư hợp doanh. Bạn sẽ mất quyền kiểm soát nhưng được đảm bảo thu nhập ổn định.",
      theory:
        "Cải tạo tư sản dân tộc là chính sách khôn ngoan. Giáo dục, cải tạo để họ trở thành lao động xã hội chủ nghĩa.",
      choices: [
        {
          text: "Đồng ý ngay, ủng hộ xã hội chủ nghĩa",
          effects: {
            classConsciousness: +35,
            solidarity: +30,
            economicStatus: -15,
            familyWelfare: +10,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Từ chối, giữ quyền sở hữu",
          effects: {
            classConsciousness: -30,
            solidarity: -35,
            economicStatus: +20,
            familyWelfare: +15,
          },
          tags: ["passive"],
        },
        {
          text: "Thương lượng điều kiện hợp lý hơn",
          effects: {
            classConsciousness: +10,
            solidarity: +10,
            economicStatus: +10,
            familyWelfare: +15,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Giấu lợi nhuận để trốn thuế?",
      description:
        "Kế toán gợi ý cách 'hợp pháp' để giảm 30% thuế phải nộp. Tiền thuế này dùng để phát triển đất nước.",
      theory:
        "Nghĩa vụ thuế là đóng góp cho xã hội. Tư sản dân tộc tiến bộ phải trung thực.",
      choices: [
        {
          text: "Từ chối, nộp thuế đầy đủ",
          effects: {
            classConsciousness: +30,
            solidarity: +25,
            economicStatus: -25,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Chấp nhận, tối ưu thuế",
          effects: {
            classConsciousness: -25,
            solidarity: -30,
            economicStatus: +30,
            familyWelfare: +25,
          },
          tags: ["passive"],
        },
        {
          text: "Giảm thuế hợp lý, không quá đáng",
          effects: {
            classConsciousness: +5,
            solidarity: 0,
            economicStatus: +15,
            familyWelfare: +15,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Đầu tư vào công nghiệp hay thương mại?",
      description:
        "Có vốn để mở rộng. Mở nhà máy (tạo việc làm, lợi nhuận chậm) hay kinh doanh xuất nhập khẩu (lợi nhuận nhanh, ít việc làm).",
      theory:
        "Sản xuất công nghiệp là nền tảng. Tư sản dân tộc cần đầu tư vào sản xuất, không đầu cơ.",
      choices: [
        {
          text: "Mở nhà máy, tạo việc làm",
          effects: {
            classConsciousness: +30,
            solidarity: +30,
            economicStatus: +10,
            familyWelfare: +5,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Kinh doanh xuất nhập khẩu, sinh lời nhanh",
          effects: {
            classConsciousness: -20,
            solidarity: -25,
            economicStatus: +30,
            familyWelfare: +25,
          },
          tags: ["passive"],
        },
        {
          text: "Kết hợp cả hai, đa dạng hóa",
          effects: {
            classConsciousness: +10,
            solidarity: +10,
            economicStatus: +20,
            familyWelfare: +20,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Đóng góp cho cách mạng?",
      description:
        "Mặt trận kêu gọi doanh nhân đóng góp cho kháng chiến. Đóng góp nhiều sẽ ảnh hưởng kinh doanh, nhưng đây là lúc đất nước cần.",
      theory:
        "Lợi ích dân tộc trên hết. Tư sản yêu nước phải ủng hộ kháng chiến.",
      choices: [
        {
          text: "Đóng góp 50% tài sản cho cách mạng",
          effects: {
            classConsciousness: +40,
            solidarity: +35,
            economicStatus: -30,
            familyWelfare: -20,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Đóng góp mức tối thiểu, giữ vốn kinh doanh",
          effects: {
            classConsciousness: -25,
            solidarity: -30,
            economicStatus: +25,
            familyWelfare: +20,
          },
          tags: ["passive"],
        },
        {
          text: "Đóng góp 20% + cung cấp hàng hóa giá gốc",
          effects: {
            classConsciousness: +20,
            solidarity: +25,
            economicStatus: +5,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Công nhân đòi tăng ca",
      description:
        "Công nhân phản đối việc tăng ca không lương (bạn yêu cầu họ làm thêm 2 giờ/ngày để hoàn thành đơn hàng). Họ nói 'bóc lột quá'. Bạn có thể trả lương tăng ca hoặc tìm công nhân khác.",
      theory:
        "Bóc lột lao động là bản chất của tư bản. Tư sản dân tộc tiến bộ phải đối xử công bằng với công nhân.",
      choices: [
        {
          text: "Ép họ làm, không làm thì sa thải",
          effects: {
            classConsciousness: -35,
            solidarity: -40,
            economicStatus: +30,
            familyWelfare: +25,
          },
          tags: ["passive"],
        },
        {
          text: "Trả lương tăng ca đầy đủ",
          effects: {
            classConsciousness: +30,
            solidarity: +35,
            economicStatus: -25,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Trả một phần, thỏa thuận",
          effects: {
            classConsciousness: +10,
            solidarity: +15,
            economicStatus: -10,
            familyWelfare: +5,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Bị 'ép' hợp tác với tư bản nước ngoài",
      description:
        "Một công ty nước ngoài đề nghị hợp tác, họ sẽ đầu tư lớn nhưng yêu cầu bạn sa thải 50% công nhân (thay bằng máy móc). Lợi nhuận sẽ tăng gấp 3. Bạn sẽ làm gì?",
      theory:
        "Tư sản dân tộc phải đứng về phía dân tộc. Không được hy sinh lợi ích nhân dân để kiếm lợi nhuận.",
      choices: [
        {
          text: "Đồng ý, lợi nhuận quan trọng",
          effects: {
            classConsciousness: -40,
            solidarity: -45,
            economicStatus: +40,
            familyWelfare: +35,
          },
          tags: ["passive"],
        },
        {
          text: "Từ chối, bảo vệ công nhân",
          effects: {
            classConsciousness: +40,
            solidarity: +40,
            economicStatus: -30,
            familyWelfare: -20,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Thương lượng, giữ công nhân, hợp tác có điều kiện",
          effects: {
            classConsciousness: +20,
            solidarity: +25,
            economicStatus: +15,
            familyWelfare: +15,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Con trai muốn 'kế thừa' xưởng",
      description:
        "Con trai bạn muốn 'kế thừa' xưởng và tiếp tục kinh doanh. Nhưng bạn biết con không có tài năng, chỉ muốn 'hưởng thụ'. Bạn có nên giao lại không?",
      theory:
        "Tư sản dân tộc phải giáo dục con cái. Không được để con trở thành kẻ bóc lột, phải hướng con đến lao động.",
      choices: [
        {
          text: "Giao lại ngay, 'con trai mà'",
          effects: {
            classConsciousness: -25,
            solidarity: -20,
            economicStatus: +20,
            familyWelfare: +20,
          },
          tags: ["passive"],
        },
        {
          text: "Không giao, yêu cầu con học tập, rèn luyện trước",
          effects: {
            classConsciousness: +30,
            solidarity: +25,
            economicStatus: -10,
            familyWelfare: -15,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Giao một phần, để con học dần",
          effects: {
            classConsciousness: +10,
            solidarity: +10,
            economicStatus: +10,
            familyWelfare: +10,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Bị 'ép' tham gia 'hội' tư sản",
      description:
        "Một 'hội' tư sản lớn mời bạn tham gia. Họ nói 'vào đây để bảo vệ quyền lợi doanh nhân'. Nhưng bạn biết họ chống lại chính sách của nhà nước, bóc lột công nhân.",
      theory:
        "Tư sản dân tộc phải đứng về phía nhân dân, không tham gia tổ chức phản động.",
      choices: [
        {
          text: "Tham gia, 'bảo vệ quyền lợi'",
          effects: {
            classConsciousness: -35,
            solidarity: -40,
            economicStatus: +30,
            familyWelfare: +25,
          },
          tags: ["passive"],
        },
        {
          text: "Từ chối, tố cáo tổ chức",
          effects: {
            classConsciousness: +40,
            solidarity: +40,
            economicStatus: -25,
            familyWelfare: -20,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Từ chối, cảnh báo bạn bè",
          effects: {
            classConsciousness: +20,
            solidarity: +25,
            economicStatus: -5,
            familyWelfare: 0,
          },
          tags: ["moderate"],
        },
      ],
    },
    {
      title: "Công nhân tổ chức công đoàn",
      description:
        "Công nhân muốn thành lập công đoàn trong xưởng của bạn. Họ nói 'để bảo vệ quyền lợi'. Bạn biết công đoàn sẽ đòi hỏi nhiều quyền lợi, giảm lợi nhuận. Bạn sẽ làm gì?",
      theory:
        "Công đoàn là quyền hợp pháp của công nhân. Tư sản dân tộc tiến bộ phải tôn trọng, không được đàn áp.",
      choices: [
        {
          text: "Cấm, đe dọa sa thải",
          effects: {
            classConsciousness: -40,
            solidarity: -45,
            economicStatus: +20,
            familyWelfare: +20,
          },
          tags: ["passive"],
        },
        {
          text: "Ủng hộ, tạo điều kiện",
          effects: {
            classConsciousness: +40,
            solidarity: +40,
            economicStatus: -30,
            familyWelfare: -20,
          },
          tags: ["revolutionary"],
        },
        {
          text: "Cho phép nhưng đặt điều kiện",
          effects: {
            classConsciousness: +15,
            solidarity: +20,
            economicStatus: -10,
            familyWelfare: -5,
          },
          tags: ["moderate"],
        },
      ],
    },
  ],
};
