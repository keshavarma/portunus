const generateUsername = () => {
  const adjectives = ["Moon", "Crab", "Spark", "Star", "Mystic", "Shadow"];
  const animals = ["Claw", "Shell", "Tentacle", "Whale", "Jelly", "Squid"];
  return (
    adjectives[Math.floor(Math.random() * adjectives.length)] +
    animals[Math.floor(Math.random() * animals.length)] +
    Math.floor(Math.random() * 100)
  );
};

const generateRoomCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("username").textContent = generateUsername();
  document.getElementById("roomCode").textContent = generateRoomCode();

  document.getElementById("sendBtn").addEventListener("click", () => {
    document.getElementById("sendPanel").classList.remove("hidden");
    document.getElementById("receivePanel").classList.add("hidden");
  });

  document.getElementById("receiveBtn").addEventListener("click", () => {
    document.getElementById("receivePanel").classList.remove("hidden");
    document.getElementById("sendPanel").classList.add("hidden");
  });

  document.getElementById("fileInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    const status = document.getElementById("sendStatus");
    if (file) {
      status.textContent = `Preparing to send: ${file.name}...`;
      setTimeout(() => {
        status.textContent = `Sent '${file.name}' successfully (placeholder)`;
      }, 2000);
    }
  });

  document.getElementById("roomSwitchBtn").addEventListener("click", () => {
    document.getElementById("roomModal").classList.toggle("hidden");
    const currentRoom = document.getElementById("roomCode").textContent;
    QRCode.toCanvas(
      document.getElementById("qrcode"),
      `Room: ${currentRoom}`,
      (error) => {
        if (error) console.error(error);
      }
    );
  });

  document.getElementById("joinRoomBtn").addEventListener("click", () => {
    const newRoom = document.getElementById("newRoomInput").value;
    if (newRoom) {
      document.getElementById("roomCode").textContent = newRoom.toUpperCase();
      document.getElementById("roomModal").classList.add("hidden");
    }
  });
});
