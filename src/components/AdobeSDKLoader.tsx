import { useEffect } from 'react';

// This component will only load the Adobe SDK in the browser
const AdobeSDKLoader: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Adobe SDK script
    const script = document.createElement('script');
    script.src = 'https://assets.adobedtm.com/6d8e00a15d8e/f95a5b2e64ec/launch-4c1c95261a08-development.min.js'; // Replace with the actual Adobe SDK URL
    script.async = true;
    script.onload = () => {
      console.log('Adobe SDK loaded successfully');
      // Optionally, initialize Adobe SDK here
    };

    // Append the script to the head of the document
    document.head.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array to run only once when the component is mounted

  return null; // This component doesn't render anything
};

export default AdobeSDKLoader;
