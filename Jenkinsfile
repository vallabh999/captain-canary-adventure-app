pipeline {
   //agent any
  agent {
     docker { image 'node:12-alpine' }
  }
 // tools {nodejs "nodejs"}

  stages {    
    stage('Cloning Git') {
      steps {
        git 'https://github.com/dewan-ahmed/simple-nodejs-app'
      }
    }        
    stage('Install dependencies') {
      steps {
        sh 'npm i -save express'
      }
    } 
    stage('Check express installation') {
      steps {
         sh "npm list 'express'"
      }
    } 
    stage('Build') {
      steps {
         sh 'node index.js'
      }
    }             
  }
}