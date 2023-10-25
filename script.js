document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send");

    sendButton.addEventListener("click", function() {
        const messageText = messageInput.value;
        if (messageText.trim() !== "") {
            const messageElement = document.createElement("p");
            messageElement.textContent = "คุณ: " + messageText;
            chatMessages.appendChild(messageElement);
            messageInput.value = "";
            // ส่งข้อความไปยังระบบแชทออนไลน์ของคุณ
        }
    });
});