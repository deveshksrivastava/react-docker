https://www.youtube.com/watch?v=9-z_fSYWQNo&list=PL6XT0grm_TfgdaAjTmLb4QedMCCMQHISm&index=32

https://learning-ocean.com/ git lession

https://courses.learning-ocean.com/dashboard/enrolled-courses/completed-courses/

```
COMMAND :
terraform provider
terraform init       # intaling the folder
terraform plan       # create plan
terraform apply      # rum plan to create resources
terraform apply --auto-approve # remove the yes command to create
terraform providers  # telles how is the provider 
terraform destroy    # remove resources
terraform validate   # check the file
terraform refresh    # brings any changes from github
terraform show       # show terraform.tfstate file on terminal
$ terraform fmt      # help to formate the terrafrom
$ terraform graph | dot -Tsvg > graph.svg
$ terraform graph | dot -Tpdf > graph.pdf
```

Task
- shh key -> first-key
- assign first-key to newely created instance

- create a sequrity group
- assign that group to instance

- nginx install
- /var/www/html/index.nginx-debian.html -> hey, Devesh new file

User@DESKTOP-A2VP9VB MINGW64 /d/sites/LEARN-DEVOPS/terraform-yt/hello-world/aws-first-instance (master)
$ ssh-keygen -t rsa
    Generating public/private rsa key pair.
    -----------------------------------------> enter-important to ./id_rsa
    Enter file in which to save the key (/c/Users/User/.ssh/id_rsa): ./id_rsa
    Enter passphrase (empty for no passphrase): 
    Enter same passphrase again: 
    Your identification has been saved in ./id_rsa
    Your public key has been saved in ./id_rsa.pub
    The key fingerprint is:
    SHA256:7O/B23Tov9IpA+XTbojeG9eAIjgDLDNwuhG38JWBnIg User@DESKTOP-A2VP9VB
    The key's randomart image is:
    +---[RSA 3072]----+
    |=ooooo           |
    |EO++.            |
    |o * o            |
    | o + . o    ..   |
    |.     + S .o...  |
    |       + o..o..o |
    |        . oo+=o..|
    |         ..B=+=  |
    |         o= =Bo. |
    +----[SHA256]-----+

    check folder :
    /c/Users/User/.ssh/id_rsa
    id_ed25519  id_ed25519.pub  id_rsa  id_rsa.pub  known_hosts  known_hosts.old
    you got privat key id_rsa and public key id_rsa.pub
    - privet key are kept by use,and pulic used by aws to access, in appended in .ssh folder

