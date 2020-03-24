FROM nginx
RUN rm -rf /usr/share/nginx/html/zkyd-supplyx/*
COPY dist /usr/share/nginx/html/zkyd-supplyx
COPY nginx.conf /etc/nginx/nginx.conf
COPY docker-entrypoint.sh /usr/local/bin/
RUN mkdir -p /usr/share/nginx/html/data/incoming
RUN echo "Asia/Shanghai" > /etc/timezone
ENTRYPOINT ["sh","/usr/local/bin/docker-entrypoint.sh"]
