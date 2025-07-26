import React, { useState, useEffect } from 'react'

const SimpleCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    loadCountFromStorage()
  }, [])

  const loadCountFromStorage = async () => {
    try {
      const result = await chrome.storage.local.get(['counter'])
      if (result.counter !== undefined) setCount(result.counter)
    } catch (error) {
      console.error('Error loading from storage:', error)
    }
  }

  // 💾 SAVE to Chrome Storage
  const saveCountToStorage = async (newCount: number) => {
    try {
      await chrome.storage.local.set({ counter: newCount })
    } catch (error) {
      console.error('Error saving to storage:', error)
    }
  }

  const increment = async () => {
    const newCount = count + 1
    setCount(newCount)
    await saveCountToStorage(newCount)
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '48px', margin: '20px 0' }}>
        {count}
      </div>
      <button onClick={increment} style={{ margin: '0 5px', padding: '10px 20px' }}>
        +1
      </button>
    </div>
  )
}

export default SimpleCounter