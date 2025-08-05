'use client'
import dynamic from 'next/dynamic'

const QuizClientWrapper = dynamic(() => import('./QuizClientWrapper'), { ssr: false })

export default function QuizClientDynamicWrapper(props: any) {
  return <QuizClientWrapper {...props} />
} 