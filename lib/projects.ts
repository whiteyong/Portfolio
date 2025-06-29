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
      { url: "/job-finder-screen1.png", caption: "거래처 대시보드" },
      { url: "/job-finder-screen2.png", caption: "계정 연동 관리" },
      { url: "/job-finder-screen3.png", caption: "재고 일괄등록" },
      { url: "/job-finder-screen4.png", caption: "보안 모듈 설치" },
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
  {
    id: 4,
    slug: "serp-sales-logistics",
    title: "sERP 영업물류 운영",
    category: "PaaS",
    shortDescription: "설치형 ERP 영업물류 모듈 운영 및 기능 개선 프로젝트",
    description: [
      "sERP는 웹케시의 대표 설치형 ERP 제품으로, 중소기업을 대상으로 한 종합 업무관리 솔루션입니다.",
      "영업물류 모듈은 견적서, 주문서, 납품서, 세금계산서 등 영업 전반의 업무 프로세스를 관리하는 핵심 모듈입니다.",
      "고객사의 다양한 업무 환경과 요구사항에 맞춰 커스터마이징이 가능한 유연한 구조로 설계되어 있습니다.",
    ],
    features: [
      "견적서, 주문서, 납품서, 세금계산서 통합 관리",
      "고객사별 커스터마이징 지원",
      "영업 프로세스 자동화",
      "재고 연동 및 실시간 수량 관리",
      "다양한 출력 양식 지원",
      "승인 워크플로우 관리",
      "매출/매입 분석 리포트 제공",
    ],
    technologies: ["Figma", "Flow", "Notion", "PowerPoint", "Redmine", "ERP 시스템"],
    coverImage: "/job-finder-cover.png",
    thumbnailImage: "/confident-professional.png",
    gallery: [
      { url: "/finance-dashboard-screen1.png", caption: "영업 관리 대시보드" },
      { url: "/finance-dashboard-screen2.png", caption: "견적서 관리" },
      { url: "/finance-dashboard-screen3.png", caption: "주문서 처리" },
      { url: "/finance-dashboard-screen4.png", caption: "매출 분석 리포트" },
    ],
    client: "Inhouse Project",
    timeline: "2020.10~2025.04 (지속적 운영)",
    role: "서비스 기획자 (운영 담당)",
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
