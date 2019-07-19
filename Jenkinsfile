pipeline {
    agent any
    stages {
        stage('Get NodeJS') { 
            steps {
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash' 
                sh 'nvm install 10'
            }
        }
        stage('Install NodeJs') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}