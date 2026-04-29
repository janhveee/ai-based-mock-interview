export interface User {
  _id: string;
  email: string;
  name: string;
  resumeId?: string;
  interviews: Interview[];
  createdAt: Date;
}

export interface Resume {
  _id: string;
  userId: string;
  fileName: string;
  fileUrl: string;
  content: string;
  skills: string[];
  aiDetected: boolean;
  aiSuspiciousWords: string[];
  uploadedAt: Date;
}

export interface Interview {
  _id: string;
  userId: string;
  resumeId: string;
  questions: Question[];
  responses: Response[];
  recordingUrl?: string;
  startedAt: Date;
  completedAt?: Date;
  status: 'in-progress' | 'completed' | 'abandoned';
  overallScore?: number;
}

export interface Question {
  _id?: string;
  text: string;
  skill: string;
  difficulty: 'easy' | 'medium' | 'hard';
  expectedKeywords: string[];
}

export interface Response {
  questionId: string;
  transcribedText: string;
  duration: number;
  confidence: number;
  skillsMatched: string[];
}

export interface InterviewResult {
  interviewId: string;
  totalScore: number;
  skillScores: { skill: string; score: number }[];
  strengthAreas: string[];
  improvementAreas: string[];
  recommendations: string[];
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  image?: string;
}
