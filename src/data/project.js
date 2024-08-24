import diaryImageMain from './MyDiary/메인.png';
import diaryImageLogin from './MyDiary/로그인.png';
import diaryImageIntro from './MyDiary/첫화면.png';
import diaryImageAddPost1 from './MyDiary/글추가.png'
import diaryImageAddPost2 from './MyDiary/글추가2.png'
import diaryImagePostDetail from './MyDiary/글정보.png'
import diaryImageMy from './MyDiary/내정보.png';

import smartMirror from './SmartMirror/실제품.png';
import smartMirrorHardWare from './SmartMirror/하드웨어.png';
import smartMirrorMain from './SmartMirror/메인페이지.png';
import smartMirrorOff from './SmartMirror/절전.png';
import smartMirrorTraining from './SmartMirror/트레이닝.png';
import smartMirrorDB from './SmartMirror/파이어베이스.png';

import cheeusAdmin from './Cheeus/어드민.PNG';
import cheeusAdminUser from './Cheeus/어드민유저관리.PNG';
import cheeusGoogleLogin from './Cheeus/구글로그인.PNG';
import cheeusLogin from './Cheeus/로그인.PNG';
import cheeusMagazine from './Cheeus/매거진.png';
import cheeusMain from './Cheeus/치어스메인.PNG';
import cheeusMypage from './Cheeus/마이페이지.PNG';
import cheeusSMSAuth from './Cheeus/전번인증.jpg';
import cheeusSignup from './Cheeus/회원가입.PNG';
import cheeusWritePost from './Cheeus/글쓰기.PNG'

export const ownProjects = [
    {
        name: '📓 My Diary, 간단한 일기 웹 앱',
        period: '2024.03 ~ 2024.03',
        teamSize: '1명',
        technologies: 'JavaScript, Node.js(Express), ejs, jQuery, bootstrap, MongoDB',
        challenges: '몽고DB, 무료 웹 배포',
        results: '일기 작성 및 관리 기능',
        images : {
            메인페이지 : diaryImageMain,
            로그인페이지 : diaryImageLogin,
            첫화면 : diaryImageIntro,
            글추가1 : diaryImageAddPost1,
            글추가2 : diaryImageAddPost2,
            글정보 : diaryImagePostDetail,
            내정보 : diaryImageMy
        }
    }
];

export const teamProjects = [
    {
        name: '🪞 안면인식을 사용하여 보안성을 강화한 스마트 미러',
        period: '2022.03 ~ 2022.11',
        teamSize: '4명',
        technologies: 'Python, OpenCV, Raspberry Pi',
        challenges: '실시간 얼굴 인식 및 UI 디자인',
        results: '스마트 미러 시제품 완성',
        images : {
            시제품 : smartMirror,
            하드웨어 : smartMirrorHardWare,
            메인화면 : smartMirrorMain,
            절전 : smartMirrorOff,
            트레이닝 : smartMirrorTraining,
            파이어베이스 : smartMirrorDB
        },
        codes : {
            트레이닝코드 : './data/SmartMirror/recognizer.txt'
        }
    },
    {
        name: '🧳 여행 메이트 구인 웹 앱',
        period: '2024.06 ~ 2024.06',
        teamSize: '4명',
        technologies: 'Java, JavaScript, Spring, React, MySQL',
        challenges: '게시글 필터링 알고리즘 구현',
        results: '여행 메이트 매칭 플랫폼'
    },
    {
        name: '🍺 동네 술 친구 사귀기 웹 앱',
        period: '2024.07 ~ 2024.08',
        teamSize: '4명',
        technologies: 'Java, JavaScript, Spring, React, Node.js(Express), MySQL, MongoDB, Firebase, Redis',
        challenges: '실시간 채팅 및 매칭 알고리즘',
        results: '동네 술 친구 찾기 웹 앱',
        images : {
            메인페이지 : cheeusMain,
            로그인페이지 : cheeusLogin,
            구글로그인 : cheeusGoogleLogin,
            회원가입페이지 : cheeusSignup,
            전번인증 : cheeusSMSAuth,
            글쓰기 : cheeusWritePost,
            매거진 : cheeusMagazine,
            마이페이지 : cheeusMypage,
            어드민 : cheeusAdmin,
            어드민유저관리 : cheeusAdminUser
        }
    }
];