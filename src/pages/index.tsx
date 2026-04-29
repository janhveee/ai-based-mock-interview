import Link from 'next/link';
import { Zap, Camera, FileText, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">AI Based Mock Interview</h1>
          <div className="flex gap-4">
            <Link href="/auth/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            AI Based Mock Interviews
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Practice interviews with AI and get real-time feedback to improve your skills
          </p>
          <Link
            href="/auth/signup"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 inline-block"
          >
            Get Started Free
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Camera className="w-8 h-8" />}
            title="Real-time Detection"
            description="Multi-person detection ensures fair interviews"
          />
          <FeatureCard
            icon={<FileText className="w-8 h-8" />}
            title="Resume Analysis"
            description="Smart resume parsing and AI content detection"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Smart Questions"
            description="AI-generated questions based on your skills"
          />
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="Detailed Feedback"
            description="Get insights on strengths and improvement areas"
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition">
      <div className="text-blue-600 mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
