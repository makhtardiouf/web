#!/bin/bash
# $Id$

DIR=meets
cp -uv 02* $DIR/
cp -Ruv font js img css $DIR/

# ap-northeast-1 is Tokyo
aws s3 sync $DIR s3://eva-img-sin/$DIR --delete --region ap-northeast-1 --expires=2015-08-15T00:00:00Z --cache-control max-age=200,public

aws s3 ls s3://eva-img-sin/$DIR/
echo "Done syncing with aws"

rsync -avuz ../evasion makhtar.ddns.net:

echo "Done syncing with softensys"
exit
