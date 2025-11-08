let sendbtn = document.querySelector("#sendbtn")
let userinput = document.querySelector("#userinput")
async function sendmessage() {
    const msg = userinput.value.trim()
    console.log(msg)
    const messages = document.getElementById("usermsg")
    messages.innerHTML += `<p id="username" class="username"> You</p><div id="yourmsg" class="yourmsg">${msg}</div>`

    const res = await fetch("http://127.0.0.1:5000/api/query", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: msg })
    })
    const data = await res.json();
    const tutorAImsg = data.response
    const AImessages = document.getElementById("usermsg")
    AImessages.innerHTML += `<p id="tutorAIname" class="tutorAIname"> Tutor AI</p><div id="tutorAImsg" class="tutorAImsg">${tutorAImsg}</div>`
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendmessage()
    }
});
sendbtn.addEventListener("click", sendmessage());
