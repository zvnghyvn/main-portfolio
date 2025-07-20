
const projects = [
  {
    id: 'solt',
    title: 'Solt',
    keyword: 'AI 여행 플래너 서비스',
    period: '2024.08-2024.10',
    type: '7인 팀 프로젝트(웹 프론트 팀장)',
    contribution: '웹 프론트 중 기여도 50%',
    description: `사용자의 목적지, 기간, 취향 등을 기반으로    
    AI가 자동으로 여행 일정을 구성해주는 **AI 기반 여행 플래너 서비스**입니다.`,
    features: [
      'AI 여행 추천 API 연동 및 실시간 데이터 통신 구현',
      '여행 일정 수정 후 AI 재추천이 가능한 플랜 편집 기능 구현',
      '완성된 여행 플랜의 PDF 생성 및 다운로드 기능 구현',
    ],
    media: [
      {
        type: 'image',
        src: '/images/img_project_solt_01.jpg',
        alt: 'Spillit 메인 화면',
      },
      {
        type: 'youtube',
        src: '/images/img_video.jpg',
        alt: 'Spillit 시연 영상',
        link: 'https://youtu.be/abc123',
      },
      {
        type: 'youtube',
        src: '/images/img_video_solt_02.jpg',
        alt: 'Spillit 발표 영상',
        link: 'https://youtu.be/mEYPb73Oo1s',
      },
    ],
    techStack: ['React', 'styled-components', 'Axios', 'ESLint'],
    tools: ['Github', 'Postman', 'Figma', 'Notion', 'Canva', 'Discord'],
    demoUrl: '',
  },
  {
    id: 'spillIt',
    title: 'Spill It',
    keyword: '기분 기록 웹앱',
    period: '2025.05 - 2025.06',
    type: '개인 프로젝트',
    contribution: '기여도 100%',
    description: `Spill-it은 하루를 정리하는 일기와는 달리,    
    당시의 감정과 생각을 텍스트 또는 그림으로 **가볍게 남기는 감정 기록 앱**입니다.`,
    features: [
      'IndexedDB를 활용한 클라이언트 사이드 데이터 저장 구조 설계',
      '기분별 필터링 및 정렬 기능을 통한 데이터 관리 최적화',
      '사용자 인터랙션에 반응하는 UI/UX 및 마이크로 애니메이션 구현',
    ],
    media: [],
    techStack: ['React', 'TypeScript', 'SCSS', 'Vite', 'IndexedDB'],
    tools: ['Github', 'Figma', 'Notion'],
    demoUrl: 'https://spill-it.vercel.app',
  },
]

export default projects