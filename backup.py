# -*- coding: utf-8 -*-
import os
import subprocess
import datetime
now = datetime.datetime.now().strftime('%Y_%m_%d_%H_%M')
# docker exec -it fpm-cms-ng1-starter_db_1 mysqldump -uroot -proot fpm_project > backup/fpm_project.sql
output = os.popen('docker exec -it fpm-cms-ng1-starter_db_1 mysqldump -uroot -proot fpm_project > backup/' + now + '.sql')
print(output.read())

