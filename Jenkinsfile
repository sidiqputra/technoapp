node {
      env.NODEJS_HOME = "${tool 'node12' }"
      env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

      stage('Prepare') {
          checkout scm
      }

      stage('Build') {
          sh 'npm install'
      }

      stage('Deploy') {
        withCredentials([usernamePassword(credentialsId: 'heroku-credential', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
            sh 'git push https://${GIT_USERNAME}:${GIT_PASSWORD}@git.heroku.com/mytechno-app.git HEAD:refs/remotes/origin/main'
        }
      }
}