$ cat devesh-test.pem (donwloaed form aws)
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEApDkkwgYiGkJpvFujBDqaU1dCUDEU1EhLVvvO5+0CUn8AZ0TY
XocmO8MgZtKfs3b6vs4iNK3xPB7i6TTSTzZZG064DbZrAF5r7L4jsjtkrAoku2iv
2MhvXrkQbN0F8Uqsi3j0UJyTrGqZ6qQIbJBh0PENhvdnhiR0PhrwTkc6Dv0D5PIy
p6BlZsJDam4VMzdcp3c3SCWYTRhey+y9wCku5cHoRC1JrPvIXw5SY1N2IGfzfr65
GtUpwdr+bFFDSDcHDh/tqGFAGx1+AG1MRS6HifUr5IeMiYbK6ZvJunHjK3gOMEXd
3Z4OQEdGHtVuBzpsd/C+3rcZrJiwWwgtoX75wQIDAQABAoIBAAHNOrECPjeJiP1v
B+/Q8MZ/S5PzpeXaUTFIG/IBcKgVCp0XbUREOVAoiN936hae9ItJWai4S9A8CoNC
eBg0YW/iQjSsTqo3Xvm+8EdRTX5xsgt4T42STV59q0d2eU03Y4M4NX346cnXdY7U
c981Ck2vh1V2u2UGW1wfEYnaUDG/4lYb0HOISBGyNJ+mBPVWLY24pJKRalFAFcoy
b87erWkubl1UH/S9ATyn26R3Tpp2Zm/++Wo4wRpjE9W775oa98GnChK/49lXwH6F
glP5ubTBzvua89D9kPIDCyTXzxvBgpSJ5aSO3k1QO+5cPbn3YFrj8zJLkmxqUX10
BIh5glECgYEA5wKR9MC/cjFeFcQJUPaXW/RTmnZyWSjmMakuTnCdgfhwCChbaP+Y
GDVnj5dOcjUHGEIAT66k/J9KuU7j/TsPpZbCfzTdo9gVDqfsRTKwbY1d9Qh8M9JA
DeKVhS6M2IxzAId1lqTx7fzEJpFiZ1/fT51p+qXS8ChogmYdk1o44t0CgYEAtf0G
rIKRVjLNGWg2Q5Nz5EBryUAUfTaROjWIq1/ARV3jTja0lIgEoa9+EKgTlrGybW7M
3RGw82eSru3MOCaWKVh2GLfjh+JUVOaRGnuCIaXjJUQItD26HxdoIEUOt3XakE/8
uEiDOucatqmEFePZCj53yA0t9vY3VY9C6G8i6jUCgYEAhwuRl6s2P+NsRP0dFR+S
zEbAuQOVRVoLd+yXDXP4IArEM4CkL3V7zGsr511klo85Xoz28Z3/BU95t2rPDTKB
qyO+/+4/w5CGftLb5HgFe4Ww75XORd0bZQKYtgrIe69fa2fE7hPu+llRsdo71ILP
YRN86PIXph15OwHHOGT97GECgYEAjSHUcyQuobJz7CgtLOrFDVYIQOI5AYG3znSF
sKFo8mKFTLqQAEAbl2gJU9GEn3De9o7ewPJfT+QalR5FKaaC/T1lGHZDNbYHwG+u
R+NQX9fN97BzL5RPKp10WtIzP4NeJFxjmGZjnuJqjQ2ZKYCxaIhZTAMsikEXWHrp
YGgPo6ECgYBL5bFhqahHPeZ2Y5sVwiSj8ONNFgOSYr+IqdpnPNb116ljyUeH89C0
ccvdPVaYEwOx2ocuswJi/2Gp9VFDCjkAuNts4cyIfR/SOrna2NW1Nna2ettMClAY
CD+uzq+JwnEBju+lihR+nxWbaaXlxw0Elfq12iubXZ5aMAi5EzMTYQ==
-----END RSA PRIVATE KEY-----

access the newly created machine 
$ ssh -i id_rsa ubuntu@18.218.240.22

you can find 18.218.240.22 in aws and terraform.tfstate file, just search public
try 
ubuntu@ip-172-31-34-160:~$ ping 8.8.8.8
ubuntu@ip-172-31-34-160:~$ sudo -i
root@ip-172-31-34-160:~# apt-get install nginx

root@ip-172-31-34-160:~# service nginx status
root@ip-172-31-34-160:~# service nginx stauts
Usage: nginx {start|stop|restart|reload|force-reload|status|configtest|rotate|upgrade}

run the app = http://18.218.240.22/

EDIT the html and run againg
root@ip-172-31-34-160:/# cd /var/www/html/
root@ip-172-31-34-160:/var/www/html# ls
index.nginx-debian.html
root@ip-172-31-34-160:/var/www/html# echo "this is gaurave sharma" > index.nginx-debian.html
run the app again, this will show "this is gaurva sharma"= http://18.218.240.22/

root@ip-172-31-34-160:/var/www/html# exit
logout

ubuntu@ip-172-31-34-160:~$ exit
logout
Connection to 18.218.240.22 closed.
_______________________
terraform distroy 

39. Terraform Taint Command
comment all and create sequrity group
create new port - 1080
5e74

The terraform taint command manually marks a Terraform-managed resource as tainted, 
forcing it to be destroyed and recreated on the next apply.

┌──(gaurav㉿learning-ocean)-[~/terraform/youtube-course/aws-first-instance]
└─$ terraform taint aws_security_group.allow_tls


Task
- shh key -> first-key
- assign first-key to newely created instance

- create a sequrity group
- assign that group to instance

- nginx install? how to do this? aws we call AWS UserData & provisinor, azure- custum data, google - metadata
- /var/www/html/index.nginx-debian.html -> hey, Devesh new file

AWS UserData
#!/bin/bash
apt-get update
apt-get install nginx
echo "Hi Gaurav" >/var/www/html/index.nginx-debian.html


