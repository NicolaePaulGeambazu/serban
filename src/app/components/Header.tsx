import { Phone } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../../components/ui/button'

interface HeaderProps {
  phoneNumber?: string
}

export default function Header({ phoneNumber = "(888) 888-8888" }: HeaderProps) {
  return (
    <header className="sticky top-0  bg-red-600 z-50 w-full  border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Image 
              src="/logo.jpeg" 
              alt="Local Pest Control" 
              width={140} 
              height={40} 
              className="object-contain"
            />
          </div>
          
            <a 
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center px-4 lg:px-8 gap-2 whitespace-nowrap py-2 bg-white text-black font-semibold rounded-lg border border-white hover:bg-gray-50 transition-colors duration-200 text-sm lg:text-lg min-w-[190px] pl-2 pr-2 flex-shrink-0"
            >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  )
}