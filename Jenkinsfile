pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'my-app'
        DOCKER_TAG = 'latest'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'sudo apt install npm'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker run -d -p 3001:3001 ${DOCKER_IMAGE}:${DOCKER_TAG}'
                }
            }
        }
    }
    post {
        success {
            echo 'Build successful! Your app is ready and running in a Docker container.'
        }
        failure {
            echo 'Build failed! Check the Jenkins console output for details.'
        }
    }
}
