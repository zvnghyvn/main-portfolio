
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
        alt: 'Solt 메인 화면',
      },
      {
        type: 'image',
        src: '/images/img_project_solt_02.jpg',
        alt: 'Solt 플랜 생성 페이지',
      },
      {
        type: 'youtube',
        src: '/images/img_video_solt_01.jpg',
        alt: 'Solt 시연 영상',
        link: 'https://youtu.be/hV_wbE9IeQ0',
      },
      {
        type: 'youtube',
        src: '/images/img_video_solt_02.jpg',
        alt: 'Solt 발표 영상',
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
    media: [
      {
        type: 'image',
        src: '/images/img_project_spillit_01.jpg',
        alt: 'Spill it 메인 화면',
      },
      {
        type: 'youtube',
        src: '/images/img_video_spillit_01.jpg',
        alt: 'Spill it 시연 영상',
        link: 'https://youtu.be/SnWadl0xnlg',
      },
    ],
    techStack: ['React', 'TypeScript', 'SCSS', 'Vite', 'IndexedDB'],
    tools: ['Github', 'Figma', 'Notion'],
    demoUrl: 'https://spill-it.vercel.app',
  },
  {
    id: 'portfolio',
    title: 'Main Portfolio',
    keyword: '포트폴리오 사이트',
    period: '2025.06 - 2025.07',
    type: '개인 프로젝트',
    contribution: '기여도 100%',
    description: `메인 포트폴리오 사이트는 프론트엔드 개발자로서의 역량을 소개하기 위해 제작한 **자기소개용 웹 페이지**입니다.  
    프로젝트, 기술 스택, 이력 등을 구조적으로 정리하여 한눈에 확인할 수 있도록 구성했습니다.`,
    features: [
      '데이터 파일(.js) 기반의 반복 렌더링으로 유지보수성과 확장성 강화',
      'styled-components를 활용한 다크모드 대응 준비와 컴포넌트 스타일 일원화',
      'react-router를 이용한 페이지 전환 및 Smooth Scroll 구현',
    ],
    media: [],
    techStack: ['React', 'JavaScript', 'styled-components', 'Vite'],
    tools: ['Github', 'Figma', 'Notion'],
    demoUrl: '',
  },
  {
    id: 'designer',
    title: 'Designer Portfolio',
    keyword: '포트폴리오 사이트',
    period: '2025.07 - 2025.08',
    type: '2인 팀 프로젝트',
    contribution: '프론트엔드 중 기여도 100%',
    description: `디자이너 개인 포트폴리오 페이지, 요청한 디자인을 완벽하게 구현하도록 노력했습니다.`,
    features: [],
    media: [],
    techStack: ['React', 'JavaScript', 'styled-components', 'Vite'],
    tools: ['Github', 'Figma', 'Notion'],
    demoUrl: '',
  },
]

export default projects