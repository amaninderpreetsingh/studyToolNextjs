import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload"; // Import the icon
import "@/app/globals.css";

const PdfToData = (props) => {
  const handleFileChange = async (e) => {
    const file = e.target.files[0]; // Get the selected file

    if (!file) {
      return;
    }

    try {
      const pdfjs = await import("pdfjs-dist/webpack");

      const fileReader = new FileReader();
      fileReader.onload = async () => {
        const typedArray = new Uint8Array(fileReader.result);
        const pdf = await pdfjs.getDocument({ data: typedArray }).promise;

        let text = "";
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const pageText = await page.getTextContent();
          pageText.items.forEach((item) => {
            text += item.str + " ";
          });
        }

        // Use the correct prop name here
        props.onFileSelected(text);
      };

      fileReader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Error extracting text from PDF:", error);
    }
  };

  return (
    <div className="Ldiv">
      <label htmlFor="pdfInput" className="AppButton uploadPdfButton">
        <FileUploadIcon style={{ marginRight: "8px" }} />{" "}
        {/* Add the icon next to the button text */}
        Upload PDF
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          id="pdfInput"
          style={{ display: "none" }} // Keep the input hidden
        />
      </label>
    </div>
  );
};

export default PdfToData;
