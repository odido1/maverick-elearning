import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './CertificateStyles.css';

const CertificatePage = () => {
  // Sample certificate data - in production, this would come from your API/backend
  const [certificateData] = useState({
    studentName: "Echu Emmanuel Ogar",
    courseTitle: "Maverick eLearning Course",
    completionDate: "April 16, 2025",
    studentSignature: "Jane Smith",
    adminSignature: "Dr. Robert Johnson",
    certificateId: "HC-2025-04-16-78912"
  });

  const certificateRef = useRef(null);

  // Handle certificate download
  const downloadCertificate = () => {
    if (!certificateRef.current) return;

    html2canvas(certificateRef.current, {
      scale: 2,
      useCORS: true,
      logging: false
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 280;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save(`${certificateData.studentName}_Certificate.pdf`);
    });
  };

  return (
    <div className="certificate-container">
      <div className="certificate-wrapper">
        {/* Certificate Preview */}
        <div ref={certificateRef} className="certificate">
          {/* Certificate Header */}
          <div className="certificate-header">
            <h1>CERTIFICATE OF COMPLETION</h1>
            <div className="header-divider"></div>
          </div>
          
          <div className="certificate-logo">
            <div className="logo-circle">
              <span>MC</span>
            </div>
          </div>
          
          <div className="certificate-content">
            <p>This is to certify that</p>
            <h2 className="student-name signature-name">{certificateData.studentName}</h2>
            <p>has successfully completed the course</p>
            <h3 className="course-title">{certificateData.courseTitle}</h3>
            <p>on</p>
            <p className="completion-date">{certificateData.completionDate}</p>
          </div>
          
          <div className="certificate-signatures">
            <div className="signature-box">
              <div className="signature-line">
                <p>{certificateData.studentSignature}</p>
              </div>
              <p className="signature-label">Student Signature</p>
            </div>
            <div className="signature-box">
              <div className="signature-line">
                <p>{certificateData.adminSignature}</p>
              </div>
              <p className="signature-label">Administrator Signature</p>
            </div>
          </div>
          
          <div className="certificate-id">
            Certificate ID: {certificateData.certificateId}
          </div>
        </div>
      </div>
      
      <div className="certificate-actions">
        <button onClick={downloadCertificate} className="download-button">
          <svg className="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificatePage;