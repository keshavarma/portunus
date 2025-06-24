# 🦀 Portunus

![Portunus](./logo.png) <!-- Replace with actual path or URL -->

> ✨ A funky, secure, peer-to-peer file sharing portal. No servers. No middlemen. Just crabs, portals, and encrypted file beams.

---

**Portunus** is a web-based app that lets you send files instantly and securely between devices using peer-to-peer (P2P) technology — right from your browser. It uses WebRTC and the Web Crypto API to transfer encrypted files directly, optionally falling back to temporary cloud storage when needed.

Think Snapdrop meets magic portals, with a crustacean twist.

---

## 🔐 Features

- 📡 WebRTC-based direct file transfer
- 🧊 End-to-end encryption (AES-GCM)
- 🌀 Optional fallback to encrypted cloud upload (AWS S3)
- ⚡ Fast, ephemeral, and private
- 🌐 Runs completely in the browser — no app needed
- 🧱 Built with microservices, Docker, and Kubernetes

---

## 💻 Getting Started

### Run Locally (Dev)

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/portunus.git
cd portunus

# 2. Start backend services
docker-compose up --build

# 3. Start frontend
cd frontend
npm install
npm run dev
