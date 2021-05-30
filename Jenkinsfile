node {
      env.NODEJS_HOME = "${tool 'node12' }"
      env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

      stage('Prepare') {
          checkout scm
      }

      stage('Build') {
          sh 'npm install'
      }
}