access the newly created machine 
1. $ ssh -i id_rsa ubuntu@18.221.185.75
2. ubuntu@ip-172-31-9-125:~$ sudo apt install net-tools
3. netstat -nltp # check the network statistics
4. sudo -i
5. service nginx status
6. exit exit

NOTE= AWS UserData & provisinor are not the best practice, as it don't show the error message, best practice is to use configration management tools like Ansiable, use ansiable command in echo command

  provisioner "local-exec" {
    command = "echo ${self.public_ip} > /tmp/mypublicip.txt" # copy the public IP to the /tmp/mypublicip.txt file
  }

# Type Provisioner
- file //https://ajyegireddi.blogspot.com/2023/02/terraform-provisioners-local-exec-and.html
    File Provisioner
      copy the file from remote machine to terraform server machine

      Step to upload the file
      $ ssh -i id_rsa ubuntu@18.221.185.75
      ubuntu@ip-172-31-10-145:~$ cd /tmp/
      ubuntu@ip-172-31-10-145:/tmp$ ls
          readme.md
      ubuntu-advantage
- local-exec -  used when you want to perform some tasks onto your local machine where you have installed the terraform.
  So local-exec provisioner is never used to perform any kind task on the remote machine. It will always be used to perform local operations onto your local machine.
  ```
  In the command section, we can write a bash script. In the above example, I am trying to create a hello-cloud.txt file on the local machine.

Here is the complete terraform script for the above example -
provider "aws" {
   region     = "ap-south-1"
   access_key = "xxxxxxxxxxxxxxxx"
   secret_key = "xxxxxxxxxxxxxxxxxxxxxxxx"
}

resource "aws_instance" "ec2_example" {
    ami = "ami-0767046d1677be5a0" 
    instance_type = "t2.micro"
    tags = {
        Name = "Terraform EC2"
    }
  provisioner "local-exec" {
    command = "touch hello-cloud.txt"
  }
}
  ```
- remote-exec - remote-exec it is always going to work on the remote machine. With the help of the remote-exec you can specify the commands of shell scripts that want to execute on the remote machine.
As we discussed ssh and winrm for secure data transfer in local-exec, here also all the communication and file transfer is done securely.
```
provisioner "remote-exec" {
    inline = [
      "touch hello.txt",
      "echo helloworld remote provisioner >> hello.txt",

    ]
}
```
https://learning-ocean.com/tutorials/terraform/terraform-configuration

# Specify verstion :
 create a new file named terraform.tf
terraform {
  required_version = "1.5.4"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.10.0"
    }
  }
}

syntax:
= (or no operator): exact version equality
!=: version not equal
>, >=, <, <=: version comparison, where "greater than" is a larger version number
~>: pessimistic constraint operator, constraining both the oldest and newest version allowed. For example, ~> 0.9 is equivalent to >= 0.9, < 1.0, and ~> 0.8.4, is equivalent to >= 0.8.4, < 0.9

# Terraform Graph
The terraform graph command is used to generate a visual representation of either a configuration or execution plan. The output is in the DOT format, which can be used by GraphViz to generate charts.

$ terraform graph | dot -Tsvg > graph.svg
$ terraform graph | dot -Tpdf > graph.pdf


# workspace configuration
terraform workspace --help

terraform plan 
terraform plan --var-file dev-terraform.tfvars    #    + instance_type = "t2.small"
terraform plan --var-file prod-terraform.tfvars   #    + instance_type = "t2.large"

problem terraform.tfstate get updated when we rn dev, local, or production, to fix this we need create workspace
└─$ terraform workspace list
* default

# Create 
└─$ terraform workspace new dev
* default #Created and switched to workspace "dev"!

# Show
$ terraform workspace list
  default
* dev

$ terraform apply --auto-approve --var-file dev-terraform.tfvars
create new workspace/folder in the name of dev

$  terraform workspace new prod

# Switch Workspace
─$ terraform workspace select default

# Delete Workspace
└─$ terraform workspace delete test

# Module
$ terraform plan

first time need to install modules
create folder : modules\webserver\resource.tf

# instance.tf
module "mywebserver" {
  source = "./modules/webserver"
}

$ terraform init
$ terraform plan


Revove every thing from backend
rm -rvf .terraform


#update backend 
$ aws -v
$ aws configure
https://aws.amazon.com/cli/
$ apt-get install awscli