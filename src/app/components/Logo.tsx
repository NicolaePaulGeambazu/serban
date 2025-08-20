import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-11 w-auto',
    md: 'h-17 w-auto',
    lg: 'h-22 w-auto'
  }

  return (
   
      <Image 
        src="/logo.png?v=2" 
        alt="Callhomefixer Logo" 
        width={120}
        height={100}
        className={`${sizeClasses[size]} ${className}`}
        priority
      />

  )
} 