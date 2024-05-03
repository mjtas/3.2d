pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Build the code using Maven
                sh 'mvn clean package'
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                // Run unit tests using JUnit
                sh 'mvn test'
                
                // Run integration tests using Selenium
                sh 'selenium run'
            }
        }
        stage('Code Analysis') {
            steps {
                // Integrate SonarQube for code analysis
                sh 'sonar-scanner'
            }
        }
        stage('Security Scan') {
            steps {
                // Perform security scan using OWASP ZAP
                sh 'zap-cli --start --spider <target_url>'
                sh 'zap-cli --active-scan <target_url>'
            }
        }
        stage('Deploy to Staging') {
            steps {
                // Deploy application to AWS EC2 instance
                sh 'aws deploy <staging_instance>'
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                // Run integration tests on staging environment
                sh 'selenium run --staging'
            }
        }
        stage('Deploy to Production') {
            steps {
                // Deploy application to AWS EC2 instance
                sh 'aws deploy <production_instance>'
            }
        }
    }
}
