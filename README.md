# IP-DNS-SSL-Lookup

A Next.js web application that provides three main features:
1. **IP Lookup** - Retrieve detailed information about any IP address, such as geolocation, ISP, and organization.
2. **DNS Lookup** - Fetch and display all DNS records of a domain with a brief description of each record type.
3. **SSL Lookup** - Analyze and display SSL certificate details of a given website.

This project is developed using Next.js and includes modern, responsive UI/UX for seamless interactions.

---

## Features

### 1. **IP Lookup**
- Input an IP address to retrieve its details:
  - Location (City, Region, Country)
  - Internet Service Provider (ISP)
  - Latitude and Longitude
- Uses a public IP Geolocation API for data retrieval.

### 2. **DNS Lookup**
- Input a domain name to list all DNS records.
- Displays records such as:
  - **A Record:** Maps a domain to an IP address.
  - **CNAME:** Aliases of a domain name.
  - **MX Record:** Mail server records.
  - **TXT Record:** Miscellaneous text records.
  - **AAAA Record:** IPv6 address of the domain.
- Brief descriptions for each DNS record are included in the UI.

### 3. **SSL Lookup**
- Input a domain name to analyze SSL certificate details:
  - Issuer
  - Validity period (Start and Expiry date)
  - Encryption type
  - Certificate Authority

---

## Project Setup

### Prerequisites
- **Node.js**: Ensure Node.js is installed (version 16 or above).
- **Git**: Make sure Git is installed for cloning the repository.

### Cloning the Repository
To clone this project, run the following command:
```bash
git clone https://github.com/just-abdullah-dev/ip-dns-ssl-lookup.git
cd ip-dns-ssl-lookup

```
# Installation

## On Windows:
1. Open **PowerShell** or **Command Prompt**.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the project in your browser:
   ```arduino
   http://localhost:3000
   ```

## On macOS:
1. Open the **Terminal**.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the project in your browser:
   ```arduino
   http://localhost:3000
   ```

---

# Deployment

This project is built for easy deployment on platforms like **Vercel**, **Netlify**, or traditional hosting providers.

## Build for Production
To build the app for production:
```bash
npm run build
npm run start
```

---

# Tools & Technologies Used
- **Next.js**: React framework for building server-rendered and static web applications.
- **Tailwind CSS**: For creating responsive and modern UI designs.
- **APIs**: Utilized external APIs for retrieving IP, DNS, and SSL data.
- **Axios**: Simplified HTTP requests and handling API calls.

---

# Author

This project is developed and maintained by **[@just-abdullah-dev](https://github.com/just-abdullah-dev)**.
```
