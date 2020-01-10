---
title: GitHub 블로그 만들기
date: 2020-01-07 12:33:21
tags: ['post','docker']
categories: []
thumbnail: ""
permalink: ""
---

<!-- excerpt -->
github
<!-- more -->
### docker-compose
``` bash
project-proxy:
    container_name: project-proxy
    image: nginx:latest
    ports:
        - "82:82"
    volumes:
        - ./nginx/project-proxy.conf:/etc/nginx/nginx.conf     
project-web:
    container_name: project-web
    image: nginx:latest
    expose:
        - "8282"
    volumes:
        - /svc/git.repository/pipeline/source/project-web:/source
        - ./nginx/project-web.conf:/etc/nginx/nginx.conf
```
<!-- toc -->