<template>
<main>
    <!-- List of messages -->
    <div class="chat-container mb-3 flex-grow-1 d-flex flex-column">
        <div v-for="(user_message, index) in user_messages"
        :key="index"
        :class="user_message.from === 11
        ? index === 0
        ? 'd-flex chat-message outcoming mb-3 ms-auto mt-3'
        : 'd-flex chat-message outcoming mb-3 ms-auto'
        : index === 0
        ? 'd-flex chat-message incoming mb-3 mt-3'
        : 'd-flex chat-message incoming mb-3'">
            <div v-if="user_message.from !== 11">
                <img src="../assets/images/chatbot.png" width="45" height="45" class="rounded-circle me-2" alt="Avatar">
            </div>

            <div
            class="bubble markdown-body text-break"
            v-html="renderMd(user_message.message)"
            ></div>

            <div v-if="user_message.from === 11">
                <img src="../assets/images/user.png" width="45" height="45" class="rounded-circle ms-2" alt="Avatar">
            </div>
        </div>
        
        <div v-if="is_sending" class="typing-dots text-secondary my-3">
            <span></span><span></span><span></span>
        </div>
    </div>

    <!-- Input form -->
    <form class="d-flex fixed-bottom p-3 mt-3" @submit.prevent="sendMessage">
        <input type="text" v-model="message" class="form-control me-2" placeholder="Write message...">

        <button type="submit" @click="sendMessage" 
        class="btn indigo-button px-2 d-flex align-items-center justify-content-center"
        :disabled="!message || is_sending">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
            </svg>
        </button>
    </form>
</main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';

// Markdown text showing
const md = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: true,
});

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const i = tokens[idx].attrIndex('target')
  if (i < 0) tokens[idx].attrPush(['target', '_blank'])
  else tokens[idx].attrs[i][1] = '_blank'
  return self.renderToken(tokens, idx, options)
}

const renderMd = (text) => {
  const s = String(text ?? '')
  const hasParagraphs = /\n\s*\n/.test(s)
  const html = hasParagraphs ? md.render(s) : md.renderInline(s)
  return DOMPurify.sanitize(html)
}


const message = ref('');
const user_messages = ref([]);
const is_sending = ref(false);
const error_messages = ref("");

// Downloading history from sessionStorage
onMounted(() => {
    const raw = sessionStorage.getItem('user_messages')
    if (raw) {
        try {
            user_messages.value = JSON.parse(raw);
        } catch {
            user_messages.value = [];
            sessionStorage.removeItem('user_messages');
        }
    }
})

async function sendMessage() {
    if (message.value === '' || is_sending.value) {
        return;
    }
    
    user_messages.value.push({"from": 11, "to": 1, "message": message.value});
    saveToSession()

    let message_priv = message.value;
    message.value = '';
    is_sending.value = true;
    const response_message = await getServerResponse(message_priv);
    is_sending.value = false;
    user_messages.value.push({"from": 1, "to": 11, "message": response_message});
    saveToSession()
}


async function getServerResponse(message_priv) {
    const url = "https://codebot.gulden.tv/api_hurated.php"; 
    const data = {
        "prompt": message_priv
    };

    try {  
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        const response = await res.json();
        return response?.text ?? "Null message";
    } catch (err) {
        // console.log(err)
        error_messages = err;
        return "Error, try again later";
    }
}


function saveToSession() {
  sessionStorage.setItem('user_messages', JSON.stringify(user_messages.value))
}
</script>