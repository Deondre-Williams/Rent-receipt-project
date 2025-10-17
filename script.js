//  Format date 
function formatDate(date) {
  if (!date) return '—';
  const d = new Date(date);
  return d.toLocaleDateString('en-GB'); // e.g. 16/10/2025
}

// Generate Invoice
  document.getElementById('generateInvoice').addEventListener('click', function (e) {
  e.preventDefault();

  // Collect form values
  const owner = document.getElementById('propertyOwner').value || 'Jane Doe';
  const lessor = document.getElementById('lessorName').value || 'John Smith';
  const address = document.getElementById('address').value || '123 Main St, Kingston';
  const paymentMethod = document.getElementById('paymentMethod').value || 'Online';
  const contractFrom = document.getElementById('contractFrom').value;
  const contractTo = document.getElementById('contractTo').value;
  const receiptID = document.getElementById('receipt').value || 'RCPT-XXXX';

  // Payment amount
  let paymentAmount = parseFloat(document.getElementById('paymentAmount').value);
  if (isNaN(paymentAmount)) paymentAmount = 0;
  const formattedAmount = `JMD ${paymentAmount.toFixed(2)}`;

  // Format dates
  const contractPeriod = `${formatDate(contractFrom)} — ${formatDate(contractTo)}`;

  // Update receipt fields
  document.getElementById('rpt-id').textContent = receiptID;
  document.getElementById('rpt-date').textContent = new Date().toLocaleDateString();
  document.getElementById('rpt-owner').textContent = owner;
  document.getElementById('rpt-lessor').textContent = lessor;
  document.getElementById('rpt-address').textContent = address;
  document.getElementById('rpt-amount').textContent = formattedAmount;

  // Update contract period and payment method in right-col
  const rightColDDs = document.querySelectorAll('.right-col dl dd');
  if (rightColDDs.length >= 2) {
    rightColDDs[0].textContent = paymentMethod;
    rightColDDs[1].textContent = contractPeriod;
  }

  alert(' Invoice generated successfully!');
});

// Print Receipt
document.getElementById('print').addEventListener('click', function () {
  const printContent = document.querySelector('.receipt-wrap').innerHTML;
  const newWindow = window.open('', '', 'width=800,height=700');
  newWindow.document.write(`
    <html>
    <head>
      <title>Print Receipt</title>
      <style>
        body { font-family: 'Source Serif 4', serif; margin: 40px; color: #333; }
        .receipt { border: 1px solid #ccc; padding: 20px; border-radius: 10px; }
        h2 { text-align: center; }
        .line { border-top: 1px solid #ddd; margin-top: 20px; }
      </style>
    </head>
    <body>${printContent}</body>
    </html>
  `);
  newWindow.document.close();
  newWindow.print();
});

// Download Receipt as PDF
document.getElementById('download').addEventListener('click', function () {
  const element = document.querySelector('.receipt'); // the receipt div

  if (!element) {
    alert("Receipt not found!");
    return;
  }

  const opt = {
    margin: 10,
    filename: 'Rent_Receipt.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  
  html2pdf().set(opt).from(element).save();
});

