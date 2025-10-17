# Rent Receipt Generator

This project is a **Rent Receipt Generator** that allows users to input
rental and payment information to generate a printable and downloadable
rent receipt.

## 🧩 Features

-   Collects details for **property owner**, **tenant**, **address**,
    and **payment**.\
-   Automatically updates the receipt with entered data.\
-   Allows **printing** or **downloading** the receipt as a PDF.\
-   Displays placeholder information until replaced by form input.

## 🛠️ Technologies Used

-   **HTML5** -- Structure\
-   **CSS3** -- Styling\
-   **JavaScript (ES6)** -- Logic and dynamic updates\
-   **html2pdf.js** -- PDF download support

## ⚙️ How It Works

1.  The user fills out the rent form (owner name, tenant, payment
    amount, etc.).\
2.  Clicking **Generate Invoice** updates the right-side receipt
    section.\
3.  Clicking **Print** opens a printable version of the receipt.\
4.  Clicking **Download** generates and downloads a PDF file.

## 🧾 JavaScript Core Functionality

-   `formatDate(date)`: Formats the date into `dd/mm/yyyy` format.\
-   `generateInvoice`: Collects input data, formats it, and updates the
    receipt.\
-   `print`: Opens a printable receipt in a new window.\
-   `download`: Uses **html2pdf.js** to generate and save the receipt as
    a PDF.

## 📦 File Structure

    Rent-Receipt-Generator/
    │
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md

## 📄 Example

When the user inputs the payment amount, it automatically appears in the
receipt section and is included in the printable/downloadable document.

## 👨‍💻 Author

**Deondre Williams**\
[🌐 Visit my Linktree Profile](https://linktr.ee/codetechwilli)

