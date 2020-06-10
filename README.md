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

### 1) 메인 홈페이지

![velog_feed mov](https://user-images.githubusercontent.com/13609011/84225378-edc71200-ab19-11ea-9fd8-371c31a68d09.gif)

- Card 디자인 & Skeleton 로딩 구현
- 트렌딩 / 최신 게시물 노출
- hover 애니메이션
- 인기태그 표시

### 2) Responsive Layout
<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/13609011/84225388-f586b680-ab19-11ea-812c-4adea276119b.gif"/>
       <br><br>[피드]
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/13609011/84225392-f7e91080-ab19-11ea-884a-ec2b1ec6920a.gif"/>
       <br><br>[검색] 
    </th>
  </tr>
</table>

- 미디어 쿼리를 이용하여 반응형 웹사이트를 구현

### 3) 로그인

<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/13609011/84225386-f3bcf300-ab19-11ea-96e1-073c342a652d.gif"/>
       <br><br>[로그인]
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/13609011/84225370-ebfd4e80-ab19-11ea-84d7-0becdc0e8765.gif"/>
       <br><br>[회원가입] 
    </th>
  </tr>
</table>

- 모달을 통해 로그인과 회원가입을 구현했습니다.
    - Portal 사용

![velog_login mov](https://user-images.githubusercontent.com/13609011/84225384-f1f32f80-ab19-11ea-8172-9adfed4cab7d.gif)

- 이메일 인증으로 로그인 구현
    - nodemailer 사용

### 4) 해시태그 검색

![velog_hashtag mov](https://user-images.githubusercontent.com/13609011/84225382-f0296c00-ab19-11ea-9582-e3b538e6a086.gif)

- Skeleton loading 구현

### 5) 게시물 검색

![velog_search mov](https://user-images.githubusercontent.com/13609011/84225393-f91a3d80-ab19-11ea-9db4-99c66a9edec0.gif)

- Input 값의 변화를 실시간으로 감지하여 입력 즉시 검색 데이터를 받아옴


## 활용기술
- **[GraphQL]()**: 웹 클라이언트가 데이터를 서버로 부터 효율적으로 가져오는 것을 목적으로 만들어진 쿼리 언어로서 하나의 엔드 포인트를 통해 원하는 데이터를 한번에 가져올 수 있는 장점이 있습니다.
- **[heroku]()**: GraphQL API 서버와 Prisma-MySQL Database 배포하기 위해 사용.
- **[Amazon S3]()**: 온라인 스토리지 웹 서비스. 게시물의 이미지를 저장하기 위해 사용.
- **[multer]()**: Node.js 미들웨어로 파일 업로드 핸들링을 도와주는 모듈. 게시물의 이미지를 업로드 하기 위해 사용.
- **[babel]()**: 자바스크립트 컴파일러로 ES8으로 작성한 코드를 호환성을 위해 하위 버전 코드로 변환해주는 모듈.
- **[nodemailer]()**: Node.js 에서 e-mail 을 쉽게 보낼 수 있게 도와주는 모듈. 회원가입 시 이메일 인증을 위해 사용.
- **[passport]()**: 토큰인증방식을 위해 사용.
- **[morgan]()**: 서버 요청에 대한 기록을 콘솔에 저장하기 위해 사용.
