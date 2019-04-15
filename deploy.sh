#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist

# 部署到自定义域域名
# echo 'www.buzhanzuo.com' > CNAME

git init
git config user.email theresa7@qq.com
git config user.name TabEnter
git add -A
git commit -m 'deploy'

# 部署到 https://stonecutter.github.io/library-in
git push -f git@github.com:stonecutter/library-in.git master:gh-pages

cd -
