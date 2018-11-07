# -*- coding: utf-8 -*-
import os
import subprocess
import datetime
now = datetime.datetime.now().strftime('%Y_%m_%d_%H_%M')
project = os.path.split(os.getcwd())[-1]  # 获取当前文件夹的名称，用来找到 docker 中的容器
project = project.replace('.', '')  # docker生成的容器会去除目录中的 . 号，这里做一个替换
output = os.popen('docker exec -it ' + project + '_db_1 mysqldump -uroot -proot fpm_project > backup/' + now + '.sql')
print(output.read())