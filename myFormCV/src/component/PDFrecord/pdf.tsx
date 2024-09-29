import React from 'react';
import { PDFDocument, rgb } from 'pdf-lib';

const PdfGenerator: React.FC = () => {
  const handleGeneratePdf = async () => {
    // Создайте новый PDF документ
    const pdfDoc = await PDFDocument.create();
    
    // Добавьте страницу
    const page = pdfDoc.addPage([600, 400]);
    
    // Установите шрифт и цвет текста
    const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);
    const fontSize = 24;
    page.drawText('Привет, мир!', {
      x: 50,
      y: 350,
      size: fontSize,
      font: font,
      color: rgb(0, 0, 0),
    });
    
    // Сохраните PDF документ
    const pdfBytes = await pdfDoc.save();
    
    // Создайте Blob и ссылку для скачивания
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);
    
    // Создайте ссылку для скачивания
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'output.pdf';
    link.click();

    // Освободите объект URL
    URL.revokeObjectURL(blobUrl);
  };

  return (
    <div>
      <h1>Генерация PDF с React и TypeScript</h1>
      <button onClick={handleGeneratePdf}>Сгенерировать PDF</button>
    </div>
  );
};

export default PdfGenerator;