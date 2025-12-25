import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-[--container-max-width] mx-auto px-6 lg:px-8 py-24 md:py-32 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-6">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="text-xl text-[--color-text-secondary] mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[--color-accent] text-white rounded-lg hover:bg-[--color-accent-hover] transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[--color-surface] border border-[--color-border] rounded-lg hover:border-[--color-accent] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
