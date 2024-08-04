# LEARN.md

## Introduction

This guide provides step-by-step instructions to replicate the Google Translate integration in a React project, as demonstrated in this repository.

## Prerequisites

-   Node.js and npm installed
-   Basic understanding of React
-   A React project setup (e.g., using Create React App or Next.js)

## Step-by-Step Guide

### Step 1: Setup Your React Project

If you don't have a React project setup yet, you can create one using Create React App or Next.js.

#### Using Create React App

```bash
npx create-react-app google-translate-switcher
cd google-translate-switcher
```

#### Using Next.js

```bash
npx create-next-app google-translate-switcher
cd google-translate-switcher
```

### Step 2: Install Dependencies

Ensure you have the necessary dependencies installed. For this example, we will be using `@phosphor-icons/react` for the globe icon.

```bash
npm install @phosphor-icons/react
```

### Step 3: Create the GoogleTranslator Component

Create a new file for the `GoogleTranslator` component.

```javascript
// src/components/GoogleTranslator.js
"use client";

import { useEffect } from "react";

// src/components/GoogleTranslator.js

// src/components/GoogleTranslator.js

// src/components/GoogleTranslator.js

// src/components/GoogleTranslator.js

// src/components/GoogleTranslator.js

// src/components/GoogleTranslator.js

// ?Fixed : ?Docs related to massive bug : https://stackoverflow.com/questions/50298201/react-js-google-translate-not-working
// ?Fixed : The duplication or multiplication of the language bars is as a result of document.body.appendChild(script) being called every time the page loads/renders.
const GoogleTranslator = ({ show }) => {
    useEffect(() => {
        if (show) {
            // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
            if (!window.googleTranslateElementInit) {
                // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
                window.googleTranslateElementInit = () => {
                    // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: "en",
                            layout: window.google.translate.TranslateElement
                                .InlineLayout.SIMPLE,
                        },
                        "google_translate_element",
                    );
                };
            }

            if (
                !document.querySelector(
                    'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]',
                )
            ) {
                const script = document.createElement("script");
                script.type = "text/javascript";
                script.src =
                    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
                document.head.appendChild(script);
            }

            if (!document.querySelector("style[data-google-translate-style]")) {
                const style = document.createElement("style");
                style.setAttribute("data-google-translate-style", "true");
                style.innerHTML = `
                    .goog-te-gadget-simple { background-color: #f9f9f9; border: 1px solid #ddd; padding: 10px; border-radius: 4px; font-size: 14px; font-family: Arial, sans-serif; }
                    .goog-te-gadget-simple img { display: none; }
                    .goog-te-gadget-simple a { text-decoration: none; color: #4285f4; }
                    .goog-te-gadget-simple a:hover { text-decoration: underline; }
                    .goog-te-gadget-simple select { border: none; background: transparent; color: #4285f4; font-size: 14px; }
                `;
                document.head.appendChild(style);
            }
        }
    }, [show]);

    return show ? (
        <div id="google_translate_element" className="mt-4"></div>
    ) : null;
};

export default GoogleTranslator;
```

### Step 4: Create the LanguageSwitcher Component

Create a new file for the `LanguageSwitcher` component.

```javascript
// src/components/LanguageSwitcher.js
import React, { useState } from "react";

import { Globe } from "@phosphor-icons/react";

import { Button } from "./Button";
import GoogleTranslator from "./GoogleTranslator";

// Assume you have a Button component

const LanguageSwitcher = ({ className }) => {
    const [showTranslate, setShowTranslate] = useState(false);

    return (
        <div
            className={`relative flex flex-col items-center justify-center space-x-2 hover:bg-inherit md:flex-row ${className}`}
        >
            <Button
                className="flex text-sm text-blue-500 hover:bg-none hover:text-blue-500"
                variant="ghost"
                disabled={showTranslate}
                onClick={() => setShowTranslate(true)}
                type="button"
            >
                <Globe className="mx-1 h-6 w-6" color="#4689F6" />
                Change Language
            </Button>
            <GoogleTranslator show={showTranslate} />
        </div>
    );
};

export default LanguageSwitcher;
```

### Step 5: Use the Components in Your Application

Now, use the `LanguageSwitcher` component in your main application file.

```javascript
// src/App.js (for Create React App) or pages/index.js (for Next.js)
import React from "react";

import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Google Translate Language Switcher</h1>
                <LanguageSwitcher className="mt-4" />
            </header>
        </div>
    );
}

export default App;
```

### Step 6: Run Your Application

Start your application to see the Google Translate Language Switcher in action.

#### For Create React App

```bash
npm start
```

#### For Next.js

```bash
npm run dev
```

## Conclusion

By following these steps, you have successfully integrated Google Translate into your React application, allowing users to switch languages easily. You can further customize the components and styles to fit your needs.

For more advanced i18n features, consider using established libraries like `react-i18next` or `next-translate`.

## Troubleshooting

-   Ensure that the Google Translate script is loaded only once to avoid duplication issues.
-   Customize the styles as needed to match your application's design.

Happy coding!
