
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Set the initial value
    updateSize()
    
    // Add event listener
    window.addEventListener('resize', updateSize)
    
    // Clean up
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return isMobile
}
