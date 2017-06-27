@Library("tada-jenkins-library") _

pipeline {
  agent any
  triggers {
    pollSCM("* * * * *")
  }
  options {
    disableConcurrentBuilds()
  }

  environment {
    PATH = "${JENKINS_HOME}/.rbenv/bin:${JENKINS_HOME}/.rbenv/shims:/usr/local/bin:/sbin:/usr/sbin:/bin:/usr/bin"
    AWS_DEFAULT_REGION = "us-west-2"
    RBENV_VERSION = "2.4.1"
  }

  stages {
    stage("rbenv-install") {
      steps {
        sh "env"
        sh 'rbenv install --skip-existing $RBENV_VERSION'
      }
    }

    stage("build") {
      steps {
        sh "bundle install"
        script {
          if(env.BRANCH_NAME == "master") {
            sh "bundle exec middleman build --clean --environment=production"
          } else {
            sh "bundle exec middleman build --clean --environment=staging"
          }
        }
      }
    }

    stage("deploy") {
      when {
        anyOf {
          branch "staging"
          branch "master"
        }
      }
      steps {
        script {
          withCredentials([[$class: "UsernamePasswordMultiBinding", credentialsId: "aws-jenkins", usernameVariable: "AWS_ACCESS_KEY_ID", passwordVariable: "AWS_SECRET_ACCESS_KEY"]]) {
            if(env.BRANCH_NAME == "staging") {
              sh "aws s3 sync ./build/ s3://devstage.nrel.gov/"
            } else if(env.BRANCH_NAME == "master") {
              sh "aws s3 sync ./build/ s3://developer.nrel.gov/"
            } else {
              error("Unknown branch for deployment")
            }
          }
        }
      }
    }
  }

  post {
    always {
      tadaSendNotifications()
    }
  }
}
