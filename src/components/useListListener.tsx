import { useEffect } from 'react'
import { translatePostHandler } from './hideFunctions/translatePostHandler/translatePost'


export const useListListener = () => {
    useEffect(() => {
        console.log('Storage listener hook initialized')
        let color = false
        const handleStorageChange = (changes: any, namespace: string) => {
            console.log('Storage changed!', { changes, namespace })
            if (namespace === 'local' && changes.list) {
                document.body.style.backgroundColor = color? 'blue' : 'red'
                translatePostHandler()
                color = !color
            }
        }

        const loadInitialList = async () => {
            try {
                const result = await chrome.storage.local.get(['list'])
                if (result.list !== undefined) {
                    document.body.style.backgroundColor = 'blue'
                }
            } catch (error) {
                console.error('Error loading initial list:', error)
            }
        }

        // Add listener
        chrome.storage.onChanged.addListener(handleStorageChange)
        // Load initial data
        loadInitialList()
        // Cleanup
        return () => {
            chrome.storage.onChanged.removeListener(handleStorageChange)
        }
    }, [])
}