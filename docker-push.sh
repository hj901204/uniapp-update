#!/bin/bash

BUILD_TAG=`date +%Y%m%d%H%M`

echo 'new tag is: '${BUILD_TAG}
echo 'registry is: '${REGISTRY_URL}
NAME_SPACE="zkyd-mes"

if [ "$2" != "" ];
    then
    BUILD_TAG="$2"
fi

# build_push_tag
push_tag()
{
  set -e
	npm install --registry=https://registry.npm.taobao.org
	npm run build

    # push mes-ui
  docker build -t $REGISTRY_URL/$NAME_SPACE/zkyd-supplyx-ui:$BUILD_TAG -t $REGISTRY_URL/$NAME_SPACE/zkyd-supplyx-ui:latest .
  docker push $REGISTRY_URL/$NAME_SPACE/zkyd-supplyx-ui:$BUILD_TAG
  docker push $REGISTRY_URL/$NAME_SPACE/zkyd-supplyx-ui:latest
  docker rmi $REGISTRY_URL/$NAME_SPACE/zkyd-supplyx-ui:$BUILD_TAG
  docker rmi $REGISTRY_URL/$NAME_SPACE/zkyd-supplyx-ui:latest
}

if [ "$1" = "test" ];
    then
    # 修改API地址
    sed -i "s|^const API_URL.*$|const API_URL = 'http://localhost:8765'|g" $WORKSPACE/config/prod.env.js
    # login
    REGISTRY_URL="172.172.172.201:5000"
    NAME_SPACE="zkyd-mes"
    docker login --username=123 $REGISTRY_URL --password=123
    push_tag
elif [ "$1" = "prod" ];
    then
#    REGISTRY_URL="registry.cn-qingdao.aliyuncs.com"
    REGISTRY_URL="registry-vpc.cn-qingdao.aliyuncs.com"
    NAME_SPACE="zkyd-mes"
    # 修改API地址
    # sed -i "s|^const API_URL.*$|const API_URL = 'API_URL'|g" $WORKSPACE/config/prod.env.js
    docker login --username=zkyd@1448612826005342 $REGISTRY_URL --password="zkyd1225"
    push_tag
else
    echo '测试环境参考命令:docker-push.sh test ${BUILD_TAG}'
    echo '生产环境参考命令:docker-push.sh prod ${BUILD_TAG}'
fi
