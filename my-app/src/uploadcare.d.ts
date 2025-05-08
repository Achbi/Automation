declare namespace JSX {
    interface IntrinsicElements {
      'lr-config': any;
      'lr-file-uploader-regular': any;
      'lr-upload-ctx-provider': any;
      // Add any other Uploadcare components you might use
    }
  }
  
  declare module '@uploadcare/file-uploader' {
    export function registerBlocks(blocks: any): void;
    export class UploadCtxProvider extends HTMLElement {
      addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
      removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    // Add other exports as needed
  }