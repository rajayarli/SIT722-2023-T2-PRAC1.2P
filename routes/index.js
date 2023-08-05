var express = require('express');
var router = express.Router();

const nameList=[
  {
    "id": 1,
    "term": "Azure",
    "description": "Microsoft Azure, often referred to as Azure, is a cloud computing platform run by Microsoft, which offers access, management, and development of applications and services through global data centers.",
    "references": "https://en.wikipedia.org/wiki/Microsoft_Azure"
  },
  {
    "id": 2,
    "term": "DAST",
    "description": "A dynamic application security testing (DAST) is a non functional testing process where one can assess an application using certain techniques and the end result of such testing process covers security weaknesses and vulnerabilities present in an application.",
    "references": "https://en.wikipedia.org/wiki/Dynamic_application_security_testing"
  },
  {
    "id": 3,
    "term": "metadata",
    "description": "Data about data is known as meta data",
    "references": "https://www.abs.gov.au/statistics/understanding-statistics/statistical-terms-and-concepts/"
  },
  {
    "id": 4,
    "term": "ci",
    "description": "Continuous integration, which is an automation process for developers. Successful CI means new code changes to an app are regularly built, tested, and merged to a shared repository.",
    "references": "https://www.redhat.com/en/topics/devops/what-is-ci-cd#:~:text=The%20%22CI%22%20in%20CI%2F,merged%20to%20a%20shared%20repository."
  },
  {
    "id": 5,
    "term": "cd",
    "description": "CD refers to continuous delivery and/or continuous deployment, which are related concepts that sometimes get used interchangeably. Both are about automating further stages of the pipeline, but they’re sometimes used separately to illustrate just how much automation is happening.",
    "references": "https://www.redhat.com/en/topics/devops/what-is-ci-cd#:~:text=The%20%22CI%22%20in%20CI%2F,merged%20to%20a%20shared%20repository."
  },
  {
    "id": 6,
    "term": "sql injection",
    "description": "An SQL injection, sometimes abbreviated to SQLi, is a type of vulnerability in which an attacker uses a piece of SQL (structured query language) code to manipulate a database and gain access to potentially valuable information",
    "references": "https://www.kaspersky.com/resource-center/definitions/sql-injection"
  },
  {
    "id": 7,
    "term": "microservices",
    "description": "Microservices is an architectural design for building a distributed application using containers. They get their name because each function of the application operates as an independent service. This architecture allows for each service to scale or update without disrupting other services in the application.",
    "references": "https://avinetworks.com/glossary/microservice/#:~:text=Microservices%20is%20an%20architectural%20design,other%20services%20in%20the%20application."
  },
  {
    "id": 8,
    "term": "container",
    "description": "Containers are lightweight packages of your application code together with dependencies such as specific versions of programming language runtimes and libraries required to run your software services.",
    "references": "https://cloud.google.com/learn/what-are-containers#:~:text=Containers%20are%20lightweight%20packages%20of,to%20run%20your%20software%20services."
  },
  {
    "id": 9,
    "term": "version control",
    "description": "Version control, also known as source control, is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time",
    "references": "https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as,to%20source%20code%20over%20time."
  },
  {
    "id": 10,
    "term": "scrum",
    "description": "Scrum is a framework for project management that emphasizes teamwork, accountability and iterative progress toward a well-defined goal. The framework begins with a simple premise: Start with what can be seen or known. After that, track the progress and tweak, as necessary.",
    "references": "https://www.techtarget.com/searchsoftwarequality/definition/Scrum#:~:text=Scrum%20is%20a%20framework%20for,progress%20and%20tweak%2C%20as%20necessary."
  },
  {
    "id": 12,
    "term": "Container Orchestration",
    "description": "Container orchestration refers to the automated management of containerized applications, including deployment, scaling, load balancing, and networking, to ensure seamless operation.",
    "references": "https://www.ibm.com/cloud/learn/container-orchestration"
  },
  {
    "id": 13,
    "term": "DevSecOps",
    "description": "DevSecOps is an extension of DevOps that focuses on integrating security practices into the DevOps workflow, ensuring security is embedded throughout the software development lifecycle.",
    "references": "https://www.devsecops.org/"
  },
  {
    "id": 14,
    "term": "Infrastructure as Code (IaC)",
    "description": "Infrastructure as Code is a practice of managing and provisioning infrastructure using code and automation tools, allowing for consistent and repeatable infrastructure deployments.",
    "references": "https://aws.amazon.com/devops/what-is-devops/"
  },
  {
    "id": 15,
    "term": "Continuous Monitoring",
    "description": "Continuous Monitoring involves ongoing tracking and analysis of an application's performance, security, and other metrics in real-time to ensure optimal functioning.",
    "references": "https://csrc.nist.gov/glossary/term/continuous-monitoring"
  },
  {
    "id": 16,
    "term": "Immutable Infrastructure",
    "description": "Immutable Infrastructure refers to the practice of creating and deploying infrastructure components that are not modified after deployment. Any changes result in new components, enhancing reliability and consistency.",
    "references": "https://www.thoughtworks.com/radar/techniques/immutable-infrastructure"
  },
  {
    "id": 17,
    "term": "ChatOps",
    "description": "ChatOps is a collaboration model where DevOps teams use chat platforms to automate tasks, share information, and manage workflows, making operations more transparent and efficient.",
    "references": "https://github.com/exAspArk/awesome-chatops"
  },
  {
    "id": 18,
    "term": "Serverless Computing",
    "description": "Serverless computing allows developers to build and run applications without managing the underlying infrastructure. It automatically scales resources based on demand.",
    "references": "https://aws.amazon.com/serverless/"
  },
  {
    "id": 19,
    "term": "Infrastructure Monitoring",
    "description": "Infrastructure monitoring involves tracking the health and performance of various components in an IT environment, including servers, networks, and databases.",
    "references": "https://www.datadoghq.com/solutions/infrastructure-monitoring/"
  },
  {
    "id": 20,
    "term": "GitOps",
    "description": "GitOps is an approach that uses Git repositories as the single source of truth for defining and managing infrastructure and application deployments.",
    "references": "https://www.weave.works/technologies/gitops/"
  },
  {
    "id": 21,
    "term": "Continuous Deployment",
    "description": "Continuous Deployment is an extension of continuous delivery where every code change that passes automated testing is automatically deployed to production.",
    "references": "https://www.atlassian.com/continuous-delivery/continuous-deployment"
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', subtitle:'Welcome to my site, Here i am Defining some keywords from devops ',names: nameList });
});

module.exports = router;
