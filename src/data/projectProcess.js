const projectProcess = [
  {
    id: 'solt',
    thumbnail: '/images/img_project_solt_03.png',
    demoUrl: 'url',
    githubUrl: 'https://github.com/Backrow-NCP/solt-frontend',
    videoUrl: 'https://youtu.be/hV_wbE9IeQ0',
    presentationUrl: 'https://youtu.be/mEYPb73Oo1s',

    overview: {
      name: 'Solt',
      period: '2024.08 - 2024.10',
      members: '7인 팀 프로젝트 (프론트엔드 팀장)',
      role: '프론트엔드 중 기여도 50%',
    },

    intro: {
      description: `Solt는 **AI 기반 맞춤형 여행 플랜 생성 서비스**입니다.    
        사용자가 여행 지역, 기간, 취향, 희망 장소를 입력하면, **AI가 예산과 동선을 고려한 최적의 여행 플랜을 추천**합니다.    
        추천된 일정은 사용자가 자유롭게 수정하고, 저장하거나 공유할 수 있습니다.`,
      purpose: `여행 계획을 짤 시간이 없는 바쁜 사람들과, 계획 자체에 스트레스를 느끼는 사람들을 위해 기획했습니다.    
      누구나 쉽게 여행 일정을 구성할 수 있도록 AI가 가이드를 제공하며, 사용자는 추천된 일정을 편집하거나 재추천을 받을 수 있습니다.    
      또한 231명을 대상으로 **사전 설문조사를 진행**해 여행 시 불편했던 점과 선호 스타일을 파악하고, 그 결과를 서비스 기획에 반영했습니다.`,
      notionUrl: 'https://www.notion.so/Solt-22cbb56acd1180d6a5dbc463b835189f?source=copy_link',
    },

    techStack: [
      { category: 'Frontend', tech: ['React', 'JavaScript'], reason: '사용자 행동에 따라 동적으로 변화하는 기능이 많아 상태 관리가 용이한 React를 선택했습니다.' },
      { category: 'Styling', tech: ['styled-components'], reason: '조건에 따라 스타일이 동적으로 변화하는 구조였기 때문에, 자바스크립트 로직과 스타일을 함께 관리할 수 있는 styled-components를 선택했습니다.' },
      { category: 'API', tech: ['Axios'], reason: 'AI 일정 생성 API와의 통신을 위해 직관적이고 사용하기 쉬운 Axios를 선택했습니다.' },
      { category: 'Etc', tech: ['ESLint', 'Prettier'], reason: '팀 협업 시 코드 스타일 통일과 오류 방지를 위해 사용했습니다.' },
      { category: 'Collabor', tech: ['GitHub', 'Postman', 'Figma', 'Notion', 'Discord', 'draw.io'], reason: '버전 관리, API 테스트, UI 설계, 문서 정리, 실시간 소통, 기능 흐름도 작성 등 협업과 기획에 필요한 도구들을 활용했습니다.' },
    ],

    contribut: {
      role: [
        '웹 프론트엔드 팀장으로서 전체 UI 구조 기획 및 작업 분배',
        '기획 회의 및 일정 관리, 기능 흐름도 작성 등 팀 프로젝트 전반 리딩',
        '주요 페이지 및 기능 구현',
        '백엔드와의 API 연동 및 테스트 진행',
      ],
      function: [
        {
          title: 'AI 플랜 생성 기능',
          content: '사용자 입력 데이터를 기반으로 AI 일정 생성 API 요청 및 응답을 처리했습니다.',
        },
        {
          title: '여행 일정 편집 기능',
          content: '원하지 않는 장소를 수정하거나 제거한 뒤, 재추천을 요청할 수 있게 했습니다.',
        },
        {
          title: '로딩 페이지',
          content: 'AI 응답 대기 시간 동안 사용자에게 피드백을 제공하는 로딩 UI를 구현했습니다.',
        },
        {
          title: '플랜 저장 및 공유 기능',
          content: '생성한 플랜을 저장하거나, 공유된 플랜을 불러와 내 일정으로 수정이 가능하게 했습니다.',
        },
      ],
    },

    troubleshooting: [
      {
        title: '일정 추가 중 /n버튼 비활성화 처리 문제',
        problem: `사용자가 새로운 장소를 추가하는 중에 추가 버튼과 확정 버튼을 연속으로 빠르게 누르면, 비동기 처리 중 상태가 꼬여 잘못된 데이터가 저장되거나 UI가 깨지는 문제가 발생했습니다.`,
        solution: `React의 상태 업데이트는 비동기로 처리되기 때문에, 장소 추가가 완료되기 전에 확정 버튼이 눌리면 두 작업이 겹쳐 실행되어 문제가 발생했습니다.    
          이를 해결하기 위해 isLoading 상태를 도입하고, 로딩 중에는 <Loading /> 컴포넌트만 보여주어 사용자 입력을 차단했습니다.`,
        code: `
          if (!isLoaded || isLoading || loading) return <Loading />;

          setIsLoading(true);
          // 서버 작업 실행
          ...
          finally {
            setIsLoading(false);
          }
        `,
        result: '비동기 처리 중 UI 차단으로 잘못된 요청을 방지했고, 일정 추가와 확정 버튼 간 충돌 없이 정상 동작하게 되었습니다.',
      },
      {
        title: '지도 마커 표시 문제 /n(주소 → 좌표 변환 실패)',
        problem: `사용자가 장소를 입력했음에도 지도에 마커가 표시되지 않는 문제가 있었고, 특히 자동완성 목록에서 선택하지 않고 직접 입력만 한 경우에 자주 발생했습니다.`,
        solution: `Google Maps의 Autocomplete는 사용자가 목록에서 장소를 선택해야만 geometry(좌표 정보)를 반환합니다.    
          따라서 선택된 장소에만 마커를 표시하도록 조건을 추가하고, 좌표 정보가 없을 경우 사용자에게 안내 메시지를 출력하도록 처리했습니다.`,
        code: `
          if (place && place.geometry) {
            setMapCenter({
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            });
          } else {
            alert('서울 안에서 선택해 주세요');
          }
        `,
        result: '잘못된 입력으로 인한 마커 오류를 방지하고, 사용자 경험 혼란을 줄일 수 있었습니다.',
      },
    ],

    flow: {
      description: '여행 정보 선택 → AI 플랜 생성 및 로딩 → 추천 일정 확인 → 일정 수정 및 재추천 → 플랜 PDF 저장 및 마이페이지에 저장',
      image: '/images/img_flow_solt.jpg',
    },

    review: {
      good: `사용자에게 **실질적인 도움이 되는 서비스**를 만들자는 기획 의도에 충실했고, 여행 계획이 어려운 사람들을 위한 솔루션으로써 기능과 흐름이 잘 구현되었다고 생각합니다.    
        첫 팀 협업 프로젝트였지만 다른 역할팀과 **원활한 소통**과 **명확한 역할 분담** 덕분에 큰 갈등 없이 진행할 수 있었고, UI/UX 측면에서도 직관적인 결과물이 나와 만족스러웠습니다.`,
      
      hard: `사용자가 다양한 행동을 할 수 있는 구조였기 때문에 **모든 케이스를 고려하면서 버그 없이 구현하는 것**이 가장 어려웠습니다.    
        특히 사용자의 사용 순서를 예측하기 어려워 **예외 상황 처리에 시간이 많이 소요**되었습니다.    
        또한 팀장으로서 팀원들의 작업 상황을 체크하고 전체 일정을 조율해야 했는데, **개발과 관리 역할을 동시에 수행하는 것이 쉽지 않았습니다.**`,
      
      regret: `팀장으로서 팀원들에게 더 큰 도움을 주고 싶었지만, 저 역시 모든 부분이 처음이라 **완벽하게 리드하지 못한 점**이 아쉬웠습니다.    
        또한 빠듯한 일정으로 인해 기능 구현을 다소 **급하게 마무리한 부분**이 있어 아쉬움이 남습니다.`,
      
      improve: `전체적으로 **코드 품질 개선과 리팩터링이 필요**하다고 느꼈습니다.    
        현재는 서울 지역만 일정 생성을 지원하지만, 추후에는 **다른 지역 혹은 해외 여행지까지 확장**하여 보다 많은 사용자에게 도움이 되는 서비스로 발전시키고 싶습니다.`,
    },
  },
  {
    id: 'spillIt',
    thumbnail: '/images/img_project_spillit_02.png',
    demoUrl: 'url',
    githubUrl: 'https://github.com/zvnghyvn/spill-it',
    videoUrl: 'https://youtu.be/SnWadl0xnlg',
    presentationUrl: '',

    overview: {
      name: 'Spill It',
      period: '2025.05 - 2025.06',
      members: '개인 프로젝트',
      role: '기여도 100%',
    },

    intro: {
      description: `Spill It은 순간의 감정을 바로 털어놓을 수 있는 **감정 기록 웹앱**입니다.    
      트위터의 혼잣말하는 사람이 많다는 것을 착안해, 긴 글 대신 간단한 텍스트나 그림, 색깔, 아이콘 등으로 감정을 쉽게 표현할 수 있도록 했습니다.`,
      purpose: `기존 일기 앱의 '하루 정리'에 대한 부담감을 없애고, 지금 이 순간의 감정에 집중할 수 있는 공간을 만들고자 했습니다.   
      감정 표현의 접근성을 높여 사용자가 부담 없이 자신의 마음을 기록할 수 있도록 직관적인 UX로 설계했습니다.`,
      notionUrl: 'https://www.notion.so/Spill-It-22cbb56acd118070976cc758378781d0?source=copy_link',
    },

    techStack: [
      { category: 'Frontend', tech: ['React', 'TypeScript'], reason: '안정성과 가독성을 높이기 위해 TypeScript를 사용했습니다. 정적 타입을 통해 컴파일 타임에 오류를 미리 확인할 수 있어 유지 보수에 유리하고, 최근 프론트엔드 개발의 기본 기술이기에 익숙해지고자 적극적으로 활용했습니다.' },
      { category: 'Styling', tech: ['SCSS'], reason: '스타일링에는 **SCSS(SASS)**를 사용했습니다. 중첩, 변수, 믹스인 등의 기능을 활용해 코드를 더 효율적이고 유지 보수하기 쉽게 작성할 수 있었으며, 컴포넌트별 스타일 분리도 수월했습니다.' },
      { category: 'Etc', tech: ['Vite', 'Prettier'], reason: '빠른 개발 환경 구성을 위해 Vite를 사용했으며, 코드 스타일 통일과 가독성 향상을 위해 Prettier를 함께 적용했습니다.' },
      { category: 'Collabor', tech: ['GitHub', 'Figma', 'Notion'], reason: '버전 관리가 편한 GitHub를 사용하였으며, UI 설계를 위한 Figma, 작업 정리를 위한 Notion을 함께 활용했습니다.' },
    ],

    contribut: {
      role: [
        '개인 프로젝트로, 기획부터 개발, 배포까지 전 과정을 단독 수행',
        '전체 UI/UX 설계 및 상태 관리, 컴포넌트 구조 설계',
        '기능 개발 및 테스트, 로컬 저장소 연동 등 전체 구현 담당',
      ],
      function: [
        {
          title: '감정 선택 기능',
          content: '컬러와 이모지를 통해 사용자가 현재 기분을 직관적으로 표현할 수 있도록 구현했습니다.',
        },
        {
          title: '텍스트 & 이미지 기록',
          content: '짧은 글이나 그림으로 생각과 감정을 자유롭게 기록할 수 있도록 지원했습니다.',
        },
        {
          title: '날짜별 자동 정리',
          content: '하루에 여러 개 작성하더라도 날짜 기준으로 자동 그룹화되도록 설계했습니다.',
        },
        {
          title: '감정 필터 & 정렬 기능',
          content: '기분(good/okay/bad)별 필터링과 최신순·오래된순 정렬 기능을 제공했습니다.',
        },
        {
          title: '로컬 저장 (IndexedDB)',
          content: '서버 없이 브라우저 내 저장소에 데이터를 안전하게 저장할 수 있도록 IndexedDB를 사용했습니다.',
        },
        {
          title: '랜덤 멘트 제공',
          content: '혼잣말을 남기는 사용자를 위한 소소한 재미 요소로, 랜덤 개발자 응원 멘트를 출력했습니다.',
        },
      ],
    },

    troubleshooting: [
      {
        title: '데이터 저장/삭제 후 /nUI 미반영 문제',
        problem: `IndexedDB를 활용한 로컬 데이터 저장 시스템에서, 글 작성이나 삭제 후에도 목록에 변화가 즉시 반영되지 않는 문제가 발생했습니다.   
          - 작성 후: 목록에 글이 보이지 않아 저장 실패로 오해하고 중복 작성하는 경우 발생   
          - 삭제 후: 글이 그대로 남아 있어 삭제 실패로 오해하거나 삭제 버튼을 반복 클릭하는 상황 발생`,
        solution: `데이터베이스 작업(saveEntry 또는 deleteEntry)은 정상적으로 처리되고 있었지만, 완료 후 컴포넌트의 상태(entries)를 갱신하지 않아 UI가 갱신되지 않는 것이 원인이었습니다.   
          데이터 조작 후 최신 데이터를 다시 불러와 상태를 업데이트하도록 로직을 재설계했습니다.`,
        code: `
          // 저장 시
          await saveEntry(fullEntry);
          const updatedEntries = await getAllEntries();
          setDiaryList(updatedEntries);

          // 삭제 시
          await deleteEntry(id);
          const updatedEntries = await getAllEntries();
          setDiaryList(updatedEntries);
        `,
        result: '글을 작성하거나 삭제한 직후에도 목록에 실시간으로 반영되도록 개선하여 사용자 경험을 크게 향상시킬 수 있었습니다. 첫 번째 문제를 해결한 후, 같은 패턴으로 다른 동기화 문제도 빠르게 해결할 수 있었고, 문제 해결에 대한 자신감도 함께 성장했습니다.',
      },
    ],

    flow: {
      description: '기록 입력 → 로컬 저장 → 리스트 실시간 반영 (감정 필터·정렬 가능) → 삭제 시 로컬 삭제 및 리스트 실시간 반영',
      image: '/images/img_flow_spillit.jpg',
    },

    review: {
      good: `초기 기획을 **과감하게 원페이지 구조로 단순화**한 점이 큰 성과였습니다.   
        사용자가 진입하자마자 바로 감정 기록을 시작할 수 있도록 UX를 직관적으로 구성했으며, **랜덤 개발자 멘트**를 통해 혼잣말 앱임에도 소통하는 느낌을 줄 수 있었습니다.`,

      hard: `**IndexedDB와 React 상태 관리 간 동기화 문제**를 해결하는 과정이 가장 어려웠습니다.   
        데이터베이스에는 정상 저장되지만 UI에 반영되지 않는 상황을 겪으며 **프론트엔드의 데이터 흐름과 상태 관리의 중요성**을 절실히 느꼈고,    
        이를 해결하기 위해 반복적으로 테스트하고 구조를 개선하는 경험을 했습니다.`,
        
      regret: `**백엔드 부재**로 인해 회원 시스템과 서버 기반 데이터 저장 기능을 구현하지 못한 점이 가장 아쉬웠습니다.   
        브라우저 저장소만 사용하다 보니 **다른 기기 접근이나 데이터 삭제 시 기록 유실 가능성**이 존재했고,    
        이는 감정 기록 앱으로서 장기적인 신뢰성과 확장성에 한계를 느끼게 했습니다.`,

      improve: `캔버스에 **'뒤로 가기' 기능**을 추가해 그림 작성 중 실수했을 때 쉽게 되돌릴 수 있도록 개선할 예정입니다.    
        또한 **랜덤 개발자 멘트가 사용자의 감정이나 내용과 더 자연스럽게 어울리도록**, 문맥 기반 멘트 선택 로직으로 발전시킬 계획입니다.    
        무엇보다 이번 프로젝트를 통해 **백엔드 기술의 필요성을 절실히 체감**했기 때문에,
        향후에는 서버 사이드 기술도 학습하여 **더 완성도 높은 풀스택 서비스**로 발전시키고 싶습니다.`,
    },
  },
  {
    id: 'portfolio',
    thumbnail: '/images/img_project_main_03.png',
    demoUrl: 'url',
    githubUrl: 'https://github.com/zvnghyvn/main-portfolio',
    videoUrl: '',
    presentationUrl: '',

    overview: {
      name: 'Main Portfolio',
      period: '2025.06 - 2025.07',
      members: '개인 프로젝트',
      role: '기여도 100%',
    },

    intro: {
      description: `이 사이트는 프론트엔드 개발자로서의 역량을 보여주기 위해 제작한 **자기소개용 포트폴리오 웹사이트**입니다.  
      프로젝트, 기술 스택, 경험, 이력 등을 구조화된 섹션으로 나누어 한눈에 보기 쉽게 정리했습니다.`,
      purpose: `채용 담당자님에게 저의 기술 역량과 개발 경험을 명확하게 전달하기 위해 제작했습니다.`,
      notionUrl: '',
    },

    techStack: [
      {
        category: 'Frontend',
        tech: ['React', 'JavaScript'],
        reason: '초기 MVP를 빠르게 구축하기 위해 JavaScript로 개발했습니다. React의 컴포넌트 기반 구조로 각 섹션을 독립적으로 관리할 수 있도록 구성했습니다.',
      },
      {
        category: 'Styling',
        tech: ['styled-components'],
        reason: '컴포넌트 기반 스타일링을 위해 styled-components를 사용했습니다. 스타일 일관성을 유지하면서 다크모드 대응과 재사용성을 고려해 설계했습니다.',
      },
      {
        category: 'Build & Tools',
        tech: ['Vite', 'Prettier'],
        reason: '빠른 번들링과 개발 편의성을 위해 Vite를 선택했으며, Prettier 설정을 통해 코드 가독성과 팀 개발 대비 코드 일관성을 확보했습니다.',
      },
      {
        category: 'Routing',
        tech: ['react-router-dom'],
        reason: '`/`, `/project/process`로 라우팅을 구성하여, 페이지별 콘텐츠 분리와 사용자 흐름 제어를 용이하게 했습니다.',
      },
    ],

    contribut: {
      role: [
        '프론트엔드 개인 프로젝트로, 기획부터 개발, 배포까지 전 과정을 단독 수행',
        'React 기반 컴포넌트 구조 설계 및 반복 콘텐츠 분리',
        '전체 UI/UX 구성과 스타일링, 다크모드 및 반응형 대응',
        '라우팅 구성과 스크롤 이동 처리 등 사용자 흐름 제어 로직 구현',
      ],
      function: [
        {
          title: '데이터 파일 분리',
          content: 'skills.js, projects.js 등 반복 콘텐츠를 위한 데이터 파일을 구성해 관리 효율성을 높였습니다.',
        },
        {
          title: 'styled-components 사용',
          content: '컴포넌트별 스타일을 캡슐화하여 스타일 충돌을 방지하고 다크모드 확장 가능성을 고려해 설계했습니다.',
        },
        {
          title: '라우팅 구성',
          content: 'react-router-dom을 활용해 각 페이지를 명확하게 분리하고, Smooth Scroll 기능으로 UX를 개선했습니다.',
        },
      ],
    },

    troubleshooting: [
      {
        title: '시멘틱 HTML 구조 설계의 /n고민과 해결',
        problem: `초기 레이아웃 구성 시, <Header>와 <main> 태그의 위치를 어디에 둘지 고민이 있었습니다.  
        처음에는 App.jsx 내부에 모두 넣는 것이 구조상 깔끔해 보였고, <main>도 함께 넣는 방향으로 고려하고 있었습니다.`,
        solution: `<main> 태그는 각 페이지의 고유한 주요 콘텐츠를 나타내는 시멘틱 태그라는 점을 다시 확인했습니다.  
        접근성과 웹 표준을 고려하여, <Header>는 App.jsx에 공통 배치하고, <main>은 각 페이지 컴포넌트(Home.jsx, ProjectPlan.jsx 등)에 개별 배치하는 것으로 구조를 조정했습니다.`,
        code: `
          // App.jsx
          <Header />
          <Outlet />  // 각 페이지에서 main을 포함

          // Home.jsx
          <main>
            <About />
            <Skills />
            // ...섹션들
          </main>`,
        result: '스크린 리더 사용자에게 각 페이지의 주요 콘텐츠를 명확하게 인식시킬 수 있고, SEO에도 유리한 구조로 개선되었습니다. 웹 표준을 실제로 구현하며 접근성에 대한 이해를 높일 수 있었습니다.',
      },
    ],

    flow: {
      description: '메인 페이지 (‘Nav’ 클릭 시 각 섹션으로 스크롤 이동 가능) → Project의 ‘작업 과정 보기’ 버튼 클릭 시 해당 페이지로 이동 → ‘Home’ 버튼 클릭 시 메인 페이지 #Project로 복귀',
      image: '/images/img_flow_main.jpg',
    },

    review: {
      good: `프로젝트 구조를 설계할 때 섹션별 컴포넌트를 명확히 나누고, 반복되는 콘텐츠는 데이터 파일로 분리해 **유지보수성과 확장성**을 확보할 수 있었습니다.  
      라우팅과 스크롤 흐름도 자연스럽게 연결되도록 구성한 점이 만족스러웠습니다.`,

      hard: `**구조화된 컴포넌트 설계를 하면서 props 전달, 데이터 분리, 컴포넌트 재사용 등 여러 부분에서 고민이 많아 쉽지 않았습니다.`,

      regret: `스타일링에서 최대한 중복을 줄이기 위해 theme과 mixins를 사용했지만, 여전히 더 간결하게 만들 수 있을 것 같다는 고민이 남았습니다.  
      styled-components를 실무에서는 어떻게 구조화하는지에 대한 정보가 부족하여 **지금 방식이 최선인지 확신이 들지 않는다는 점**이 아쉽습니다.`,

      improve: `추후 애니메이션과 전환 효과를 추가하여 더 완성도 있는 사용자 경험을 만들고, 방문자 흐름을 파악할 수 있는 간단한 로깅 기능도 도입해볼 예정입니다.`,
    },
  },
  {
    id: 'designer',
    thumbnail: '',
    demoUrl: 'youtube',
    githubUrl: 'https://github.com/zvnghyvn/designer-portfolio',
    videoUrl: 'youtube',
    presentationUrl: '',

    overview: {
      name: 'Designer Portfolio',
      period: '2025.07 - 2025.08',
      members: '2인 팀 프로젝트',
      role: '프론트엔드 중 기여도 100%',
    },

    intro: {
      description: ``,
      purpose: ``,
      notionUrl: '',
    },

    techStack: [
      { category: 'Frontend', tech: [], reason: '' },
      { category: 'Styling', tech: [], reason: '' },
      { category: 'Etc', tech: [], reason: '' },
      { category: 'Collabor', tech: [], reason: '' },
    ],

    contribut: {
      role: [],
      function: [
        {
          title: '',
          content: '',
        },
      ],
    },

    troubleshooting: [
      {
        title: '',
        problem: ``,
        solution: ``,
        code: ``,
        result: '',
      },
    ],

    flow: {
      description: '',
      image: '',
    },

    review: {
      good: ``,
      hard: ``,
      regret: ``,
      improve: ``,
    },
  },
];

export default projectProcess;