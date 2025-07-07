
const projects = [
  {
    id: 'salt',
    title: 'Salt',
    keyword: 'AI 여행 플래너 서비스',
    period: '2024.08-2024.10',
    type: '7인 팀 프로젝트(웹 프론트 팀장)',
    contribution: '웹 프론트 중 기여도 50%',
    description: '사용자의 목적지, 기간, 취향 등을 기반으로/nAI가 자동으로 여행 일정을 구성해주는 AI 기반 여행 플래너 서비스입니다.',
    features: [
      'AI 여행 추천 API 연동 및 실시간 데이터 통신 구현',
      '여행 일정 수정 후 AI 재추천이 가능한 플랜 편집 기능 구현',
      '완성된 여행 플랜의 PDF 생성 및 다운로드 기능 구현',
    ],
    media: [
      {
        type: 'image',
        src: '/images/spillit01.png',
        alt: 'Spillit 메인 화면',
      },
      {
        type: 'youtube',
        src: 'https://youtu.be/abc123',
        thumbnail: '/images/spillit-thumb.png',
      },
    ],
    techStack: ['React', 'styled-components', 'Axios', 'ESLint'],
    tools: [],
    detailPage: '@pages/ProjectPlan/spillit',
    demoUrl: '',
  },
  {
    id: 'spillit',
    title: 'Spill It',
    keyword: '기분 기록 웹앱',
    period: '2025.05 - 2025.06',
    type: '개인 프로젝트',
    contribution: '기여도 100%',
    description: 'Spill-it은 하루를 정리하는 일기와는 달리,\n당시의 감정과 생각을 텍스트 또는 그림으로 가볍게 남기는 감정 기록 앱입니다.',
    features: [
      'IndexedDB를 활용한 클라이언트 사이드 데이터 저장 구조 설계',
      '기분별 필터링 및 정렬 기능을 통한 데이터 관리 최적화',
      '사용자 인터랙션에 반응하는 UI/UX 및 마이크로 애니메이션 구현',
    ],
    media: [],
    techStack: ['React', 'TypeScript', 'SCSS', 'Vite', 'IndexedDB'],
    tools: [],
    detailPage: '@pages/ProjectPlan/spillit',
    demoUrl: 'https://spill-it.vercel.app',
  },
]