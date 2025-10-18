// src/components/Presentation.tsx
import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import SectionWrapper from "./SectionWrapper";

// Konfigurasi worker
import workerSrc from "pdfjs-dist/build/pdf.worker?url";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const Presentation: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  // State untuk menyimpan lebar kontainer
  const [containerWidth, setContainerWidth] = useState<number>(0);
  // Ref untuk menunjuk ke div kontainer
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true); // State untuk loading
  const [pdfError, setPdfError] = useState<string | null>(null); // State untuk error
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setIsLoading(false); // Matikan loading setelah sukses
  }
  function onDocumentLoadError(error: Error): void {
    setPdfError(
      "Gagal memuat file PDF. Pastikan file tersedia di direktori public."
    );
    setIsLoading(false); // Matikan loading jika terjadi error
    console.error(error); // Log error ke console untuk debugging
  }
  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(
      pageNumber + 1 >= (numPages || 0) ? numPages || 0 : pageNumber + 1
    );

  // useEffect untuk mengukur lebar kontainer
  useEffect(() => {
    const element = containerRef.current; // Simpan elemen ke variabel

    // Guard clause jika elemen tidak ada
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(element);
    setIsLoading(false); // Matikan loading setelah sukses

    // Cleanup function menggunakan variabel yang sudah disimpan
    return () => {
      observer.unobserve(element);
    };
    setIsLoading(false); // Matikan loading setelah sukses
  }, []); // Dependency array tetap kosong

  return (
    <SectionWrapper id="presentation" title="Presentasi Proyek">
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto bg-secondary/50 p-2 md:p-4 rounded-lg shadow-lg min-h-[300px] flex justify-center items-center" // Tambahkan min-height
      >
        {/* Tampilkan konten berdasarkan state */}
        {isLoading && <p className="text-light">Memuat presentasi...</p>}
        {pdfError && <p className="text-red-400">{pdfError}</p>}
        {!isLoading && !pdfError && (
          <Document
            file="/presentasi.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            className="flex justify-center"
          >
            <Page pageNumber={pageNumber} width={containerWidth} />
          </Document>
        )}
      </div>
      {/* Tombol navigasi hanya ditampilkan jika PDF berhasil dimuat */}
      {!isLoading && !pdfError && (
        <div className="flex justify-center items-center mt-4 gap-4">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="bg-accent text-primary font-bold py-2 px-6 rounded-full hover:bg-opacity-80 disabled:bg-gray-500 transition-all"
          >
            Sebelumnya
          </button>
          <p className="text-light">
            Halaman {pageNumber} dari {numPages}
          </p>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= (numPages || 0)}
            className="bg-accent text-primary font-bold py-2 px-6 rounded-full hover:bg-opacity-80 disabled:bg-gray-500 transition-all"
          >
            Berikutnya
          </button>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Presentation;
