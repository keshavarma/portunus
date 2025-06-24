# 🌀 Portunus: Project Plan & Development Log

> 🎯 Goal: Build a secure, peer-to-peer file sharing web app using WebRTC and Web Crypto, architected with microservices and DevOps best practices — and host it publicly for real users on AWS.

---

## 👀 Why This Project?

As a DevOps + Security-focused engineer, I wanted to:

- Build a **resume-grade project** that demonstrates cloud-native architecture
- Focus on **microservices, containerization, CI/CD, and Kubernetes**
- Keep frontend minimal to highlight **backend, infra, and security**
- Solve a real-world problem: **secure file transfer without intermediaries**
- Take it all the way to production by **hosting it on AWS with domain + TLS**

---

## 🔰 Stack Decisions

| Component        | Chosen Tech                            | Why                                    |
| ---------------- | -------------------------------------- | -------------------------------------- |
| Frontend         | Static HTML + TailwindCSS + Vanilla JS | Fast, minimal, DevOps-friendly         |
| P2P Protocol     | WebRTC                                 | Native browser-to-browser transfer     |
| Encryption       | Web Crypto API (AES-GCM)               | Strong, client-side, no dependencies   |
| Signaling        | FastAPI + WebSockets                   | Lightweight, async, Pythonic           |
| Fallback Storage | AWS S3 + presigned URLs                | Scalable and secure fallback option    |
| Infra            | Docker + Kubernetes + Helm + Terraform | DevOps showcase stack                  |
| CI/CD            | GitHub Actions                         | Easy, integrates with Git, automatable |
| Hosting          | AWS (S3, EKS, Route53, CloudFront)     | Real-world, production-grade infra     |

---

## 🧱 Project Phases

---

### ✅ Phase 1: Project Bootstrap

**What I did:**

- Finalized name: `Portunus` (Roman god of ports & gates)
- Created project structure and branding
- Designed logo with a **funky mystic crab/portal vibe**
- Set up `README.md`, `.gitignore`, and `LICENSE`

**Why:**

- To make the repo look professional and well-organized
- Branding makes the project **memorable and bloggable**
- Having a clean start helps avoid future chaos

---

### 🟣 Phase 2: Frontend with Static HTML + JS

**Pages Built:**

- `index.html` → Home (choose send or receive)
- `send.html` → Upload + connect UI
- `receive.html` → Wait + receive file UI

**Tech:**

- TailwindCSS via CDN
- Vanilla JS for DOM + WebRTC + WebSocket logic
- Served via Nginx Docker container

**Why:**

- React is overkill for this project’s frontend
- Static pages are lightweight, secure, and fast
- Docker + Nginx keeps deployment simple
- Makes frontend **infra-centric** (good for DevOps demo)

---

### 🟢 Phase 3: Signaling Service (FastAPI)

**Features:**

- WebSocket endpoint `/ws/{room_id}`
- Clients connect, exchange offers/answers/ICE candidates
- Stateless, ephemeral signaling only

**Why:**

- WebRTC needs a signaling layer before P2P works
- Using FastAPI keeps it **Pythonic, async, microservice-ready**
- Will be deployed separately with its own Dockerfile & Helm chart

---

### 🔐 Phase 4: Encryption (Web Crypto API)

**Features:**

- Encrypt file using AES-GCM in browser
- Send key securely (possibly via magic link or QR)
- Receiver decrypts after receiving full file

**Why:**

- Ensures **end-to-end security** even on fallback path
- Keeps trustless design (no key stored on server)
- Shows strong grasp of **browser security APIs**

---

### 🟠 Phase 5: Upload Service (Optional Fallback)

**Features:**

- If P2P fails, encrypt and upload to S3
- Generate presigned URL + TTL
- Key not stored with file

**Why:**

- Real-world fallback for mobile or firewalled networks
- Integrates cloud (AWS) into project
- Demonstrates **secure cloud storage patterns**

---

### ⚙️ Phase 6: DevOps + Infrastructure

**Tasks:**

- Dockerize all services (frontend, signal, upload)
- Write Helm charts for each service
- Setup GitHub Actions pipelines for:
  - Build → Test → Deploy
- Setup Terraform for AWS:
  - S3, IAM, EKS cluster, Route53
- Deploy to EKS with TLS + domain

**Why:**

- Show complete **CI/CD DevOps lifecycle**
- Demonstrate **multi-service orchestration**
- Resume gold for SRE/DevOps/Cloud Engineer roles

---

### ✨ Phase 7: Bonus Features

**Ideas:**

- Magic link with JWT token auth
- QR code for mobile device transfer
- Chunked file transfer progress bar
- Prometheus + Grafana for observability
- Optional Redis for tracking transfer state or rate limits

**Why:**

- Showcase polish and product thinking
- Push project beyond MVP for blog/demo

---

### ☁️ Phase 8: Hosting on AWS for Real Users

**What I’ll Do:**

- Host frontend via **S3 + CloudFront** (or Nginx in ECS)
- Deploy `signal-service` in **ECS Fargate or EKS**
- Use **Route 53 + ACM** for domain + HTTPS
- Use **Terraform** to automate AWS setup
- Use **GitHub Actions** for CI/CD to deploy on push
- Use **CloudWatch** or **Grafana** for monitoring

**Why:**

- Makes the project usable by the public
- Demonstrates **end-to-end cloud deployment**
- Completes the “idea to production” lifecycle
- Perfect for demo, interview, or blog — show real traffic usage

---

## 📌 Current Status (as of now)

| Component             | Status               |
| --------------------- | -------------------- |
| 🛠️ Repo Setup         | ✅ Done              |
| 🎨 Frontend           | ✅ Static UI built   |
| 🌐 Signal Service     | 🔜 Next to implement |
| 📡 WebRTC Integration | 🔜 Via Vanilla JS    |
| 🔐 Encryption         | 🔜 Web Crypto API    |
| ☁️ Upload Service     | 🔜 Optional fallback |
| 🔄 CI/CD Pipelines    | 🔜 GitHub Actions    |
| ☸️ K8s + Terraform    | 🔜 Pending           |
| 🌍 AWS Hosting        | 🔜 Final phase       |

---

## 🧠 Dev Goals Achieved So Far

- Built clean GitHub repo with good branding
- Made smart tech stack decisions (frontend minimal, backend modular)
- Kept security + DevOps at the core
- Set up for future blog posts or interviews
- Planned for full AWS hosting and scalability

---

## 📝 Notes for Blogging or Interview

- I kept frontend minimal **intentionally** to let DevOps/microservices shine
- Focused on **end-to-end flow** from browser → signaling → peer → fallback
- Explained tradeoffs: no React to keep deployability and observability simple
- Planned for **real-world blockers** (WebRTC firewalls, NAT, fallback)
- Designed to scale from localhost → container → cluster → cloud

---

## 💬 Key Talking Points (For Interview)

- “Portunus is a secure, serverless file-sharing system built with microservices and cloud-native principles.”
- “The entire frontend is served via static Nginx or S3 + CloudFront, keeping containers lean.”
- “I implemented encrypted WebRTC with an optional fallback to presigned S3 uploads — similar to Wormhole and Snapdrop but infra-focused.”
- “The project is deployed with Docker, Helm, Terraform, GitHub Actions, and hosted fully on AWS with TLS.”
