import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import RyanCV from "../images/Ryan-CV.pdf";

import "../styles/Resume.scss";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <section className="resume">
      <div className="resume__container">
        <Document file={RyanCV} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="resume__page-control">
          <p>
            {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <div className="resume__btns">
            <button
              className="resume__btn"
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              &lt;
            </button>
            <button
              className="resume__btn"
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
