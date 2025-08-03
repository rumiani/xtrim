# XTrim - X DOM Manipulator Chrome Extension

XTrim is a Chrome extension designed to enhance your X experience by allowing you to manipulate the DOM, add and customize elements..

This extension lets you change the way X looks and works by adding custom functionality directly to the site.

---

## 🚀 Features

- **Custom DOM Manipulation**: Modify the X DOM to enhance your browsing experience.
- **Save Data**: Store custom preferences and settings in browser storage for a personalized experience.
- **React UI**: Built using React for seamless updates and interaction.
- **Works on X**: Specifically built to interact with [X](https://X.com).

---

## ⚙️ Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/rumiani/xtrim.git
   cd xtrim
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Build the extension:**
   ```bash
   npm run build
   ```

4. **Load the extension into Chrome:**
   - Go to `chrome://extensions/`
   - Enable **Developer mode** in the top right corner
   - Click on **Load unpacked**
   - Select the `dist/` directory where your extension is built

---

## 🛠 Development

If you'd like to contribute or modify the extension during development, follow these steps:

1. **Install dependencies** (if you haven't already):
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   This will start Vite's development server, and you'll be able to see live updates as you modify the code.

3. **To test the extension:**
   - Go to `chrome://extensions/`
   - Click **Reload** next to your extension (in developer mode)

---

## 🔧 Configuration

The extension is built with Vite and React, and you can modify its functionality through the following:

- `src/content.ts`: Modify the DOM and manipulate X's page elements.
- `src/popup/`: Edit UI components for your popup, if you have any.

---

## 📝 Manifest

The extension uses Manifest V3 and supports service workers, as well as injecting content scripts to manipulate X's page.


## 💾 Data Storage

You can save custom preferences and settings in:

- **chrome.storage.local**: For persistent, long-term storage across sessions.

**Example:**

```javascript
// Saving to chrome.storage.local
chrome.storage.local.set({ data: exampleData })

// Retrieving from chrome.storage.local
chrome.storage.local.get(['data'])
```

---

## 🧑‍💻 Contributing

1. Fork this repository.
2. Create a branch for your feature or bug fix.
3. Make changes and test thoroughly.
4. Submit a pull request.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Built With

- React
- Vite
- Chrome Extensions API
- Tailwind CSS (Optional, for styling)
