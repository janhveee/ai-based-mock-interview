export const extractSkillsFromResume = (resumeText: string): string[] => {
  const commonSkills = [
    'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'Node.js',
    'Python', 'Java', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Ruby',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase',
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes',
    'Git', 'REST API', 'GraphQL', 'HTML', 'CSS', 'Tailwind',
    'Next.js', 'Express', 'Django', 'Flask', 'Spring',
    'Machine Learning', 'AI', 'TensorFlow', 'PyTorch',
    'HTML5', 'CSS3', 'SASS', 'Webpack', 'Babel',
    'Agile', 'Scrum', 'JIRA', 'Leadership', 'Communication',
  ];

  const foundSkills: string[] = [];

  commonSkills.forEach(skill => {
    const regex = new RegExp(`\\b${skill}\\b`, 'gi');
    if (regex.test(resumeText)) {
      foundSkills.push(skill);
    }
  });

  return [...new Set(foundSkills)];
};

export const extractExperienceLevel = (resumeText: string): 'junior' | 'mid' | 'senior' => {
  const lowerText = resumeText.toLowerCase();

  const seniorKeywords = ['10+', 'senior', 'lead', 'architect', 'principal'];
  const midKeywords = ['5-10', 'mid-level', 'senior developer'];
  const juniorKeywords = ['0-2', 'junior', 'fresher', 'graduate', 'entry'];

  let seniorScore = 0;
  let midScore = 0;
  let juniorScore = 0;

  seniorKeywords.forEach(kw => {
    if (lowerText.includes(kw)) seniorScore++;
  });
  midKeywords.forEach(kw => {
    if (lowerText.includes(kw)) midScore++;
  });
  juniorKeywords.forEach(kw => {
    if (lowerText.includes(kw)) juniorScore++;
  });

  if (seniorScore >= midScore && seniorScore >= juniorScore) return 'senior';
  if (midScore >= juniorScore) return 'mid';
  return 'junior';
};

export const generateQuestionDifficulty = (level: 'junior' | 'mid' | 'senior'): ('easy' | 'medium' | 'hard')[] => {
  switch (level) {
    case 'junior':
      return ['easy', 'easy', 'medium', 'medium', 'hard'];
    case 'mid':
      return ['easy', 'medium', 'medium', 'hard', 'hard'];
    case 'senior':
      return ['medium', 'hard', 'hard', 'hard', 'hard'];
  }
};
