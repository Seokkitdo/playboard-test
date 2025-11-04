export var MODULES = [
    {
        id: 'CENTER_MANAGEMENT',
        name: 'CENTER_MANAGEMENT',
        screens: [
            {
                id: 'inspection-session-list',
                name: '검사 세션',
                components: [
                    {
                        id: 'c1',
                        name: '검사 세션 검색 및 필터',
                        type: 'titleSearchFilter',
                        description: '검사 세션을 검색하고 필터링하는 컴포넌트'
                    },
                    {
                        id: 'c3',
                        name: '검사 세션 카드',
                        type: 'assessmentSessionCard',
                        description: '검사 세션 정보를 표시하는 카드 (상태별 5가지 스타일)'
                    }
                ]
            },
            {
                id: 'inspection-session-detail',
                name: '검사 세션 상세',
                components: [
                    {
                        id: 'c4',
                        name: '센터 정보 카드',
                        type: 'card',
                        description: '센터 상세 정보'
                    }
                ]
            },
            {
                id: 'inspection-reservation-list',
                name: '검사 예약',
                components: [
                    {
                        id: 'c3',
                        name: '센터 정보 카드',
                        type: 'card',
                        description: '센터 상세 정보'
                    },
                    {
                        id: 'c4',
                        name: '수정 버튼',
                        type: 'button',
                        description: '센터 수정 버튼'
                    }
                ]
            },
            {
                id: 'direct-link',
                name: '바로 링크',
                components: [
                    {
                        id: 'c3',
                        name: '센터 정보 카드',
                        type: 'card',
                        description: '센터 상세 정보'
                    },
                    {
                        id: 'c4',
                        name: '수정 버튼',
                        type: 'button',
                        description: '센터 수정 버튼'
                    }
                ]
            },
            {
                id: 'inspection-session-detail-link',
                name: '검사 세션 상세',
                components: [
                    {
                        id: 'c3',
                        name: '센터 정보 카드',
                        type: 'card',
                        description: '센터 상세 정보'
                    },
                    {
                        id: 'c4',
                        name: '수정 버튼',
                        type: 'button',
                        description: '센터 수정 버튼'
                    }
                ]
            }
        ]
    },
    {
        id: 'ASSESSMENT_MANAGEMENT',
        name: 'ASSESSMENT_MANAGEMENT',
        screens: [
            {
                id: 'assessment-session-list',
                name: '평가 목록',
                components: [
                    {
                        id: 'a1',
                        name: '평가 테이블',
                        type: 'table',
                        description: '평가 목록 테이블'
                    },
                    {
                        id: 'a2',
                        name: '새 평가 버튼',
                        type: 'button',
                        description: '평가 생성 버튼'
                    }
                ]
            }
        ]
    },
    {
        id: 'APPOINTMENT_MANAGEMENT',
        name: 'APPOINTMENT_MANAGEMENT',
        screens: [
            {
                id: 'appointment-calendar',
                name: '예약 캘린더',
                components: [
                    {
                        id: 'ap1',
                        name: '예약 카드',
                        type: 'card',
                        description: '예약 정보 카드'
                    }
                ]
            }
        ]
    },
    {
        id: 'USER_AUTH',
        name: 'USER_AUTH',
        screens: [
            {
                id: 'login',
                name: '로그인',
                components: [
                    {
                        id: 'u1',
                        name: '로그인 폼',
                        type: 'form',
                        description: '로그인 입력 폼'
                    },
                    {
                        id: 'u2',
                        name: '로그인 버튼',
                        type: 'button',
                        description: '로그인 제출 버튼'
                    }
                ]
            }
        ]
    },
    {
        id: 'AUTHORIZATION',
        name: 'AUTHORIZATION',
        screens: [
            {
                id: 'role-management',
                name: '역할 관리',
                components: [
                    {
                        id: 'au1',
                        name: '역할 테이블',
                        type: 'table',
                        description: '역할 목록'
                    }
                ]
            }
        ]
    },
    {
        id: 'SETTINGS',
        name: 'SETTINGS',
        screens: [
            {
                id: 'general-settings',
                name: '일반 설정',
                components: [
                    {
                        id: 's1',
                        name: '설정 폼',
                        type: 'form',
                        description: '설정 입력 폼'
                    }
                ]
            }
        ]
    },
    {
        id: 'SUBSCRIPTION_MANAGEMENT',
        name: 'SUBSCRIPTION_MANAGEMENT',
        screens: [
            {
                id: 'subscription-list',
                name: '구독 목록',
                components: [
                    {
                        id: 'sub1',
                        name: '구독 카드',
                        type: 'card',
                        description: '구독 정보 카드'
                    }
                ]
            }
        ]
    },
    {
        id: 'LOG_MANAGEMENT',
        name: 'LOG_MANAGEMENT',
        screens: [
            {
                id: 'log-viewer',
                name: '로그 뷰어',
                components: [
                    {
                        id: 'l1',
                        name: '로그 테이블',
                        type: 'table',
                        description: '로그 목록 테이블'
                    }
                ]
            }
        ]
    }
];
