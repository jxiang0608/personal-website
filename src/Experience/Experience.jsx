import React from "react";
import styles from "./Experience.module.css";
import angiexLogo from "./logos/angiex.png";
import citicSecuritiesLogo from "./logos/citic_securities.png";
import deepThinkHealthLogo from "./logos/deepthink_health.png";

function Experience(){
    const experiences = [
        {
            company: "DeepThink Health",
            role: "Software Engineer Intern",
            period: "May 2024 - September 2024",
            description: [
                "Played a key role in annotating hospital bills on the Nanonets platform to improve automated data extraction.",
                "Reviewed and analyzed billing records, providing insights that optimized AI model training for more accurate data processing.",
                "Developed audit dashboards on AWS platforms to showcase partner company analytics, ensuring accuracy and functionality.",
            ],
            link: "https://www.deepthinkhealth.com/",
        },
        {
            company: "CITIC Securities",
            role: "Financial Analyst Intern",
            period: "August 2023 - August 2023",
            description: [
                "Collaborated with supervisor in client interactions, gaining insights into relationship management.",
                "Created detailed PowerPoint presentations on market trends to support strategic decisions.",
                "Contributed to market analysis, generating actionable insights as part of the team.",
            ],
            link: "http://www.cs.ecitic.com/newsite/en/",
        },
        {
            company: "Angiex",
            role: "Data Intern",
            period: "June 2021 - June 2023",
            description: [
                "Spearheaded lab equipment organization and implemented an electronic lab notebook system for inventory management.",
                "Conducted data analysis of tumor samples using Excel and R to compare datasets and evaluate drug effectiveness.",
                "Developed visually engaging PowerPoint presentations to effectively communicate progress and results during team meetings.",
            ],
            link: "https://angiex.com/",
        },
    ]

    const logoMapping = {
        "DeepThink Health": deepThinkHealthLogo,
        "CITIC Securities": citicSecuritiesLogo,
        "Angiex": angiexLogo,
    };

    return(
        <>
            <section className={styles.experienceSection}>
                <h2 className={styles.title}>Experience</h2>
                <div className={styles.experienceCards}>
                    {experiences.map((exp, index) => (
                        <a
                            key={index}
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.cardLink}
                        >
                            <div className={styles.card}>
                                <div className={styles.companyLogo}>
                                    <img
                                        src={logoMapping[exp.company]}
                                        alt={'${exp.company} logo'}
                                    />
                                </div>
                                <div className={styles.details}>
                                    <h3 className={styles.role}>{exp.role}</h3>
                                    <ul className={styles.description}>
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className={styles.period}>{exp.period}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
}
export default Experience