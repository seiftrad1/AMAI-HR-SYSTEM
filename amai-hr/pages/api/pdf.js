import React from "react";

import Header from "../Components/Header/Header";
import pdfHelper from "../../lib/pdfHelper";

export default async ({ req, res, query }) => {
  const exportPDF = query.exportPDF === "true";
  const isServer = !!req;

  if (isServer && exportPDF) {
    const buffer = await pdfHelper.componentToPDFBuffer(
      <PDFLayout>
        <Header />
      </PDFLayout>
    );

    // with this header, your browser will prompt you to download the file
    // without this header, your browse will open the pdf directly
    res.setHeader("Content-disposition", 'attachment; filename="article.pdf');

    // set content type
    res.setHeader("Content-Type", "application/pdf");

    // output the pdf buffer. once res.end is triggered, it won't trigger the render method
    res.end(buffer);
    res.status(200);
  }

  return {};
};
