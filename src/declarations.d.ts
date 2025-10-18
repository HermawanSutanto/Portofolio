// src/declarations.d.ts

// Untuk import CSS side effect
declare module "react-pdf/dist/Page/AnnotationLayer.css";
declare module "react-pdf/dist/Page/TextLayer.css";

// Untuk import worker dengan ?url
declare module "pdfjs-dist/build/pdf.worker?url" {
  const workerSrc: string;
  export default workerSrc;
}
