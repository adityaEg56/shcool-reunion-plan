// ==================== CONFIGURATION ====================
const ORGANIZER_WA_NUMBER = "917024606701"; 
const WA_GROUP_LINK = "https://chat.whatsapp.com/JsQXXln6LefBaaO00snRS1"; 
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const letterModal = document.getElementById('letterModal');
    const openLetterBtn = document.getElementById('openLetterBtn');
    const closeLetterBtn = document.getElementById('closeLetterBtn');
    const modalRsvpBtn = document.getElementById('modalRsvpBtn');
    
    const submitRsvpBtn = document.getElementById('submitRsvpBtn');
    const rsvpForm = document.getElementById('rsvpForm');
    const successCard = document.getElementById('successCard');
    const editRsvpBtn = document.getElementById('editRsvpBtn');
    const responseGreeting = document.getElementById('responseGreeting');
    const responseText = document.getElementById('responseText');

    // Modal Control
    function openModal() { if (letterModal) letterModal.style.display = 'flex'; }
    function closeModal() { if (letterModal) letterModal.style.display = 'none'; }

    if (openLetterBtn) openLetterBtn.addEventListener('click', openModal);
    if (closeLetterBtn) closeLetterBtn.addEventListener('click', closeModal);
    
    if (letterModal) {
        letterModal.addEventListener('click', (e) => {
            if (e.target === letterModal) closeModal();
        });
    }

    if (modalRsvpBtn) {
        modalRsvpBtn.addEventListener('click', () => {
            closeModal();
            const rsvpSection = document.getElementById('rsvpSection');
            if (rsvpSection) rsvpSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Form Submit Logic
    if (submitRsvpBtn) {
        submitRsvpBtn.addEventListener('click', () => {
            const nameInput = document.getElementById('userName');
            const phoneInput = document.getElementById('userPhone');
            const attendanceSelect = document.getElementById('userAttendance');

            const name = nameInput ? nameInput.value.trim() : "";
            const phone = phoneInput ? phoneInput.value.trim() : "";
            const attendance = attendanceSelect ? attendanceSelect.value : "";

            if (!name) {
                alert("Kripya apna naam fill karein!");
                if (nameInput) nameInput.focus();
                return;
            }

            if (!phone || phone.length < 10) {
                alert("Kripya sahi 10-digit WhatsApp number fill karein!");
                if (phoneInput) phoneInput.focus();
                return;
            }

            const isComing = attendance.includes("Haan") || attendance.includes("Koshish");

            // Organizer Message Link
            const waText = `*🎉 Reunion Confirmation Form Data*\n\n👤 *Naam:* ${name}\n📱 *Phone:* ${phone}\n📌 *Status:* ${attendance}`;
            const organizerWaUrl = `https://wa.me/${ORGANIZER_WA_NUMBER}?text=${encodeURIComponent(waText)}`;

            if (responseGreeting && responseText) {
                responseGreeting.textContent = `Shukriya, ${name}! 🎉`;
                
                const actionBox = document.querySelector('.action-box');
                if (actionBox) {
                    if (isComing) {
                        responseText.textContent = "Aapka form submit ho gaya hai! Niche do steps complete karein:";
                        actionBox.innerHTML = `
                            <a href="${organizerWaUrl}" target="_blank" style="margin-bottom: 12px; background-color: #25D366; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; color: white; border-radius: 8px; text-decoration: none; font-weight: bold;">
                                <i class="fa-brands fa-whatsapp"></i> Step 1: Organizer ko Details Bhejein
                            </a>
                            <a href="${WA_GROUP_LINK}" target="_blank" style="background-color: #128C7E; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; color: white; border-radius: 8px; text-decoration: none; font-weight: bold;">
                                <i class="fa-solid fa-users"></i> Step 2: Reunion Group Join Karein
                            </a>
                        `;
                    } else {
                        responseText.textContent = "Niche button par click karke apna status organizer ko bhej dein. Hum aapko miss karenge!";
                        actionBox.innerHTML = `
                            <a href="${organizerWaUrl}" target="_blank" style="background-color: #25D366; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; color: white; border-radius: 8px; text-decoration: none; font-weight: bold;">
                                <i class="fa-brands fa-whatsapp"></i> Send Status to Organizer
                            </a>
                        `;
                    }
                }
            }

            if (rsvpForm) rsvpForm.style.display = "none";
            if (successCard) {
                successCard.style.display = "block";
                successCard.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Edit Response
    if (editRsvpBtn) {
        editRsvpBtn.addEventListener('click', () => {
            if (successCard) successCard.style.display = "none";
            if (rsvpForm) rsvpForm.style.display = "block";
        });
    }
});