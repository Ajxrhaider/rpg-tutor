import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

type Message = { role: 'user' | 'assistant'; content: string };
type Scenario = { language: string };

export default function FeedbackReport({ 
  messages, 
  scenario,
  onReset
}: { 
  messages: Message[]; 
  scenario: Scenario;
  onReset: () => void;
}) {
  const [report, setReport] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReview = async () => {
      // Format transcript for the prompt
      const transcript = messages
        .map((m) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
        .join('\n');

      try {
        const res = await fetch('/api/review', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ transcript, language: scenario.language }),
        });
        const data = await res.json();
        setReport(data.report);
      } catch (error) {
        console.error(error);
        setReport("Failed to generate feedback report. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReview();
  }, [messages, scenario.language]);

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 border border-gray-200 rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Feedback Report</h2>
      
      {isLoading ? (
        <div className="space-y-4 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      ) : (
        <div className="prose prose-blue max-w-none text-gray-700">
          <ReactMarkdown>{report || ''}</ReactMarkdown>
        </div>
      )}

      <button 
        onClick={onReset}
        className="mt-8 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md font-medium transition-colors w-full"
      >
        Try Another Scenario
      </button>
    </div>
  );
}