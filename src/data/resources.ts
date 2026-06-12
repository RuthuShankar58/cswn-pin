export interface Resource {
  id: string;
  title: string;
  description: string;
  url?: string;
  category: string;
  icon?: string;
}

export const resourceCategories = [
  {
    id: "resume",
    title: "Resume Resources",
    description: "Build a standout resume that gets noticed by top tech companies.",
    icon: "📄",
    resources: [
      { title: "Harvard Resume Template", description: "Clean, professional template widely used in tech", url: "#" },
      { title: "Action Verb List", description: "Power words to strengthen your resume bullets", url: "#" },
      { title: "Technical Resume Guide", description: "How to showcase projects and technical skills", url: "#" },
      { title: "CSWN Resume Review Sign-up", description: "Get personalized feedback from HR professionals", url: "#" },
    ],
  },
  {
    id: "interview",
    title: "Interview Preparation",
    description: "Prepare for technical and behavioral interviews with confidence.",
    icon: "💬",
    resources: [
      { title: "LeetCode", description: "Practice coding problems for technical interviews", url: "https://leetcode.com" },
      { title: "Pramp", description: "Free peer-to-peer mock interviews", url: "https://www.pramp.com" },
      { title: "STAR Method Guide", description: "Framework for behavioral interview answers", url: "#" },
      { title: "System Design Primer", description: "Learn system design for senior-level interviews", url: "https://github.com/donnemartin/system-design-primer" },
    ],
  },
  {
    id: "internships",
    title: "Internship Guides",
    description: "Find and land your dream internship in technology.",
    icon: "🏢",
    resources: [
      { title: "Handshake", description: "Purdue's career platform for job and internship postings", url: "https://purdue.joinhandshake.com" },
      { title: "GitHub Internship List", description: "Crowdsourced list of tech internships updated yearly", url: "https://github.com/pittcsc/Summer2025-Internships" },
      { title: "Internship Timeline", description: "When to apply for summer internships at top companies", url: "#" },
      { title: "Cover Letter Template", description: "Professional cover letter framework for tech roles", url: "#" },
    ],
  },
  {
    id: "scholarships",
    title: "Scholarship Opportunities",
    description: "Financial support for women pursuing computing degrees.",
    icon: "🎓",
    resources: [
      { title: "Grace Hopper Celebration Scholarship", description: "Attend the world's largest gathering of women technologists", url: "https://ghc.anitab.org" },
      { title: "Society of Women Engineers Scholarships", description: "Multiple scholarships for women in engineering", url: "https://swe.org/scholarships" },
      { title: "Google Women Techmakers", description: "Community and scholarship program for women in tech", url: "https://www.womentechmakers.com" },
      { title: "Purdue CS Department Scholarships", description: "Department-specific awards and fellowships", url: "#" },
    ],
  },
  {
    id: "organizations",
    title: "Women in Tech Organizations",
    description: "Connect with the broader women in technology community.",
    icon: "🌐",
    resources: [
      { title: "AnitaB.org", description: "Global organization for women in technology", url: "https://anitab.org" },
      { title: "Women Who Code", description: "Professional community empowering women in tech", url: "https://www.womenwhocode.com" },
      { title: "Girls Who Code", description: "Nonprofit working to close the gender gap in tech", url: "https://girlswhocode.com" },
      { title: "National Center for Women & IT", description: "Research and programs for women in computing", url: "https://ncwit.org" },
    ],
  },
  {
    id: "career",
    title: "Career Development",
    description: "Resources for professional growth and career advancement.",
    icon: "📈",
    resources: [
      { title: "LinkedIn Learning", description: "Professional development courses (free with Purdue)", url: "https://www.linkedin.com/learning" },
      { title: "Purdue Career Center", description: "On-campus career coaching and resources", url: "#" },
      { title: "Negotiation Toolkit", description: "Salary negotiation strategies for women in tech", url: "#" },
      { title: "Personal Branding Guide", description: "Build your professional presence online", url: "#" },
    ],
  },
  {
    id: "technical",
    title: "Technical Learning",
    description: "Level up your technical skills with free and discounted resources.",
    icon: "💻",
    resources: [
      { title: "freeCodeCamp", description: "Free coding curriculum covering web development and more", url: "https://www.freecodecamp.org" },
      { title: "GitHub Student Pack", description: "Free developer tools and services for students", url: "https://education.github.com/pack" },
      { title: "AWS Educate", description: "Cloud computing learning resources and credits", url: "https://aws.amazon.com/education/awseducate" },
      { title: "Kaggle", description: "Data science and machine learning competitions and courses", url: "https://www.kaggle.com" },
    ],
  },
];
