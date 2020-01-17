---
title: GitHub 블로그 만들기 - Hexo -
date: 2020/01/17
updated: {{ updated }}
tags: ['github','hexo']
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

### Hexo 란?
토미 첸(Tommy Chen)이라는 개발자가 2012년에 만든 자바스크립트(Node.js) 기반의 정적 사이트 생성기 입니다
Node.js의 인기와 중화권 개발자라는 특징으로 중국에서 인기가 많은것으로 생각됩니다
<img src="/image/github-blog-create-02/03.png" />

최근 인기도를 살펴보면 지킬(Jekyll)과 휴고(Hugo)가 압도적인데요
저는 예전에 개발자 동생이 Hexo로 했다는 말이 생각나서 그냥 Hexo로 시작해 보았습니다..ㅡㅅ-;

### 설치하기
Hexo는 npm(Node Package Manager)를 통해 설치할 수 있습니다
사전에 Node.js와 git을 설치해야 Cli(Command Line Interface) 상에서 npm을 이용해 Hexo 설치 및 배포를 사용할 수 있습니다

> [Node.js](https://nodejs.org/ko/) 설치하기
> [Git](https://git-scm.com/downloads) 설치하기

Node 설치 확인
```
# node -v
v13.0.1
```

Git 설치 확인
```
# git --version
git version 2.20.1.windows.1
```

Node.js와 Git 설치가 완료되었으면 바로 Hexo를 설치해봅니다
저는 hexo-blog라는 폴더를 생성하여 그 아래에 Hexo를 init 하였습니다
```
# npm install hexo-cli -g
# mkdir hexo-blog
# hexo init hexo-blog
...
INFO  Start blogging with Hexo!
```

Hexo 설치 메세지를 확인하면 바로 Hexo 서버를 실행합니다
```
# cd hexo-blog
# hexo server
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```
그리고 웹브라우저 주소창에 **localhost:4000** 라고 입력 후 아래와 같은 화면이 뜬다면 성공!
<img src="/image/github-blog-create-02/04.png" />