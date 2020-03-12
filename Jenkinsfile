@Library("tada-jenkins-library") _

pipeline {
  agent any
  triggers {
    pollSCM("* * * * *")
  }
  options {
    disableConcurrentBuilds()
  }
  tools {
    nodejs "6.10"
  }

  environment {
    PATH = "${JENKINS_HOME}/.rbenv/bin:${JENKINS_HOME}/.rbenv/shims:/usr/local/bin:/sbin:/usr/sbin:/bin:/usr/bin"
    AWS_DEFAULT_REGION = "us-west-2"
    RBENV_VERSION = "2.6.2"
  }

  stages {
    stage("rbenv-install") {
      steps {
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

    stage("test") {
      steps {
        sh "yarn install"
        sh "bundle exec rake lint"
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
            // Push production builds to "gh-pages" branch to maintain
            // history of deployed versions.
            if(env.BRANCH_NAME == "master") {
              sshagent(credentials: ["github-com-developer-nrel-gov"]) {
                sh "yarn run gh-pages --dist ./build/ --user 'Jenkins <jenkins-tada-ci@nrel.gov>' --repo 'git@github.com:NREL/developer.nrel.gov.git'"
              }
            }

            def dest
            if(env.BRANCH_NAME == "staging") {
              dest = "s3://devstage.nrel.gov/"
            } else if(env.BRANCH_NAME == "master") {
              dest = "s3://developer.nrel.gov/"
            } else {
              error("Unknown branch for deployment")
            }
            sh "aws s3 sync ./build/ ${dest}"

            // Sleep for a few seconds before running another sync, this time
            // with delete, to cleanup unused files (the sleep helps ensure we
            // don't delete files before new ones are uploaded on the initial
            // sync).
            sleep 5
            sh "aws s3 sync --delete ./build/ ${dest}"
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
