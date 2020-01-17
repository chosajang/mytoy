---
title: GitHub 블로그 만들기 - 주소설정 -
date: 2020/01/11
updated: {{ updated }}
tags: ['github']
subtitle: 계정이름.github.io의 URL로 블로그 운영을 위한 설정
---

<!-- more -->

### 시작하기에 앞서
안녕하세요! 개발자로 일하고 있는 조사장입니다
chosajang.github.io 첫 포스팅 입니다(와아아아ㅏ...)
업무와 별개로 다양한 활동을 하는 수많은 개발자분들을 보면서 나도 새해에는 열심히 살아야지 하고 마음먹고 블로그를 시작하였습니다

일반적인 블로그 서비스를 하는 곳은 굉장히 다양합니다
- 블로그 플랫폼
 > <a href="https://brunch.co.kr/">브런치(Brunch)</a>
 > <a href="https://medium.com/">미디엄(Medium)</a>
 > <a href="https://www.tistory.com/">티스토리(Tistory)</a>
 > <a href="http://section.blog.naver.com">네이버 블로그(Naver Blog)</a>
 > <a href="https://wordpress.org/">워드프레스(Wordpress)</a>
 > ..외에도 다양한 블로그 플랫폼이 있습니다

하지만 많은 개발자분들이 github에서 활동을 하며, 모르는 부분을 검색하다보면 ****.github.io 주소를 통해 블로그가 나오는걸 보아왔습니다
- 대표적인 Github 블로그 프레임워크
 > <a href="https://jekyllrb-ko.github.io/">지킬(Jekyll)</a>
 > <a href="https://gohugo.io/">휴고(Hugo)</a>
 > <a href="https://hexo.io/ko/">헥소(Hexo)</a>

이런걸 정적 웹 생성기(Static Site Generator, SSG...슥?!)라고 하더군요
무언가 개발자스러움이 느껴지지 않나요?!

결정! github으로 블로그를 생성하고 글을 포스팅하기로 정했습니다

그러기위해 우선 나만의 github.io 주소를 가지는 방법을 알아보도록 하겠습니다

### GitHub 저장소 생성

github 계정이 필요하며, 없을경우 계정 생성 후 아래 내용을 진행합니다

1. 로그인 후, 상단의 탭 메뉴들 중 Repositories 메뉴를 선택합니다
2. 우측에 New 버튼을 눌러 저장소(Repository) 생성 메뉴로 들어갑니다

<img src="/image/github.blog.create/01.gif" />

3. 계정이름 + github.io를 붙여서 저장소 이름을 작성합니다
이와 같은 규칙을 지켜야 github.io 주소로 서비스할 수 있다고 합니다
> GitHub 계정이름 : chosajang
> Repository name : chosajang.github.io

4. 다른 설정 변경없이 "Create repository"버튼을 눌러서 저장소를 생성합니다

<img src="/image/github.blog.create/02.gif" />

저장소가 생성된 것을 확인 할 수 있습니다

<img src="/image/github.blog.create/03.gif" />

### README.MD 작성
저장소 생성 후, 해당 주소(chosajang.github.io)로 접속해도 화면이 뜨지 않을 것입니다
README.md 파일을 생성하여 간단한 문구를 작성 후, 결과를 확인합니다

1. 우측 하단의 Add a README 버튼 클릭합니다
<img src="/image/github.blog.create/04.gif" />

2. README.md 파일을 생성합니다
파일을 생성하면 레포지토리 이름과 설명을 포함하여 자동생성 되며, MarkDown 문법으로 작성되어있습니다
{% codeblock README.md lang:md %}
# chosajang.github.io
GitHub으로 블로그 만들기! 시작!
{% endcodeblock %}
> 마크다운(Markdown) 란?
> 특수기호와 문자를 이용한 간단한 구조의 문법을 사용하여 글 작성 후 HTML로 변환이 가능한 텍스트 기반의 마크업 언어입니다
>
> \- [마크다운 작성법](https://gist.github.com/ihoneymon/652be052a0727ad59601)(허니몬님의 Gist)

<img src="/image/github.blog.create/05.gif" />

3. README.md 파일 내용 작성 후 커밋(저장)하기
커밋 메세지를 작성 후 Commit new file 버튼을 클릭하여 작성을 완료합니다
<img src="/image/github.blog.create/06.gif" />

### github.io 접속
내용 작성 후, https://chosajang.github.io 에 접속하여 아래와 같은 화면이 뜨면 성공!
<img src="/image/github.blog.create/07.gif" />
