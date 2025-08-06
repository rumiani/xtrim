const callbacks: Array<() => void> = [];
let observer: MutationObserver | null = null;
let lastRun = 0;
const throttleMs = 100; // Run at most every 100ms

export function bodyChangesObserver(callback: () => void, targetNode: Node = document.body) {
  if (!observer) {
    observer = new MutationObserver(() => {
      const now = Date.now();
      if (now - lastRun < throttleMs) return;
      lastRun = now;
      callbacks.forEach((cb) => cb());
    });
    observer.observe(targetNode, { childList: true, subtree: true });
  }
  
  callbacks.push(callback);
  callback();

  return observer;
}