---
title: GitHub 블로그 만들기 - Hexo -
date: 2020/01/17
updated: {{ updated }}
tags: 
 - github
 - hexo
subtitle: Hexo를 사용하여 블로그 생성하기
---

<!-- more -->

### 정적 사이트 생성기
이전 글에서 GitHub 블로그 프레임워크에 대해 짧게 언급을 했었습니다
이러한 것을 정적 사이트 생성기(**S**tatic **S**ite **G**enerator .. 줄여서 SSG..슥?!)라고 합니다

많이 알려진 세가지 프레임워크의 특징을 정리해보았습니다

* 지킬(Jekyll)
 1. 루비(Ruby)로 제작됨
 2. GitHub 공식지원, 사용자가 많음
 3. 한글 문서 제공([jekyllrb-ko.github.io/docs/home/](https://jekyllrb-ko.github.io/docs/home/))
 4. 글이 많을수록 빌드시간이 상대적으로 느리다고 합니다(빌드 후 포스팅이 아닌 소스 push 후 github에서 빌드하는 구조. *2번 내용과 연관* )

* 휴고(Hugo)
 1. 고(Go)로 제작됨
 2. 많은 사용자를 보유하고 있으며 꾸준히 증가하고 있음
 3. 한글 문서가 적음
 4. 빌드 시간이 굉장히 빠르다!

* 헥소(Hexo)
 1. 자바스크립트(Nodejs) 기반으로 제작됨
 2. 지킬이나 휴고만큼은 아니지만 많은 사용자를 보유하고 있으며, 특히 중화권 개발자들에게 인기가 많은듯 함
 3. 한글 문서 제공([hexo.io/ko/docs](https://hexo.io/ko/docs))

> [구글 트랜드 사이트](https://trends.google.com/trends/explore?cat=31&q=jekyll,hexo,hugo)를 통해 검색양을 비교해 볼 수 있습니다

<img src="/image/github-blog-create-02/01.png" />

> [StaticGen.com](https://www.staticgen.com/) 에서는 다양한 Static Site Generator의 인기도에 대해 알아볼 수 있습니다

<img src="/image/github-blog-create-02/02.png" />

최근 인기도를 살펴보면 지킬(Jekyll)과 휴고(Hugo)가 압도적인데요
저는 예전에 개발자 동생이 Hexo로 했다는 말이 생각나서 그냥 Hexo로 시작해 보았습니다..ㅡㅅ-;

### Hexo 란?
토미 첸(Tommy Chen)이라는 개발자가 2012년에 만든 자바스크립트(Node.js) 기반의 정적 사이트 생성기 입니다
Node.js의 인기와 중화권 개발자라는 특징으로 중국에서 인기가 많은것으로 생각됩니다
<img src="/image/github-blog-create-02/03.png" />

### 설치하기
Hexo는 npm(Node Package Manager)을 통해 설치할 수 있습니다
사전에 Node.js와 git을 설치해야 Cli(Command Line Interface) 상에서 npm을 이용해 Hexo 설치 및 배포를 사용할 수 있습니다

> [Node.js](https://nodejs.org/ko/) 설치하기
> [Git](https://git-scm.com/downloads) 설치하기

Hexo 설치
```
$ npm install hexo-cli -g
```
hexo 명령어를 어디서든 쓰기 위해 -g(전역)으로 설치하였습니다

### 블로그 생성
Node.js와 Git 그리고 hexo가 설치되었으면 블로그를 생성합니다
(저는 D:\02.workspace\hexo-blog라는 이름으로 생성하였습니다)
```
$ cd D:
$ mkdir 02.workspace
$ hexo init hexo-blog
INFO  Cloning hexo-starter https://github.com/hexojs/hexo-starter.git
Cloning into 'D:\02.workspace\hexo-blog'...
remote: Enumerating objects: 30, done.
...
INFO  Start blogging with Hexo!
```

Hexo 설치가 완료되었으면 바로 Hexo 서버를 실행합니다
```
$ cd hexo-blog
$ hexo server
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```
그리고 웹브라우저 주소창에 **localhost:4000** 라고 입력 후 아래와 같이 나오면 성공!
<img src="/image/github-blog-create-02/04.png" />

### 배포용 블로그 생성
hexo init을 통해 생성된 폴더를 살펴보면 index.html도 없고 .md나 .ejs는 있는데 대체 어떻게 동작하는지는 잘 모르겠습니다
**"대체 어떻게 블로그가 만들어지는 거지?"**
자연스레 떠오르는 궁금증들을 해소하기 위해선 어느정도 구조를 알아야합니다

hexo init으로 생성한 hexo-blog 폴더 구조를 살펴보도록 하겠습니다
```
$ cd hexo-blog
┬ node_modules /* npm install을 통해 설치한 node 모듈들 */
│ 
├ scaffolds /* 글 작성시 사용할 기본 포멧 정도로 생각하면 됩니다 */
│ 
├ source /* 포스팅할 글 작성시 이곳에 글제목.md 파일이 생성됩니다 */
│ ├ _draft /* 임시 작성글 생성시 저장 폴더(hexo new draft) */
│ └ _posts /* 발생글 생성시 저장 폴더(hexo new post) */
│
├ themes /* Hexo 블로그의 테마(디자인)가 설치됩니다. 기본 landscape */
│ 
├ .gitignore /* git commit시 제외할 폴더나 파일 목록이 작성되어있습니다 */
│ 
├ _config.yml /* Hexo 설정 파일 */
│ 
├ db.json /* 데이터베이스입니다. json 타입으로 작성된 글에 대한 정보와 내용등이 있습니다 */
│ 
├ package.json /* node 모듈 설치시 자동생성되며, Hexo 관련 어플리케이션 및 버전정보가 담겨있습니다 */
│ 
└ package-lock.json /* node 모듈 설치시 자동생성되며, npm 모듈 설치시 필요한 의존성 관계에 대한 정보가 있습니다 */
```

이제 Hexo를 통해 정적 사이트 생성을 합니다
```
$ hexo generate
INFO  Start processing
INFO  Files loaded in 136 ms
INFO  Generated: index.html
...
INFO  38 files generated in 286 ms
```

이제 다시 폴더 구조를 살펴봅니다
```
$ cd hexo-blog
┬ node_modules
│ 
├ public /* hexo generate를 통해 .md 파일이 .html로 변환되어 각 폴더에 생성됩니다 */
│ 
├ scaffolds
├ source
├ themes
├ .gitignore
├ _config.yml
├ db.json
├ package.json
└ package-lock.json
```

public 폴더를 살펴보면 css, js 폴더 및 html 파일들이 생성된 것을 알 수 있습니다
hexo generate를 통해 상위의 scaffolds, source, themes안의 요소들이 public 폴더 밑으로 구조를 가지고 제작되었다고 이해하면 될 것 같습니다



### Git 배포
Git에 배포를 하여 chosajang.github.io 주소로 볼 수 있도록 설정하도록 하겠습니다

<img src="/image/github-blog-create-02/05.png" />

1. 배포 플러그인 설치
hexo용 git 배포 플러그인을 설치합니다
[Hexo 배포문서](https://hexo.io/ko/docs/one-command-deployment)를 살펴보면 아래와 같이 나와있습니다
```
$ npm install hexo-deployer-git --save
```

2. _config.yml 수정
hexo-blog 폴더안에 _config.yml 이라는 설정 파일이 있습니다
내용을 살펴보면 블로그 작성자, 날짜형식등 다양한 설정정보가 담겨있는데요
이중에 git 배포를 위한 **Deployment** 항목을 수정합니다
- type : git
- repo : 저장소 주소
- branch : 브런치명
- message : 배포 메세지
``` yml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy: 
    type: git
    repo: https://github.com/chosajang/chosajang.github.io.git
    branch: master
    message: hexo deployment
```

3. Hexo 배포
```
$ hexo clean /* public 폴더 초기화 */

$ hexo generate /* public 폴더 정적 사이트 생성 */

$ hexo deploy /* git 배포 */
```

이후 깃에 접속하여 hexo deploy를 통해 public 폴더 내용이 배포된 것을 확인할 수 있습니다
> 배포된 내용 확인 : https://github.com/chosajang/chosajang.github.io
> 블로그 확인 : https://chosajang.github.io

<img src="/image/github-blog-create-02/06.png" />

다음에는 hexo 글생성 및 관리에 대해 작성하도록 하겠습니다
읽어주셔서 감사합니다
