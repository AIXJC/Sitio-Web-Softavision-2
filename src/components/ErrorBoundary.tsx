import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: string | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(_error: Error): State {
    return { hasError: true, error: _error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ errorInfo: errorInfo.componentStack ?? null });
    console.error('[ErrorBoundary] Error capturado:', error, errorInfo);
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
          <div className="rounded-2xl border border-white/10 bg-ink-800 p-10 max-w-md">
            <h2 className="text-2xl font-bold text-white mb-2">⚠️ Algo salió mal</h2>
            <p className="text-white/60 mb-6">
              {this.state.error?.message ?? 'Error desconocido'}
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null, errorInfo: null });
                window.location.reload();
              }}
              className="btn-primary"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  Fallback?: React.ComponentType<{ error: Error | null; reset: () => void }>
) {
  return function ErrorBoundaryWrapper(props: P) {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    if (hasError && Fallback) {
      const reset = () => {
        setHasError(false);
        setError(null);
      };
      return <Fallback error={error} reset={reset} />;
    }

    return (
      <ErrorBoundary fallback={
        <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
          <div className="rounded-2xl border border-white/10 bg-ink-800 p-10 max-w-md">
            <h2 className="text-2xl font-bold text-white mb-2">⚠️ Algo salió mal</h2>
            <p className="text-white/60 mb-6">Ocurrió un error inesperado.</p>
            <button
              onClick={() => {
                setHasError(false);
                setError(null);
              }}
              className="btn-primary"
            >
              Recargar página
            </button>
          </div>
        </div>
      }>
        {hasError ? null : <Component {...props} />}
      </ErrorBoundary>
    );
  };
}