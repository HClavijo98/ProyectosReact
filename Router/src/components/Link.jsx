import { EVENTS } from '../consts'

function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ resetScroll, target, to, ...props }) {
  function handleClick (event) {
    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
      window.scrollTo(0, 0)
    }
  }
  return (
    <a href={to} target={target} onClick={handleClick} {...props} />
  )
}
