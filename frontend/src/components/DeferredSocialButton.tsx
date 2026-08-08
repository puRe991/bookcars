import React, { useEffect, useRef, useState } from 'react'

interface DeferredSocialButtonProps {
  alt: string
  icon: string
  /**
   * Renders the real provider component. `onLoginStart` must be forwarded to it
   * so this wrapper can tell when the SDK has accepted the click.
   */
  children: (onLoginStart: () => void) => React.ReactNode
}

/**
 * Delays a social login provider until the user actively chooses it.
 *
 * The provider components from reactjs-social-login inject the Facebook, Google
 * or Apple SDK as soon as they mount, which would contact those third parties
 * before the visitor has decided to use them (§ 25 TTDSG). Until then this
 * renders a plain local image button and no third-party code runs at all.
 *
 * On the first click the real component is mounted, which starts loading its
 * SDK. Because those components ignore clicks while their SDK is still loading,
 * the click is replayed on a short interval until the provider reports back
 * through `onLoginStart` - so the user's single click still opens the dialog.
 */
const DeferredSocialButton = ({ alt, icon, children }: DeferredSocialButtonProps) => {
  const [activated, setActivated] = useState(false)
  const started = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!activated) {
      return undefined
    }

    started.current = false

    const replayClick = () => {
      if (started.current) {
        return
      }
      containerRef.current?.querySelector<HTMLElement>('.social')?.click()
    }

    const interval = setInterval(replayClick, 150)
    // Give up rather than retrying forever if an SDK never loads (blocked, offline).
    const timeout = setTimeout(() => clearInterval(interval), 8000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [activated])

  if (!activated) {
    return (
      <div
        className="social"
        role="button"
        tabIndex={0}
        aria-label={alt}
        onClick={() => setActivated(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setActivated(true)
          }
        }}
      >
        <img alt={alt} src={icon} className="social" />
      </div>
    )
  }

  return (
    <div ref={containerRef}>
      {children(() => {
        started.current = true
      })}
    </div>
  )
}

export default DeferredSocialButton
