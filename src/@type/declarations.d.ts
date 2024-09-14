// declare global {
//     interface Window {
//         dataLayer: Record<string, any>[];
//     }
// }

// type WindowWithDataLayer = Window & {
//   dataLayer: Record<string, any>[];
// };

// declare const window: WindowWithDataLayer;
interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
}