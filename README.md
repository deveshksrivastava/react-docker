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
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}

To write a bucket policy for an S3 bucket, you can follow these steps:

Access the Amazon S3 Console

Go to the Amazon S3 Console and sign in to your AWS account.
Select the Bucket

From the list of buckets, select the bucket for which you want to create or edit a policy.
3 . Go to Permissions

Click on the "Permissions" tab at the top of the console.
Edit Bucket Policy

Scroll down to the "Bucket Policy" section and click on the "Edit" button.
Write the Bucket Policy

In the text editor, write your bucket policy in JSON format. The policy should define the desired permissions and access controls for the bucket.
1. uncheck all to make s3 bucket public
2. update the bucket policy

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}


Please note that writing a bucket policy requires appropriate permissions in your AWS IAM user or role. Make sure you have the necessary access rights to create or modify bucket policies.

Remember to review and test your bucket policy to ensure it provides the intended access and security controls.

```

### Adding eslint

yarn add eslint --save-dev
npx eslint --init
npm install eslint-plugin-react --save-dev
npx eslint . //run eslint

### Adding pritter

npm install prettier --save-dev
adding pritterrc.json
npx prettier --write . // run prettier
