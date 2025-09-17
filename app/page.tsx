'use client';

// 🎯 PORTFOLIO PAGE USING ACTUAL PORTFOLIOLAYOUT SYSTEM
// This ensures 100% visual parity with the SaaS version
import PortfolioLayout from '@/components/PortfolioLayout'

// User data embedded at build time (no server-side dependencies)
// NOTE: File URLs include GitHub Pages basePath (e.g., /repo-name/user-files/...)
const userData = {
  "userInfo": {
    "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
    "full_name": "Jane Doe",
    "title": "Software Engineer",
    "email": "jane.doe@email.com",
    "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, and cloud DevOps tools.",
    "location": "San Francisco, CA",
    "avatarUrl": null,
    "cvUrl": "/p67/user-files/2547cc8f-d92f-4bf6-b05b-e06fce348363/cv.pdf",
    "custom_links": [
      {
        "id": "1",
        "url": "https://linkedin.com/in/janedoe",
        "icon": "linkedin",
        "title": "LinkedIn"
      },
      {
        "id": "2",
        "url": "https://github.com/janedoe",
        "icon": "github",
        "title": "GitHub"
      }
    ],
    "published_data": null
  },
  "educations": [
    {
      "id": "a19b5c5f-29c8-48be-924d-eb2ae282ad78",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "degree": "Bachelor of Computer Science",
      "university": "University of California, Berkeley",
      "start_year": "2015",
      "end_year": "2019",
      "description": "Relevant Coursework:\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
      "logoUrl": null,
      "order_index": 0,
      "custom_links": [],
      "location": "Berkeley, CA",
      "published_data": null
    }
  ],
  "experiences": [
    {
      "id": "0ea98c97-f983-4815-87ed-c5a1d349dc08",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "company": "TechWave Solutions",
      "position": "Software Engineer",
      "start_date": "Jan 2021",
      "end_date": "Present",
      "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
      "logoUrl": null,
      "order_index": 0,
      "custom_links": [],
      "location": "San Francisco, CA",
      "published_data": null
    },
    {
      "id": "54181fa6-67b8-4ba3-a941-0b58f5bf419e",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "company": "BrightApps Inc.",
      "position": "Junior Software Engineer",
      "start_date": "Jun 2019",
      "end_date": "Dec 2020",
      "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
      "logoUrl": null,
      "order_index": 1,
      "custom_links": [],
      "location": "San Jose, CA",
      "published_data": null
    }
  ],
  "projects": [
    {
      "id": "a655ea48-400c-4a09-81d0-c0151f9b50fe",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "name": "Portfolio Builder Web App",
      "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\n- Implemented user authentication, template themes, and image upload features.\n- Deployed application on Vercel with continuous integration.",
      "picUrl": null,
      "order_index": 0,
      "technology_names": [
        "Next.js",
        "Supabase",
        "Vercel"
      ],
      "technology_details": [],
      "custom_links": [],
      "published_data": null,
      "technologyNames": [
        "Next.js",
        "Supabase",
        "Vercel"
      ],
      "technologyDetails": []
    },
    {
      "id": "9d58c707-1f68-4911-96a7-ddf6476d5795",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "name": "Movie Recommendation System",
      "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\n- Deployed the model as a Flask API and integrated it into a React front end.\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
      "picUrl": null,
      "order_index": 1,
      "technology_names": [
        "Python",
        "scikit-learn",
        "Flask",
        "React"
      ],
      "technology_details": [],
      "custom_links": [],
      "published_data": null,
      "technologyNames": [
        "Python",
        "scikit-learn",
        "Flask",
        "React"
      ],
      "technologyDetails": []
    },
    {
      "id": "ed4ab969-5097-4626-9687-7aaf7dc9e6eb",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "name": "Task Manager Mobile App",
      "description": "- Created a cross-platform mobile app using React Native for task tracking.\n- Integrated push notifications and offline storage using SQLite.\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
      "picUrl": null,
      "order_index": 2,
      "technology_names": [
        "React Native",
        "SQLite"
      ],
      "technology_details": [],
      "custom_links": [],
      "published_data": null,
      "technologyNames": [
        "React Native",
        "SQLite"
      ],
      "technologyDetails": []
    }
  ],
  "userTechnologies": [
    {
      "id": "64ef5424-2768-460d-9160-8c25f8a7278e",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Java",
      "technology_name": "Java",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 0,
      "created_at": "2025-09-17T22:52:39.685+00:00",
      "updated_at": "2025-09-17T22:52:39.685+00:00"
    },
    {
      "id": "7893f833-f2bc-41f4-9fa9-e1775964ef34",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Python",
      "technology_name": "Python",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 1,
      "created_at": "2025-09-17T22:52:39.685+00:00",
      "updated_at": "2025-09-17T22:52:39.685+00:00"
    },
    {
      "id": "3bb095ad-be92-4cd2-b209-d47f41d20fd2",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "JavaScript",
      "technology_name": "JavaScript",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 2,
      "created_at": "2025-09-17T22:52:39.685+00:00",
      "updated_at": "2025-09-17T22:52:39.685+00:00"
    },
    {
      "id": "a6c680b9-5a20-4242-a304-7433870e0129",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "React",
      "technology_name": "React",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 3,
      "created_at": "2025-09-17T22:52:39.685+00:00",
      "updated_at": "2025-09-17T22:52:39.685+00:00"
    },
    {
      "id": "13db2293-6221-48d9-b837-7c252d7f4549",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Node.js",
      "technology_name": "Node.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 4,
      "created_at": "2025-09-17T22:52:39.685+00:00",
      "updated_at": "2025-09-17T22:52:39.685+00:00"
    },
    {
      "id": "4bed9650-7469-46e5-ab2c-cbbb40687f6e",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "TypeScript",
      "technology_name": "TypeScript",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 5,
      "created_at": "2025-09-17T22:52:39.685+00:00",
      "updated_at": "2025-09-17T22:52:39.685+00:00"
    },
    {
      "id": "f8bce676-a3f5-4152-a734-30d474fa77bb",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "C++",
      "technology_name": "C++",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 6,
      "created_at": "2025-09-17T22:52:39.685+00:00",
      "updated_at": "2025-09-17T22:52:39.685+00:00"
    },
    {
      "id": "37048315-fea3-4a16-b111-d02e30f2ad06",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Next.js",
      "technology_name": "Next.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 7,
      "created_at": "2025-09-17T22:52:39.685+00:00",
      "updated_at": "2025-09-17T22:52:39.685+00:00"
    },
    {
      "id": "60f20247-e1e7-4cfb-a7a9-5f2837ec48c7",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Spring Boot",
      "technology_name": "Spring Boot",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 8,
      "created_at": "2025-09-17T22:52:39.685+00:00",
      "updated_at": "2025-09-17T22:52:39.685+00:00"
    },
    {
      "id": "04f80883-856c-4b20-bc98-8f93e7a9d0e1",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Express.js",
      "technology_name": "Express.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 9,
      "created_at": "2025-09-17T22:52:39.685+00:00",
      "updated_at": "2025-09-17T22:52:39.685+00:00"
    },
    {
      "id": "4228c7b2-d51e-4d27-a386-83a227712c63",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Django",
      "technology_name": "Django",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 10,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "997eb252-b085-4468-b34c-f16afefbc665",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "PostgreSQL",
      "technology_name": "PostgreSQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 11,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "e5d09804-0f27-445e-a7d5-9b6ef1d9da64",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "MongoDB",
      "technology_name": "MongoDB",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 12,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "b35d3b88-6a34-4c60-8340-cb1f1bf2956c",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "MySQL",
      "technology_name": "MySQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 13,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "012df9d4-844d-49b7-a320-a7081af9854c",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Redis",
      "technology_name": "Redis",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 14,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "706e4876-d098-464a-bcf1-b4ce155132b8",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "AWS",
      "technology_name": "AWS",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 15,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "6b431e41-3b64-4f94-b502-5e85f1cc59dc",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Docker",
      "technology_name": "Docker",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 16,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "2724363f-46d6-4e67-b0bc-5d7b27b5cad2",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Kubernetes",
      "technology_name": "Kubernetes",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 17,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "f4ac19e7-2722-46a8-9039-afb7edecbee1",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Git",
      "technology_name": "Git",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 18,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "40830a4a-4059-449d-9deb-9f419e545337",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Jenkins",
      "technology_name": "Jenkins",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 19,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "17b6fbe1-6a2a-454a-81e0-42a345c76802",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "CI/CD pipelines",
      "technology_name": "CI/CD pipelines",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 20,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "9cc02b78-2286-4844-a9c0-54c800e0a776",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "REST APIs",
      "technology_name": "REST APIs",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 21,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "4f831535-141e-4465-b08b-70a7ea08b268",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "GraphQL",
      "technology_name": "GraphQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 22,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "1dc416d3-4251-48ea-b49a-95fc7759c31b",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Unit Testing",
      "technology_name": "Unit Testing",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 23,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "024cbcc3-8260-4512-8d2b-11ce602b03cd",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Agile/Scrum",
      "technology_name": "Agile/Scrum",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 24,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "cb42c85d-e32d-496e-81a9-ea28d22066fe",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Test-Driven Development (TDD)",
      "technology_name": "Test-Driven Development (TDD)",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 25,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "8d08b31a-cad6-49b9-a8c3-756d35f95d43",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "GitHub Actions",
      "technology_name": "GitHub Actions",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 26,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "227453f2-c85e-4800-8fbe-f05e5ebef076",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Supabase",
      "technology_name": "Supabase",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 27,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "9cf81d8a-4de1-457a-b8a0-56adde00df1a",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Vercel",
      "technology_name": "Vercel",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 28,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "a509ad46-031d-4696-bc98-2bd3cec102c6",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "scikit-learn",
      "technology_name": "scikit-learn",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 29,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "c23c712e-eef9-4ee2-810b-5fa509849f89",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "Flask",
      "technology_name": "Flask",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 30,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "4d000ab1-1de6-49b5-8347-2e75761b97c2",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "React Native",
      "technology_name": "React Native",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 31,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    },
    {
      "id": "04d9d025-aa6d-41c6-baba-2e772330b9af",
      "user_id": "2547cc8f-d92f-4bf6-b05b-e06fce348363",
      "display_name": "SQLite",
      "technology_name": "SQLite",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 32,
      "created_at": "2025-09-17T22:52:39.686+00:00",
      "updated_at": "2025-09-17T22:52:39.686+00:00"
    }
  ],
  "customSections": [],
  "sectionOrder": null
}

// Component layout preferences
const portfolioConfig = {
  "user_info_layout_type": "userInfo1",
  "projects_layout_type": "projects1",
  "skills_layout_type": "skills1",
  "education_layout_type": "card",
  "work_layout_type": "card",
  "github_repo_name": "p67",
  "github_username": "Greg057",
  "github_repo_url": "https://github.com/Greg057/p67"
}

export default function Portfolio() {
  return (
    <PortfolioLayout
      personalInfo={userData.userInfo}
      educations={userData.educations || []}
      experiences={userData.experiences || []}
      projects={userData.projects || []}
      userTechnologies={userData.userTechnologies || []}
      customSections={userData.customSections || []}
      userInfoLayoutType={portfolioConfig?.user_info_layout_type || 'userInfo1'}
      projectsLayoutType={portfolioConfig?.projects_layout_type || 'projects1'}
      skillsLayoutType={portfolioConfig?.skills_layout_type || 'skills1'}
      educationLayoutType={portfolioConfig?.education_layout_type || 'card'}
      workLayoutType={portfolioConfig?.work_layout_type || 'card'}
      sectionOrder={userData.sectionOrder || undefined}
    />
  )
}