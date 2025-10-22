'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, RefreshCcw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card>
          <CardHeader className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="bg-destructive/10 rounded-full p-3">
                <AlertCircle className="text-destructive h-10 w-10" />
              </div>
            </div>
            <CardTitle className="text-2xl">Something went wrong</CardTitle>
            <CardDescription>
              An unexpected error occurred. Don&apos;t worry, it&apos;s been logged and we&apos;ll
              look into it.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {error.digest && (
              <div className="bg-muted mb-4 rounded-lg p-3">
                <p className="text-muted-foreground font-mono text-xs">Error ID: {error.digest}</p>
              </div>
            )}

            <details className="bg-muted rounded-lg p-3">
              <summary className="mb-2 cursor-pointer text-sm font-medium">
                Technical Details
              </summary>
              <pre className="text-muted-foreground overflow-x-auto text-xs break-words whitespace-pre-wrap">
                {error.message}
              </pre>
            </details>
          </CardContent>

          <CardFooter className="flex gap-2">
            <Button onClick={reset} className="flex-1" variant="primary">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button
              onClick={() => (window.location.href = '/')}
              className="flex-1"
              variant="outline"
            >
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
