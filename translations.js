const translations = {
    en: {
        "experience.present": "Present",
        "experience.remote": "Remote",
        "chart.technical": "Technical Complexity",
        "chart.leadership": "Leadership Responsibility",
        "chart.cloud": "Cloud Expertise",
        "language.native": "Native",
        "language.professional": "Full Professional (C1 Level)",
        "footer.copyright": "© 2025 Micael Santana",
        "header.title": "Senior Software Engineer",
        "summary.title": "Summary",
        "summary.content": "Senior Software Engineer with over 11 years of experience in IT, specializing in Cloud Computing, Data Engineering, Cybersecurity, and Legacy Modernization. Proven expertise in Java, Microservices, Spring Boot, Apache Beam, Airflow, and GCP Dataflow, delivering high-performance distributed systems in agile and DevOps-driven environments. Adept at building scalable, secure architectures and optimizing CI/CD pipelines to improve development efficiency.",
        "skills.title": "Technical Skills",
        "skills.proficient": "Proficient",
        "skills.intermediate": "Intermediate",
        "skills.beginner": "Beginner",
        "experience.title": "Professional Experience",
        "experience.sap.desc1": "Optimized financial transaction processing and risk assessment by 75%, integrating middleware with SAP S/4HANA Finance and SAP FSCM (Financial Supply Chain Management)",
        "experience.sap.desc2": "Developed scalable APIs to enable seamless communication between SAP ERP modules and external banking systems",
        "experience.sap.desc3": "Implemented CI/CD pipelines, streamlining deployments for SAP-based applications and enhancing system reliability",
        "experience.sap.desc4": "Ensured secure and efficient operations using JBoss EAP, SSH, and Bash, improving integration with SAP's enterprise landscape",
        "experience.sap.desc5": "Monitored and optimized system performance using Dynatrace, ensuring stability and responsiveness of critical SAP financial applications",
        "experience.mercedes.desc1": "Automated deployment processes across 100+ microservices, increasing productivity by 25%",
        "experience.mercedes.desc2": "Spearheaded the migration of legacy COBOL systems to Java, reducing downtime and enhancing operational processes",
        "experience.mercedes.desc3": "Implemented robust security protocols and compliance standards (SOC2, GDPR) across microservices architecture, reducing vulnerability risks by 40%",
        "experience.mercedes.desc4": "Led a team of 5 engineers in developing cloud-native applications, improving service reliability from 99.5% to 99.9%",
        "experience.mercedes.desc5": "Collaborated with cross-functional teams to integrate automotive systems with cloud services, enhancing vehicle connectivity features",
        "experience.dataclick.desc1": "Designed and deployed a secure internal payment gateway, improving transaction success rates by 40%",
        "experience.dataclick.desc2": "Enhanced customer satisfaction, leading to the adoption of the solution by over 1,500 clients",
        "experience.dataclick.desc3": "Built and optimized robust APIs, integrating banking applications and payment systems",
        "experience.dataclick.desc4": "Optimized data pipelines with Apache Airflow, reducing data processing latency",
        "experience.ctis.desc1": "Delivered full-stack development for web-based applications, utilizing Java, JSP, and MySQL",
        "experience.ctis.desc2": "Improved user experience by implementing modern HTML and CSS standards, increasing system usability",
        "experience.ctis.desc3": "Supported the development of critical enterprise systems, ensuring high-quality code and performance",
        "education.title": "Education",
        "education.degree": "Bachelor of Computer Science",
        "education.university": "Universidade do Vale do Itajaí, Santa Catarina, Brazil",
        "education.note": "Started career in technology with strong practical experience before formalizing education while continuing to work full-time",
        "certifications.title": "Certifications",
        "languages.title": "Languages",
        "metrics.title": "Career Growth Metrics"
    },
    pt: {
        "experience.present": "Atualmente",
        "experience.remote": "Remoto",
        "chart.technical": "Complexidade Técnica",
        "chart.leadership": "Responsabilidade de Liderança",
        "chart.cloud": "Expertise em Cloud",
        "footer.copyright": "© 2025 Micael Santana",
        "header.title": "Engenheiro de Software Sênior",
        "summary.title": "Resumo",
        "summary.content": "Engenheiro de Software Sênior com mais de 11 anos de experiência em TI, especializado em Computação em Nuvem, Engenharia de Dados, Cibersegurança e Modernização de Sistemas Legados. Expertise comprovada em Java, Microsserviços, Spring Boot, Apache Beam, Airflow e GCP Dataflow, entregando sistemas distribuídos de alto desempenho em ambientes ágeis e orientados a DevOps. Capacitado em construir arquiteturas escaláveis e seguras, otimizando pipelines de CI/CD para melhorar a eficiência do desenvolvimento.",
        "skills.title": "Habilidades Técnicas",
        "skills.proficient": "Avançado",
        "skills.intermediate": "Intermediário",
        "skills.beginner": "Iniciante",
        "experience.title": "Experiência Profissional",
        "experience.sap.desc1": "Otimizei o processamento de transações financeiras e avaliação de risco em 75%, integrando middleware com SAP S/4HANA Finance e SAP FSCM (Gestão da Cadeia Financeira)",
        "experience.sap.desc2": "Desenvolvi APIs escaláveis para permitir comunicação eficiente entre módulos SAP ERP e sistemas bancários externos",
        "experience.sap.desc3": "Implementei pipelines de CI/CD, otimizando implantações para aplicações baseadas em SAP e melhorando a confiabilidade do sistema",
        "experience.sap.desc4": "Garanti operações seguras e eficientes usando JBoss EAP, SSH e Bash, melhorando a integração com o ambiente corporativo SAP",
        "experience.sap.desc5": "Monitorei e otimizei o desempenho do sistema usando Dynatrace, garantindo estabilidade e responsividade de aplicações financeiras críticas SAP",
        "experience.mercedes.desc1": "Automatizei processos de implantação em mais de 100 microsserviços, aumentando a produtividade em 25%",
        "experience.mercedes.desc2": "Liderei a migração de sistemas legados COBOL para Java, reduzindo tempo de inatividade e melhorando processos operacionais",
        "experience.mercedes.desc3": "Implementei protocolos de segurança robustos e padrões de conformidade (SOC2, GDPR) na arquitetura de microsserviços, reduzindo riscos de vulnerabilidade em 40%",
        "experience.mercedes.desc4": "Liderei uma equipe de 5 engenheiros no desenvolvimento de aplicações nativas em nuvem, melhorando a confiabilidade do serviço de 99,5% para 99,9%",
        "experience.mercedes.desc5": "Colaborei com equipes multifuncionais para integrar sistemas automotivos com serviços em nuvem, aprimorando recursos de conectividade veicular",
        "experience.dataclick.desc1": "Projetei e implantei um gateway de pagamento interno seguro, melhorando as taxas de sucesso de transações em 40%",
        "experience.dataclick.desc2": "Aumentei a satisfação do cliente, levando à adoção da solução por mais de 1.500 clientes",
        "experience.dataclick.desc3": "Construí e otimizei APIs robustas, integrando aplicações bancárias e sistemas de pagamento",
        "experience.dataclick.desc4": "Otimizei pipelines de dados com Apache Airflow, reduzindo a latência no processamento de dados",
        "experience.ctis.desc1": "Desenvolvi aplicações web full-stack utilizando Java, JSP e MySQL",
        "experience.ctis.desc2": "Melhorei a experiência do usuário implementando padrões modernos de HTML e CSS, aumentando a usabilidade do sistema",
        "experience.ctis.desc3": "Apoiei o desenvolvimento de sistemas empresariais críticos, garantindo código de alta qualidade e desempenho",
        "education.title": "Formação Acadêmica",
        "education.degree": "Bacharelado em Ciência da Computação",
        "education.university": "Universidade do Vale do Itajaí, Santa Catarina, Brasil",
        "education.note": "Iniciou a carreira em tecnologia com forte experiência prática antes de formalizar a educação, mantendo trabalho em tempo integral",
        "certifications.title": "Certificações",
        "languages.title": "Idiomas",
        "language.native": "Nativo",
        "language.professional": "Profissional Pleno (Nível C1)",
        "metrics.title": "Métricas de Crescimento Profissional"
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language.split('-')[0];
    const initialLang = ['en', 'pt'].includes(userLang) ? userLang : 'en';
    document.getElementById('languageSelector').value = initialLang;
    setLanguage(initialLang);
});
