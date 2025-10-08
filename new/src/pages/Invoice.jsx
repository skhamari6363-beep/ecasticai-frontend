import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Invoice = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const invoices = [
    {
      id: 1,
      payable: "₹500",
      dueDate: "15/08/2024",
      issueDate: "01/08/2024",
      ref: "#INV-001",
      billedTo: {
        name: "John Doe",
        email: "john@email.com",
        phone: "+91 9876543210",
      },
      from: {
        company: "Khamari, Inc",
        address: "Business address, City, State, IN - 000 000",
        tax: "00XXXXX1234X0XX",
      },
      items: [
        { name: "Product Management Course", qty: 1, rate: "₹500", amount: "₹500" },
      ],
      subtotal: "₹500",
      tax: "₹0",
      total: "₹500",
      bank: {
        name: "HDFC Bank",
        ifsc: "HDFC000XXXX",
        swift: "HDFCINBBXXX",
        account: "1234567890",
      },
    },
    {
      id: 2,
      payable: "₹1,200",
      dueDate: "20/08/2024",
      issueDate: "05/08/2024",
      ref: "#INV-002",
      billedTo: {
        name: "Jane Smith",
        email: "jane@email.com",
        phone: "+91 9999999999",
      },
      from: {
        company: "Khamari, Inc",
        address: "Business address, City, State, IN - 000 000",
        tax: "00XXXXX1234X0XX",
      },
      items: [
        { name: "Advanced UI/UX Course", qty: 1, rate: "₹1,200", amount: "₹1,200" },
      ],
      subtotal: "₹1,200",
      tax: "₹0",
      total: "₹1,200",
      bank: {
        name: "SBI Bank",
        ifsc: "SBIN000XXXX",
        swift: "SBININBBXXX",
        account: "9876543210",
      },
    },
  ];

  const invoice = invoices.find((inv) => inv.id === Number(id));

  if (!invoice) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-bold text-[#f87171]">Invoice not found</h2>
      </div>
    );
  }

  const downloadPDF = () => {
    const input = document.getElementById("invoice-pdf");
    html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Invoice-${invoice.id}.pdf`);
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#374151]">
      <div id="invoice-pdf">
        {/* Header */}
        <div className="bg-[#2563eb] text-white p-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">Invoice</h1>
            <p className="mt-2">Payable {invoice.payable}</p>
            <p>Dues {invoice.dueDate}</p>
            <p>Issued {invoice.issueDate}</p>
            <p>Ref. {invoice.ref}</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold">№ A{invoice.id}</h2>
          </div>
        </div>

        {/* Billing Info */}
        <div className="grid grid-cols-3 gap-6 p-8 text-sm">
          <div>
            <h3 className="font-semibold">Billed to</h3>
            <p>{invoice.billedTo.name}</p>
            <p>{invoice.billedTo.email}</p>
            <p>{invoice.billedTo.phone}</p>
          </div>
          <div>
            <h3 className="font-semibold">From</h3>
            <p>{invoice.from.company}</p>
            <p>{invoice.from.address}</p>
            <p>TAX ID {invoice.from.tax}</p>
          </div>
        </div>

        {/* Items Table */}
        <div className="p-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-[#6b7280] uppercase text-sm">
                <th className="pb-2">Item Description</th>
                <th className="pb-2">Qty</th>
                <th className="pb-2">Rate</th>
                <th className="pb-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, i) => (
                <tr key={i} className="border-b">
                  <td className="py-2">{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.rate}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="mt-6 text-right">
            <p>Subtotal: {invoice.subtotal}</p>
            <p>Tax: {invoice.tax}</p>
            <h3 className="text-lg font-bold mt-2">Total: {invoice.total}</h3>
          </div>
        </div>

        {/* Payment Details */}
        <div className="p-8 grid grid-cols-2 text-sm text-[#6b7280]">
          <div>
            <p className="font-semibold">Payment details</p>
            <p>Please pay within 15 days of receiving this invoice.</p>
            <p className="mt-2">Thanks for the business.</p>
          </div>
          <div>
            <p><strong>Bank name:</strong> {invoice.bank.name}</p>
            <p><strong>IFS code:</strong> {invoice.bank.ifsc}</p>
            <p><strong>Swift code:</strong> {invoice.bank.swift}</p>
            <p><strong>Account #:</strong> {invoice.bank.account}</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="p-8 flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-[#2563eb] text-white rounded hover:bg-[#1d4ed8]"
        >
          Back
        </button>
        <button
          onClick={downloadPDF}
          className="px-4 py-2 bg-[#16a34a] text-white rounded hover:bg-[#15803d]"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Invoice;
