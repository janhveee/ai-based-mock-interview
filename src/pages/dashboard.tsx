import Link from 'next/link';
import { Plus, History } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link
            href="/interview/new"
            className="bg-blue-600 text-white rounded-lg p-8 hover:bg-blue-700 flex items-center gap-4"
          >
            <Plus className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">Start New Interview</h2>
              <p>Practice with a new mock interview</p>
            </div>
          </Link>

          <div className="bg-white rounded-lg p-8 shadow">
            <div className="flex items-center gap-4">
              <History className="w-8 h-8 text-gray-600" />
              <div>
                <h2 className="text-2xl font-bold">Interview History</h2>
                <p className="text-gray-600">View past interviews and feedback</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold mb-4">Recent Interviews</h2>
          <p className="text-gray-600">No interviews yet. Start your first one!</p>
        </div>
      </div>
    </div>
  );
}
