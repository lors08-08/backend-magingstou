FROM postgres:latest

COPY ./docker-entrypoint-init.d/001-init-user-db.sh /docker-entrypoint-initdb.d/001-init-user-db.sh
RUN chmod +x /docker-entrypoint-initdb.d/001-init-user-db.sh