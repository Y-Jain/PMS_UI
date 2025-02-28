import { Button } from '@/components/ui/button';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-teal-400">
    
      <header className="text-center py-16 text-white">
        <h1 className="text-5xl font-extrabold">Welcome,Let's manage Your project</h1>
        <p className="mt-4 text-lg">We provide amazing solutions for your needs!</p>
      </header>

      
      <div className="text-center py-12">
        <Button className="px-6 py-3 bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-100">
          Get Started
        </Button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 py-16 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Feature 1</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Feature 2</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Feature 3</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      
      <footer className="text-center py-8 bg-gray-800 text-white">
        <p>&copy; 2025 My WebApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
