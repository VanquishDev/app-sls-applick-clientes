import React, { FC } from 'react'
import { useTheme } from 'next-themes'
import { useBreakPoints } from 'hooks/useBreakPoints'
import cn from 'classnames'
import { Avatar } from 'components/common'

interface FormCardProps {
  className?: string
  children?: any
  el?: HTMLElement
  title?: string
  description?: string
  buttons?: React.ReactNode
  showInModal?: boolean
  avatarKey?: string
  showAvatar?: boolean
}

const FormCard: FC<FormCardProps> = ({
  children,
  className,
  el = 'div',
  title,
  description,
  buttons,
  showInModal,
  avatarKey,
  showAvatar,
}) => {
  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any

  const { theme } = useTheme()
  const { isSm } = useBreakPoints()

  return (
    <Component
      className={cn(className, {
        'p-5': !showInModal || isSm,
      })}
    >
      <div className="md:shadow-md md:rounded-md sm:overflow-hidden">
        <div
          style={theme == 'dark' && !isSm ? { backgroundColor: '#1F2029' } : {}}
          className="p-0 md:p-5 md:bg-accent-0"
        >
          {showAvatar && (
            <div className="flex flex-start items-center gap-4">
              <Avatar avatarKey={avatarKey} size={64} />
              {title && <div className="text-2xl font-semibold">{title}</div>}
            </div>
          )}

          {!showAvatar && title && (
            <div className="text-2xl font-semibold">{title}</div>
          )}

          {description && (
            <div className="text-accent-7 text=sm">{description}</div>
          )}
          <div className={cn({ ['mt-4 mb-2']: title || description })}>
            {children}
          </div>
        </div>
        {buttons && (
          <div className="px-0 md:px-5 py-5 md:py-2 md:bg-accent-1 md:text-right">
            {buttons}
          </div>
        )}
      </div>
    </Component>
  )
}

export default FormCard
