import { useState, useEffect } from 'react';

type Message = { role: 'user' | 'assistant'; content: string };
type Scenario = { id: string; title: string; language: string; role: string; desc: string };

export default function ChatInterface({ 
  scenario, 
  onEndScenario 
}: { 
  scenario: Scenario; 
  onEndScenario: (messages: Message[]) => void 
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    sendMessage([], true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = async (currentMessages: Message[], isInitial = false) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: currentMessages,
          scenario: scenario.desc,
          language: scenario.language,
          role: scenario.role,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch');
      setMessages([...currentMessages, { role: 'assistant', content: data.reply }]);
    } catch (err: any) {
      setMessages([...currentMessages, { role: 'assistant', content: `⚠️ Error: ${err.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    sendMessage(newMessages);
  };

  return (
    <div className="flex flex-col h-[75vh] max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 font-space-grotesk">{scenario.title}</h2>
          <p className="text-sm font-medium text-primary mt-1">Role: {scenario.role} | Language: {scenario.language}</p>
        </div>
        <button 
          onClick={() => onEndScenario(messages)}
          className="bg-accent hover:bg-emerald-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all transform hover:-translate-y-1 shadow-md"
        >
          End & Get Feedback
        </button>
      </div>

      <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm text-[15px] leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-primary text-white rounded-br-none' 
                : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-500 p-4 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm flex space-x-2 items-center">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 flex gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Type your response in ${scenario.language}...`}
          className="flex-1 px-5 py-4 bg-gray-50 border-2 border-gray-200 text-gray-800 rounded-xl focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg disabled:opacity-50 disabled:hover:translate-y-0"
        >
          Send
        </button>
      </form>
    </div>
  );
}