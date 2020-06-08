<p align="center" >
<a href="https://agent-blog.herokuapp.com/" align="center"> <img src="https://user-images.githubusercontent.com/13609011/84003962-c3ecde80-a9a5-11ea-8722-8a7e9d99681f.png" width="250" height="250" align="center"/></a>
</p>
<h1 align="center">
  Agent Blog Server </br>  <img alt="Swift" src="https://img.shields.io/badge/API-GraphQL-red.svg"> <img alt="Database" src="https://img.shields.io/badge/Database-Prisma_MySQL-blue.svg"> <img alt="deploy" src="https://img.shields.io/badge/deploy-Heroku-purple.svg"> <img alt="Storage" src="https://img.shields.io/badge/storage-AWS S3-orange.svg">
</h1>



## 서비스 소개

### [Velog](https://velog.io/) 블로그 서비스 클론코딩 프로젝트
- 개발자들을 위한 블로그 서비스.
- 마크다운 (Markdown) 문법을 사용하여 개발자들이 쉽고 빠르게 예쁘게 꾸며진 포스트를 작성 할 수 있습니다.
- 메인 페이지에서 개발 트렌드 및 인기 태그 제공을 통해 융용한 정보를 쉽고 빠르게 찾을 수 있습니다.


## UI

<table>
   <tr>
     <th align="center">
       <img width="200" alt="1" src="https://user-images.githubusercontent.com/9532432/71674308-31c12880-2dbe-11ea-9a7e-9ecb15b52e4e.gif"/>
       <br><br>[Login]
     </th>
     <th align="center">
       <img width="200" alt="1" src="https://user-images.githubusercontent.com/9532432/71674314-3685dc80-2dbe-11ea-8657-2d59f6e708f3.gif"/>
       <br><br>[Main Menu] 
    </th>
     <th align="center">
      <img width="200" alt="1" src="https://user-images.githubusercontent.com/9532432/71674315-3685dc80-2dbe-11ea-8d53-d2e61c601d6d.gif"/>
       <br><br>[Sub Menu]
    </th>
     <th align="center">
      <img width="200" alt="1" src="https://user-images.githubusercontent.com/9532432/71674104-bfe8df00-2dbd-11ea-8c45-1e2e68a7ae4c.gif"/>
       <br><br>[Community]
    </th>
  </tr>
</table>



### Home

웹사이트 접근을 위한 사용자 로그인 데이터 저장

- 입력된 사용자 정보를 암호화 하여 서버에 저장
- Firebase Token 을 이용한 자동로그인
- Kau 웹사이트에 접근하여 Cookie 저장 (휘발성 데이터로 매 로그인시 재발급)

### Posting

- 실시간 도서관 좌석 조회
- 사용자 정보를 기반으로 LMS site 자동 로그인

### Sub Menu

사용자 개인정보(성적, 장학금 내역, 시간표, 석차 등) 접근

- 사용자 Cookie 데이터를 기반으로 웹사이트 접근
- WKWebview (iOS <= 10,  Webview) 와 Javascript Bridge를 활용하여 Redirect 과정을 자동화
- 기존의 복잡한 과정이 생략되고 원포인트 접근

### Community

사용자들간의 커뮤니티 기능

- Open 게시판
- 배달음식 주문, 메뉴판, 리뷰



## 활용기술
- **[GraphQL]()**: 웹 클라이언트가 데이터를 서버로 부터 효율적으로 가져오는 것이 목적입니다. 
- **[heroku]()**: GraphQL API 서버와 Prisma-MySQL Database 배포하기 위해 사용.
- **[Amazon S3]()**: 온라인 스토리지 웹 서비스. 게시물의 이미지를 저장하기 위해 사용.
- **[multer]()**: Node.js 미들웨어로 파일 업로드 핸들링을 도와주는 모듈. 게시물의 이미지를 업로드 하기 위해 사용.
- **[babel]()**: 자바스크립트 컴파일러로 ES8으로 작성한 코드를 호환성을 위해 하위 버전 코드로 변환해주는 모듈.
- **[nodemailer]()**: Node.js 에서 e-mail 을 쉽게 보낼 수 있게 도와주는 모듈. 회원가입 시 이메일 인증을 위해 사용.
- **[passport]()**: 토큰인증방식을 위해 사용.

