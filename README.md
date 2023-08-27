# Getting Started with Create React App with docker github action and aws account

1. This project cover the how to create docker images, containers and docker-compose
2. This project covers how to create github actions

## Link and support documentation

1. [Medium link](https://devesh-kr-sri.medium.com/docker-and-kubernative-642d4c667ee5)

2. [youtube](https://www.youtube.com/watch?v=C-bX86AgyiA&t=1072s)

3. [code coverage codecov](https://app.codecov.io/gh/deveshksrivastava/react-docker/new)

4. [github action](https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp)

fixing error :

Run aws s3 sync build/ s3://your-bucket-name --delete
fatal error: An error occurred (AllAccessDisabled) when calling the ListObjectsV2 operation: All access to this object has been disabled

https://www.youtube.com/watch?v=-ZiirF7ap5U

```
{
"Version": "2012-10-17",
"Id": "PutObjPolicy",
"Statement": [{
  "Sid": "PublicReadGetObject",
  "Principal": "*",
  "Effect": "Allow",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::react-action-s3-bucket-app/*"
 }]
}

```
