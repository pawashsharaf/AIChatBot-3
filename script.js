const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null;
const API_KEY = "sk-QmugDNpXoSRiAEWAUdhT3BldkFJ6WeqvJNHPiRV6yio9yNE"; // Paste your API key here**
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {

  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">settings_accessibility</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

const generateResponse = (chatElement) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = chatElement.querySelector("p");


  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    }),
  };

  if (userMessage.toLowerCase().includes("who created you")) {
    messageElement.textContent = "I was developed by pawash & Designed by OpenAI";
    chatbox.scrollTo(0, chatbox.scrollHeight);
    return;
  }
  if (userMessage.toLowerCase().includes("who created u")) {
    messageElement.textContent = "I was developed by pawash & Designed by OpenAI";
    chatbox.scrollTo(0, chatbox.scrollHeight);
    return;
  }
  if (userMessage.toLowerCase().includes("who create you")) {
    messageElement.textContent = "I was developed by pawash & Designed by OpenAI";
    chatbox.scrollTo(0, chatbox.scrollHeight);
    return;
  }
  if (userMessage.toLowerCase().includes("who create u")) {
    messageElement.textContent = "I was developed by pawash & Designed by OpenAI";
    chatbox.scrollTo(0, chatbox.scrollHeight);
    return;
  }
  if (userMessage.toLowerCase().includes("who developed you")) {
    messageElement.textContent = "I was developed by pawash & Designed by OpenAI";
    chatbox.scrollTo(0, chatbox.scrollHeight);
    return;
  }
  if (userMessage.toLowerCase().includes("who developed u")) {
    messageElement.textContent = "I was developed by pawash & Designed by OpenAI";
    chatbox.scrollTo(0, chatbox.scrollHeight);
    return;
  }
  if (userMessage.toLowerCase().includes("who devlope u")) {
    messageElement.textContent = "I was developed by pawash & Designed by OpenAI";
    chatbox.scrollTo(0, chatbox.scrollHeight);
    return;
  }
  if (userMessage.toLowerCase().includes("Tell me about LCIT")) {
    messageElement.textContent = "LCIT college of Commerce and Science has tradition of imparting quality education, a noble task for more than 7 years. All round development of the student is our motto. Beside academic quality we also observe cultural, social and sports development of our student’s. We have spacious library with huge number of books. Special care of the students preparing for competitive exam is taken with special attention. Our sports and cultural department are very active and achieving success every year. Traditional as well as professional course are available according to the choice of the students. Our results are also very good. We have experienced and qualified faculties who put a lot of efforts to make golden student for his better future.";
    chatbox.scrollTo(0, chatbox.scrollHeight);
    return;
  }
    if (userMessage.toLowerCase().includes("tell me about lcit")) {
    messageElement.textContent = "LCIT college of Commerce and Science has tradition of imparting quality education, a noble task for more than 7 years. All round development of the student is our motto. Beside academic quality we also observe cultural, social and sports development of our student’s. We have spacious library with huge number of books. Special care of the students preparing for competitive exam is taken with special attention. Our sports and cultural department are very active and achieving success every year. Traditional as well as professional course are available according to the choice of the students. Our results are also very good. We have experienced and qualified faculties who put a lot of efforts to make golden student for his better future.";
    chatbox.scrollTo(0, chatbox.scrollHeight);
    return;
  }
  if (userMessage.toLowerCase().includes("Tell me about lcit fee structure")) {
    messageElement.textContent = "Fee Structure CourseM <br> Tution Fees	Caution Money	Book Bank	Other Fees (University + Red Cross)	Registration	Total Fees	1st Installment <br> B.Com Computer Application	25000	2000	1000	270	500	25770	10770 <br> B.Com Plain	22000	2000	1000	270	500	23000	10770 <br> BBA	38770	2000	1000	270	500	33500	18770 <br> B.Sc. (Maths)	15000	2000	1000	270	500	18770	5770 <br> B.Sc. (Computer Science)	25000	2000	1000	270	500	28770	5770 <br> B.Sc. (Biology)	15000	2000	1000	270	500	18770	5770 <br> PGDCA	21000	2000	0	270	500	22500	6000 <br> B.Sc. (Biotechnology)	27000	2000	1000	270	500	30770	10770 <br> B.Sc.(Microbiology)	25000	2000	1000	270	500	28770	8770 <br> B.A.	15000	2000	1000	270	500	18770	5770 <br> M.Sc (Computer Science)	25000	2000	0	270	500	27770	7770 <br> M.Sc.(Chemistry)	25000	2000	0	270	500	27770	7770 <br> M.Com	25000	2000	0	270	500	27770	7770 <br> B.A. (LLB)	40000	2000	1500	270	500	44270	14270 <br> B.Com.(LLB)	40000	2000	1500	270	500	44270	14270 <br> LLB	25000	2000	1500	270	500	29270	9270 <br> M.Sc. (Zoology)	25000	2000	0	270	500	27770	7770 <br> BCA	27000	2000	1000	270	500	30770	10770 <br> M.A. (Geography)	20000	2000	0	270	500	22770	5770 <br> Transport Fee Structure <br> Transport	First Installment	Second Installment	Remark <br> Yearly	8000	2000	Compulsory For One Year <br> Semester	6000	6000 <br> Hostel Fee Structure <br> Hostel	Lodging Per Month	Food (Not Compulsory)	Remark	Caution Money <br> Yearly	2000	3000	Compulsory till April 2024 (To be paid for Each Quarter) <br> Compulsory till June 2024 (To be paid for Each Quarter)	3000 <br> Semester	2000	3000	3000."; 
    chatbox.scrollTo(0, chatbox.scrollHeight);
    return;
  }
  if (userMessage.toLowerCase().includes("Tell me about LCIT fee structure")) {
    messageElement.textContent = "Fee Structure CourseM <br> Tution Fees	Caution Money	Book Bank	Other Fees (University + Red Cross)	Registration	Total Fees	1st Installment <br> B.Com Computer Application	25000	2000	1000	270	500	25770	10770 <br> B.Com Plain	22000	2000	1000	270	500	23000	10770 <br> BBA	38770	2000	1000	270	500	33500	18770 <br> B.Sc. (Maths)	15000	2000	1000	270	500	18770	5770 <br> B.Sc. (Computer Science)	25000	2000	1000	270	500	28770	5770 <br> B.Sc. (Biology)	15000	2000	1000	270	500	18770	5770 <br> PGDCA	21000	2000	0	270	500	22500	6000 <br> B.Sc. (Biotechnology)	27000	2000	1000	270	500	30770	10770 <br> B.Sc.(Microbiology)	25000	2000	1000	270	500	28770	8770 <br> B.A.	15000	2000	1000	270	500	18770	5770 <br> M.Sc (Computer Science)	25000	2000	0	270	500	27770	7770 <br> M.Sc.(Chemistry)	25000	2000	0	270	500	27770	7770 <br> M.Com	25000	2000	0	270	500	27770	7770 <br> B.A. (LLB)	40000	2000	1500	270	500	44270	14270 <br> B.Com.(LLB)	40000	2000	1500	270	500	44270	14270 <br> LLB	25000	2000	1500	270	500	29270	9270 <br> M.Sc. (Zoology)	25000	2000	0	270	500	27770	7770 <br> BCA	27000	2000	1000	270	500	30770	10770 <br> M.A. (Geography)	20000	2000	0	270	500	22770	5770 <br> Transport Fee Structure <br> Transport	First Installment	Second Installment	Remark <br> Yearly	8000	2000	Compulsory For One Year <br> Semester	6000	6000 <br> Hostel Fee Structure <br> Hostel	Lodging Per Month	Food (Not Compulsory)	Remark	Caution Money <br> Yearly	2000	3000	Compulsory till April 2024 (To be paid for Each Quarter) <br> Compulsory till June 2024 (To be paid for Each Quarter)	3000 <br> Semester	2000	3000	3000.";
    chatbox.scrollTo(0, chatbox.scrollHeight);
    return;
  }
  


  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      messageElement.textContent = data.choices[0].message.content.trim();
    })
    .catch(() => {
      messageElement.classList.add("error");
      messageElement.textContent = "Oops! Something went wrong. Please try again.";
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};


const handleChat = () => {
    userMessage = chatInput.value.trim(); 
    if(!userMessage) return;


    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {

        const incomingChatLi = createChatLi("Fetching result.....", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
};

chatInput.addEventListener("input", () => {

    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {

    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
