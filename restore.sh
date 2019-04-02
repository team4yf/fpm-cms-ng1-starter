#! /bin/sh

arg1=$1
arg2=$2
container_name=${arg2:="mysqlserver"}

docker exec $container_name bash -c "mysql -u root -proot test < /var/backup/t_2019_03_26_10_38.sql && mysql -u root -proot test < /var/backup/d_2019_03_26_10_38.sql"