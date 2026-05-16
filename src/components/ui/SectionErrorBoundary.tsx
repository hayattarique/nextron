'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Per-section error boundary.
 * Prevents a single component throw from blanking the full page.
 * Wraps individual page sections in page.tsx.
 */
export class SectionErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="section-padding text-center text-gray-400">
            This section is temporarily unavailable.
          </div>
        )
      );
    }
    return this.props.children;
  }
}
