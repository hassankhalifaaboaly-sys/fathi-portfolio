/**
 * AI Assistant Chat Widget
 * Handles: Toggle, Message Logic, RTL Support, Mock API
 */

class ChatWidget {
    constructor() {
        this.isOpen = false;
        this.isTyping = false;
        this.lang = document.documentElement.lang || 'en';

        // DOM Elements will be created dynamically or selected
        this.init();
    }

    init() {
        // 1. Create HTML Structure
        this.render();

        // 2. Select Elements
        this.container = document.getElementById('chatWidget');
        this.toggleBtn = document.getElementById('chatToggle');
        this.messagesArea = document.getElementById('chatMessages');
        this.input = document.getElementById('chatInput');
        this.sendBtn = document.getElementById('chatSend');
        this.closeMobile = document.getElementById('chatCloseMobile');

        // 3. Events
        this.toggleBtn.addEventListener('click', () => this.toggle());
        this.closeMobile.addEventListener('click', () => this.toggle());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // 4. Mobile Stacking Logic
        this.handleMobileStacking();
        window.addEventListener('resize', () => this.handleMobileStacking());

        // 5. Initial Greeting
        setTimeout(() => {
            const greeting = this.lang === 'ar'
                ? 'مرحباً! أنا مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟'
                : 'Hello! I am your AI assistant. How can I help you today?';
            this.addMessage(greeting, 'bot');
        }, 800);
    }

    render() {
        const isRTL = this.lang === 'ar';
        const texts = {
            title: isRTL ? 'المساعد الذكي' : 'AI Assistant',
            status: isRTL ? 'متصل الآن' : 'Online',
            placeholder: isRTL ? 'اكتب رسالتك...' : 'Type a message...',
            send: isRTL ? 'إرسال' : 'Send',
            close: isRTL ? 'إغلاق' : 'Close'
        };

        const html = `
            <!-- Toggle Button -->
            <button id="chatToggle" class="chat-toggle-btn" aria-label="Toggle Chat">
                <span class="chat-toggle-icon icon-close">💬</span>
                <span class="chat-toggle-icon icon-open">✕</span>
            </button>

            <!-- Chat Window -->
            <div id="chatWidget" class="chat-widget-container" aria-hidden="true">
                <!-- Header -->
                <div class="chat-header">
                    <div class="chat-header-info">
                        <span class="chat-title">${texts.title}</span>
                        <span class="chat-status">
                            <span class="status-dot"></span>
                            ${texts.status}
                        </span>
                    </div>
                    <button id="chatCloseMobile" class="chat-close-mobile" aria-label="${texts.close}">✕</button>
                </div>

                <!-- Body -->
                <div id="chatMessages" class="chat-body">
                    <!-- Messages will appear here -->
                </div>

                <!-- Footer -->
                <div class="chat-footer">
                    <input type="text" id="chatInput" class="chat-input" placeholder="${texts.placeholder}" aria-label="Message Input">
                    <button id="chatSend" class="chat-send-btn" aria-label="${texts.send}">
                         <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
                    </button>
                </div>
            </div>
        `;

        // Inject into body
        const div = document.createElement('div');
        div.innerHTML = html;
        document.body.appendChild(div);
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.container.classList.toggle('is-open', this.isOpen);
        this.toggleBtn.classList.toggle('is-open', this.isOpen);
        this.container.setAttribute('aria-hidden', !this.isOpen);

        if (this.isOpen) {
            this.input.focus();
            // On mobile, hide body scroll
            if (window.innerWidth <= 480) {
                document.body.style.overflow = 'hidden';
            }
        } else {
            if (window.innerWidth <= 480) {
                document.body.style.overflow = '';
            }
        }
    }

    addMessage(text, type) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${type}`;
        msgDiv.textContent = text;
        this.messagesArea.appendChild(msgDiv);
        this.scrollToBottom();
    }

    addTypingIndicator() {
        if (this.isTyping) return;
        this.isTyping = true;

        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        this.messagesArea.appendChild(typingDiv);
        this.scrollToBottom();
    }

    removeTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.remove();
        }
        this.isTyping = false;
    }

    scrollToBottom() {
        this.messagesArea.scrollTop = this.messagesArea.scrollHeight;
    }

    sendMessage() {
        const text = this.input.value.trim();
        if (!text) return;

        // 1. Add User Message
        this.addMessage(text, 'user');
        this.input.value = '';

        // 2. Simulate Bot Response
        this.addTypingIndicator();

        // Mock API Delay
        setTimeout(() => {
            this.removeTypingIndicator();
            const response = this.getBotResponse(text);
            this.addMessage(response, 'bot');
        }, 1500);
    }

    getBotResponse(input) {
        // Simple heuristic response logic
        const lowerInput = input.toLowerCase();
        const isAr = this.lang === 'ar';

        if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('no')) {
            return isAr ? 'أهلاً بك! كيف يمكنني مساعدتك؟' : 'Hello! How can I assist you?';
        }

        if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('تواصل')) {
            return isAr
                ? 'يمكنك التواصل عبر البريد: hassankhalifaaboaly@gmail.com أو الواتساب.'
                : 'You can reach me at hassankhalifaaboaly@gmail.com or via WhatsApp.';
        }

        if (lowerInput.includes('projects') || lowerInput.includes('work') || lowerInput.includes('مشاريع')) {
            return isAr
                ? 'لقد عملت على العديد من مشاريع الطرق والبنية التحتية. يمكنك تفقد قسم "المشاريع" في الصفحة.'
                : 'I have worked on various infrastructure projects. Check out the "Projects" section above!';
        }

        return isAr
            ? 'شكراً لتواصلك! أنا حالياً نسخة تجريبية، ولكن يمكنك استخدام نموذج التواصل في الأسفل.'
            : 'Thanks for reaching out! I am a demo assistant. Please use the contact form below for real inquiries.';
    }

    handleMobileStacking() {
        // On mobile, if the chat button exists, restart the existing floating button to sit above it
        const existingBtn = document.querySelector('.floating-contact-btn');
        if (existingBtn && window.innerWidth <= 768) {
            // Stack logic: Chat toggle is at bottom 2rem (approx 32px)
            // Height is 60px.
            // Gap 1rem.
            // Existing button should move up.
            existingBtn.style.bottom = '90px'; // 2rem + 60px + ~10px gap
        } else if (existingBtn) {
            existingBtn.style.bottom = ''; // Reset on desktop
        }
    }
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    new ChatWidget();
});
