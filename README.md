# 📊 Sales Dashboard - Built with Next.js 15

This is a basic sales dashboard project I built using **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Recharts**. The goal was to visualize yearly sales data using different types of charts and apply atomic design principles in structuring components.

---

## 📌 What I Did in the Project

- Built a dashboard using **Next.js App Router (v15)** and **Tailwind CSS**
- Created a reusable `SalesChart` component using **Recharts**
- Used a mock API route (`/api/sales`) to serve static sales data for 2022, 2023, and 2024
- Added:
  - **Line Chart**
  - **Bar Chart**
  - **Pie Chart**
- Implemented a **filter input** to let users set a sales threshold
- Allowed **chart switching** with buttons
- Organized the code using **atomic component structure**
- Prepared the project for deployment on **Vercel**

---

## 🛠️ How to Set Up the Project Locally

### Prerequisites:
- Node.js installed
- Git installed

### Steps:

```bash
# Clone the repo
git clone https://github.com/<your-username>/sales-dashboard-nextjs.git
cd sales-dashboard-nextjs

# Install dependencies
npm install

# Start the development server
npm run dev
