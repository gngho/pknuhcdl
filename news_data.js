// 뉴스 데이터 목록 (여기에 계속 추가하면 됩니다)
const newsData = {
    "1": {
        title: "2023 HCI Korea 학회 참석 및 발표",
        date: "2023.02.01-2023.02.03",
        writer: "관리자",
        image: "news/news1.png",
        content: `
            2월 1일부터 3일 한국HCI학회에서 주최한 동계학술대회에 김민주, 손유경 학생이 참석하였습니다.<br>
            김민주, 손유경 학생은 <strong>자율주행 중 돌발상황에서 대화형 음성 에이전트의 의인화수준에 따른 사용경험 비교 연구</strong>를 주제로 포스터 세션에서 발표하였습니다.<br>
        `
    },
    "2": {
        title: "2023 한국디지털콘텐츠학회 참석 및 발표",
        date: "2023.07.03-2023.07.05",
        writer: "관리자",
        image: "news/news2.png",
        content: `
            7월 3일부터 5일 제주도에서 개최된 2023 한국디지털콘텐츠학회 하계학술대회에 박동건 교수님, 강경호, 손유경, 김민주 학생이 참가하였습니다.<br>
            강경호 학생은 <strong>보이스톤에 따른 UX Writing 전략 수립 연구</strong>를 주제로 구두 발표 세션을 진행하였습니다.
        `
    },
    "3": {
        title: "2023 대한인간공학회 추계학술대회 참석 및 발표",
        date: "2023.11.15-2023.11.18",
        writer: "관리자",
        image: "news/news3.png",
        content: `
            11월 15일부터 18일 제주도에서 개최된 2023년도 대한인간공학회 추계학술대회에 휴먼ICT융합전공 박동건 교수님, 기술데이터공학 이유신 교수님 연구팀이 참석하였습니다.<br>
            김민주 학생이 주저자, 손유경, 박상준 학생이 공동저자로 참여하여 <strong>공유형 전동킥보드의 청각 피드백에 따른 사용자 경험 연구</strong>를 주제로 포스터 세션 발표를 진행했습니다. 
        `
    },
    "4": {
        title: "2024 한국CDE학회 동계학술대회 참석 및 발표",
        date: "2024.01.29-2024.02.01",
        writer: "관리자",
        image: "news/news4.png",
        content: `
            1월 29일부터 2월 1일 강원도 평창에서 진행된 한국CDE학회 동계학술대회에 미디어커뮤니케이션학과 시스템경영공학의 다수의 연구팀이 참가하였습니다.<br>
            손유경 학생이 주저자, 김민주 학생이 공동저자로 참여하여 <strong>자율주행자동차의 제어권 전환 음성 안내음의 목소리 속도와 상황정보 제공의 유무가 운전자에게 미치는 영향</strong>을 주제로 포스터 세션 발표를 진행했습니다.
        `
    },
    "5": {
        title: "2024 26th HCI International Conference 참석 및 발표",
        date: "2024.06.29-2024.07.04",
        writer: "관리자",
        image: "news/news5.png",
        content: `
            미국 워싱턴 D.C.에서 열린 26th HCI International Conference에 참가하였습니다.<br>
            김민주, 손유경, 박상준 학생이 공동 1저자로 <strong>A Comparative Study on Methods to Interact with Close-Distance Objects in Mixed Reality Environment : Direct method vs. Raycasting method</strong>를 제목으로 혼합현실 환경에서 근거리 객체와의 상호작용 방법을 비교한 연구를 포스터 세션 발표를 통해 공유하는 시간을 가졌습니다. 
        `
    },
    "6": {
        title: "2024 22nd International Ergonomics Association 참석 및 발표",
        date: "2024.08.25-2024.08.29",
        writer: "관리자",
        image: "news/news6.png",
        content: `
            2024년도 22nd International Ergonomics Association 학술대회에 휴먼ICT융합전공 박동건 교수님, 기술데이터공학 이유신 교수님 연구팀이 참석하였습니다.<br>
            김민주, 손유경 학생이 각각 1저자로 구두발표 세션을 진행했습니다.<br>
            김민주 학생은 <strong>A Comparative Study of Controller vs Hand Gesture Typing based on Ray-Casting in Virtual Environment</strong>를 주제로 가상 환경에서의 새로운 입력 방식 비교 연구를 발표했습니다.<br>
            손유경 학생은 <strong>Text vs. Video: Uncovering the Impact of Assessment Tools on E-Scooter Risk Perceptions</strong>를 주제로 하여 전동킥보드 이용자의 위험행동과 관련한 도로이용자의 인식에 대한 결과를 공유했습니다.
        `
    },
    "7": {
        title: "2025 대한인간공학회 춘계학술대회 참석 및 발표",
        date: "2025.05.21-2025.05.24",
        writer: "관리자",
        image: "news/news7.png",
        content: `
            2025년도 대한인간공학회 춘계학술대회에 휴먼ICT융합전공 박동건 교수님 연구팀이 참석하였습니다.<br>
            정은서 학생이 <strong>로딩 화면 유형과 UX 라이팅 화행이 긴 로딩 시간 환경에서 사용자 경험에 미치는 영향</strong>을 주제로 하여 1저자로 구두발표 세션을 진행했습니다.
        `
    },
    "8": {
        title: "2025 대한인간공학회 추계학술대회 참석 및 발표",
        date: "2025.11.05-2025.11.08",
        writer: "관리자",
        image: "news/news8.png",
        content: `
            2025년도 대한인간공학회 추계학술대회에 박동건 교수님 연구팀이 참석하였습니다.<br>
            강경호 학생이 <strong>보행 중 스마트 글래스 환경에서 AR 텍스트 인터페이스 위치가 사용자 경험에 미치는 영향</strong>을 주제로 하여 1저자로 포스터 발표 세션을 진행했습니다.<br>
            강경호 학생은 우수 포스터 대회에서 인기 포스터상을 수상하였습니다.
        `
    }
    
};
