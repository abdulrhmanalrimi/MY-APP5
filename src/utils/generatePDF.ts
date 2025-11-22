import { jsPDF } from 'jspdf';
import type { Lesson } from '@shared/const';

// Load Arabic font (Amiri) - you'll need to add this font to the project
// For now, we'll use a simple approach with Unicode support

export const generateLessonPDF = (lesson: Lesson) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // Set RTL direction
  doc.setR2L(true);

  // Title
  doc.setFontSize(20);
  doc.text(lesson.title, 105, 20, { align: 'center' });

  // Category
  doc.setFontSize(12);
  doc.text(`التصنيف: ${lesson.category}`, 105, 30, { align: 'center' });

  // Content
  doc.setFontSize(14);
  const contentLines = doc.splitTextToSize(lesson.content, 170);
  let yPosition = 45;

  contentLines.forEach((line: string) => {
    if (yPosition > 270) {
      doc.addPage();
      yPosition = 20;
    }
    doc.text(line, 105, yPosition, { align: 'right', maxWidth: 170 });
    yPosition += 7;
  });

  // Add footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.text(
      `صفحة ${i} من ${pageCount} - النحو ببساطة`,
      105,
      290,
      { align: 'center' }
    );
  }

  // Save the PDF
  doc.save(`${lesson.title}.pdf`);
};
