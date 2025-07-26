import { useEffect } from 'react'

export const useStorageListener = () => {
    useEffect(() => {
        console.log('Storage listener hook initialized')

        const handleStorageChange = (changes: any, namespace: string) => {
            console.log('Storage changed!', { changes, namespace })

            if (namespace === 'local' && changes.counter) {
                const newValue = changes.counter.newValue
                document.title = `X.com - Counter: ${newValue}`
                showCounterNotification(newValue)
            }
        }

        const loadInitialCounter = async () => {
            try {
                const result = await chrome.storage.local.get(['counter'])
                if (result.counter !== undefined) {
                    document.title = `X.com - Counter: ${result.counter}`
                    document.body.style.backgroundColor = 'green'
                }
            } catch (error) {
                console.error('Error loading initial counter:', error)
            }
        }

        const showCounterNotification = (count: number) => {
            const existing = document.getElementById('counter-notification')
            if (existing) existing.remove()

            const notification = document.createElement('div')
            notification.id = 'counter-notification'
            notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        z-index: 9999;
      `
            notification.textContent = `Counter: ${count}`
            document.body.appendChild(notification)

            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove()
                }
            }, 30000)
        }

        // Add listener
        chrome.storage.onChanged.addListener(handleStorageChange)

        // Load initial data
        loadInitialCounter()

        // Cleanup
        return () => {
            chrome.storage.onChanged.removeListener(handleStorageChange)
        }
    }, [])
}