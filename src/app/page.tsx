import { ChatInterface } from '@/components/chat-interface';

const CV_DATA = `Ishay Rosengarten
054-664-3350 | Ishay60@gmail.com | Linkedin | Languages: Hebrew, English - fluent

Summary
Motivated and skilled software engineer specializing in Shopify development. Proficient in Liquid, JavaScript, TypeScript, and CSS. Strong analytical thinker and problem solver with a proven ability to perform under pressure. Highly adaptive, and quick to learn new technologies. seeking to leverage technical skills in a stable, growth-oriented environment.

EXPERIENCE
Strongful, Active lifestyle clothing – CTO / Developer 2024 - Present
• Led the development and maintenance of the company’s Shopify-based e-commerce platform using Liquid, JavaScript, TypeScript, and CSS.
• Developed custom Shopify features and integrations, Storefront and Admin APIs.
• Defined technical strategy, ensuring high performance, security, and scalability.
• Collaborated with cross-functional teams to meet business goals and improve user experience

North Abraxas, Chef Eyal Shani – Cook 2018 - 2021
• Worked in a fast-paced, high-pressure kitchen environment.
• Developed strong teamwork, communication, and organizational skills.

Tools & skills
• JavaScript, TypeScript, React, CSS, Node.js (intermediate)
• Shopify Development: Liquid, Storefront API, Admin API
• Version Control & Tools: Git & GitHub, CI/CD, Figma, Make /Zapier Automations

Personal skills
• Strong under pressure; consistently meets tight deadlines.
• Fast learner with high adaptability to new tools and challenges.
• Effective collaborator with excellent communication

Education
B.Sc. in Computer Science
The Academic College of Tel Aviv–Yaffo | 2021 – incomplete (due to military service)

Military Service
Served in the Israel Defense Forces during Operation Protective Edge (2014). Honorably discharged with 30% disability recognition from the Ministry of Defence.`;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 font-body">
      <ChatInterface cvData={CV_DATA} />
    </main>
  );
}
