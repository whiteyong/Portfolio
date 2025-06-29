export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "webcash-erp-inventory",
    title: "S Cloud ERP 재고/생산 모듈 기획",
    category: "SaaS",
    shortDescription: "SaaS형 ERP 재고/생산관리, 품목정보 마스터 기획",
    description: [
      "S Cloud ERP는 소상공인보다 규모가 큰 사업장(대략 직원수 20~30명)을 타겟으로 출시된 SaaS형 ERP로, 서비스의 컨셉은 '쉽고, 편리한' 사용자 경험을 제공하는 것입니다.",
      "서비스 전반적인 기능의 특징은 컨셉에 따라 일부 기능을 통합하여 하나의 메뉴에서 다양한 업무를 한 번에 처리할 수 있습니다. 예시로 생산 등록 한번에 작업지시, 생산지시, 생산입고/자재출고 세 가지 업무를 한 번에 처리할 수 있다는 것이 대표적인 예시입니다.",
      "또한, S Cloud ERP는 클라우드 서버를 무료 제공하여 sERP에서 사용자가 DB를 관리하는 불편함을 해소한 제품입니다.",
    ],
    features: [
      "영업-재고, 생산-재고 테이블 데이터 연동",
      "제품, 소요자재를 불러와 생산대비 재고예측 가능",
      "생산 등록 조건에 품목 종류를 추가하여 정확한 제품, 소요자재 관리 가능",
      "업무 프로세스에 맞는 품목 그룹 설정으로 품목 관리에 용이",
      "세트 상품 관리가 가능하여 영업 거래 등록 시 세트 상품 효율적으로 등록",
      "선입선출법, 총평균법, 이동평균법 등 취급 품목에 맞는 재고 평가법 선택 및 정확한 재고 금액 계산 가능",
      "상황에 맞는 재고보고서 선택하여 조회 가능",
    ],
    technologies: ["Figma", "Flow", "Notion", "PowerPoint", "Redmine", "ERP 시스템"],
    coverImage: "/finance-dashboard-cover.png",
    thumbnailImage: "/finance-dashboard-screen1.png",
    gallery: [
      { url: "/erp-production-screen1.png", caption: "생산 등록 화면 - 제품 생산 시 소요자재 자동 등록" },
      { url: "/erp-inventory-screen2.png", caption: "재고 수량 자동 계산 - 판매/출고에 따른 재고 변동 자동화" },
      { url: "/erp-bom-screen3.png", caption: "소요량(BOM) 관리 - 품목별 소요자재 설정 및 관리" },
    ],
    client: "Inhouse Project",
    timeline: "4개월 (2022.01-2022.04)",
    role: "서비스 기획자 (기여도 80%)",
    relatedProjects: [
      {
        slug: "webcash-accounting",
        title: "웹경리나라 서비스",
        category: "SaaS 서비스",
        image: "/modern-finance-overview.png",
      },
      {
        slug: "rethorike-ai-writing",
        title: "AI 작문 서비스",
        category: "AI 서비스",
        image: "/modern-apparel-storefront.png",
      },
    ],
  },
  {
    id: 2,
    slug: "webcash-accounting",
    title: "WEB경리나라 출시",
    category: "SaaS",
    shortDescription: "웹브라우저 기반의 경리나라 핵심 기능 설계, 기능 개선 및 운영 프로젝트",
    description: [
      "기존 설치형 경리나라 사용자의 꾸준한 요청으로 웹브라우저 기반 경리나라가 출시되었습니다.",
      "설치형과 비교하여 크게 변경된 기능은 스크래핑 방식의 변경, 보안 플러그인 설치 페이지 신규 추가, 회원가입 페이지 설계, 재고관리 부가상품 UX 적용 등이 있습니다.",
      "외근이 많거나 IOS를 이용하는 고객사의 경우 설치형 경리나라를 이용할 때 불편한 점이 많았으나, 웹브라우저 기반 경리나라 출시 이후 어떤 장소, 기기에서든 접속이 가능하고 IOS 운영체제에서도 이용할 수 있다는 점이 가장 유의미한 페인포인트 해결 사례입니다.",
    ],
    features: [
      "GNB 영역 메뉴별 멀티탭 지원",
      "홈택스, 은행, 카드사, 여신금융협회 계정 연동",
      "거래처 대시보드 실시간 정보 제공 (미수금, 매출/매입 현황, 최근 거래 정보 등)",
      "재고관리 - 입고등록, 출고등록 시 엑셀일괄등록 기능 추가",
      "보안 모듈 설치 및 회원가입 프로세스 간소화",
      "은행 제품 라인업 확장으로 회원가입 로직, 백오피스 반영",
      "현금영수증 발행 기능",
    ],
    technologies: ["Figma", "Adobe XD", "Flow", "Notion", "PowerPoint", "스크래핑 API"],
    coverImage: "/webcash-accounting-banner.png",
    thumbnailImage: "/modern-finance-app.png",
    gallery: [
      {
        url: "/webcash-client-receivable-settings.png",
        caption: "거래처 미수/미지급 업무설정 - 미수금, 미지급금 계산기준 설정",
      },
      {
        url: "/webcash-client-batch-registration.png",
        caption: "거래처 일괄 등록 양식 세분화 - 사업자(간편), 사업자(상세), 개인 거래처 세 가지로 세분화",
      },
      {
        url: "/webcash-client-batch-order-improvement.png",
        caption: "거래처 일괄 등록 항목 순서 변경 및 항목 추가 - 엑셀 일괄등록 시 항목 순서 개선",
      },
      {
        url: "/webcash-client-contact-info-enhancement.png",
        caption: "거래처 등록 항목 개선 - 휴대폰번호, 팩스번호, 회사전화번호 등 연락처 정보 추가",
      },
      {
        url: "/webcash-sales-receivable-manual-adjustment.png",
        caption: "거래처 > 매출/미수내역, 매입/지급내역 - 미수금 수기정리 기능 추가",
      },
      {
        url: "/webcash-transaction-order-ui-improvement.png",
        caption: "거래관리, 주문관리 공통 UI 개선 - 메일, 팩스 기능 추가 및 합계 행 추가",
      },
      {
        url: "/webcash-advance-payment-ledger.png",
        caption: "매입/지출 전도금원장 상세조회 - 전도금 관련 정보 조회 기능",
      },
      {
        url: "/webcash-settlement-document-creation.png",
        caption: "전도금원장 > 정산서/정구서 작성 - 전도금 정산서 작성 기능",
      },
      {
        url: "/webcash-bank-account-thumbnail-view.png",
        caption: "은행 > 계좌조회 (썸네일형) - 계좌별 잔액 조회 기능 개선",
      },
      {
        url: "/webcash-client-dashboard-enhancement.png",
        caption: "거래처 대시보드 일부 기능 변경 - 거래처명 표시 및 최근거래정보 기능 개선",
      },
    ],
    client: "Inhouse Project",
    timeline: "2022.01~2024.08 (2년 8개월)",
    role: "SMB상품기획실 (서비스 기획)",
    liveUrl:
      "https://www.figma.com/proto/7xvgcGdY7l5mMAOqqpnAmD/%EC%95%88%EC%86%8C%EC%9A%A9-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?page-id=737%3A452&node-id=1027-287&viewport=133%2C367%2C0.08&t=UTZ7EbLz3u14b9Ky-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1027%3A287&show-proto-sidebar=1",
    relatedProjects: [
      {
        slug: "webcash-erp-inventory",
        title: "클라우드 ERP 재고/생산 모듈",
        category: "ERP 서비스",
        image: "/finance-dashboard-screen1.png",
      },
      {
        slug: "rethorike-ai-writing",
        title: "AI 작문 서비스",
        category: "AI 서비스",
        image: "/modern-apparel-storefront.png",
      },
    ],
  },
  {
    id: 3,
    slug: "serp-sales-logistics",
    title: "sERP 영업물류 운영",
    category: "PaaS",
    shortDescription: "중소기업용 ERP 영업물류, 전자세금계산서, Mail/Fax 모듈 운영",
    description: [
      "sERP는 웹케시의 대표 설치형 ERP 제품으로 중소기업을 대상으로 한 통합 경영 관리 솔루션입니다.",
      "영업물류 모듈은 영업 관리(판매, 구매 등), 주문 관리(견적서, 수주서, 발주서 관리)와 세금계산서 발행, 재고/생산관리 등 영업 활동으로 일어나는 모든 업무 프로세스를 관리하는 핵심 모듈입니다.",
      "sERP는 오랜 기간동안 유지되어 온 제품인 만큼 17,000이 넘는 고객사를 보유하고 있으며, 충성 고객 또한 많은 서비스입니다.",
    ],
    features: [
      "일별영업현황 반입/반출 기능 개선",
      "거래명세표 B타입 기능 개선",
      "전자세금계산서 발행 시 종사업장번호 관리 기능 추가",
      "고객사 방문하여 영업물류 모듈 관련 사용 방법 컨설팅",
      "그 외 장애 대응 및 기능 개선 다수 진행",
    ],
    technologies: ["Figma", "Flow", "Notion", "PowerPoint", "Redmine", "ERP 시스템"],
    coverImage: "/serp-main-dashboard.png",
    thumbnailImage: "/serp-main-dashboard.png",
    gallery: [
      { url: "/serp-main-dashboard.png", caption: "sERP 메인 대시보드 - 통합 업무 관리 화면" },
      { url: "/serp-etax-attachment-limit.png", caption: "전자세금계산서 발행 시 압축파일 관련 확장자 첨부 제한 안내" },
      {
        url: "/serp-sales-contact-info.png",
        caption: "영업현황관리 거래처현장에서 동일 거래처 여러 페이지 인쇄 시 전화번호, 팩스번호 정보 모두 표시",
      },
      {
        url: "/serp-transaction-statement-a.png",
        caption: "거래명세표 A타입(전용지) 상세 조회 시 부가세 제외한 금액 표시",
      },
      {
        url: "/serp-quantity-decimal-display.png",
        caption: "거래등록 판매/구매등록 및 주문서 등록 시 수량 합계란에 소수점 이하 모두 표시되도록 개선",
      },
      {
        url: "/serp-etax-branch-management.png",
        caption: "전자세금계산서건별발행(NEW) - 전자세금계산서 발행 시 종사업장 코드, 주소관리하는 기능 추가",
      },
      {
        url: "/serp-etax-privacy-masking.png",
        caption: "전자세금계산서 관리 - 영업물류 전자세금계산서 인쇄 시 개인 거래처 주민번호 마스킹 처리",
      },
      { url: "/serp-quote-status-hold.png", caption: "영업물류 견적서 상태 목록에 '보류' 항목 추가" },
      {
        url: "/serp-inventory-barcode-view.png",
        caption: "영업물류 품목별/장소별제고현황에서 '바코드' 보기 항목 추가",
      },
      {
        url: "/serp-bizmail-reply-address.png",
        caption: "비즈메일 발송 메뉴에서 '회신주소설정' 추가하여 수신자 메일에서 '답장자메일주소' 확인 가능",
      },
    ],
    client: "Inhouse Project",
    timeline: "2020.10~2025.04 (지속적 운영)",
    role: "서비스 기획자(기여도 100%)",
    relatedProjects: [
      {
        slug: "webcash-erp-inventory",
        title: "S Cloud ERP 재고/생산 모듈",
        category: "SaaS",
        image: "/finance-dashboard-screen1.png",
      },
      {
        slug: "webcash-accounting",
        title: "웹경리나라 서비스",
        category: "SaaS 서비스",
        image: "/modern-finance-app.png",
      },
    ],
  },
  {
    id: 4,
    slug: "rethorike-ai-writing",
    title: "생성형 AI 작문 서비스",
    category: "AI 서비스",
    shortDescription: "LLM 기반 작문 서비스를 제로 베이스에서 기획한 스타트업 프로젝트",
    description: [
      "LLM(생성형 AI) 기반 작문 서비스를 기획하는 스타트업 외주 프로젝트에 참여하여 전체 Web/App 서비스 및 백오피스 어드민 화면을 설계했습니다.",
      "PRD 작성 및 전체 와이어프레임을 구성하고, 아임포트·나이스페이 연동 정기결제 프로세스를 기획했습니다. 요금제 설계(무료 체험/베이직/엔터프라이즈) 및 환불 정책을 정의했습니다.",
      "백오피스 어드민 기능(가입자, 요금제, FAQ 관리 등)을 설계하고, 랜딩페이지 및 콘텐츠 구조 정의, CTA 흐름을 기획했습니다.",
    ],
    features: [
      "PRD 작성 및 전체 와이어프레임 구성",
      "아임포트·나이스페이 연동 정기결제 프로세스",
      "3단계 요금제 설계 (무료 체험/베이직/엔터프라이즈)",
      "환불 정책 및 서비스 이용약관 정의",
      "백오피스 어드민 기능 (가입자, 요금제, FAQ 관리)",
      "랜딩페이지 콘텐츠 구조 및 CTA 흐름 설계",
    ],
    technologies: ["Figma", "Slack", "Notion", "Jira", "Google Docs", "Google Forms", "AI/LLM"],
    coverImage: "/ecommerce-redesign-cover.png",
    thumbnailImage: "/modern-apparel-storefront.png",
    gallery: [
      { url: "/ecommerce-redesign-screen1.png", caption: "랜딩페이지 설계" },
      { url: "/ecommerce-redesign-screen2.png", caption: "작문 서비스 화면" },
      { url: "/ecommerce-redesign-screen3.png", caption: "요금제 페이지" },
      { url: "/ecommerce-redesign-screen4.png", caption: "백오피스 어드민" },
    ],
    client: "레토리케 (스타트업)",
    timeline: "3개월 (2023.09-2023.11)",
    role: "서비스 기획자 (프리랜서)",
    relatedProjects: [
      {
        slug: "webcash-accounting",
        title: "웹경리나라 서비스",
        category: "SaaS 서비스",
        image: "/modern-finance-app.png",
      },
      {
        slug: "webcash-erp-inventory",
        title: "클라우드 ERP 재고/생산 모듈",
        category: "ERP 서비스",
        image: "/finance-dashboard-screen1.png",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
