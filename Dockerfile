FROM httpd
COPY ./dist/Client/* /usr/local/apache2/htdocs/
EXPOSE 80
CMD apachectl -D FOREGROUND
