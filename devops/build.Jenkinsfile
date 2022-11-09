def version="0.1.${BUILD_NUMBER}"

node('build') {
    stage('checkout') {
        git branch: 'main', credentialsId: '4310d2dd-1c64-4700-b73b-6aee153b4215', url: 'https://github.com/petrovanster/itdays2022.git'
    }

    stage('build') {
        dir('./frontend') {
            sh "docker build --target build-t ttt-frontend-build:${version} --build-arg VERSION=${version} -f ../devops/frontend.Dockerfile ./"
            sh "docker build -t ttt-frontend:latest -t ttt-frontend:${version} --build-arg VERSION=${version} -f ../devops/frontend.Dockerfile ./"
        }
    }

    stage('tests') {
        sh "docker run --rm ttt-frontend-build:${version} npm run test-ci"
    }
}