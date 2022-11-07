def container='ttt-dev'

node('dev') {
    stage('cleanup') {
        sh returnStatus: true, script: 'docker rm -f ttt-dev'
    }
    stage('deploy') {
        sh "docker run -d --rm --name=${container} -p 3001:80 ttt-frontend"
    }
}