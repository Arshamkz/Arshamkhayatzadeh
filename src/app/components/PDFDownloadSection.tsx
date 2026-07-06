import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Download, FileText } from 'lucide-react';
import { PDFPreviewModal } from './PDFPreviewModal';

interface PDFDownloadSectionProps {
  pdfUrl: string;
  title?: string;
  description?: string;
}

export function PDFDownloadSection({
  pdfUrl,
  title = "Full Case Study Available",
  description = "Download the complete PDF case study with detailed visual examples, research insights, and in-depth analysis."
}: PDFDownloadSectionProps) {
  const [isPDFPreviewOpen, setIsPDFPreviewOpen] = useState(false);

  return (
    <>
      <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500 dark:bg-blue-600 flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setIsPDFPreviewOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 font-medium rounded-lg transition-colors shadow-sm border border-blue-200 dark:border-blue-800"
              >
                <Eye className="w-4 h-4" />
                Preview PDF
              </button>
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      <PDFPreviewModal
        isOpen={isPDFPreviewOpen}
        onClose={() => setIsPDFPreviewOpen(false)}
        pdfUrl={pdfUrl}
        title={title}
      />
    </>
  );
}
