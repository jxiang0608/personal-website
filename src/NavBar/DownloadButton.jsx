import React from "react";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import resume from "./resume.pdf";

const DownloadButton = () => {
    const downloadPdf = async () => {
        const resume = 'resume.pdf';
        const blob = await pdf(<resume />).toBlob();
        saveAs(blob, resume);
    };

    return <button onClick={downloadPdf}>Download Resume</button>
};
export default DownloadButton