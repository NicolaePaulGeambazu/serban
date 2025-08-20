import Quiz from '../components/Quiz';
import Header from '../components/Header'

export default function QuizPage() {
  const phoneNumber = "(888) 888-8888"
  return (
    <div className="min-h-screen bg-white">
      <Header phoneNumber={phoneNumber} />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Quiz />
        </div>
      </main>
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Local Pest Control</h3>
              <p className="text-gray-300">
                Professional pest control services for residential properties.
              </p>
            </div>
            <div />
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>Phone: {phoneNumber}</p>
                <p>Free Inspection</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Local Pest Control. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 