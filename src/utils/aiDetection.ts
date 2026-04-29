import { AI_DETECTION_KEYWORDS } from './constants';

export const detectAIGeneratedContent = (text: string): {
  isAiGenerated: boolean;
  suspiciousWords: string[];
  score: number;
} => {
  if (!text) {
    return { isAiGenerated: false, suspiciousWords: [], score: 0 };
  }

  const lowerText = text.toLowerCase();
  const foundWords = AI_DETECTION_KEYWORDS.filter(word =>
    lowerText.includes(word.toLowerCase())
  );

  const score = (foundWords.length / AI_DETECTION_KEYWORDS.length) * 100;
  const isAiGenerated = score > 30;

  return {
    isAiGenerated,
    suspiciousWords: foundWords,
    score: Math.round(score),
  };
};

export const analyzeGrammar = (text: string): number => {
  const sentenceCount = (text.match(/[.!?]/g) || []).length;
  const wordCount = text.split(/\s+/).length;

  if (wordCount === 0) return 0;

  const avgSentenceLength = wordCount / sentenceCount;

  if (avgSentenceLength > 15 && avgSentenceLength < 18) {
    return 0.8;
  }

  return 0.3;
};

export const getAIDetectionReport = (
  resumeText: string
): { aiProbability: number; report: string; recommendations: string[] } => {
  const aiContent = detectAIGeneratedContent(resumeText);
  const grammarScore = analyzeGrammar(resumeText);

  const aiProbability = (aiContent.score + grammarScore * 100) / 2;

  let report = `AI Detection Analysis:\n`;
  report += `- Suspicious Words Found: ${aiContent.suspiciousWords.length}\n`;
  report += `- AI Probability Score: ${Math.round(aiProbability)}%\n`;

  const recommendations = [];

  if (aiContent.isAiGenerated) {
    recommendations.push('Consider rewriting phrases that seem corporate/generic');
    recommendations.push('Add more personal anecdotes and specific examples');
  }

  if (grammarScore > 0.7) {
    recommendations.push('Vary your sentence structure for authenticity');
  }

  return {
    aiProbability: Math.round(aiProbability),
    report,
    recommendations,
  };
};
