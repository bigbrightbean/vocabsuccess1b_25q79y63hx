// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ design of the new smartphone includes advanced technology and sleek aesthetics.",
        chinese_question: "新智能手机的 __________ 设计包括先进的技术和流畅的美学。",
        answers: [
            { option: "A", answer: "basic", chinese_answer: "基本的", chinese_romanization: "jīběn de" },
            { option: "B", answer: "crude", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "C", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "D", answer: "sophisticated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sophisticated' means having, revealing, or involving a great deal of worldly experience and knowledge of fashion and culture; highly developed or complex." +
            "<br><br>" +
            "(A) 'basic' means forming an essential foundation or starting point; fundamental." +
            "<br><br>" +
            "(B) 'crude' means in a natural or raw state; not yet processed or refined." +
            "<br><br>" +
            "(C) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(D) '复杂的' 意味着具有、揭示或涉及大量的世俗经验和时尚文化知识；高度发达或复杂的。" +
            "<br><br>" +
            "(A) '基本的' 意味着构成一个基本基础或起点；根本的。" +
            "<br><br>" +
            "(B) '粗糙的' 意味着处于自然或原始状态；尚未加工或精炼的。" +
            "<br><br>" +
            "(C) '简单的' 意味着容易理解或完成的；没有困难的。"
    },
    {
        id: 2,
        question: "The __________ runner finished the race in record time, impressing everyone with his speed and agility.",
        chinese_question: "那位 __________ 的跑者以创纪录的时间完成了比赛，以他的速度和敏捷给所有人留下了深刻印象。",
        answers: [
            { option: "A", answer: "swift", chinese_answer: "迅速的", chinese_romanization: "xùnsù de" },
            { option: "B", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
            { option: "C", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" },
            { option: "D", answer: "leisurely", chinese_answer: "悠闲的", chinese_romanization: "yōuxián de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'swift' means happening quickly or promptly." +
            "<br><br>" +
            "(B) 'slow' means moving or operating at a low speed." +
            "<br><br>" +
            "(C) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(D) 'leisurely' means acting or done at a relaxed, unhurried pace.",
        chinese_explanation: "(A) '迅速的' 意味着快速或及时发生的。" +
            "<br><br>" +
            "(B) '缓慢的' 意味着以低速移动或操作的。" +
            "<br><br>" +
            "(C) '迟缓的' 意味着行动缓慢或不活跃的。" +
            "<br><br>" +
            "(D) '悠闲的' 意味着以放松、不急不躁的节奏进行的。"
    },
    {
        id: 3,
        question: "The detective was __________ about the suspect's alibi, sensing something was amiss.",
        chinese_question: "侦探对嫌疑人的不在场证明表示__________，觉得有些不对劲。",
        answers: [
            { option: "A", answer: "convinced", chinese_answer: "确信", chinese_romanization: "quèxìn" },
            { option: "B", answer: "skeptical", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "C", answer: "trusting", chinese_answer: "信任", chinese_romanization: "xìnrèn" },
            { option: "D", answer: "naive", chinese_answer: "天真", chinese_romanization: "tiānzhēn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'skeptical' means not easily convinced; having doubts or reservations." +
            "<br><br>" +
            "(A) 'convinced' means completely certain about something." +
            "<br><br>" +
            "(C) 'trusting' means showing or tending to have a belief in a person's honesty or sincerity; not suspicious." +
            "<br><br>" +
            "(D) 'naive' means showing a lack of experience, wisdom, or judgment.",
        chinese_explanation: "(B) '怀疑'一词意味着不容易被说服；有怀疑或保留。" +
            "<br><br>" +
            "(A) '确信' 意味着对某事完全确定。" +
            "<br><br>" +
            "(C) '信任' 意味着表现出或倾向于相信一个人的诚实或真诚；不怀疑。" +
            "<br><br>" +
            "(D) '天真' 意味着缺乏经验、智慧或判断力。"
    },
    {
        id: 4,
        question: "The __________ design of the palace included intricate carvings and detailed mosaics.",
        chinese_question: "宫殿的 __________ 设计包括精致的雕刻和详细的马赛克图案。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "C", answer: "elaborate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" },
            { option: "D", answer: "basic", chinese_answer: "基本的", chinese_romanization: "jīběn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'elaborate' means involving many carefully arranged parts or details; detailed and complicated in design and planning." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(D) 'basic' means forming an essential foundation or starting point; fundamental.",
        chinese_explanation: "(C) '精致的' 意味着包含许多精心安排的部分或细节；设计和规划详细而复杂。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成的；没有难度的。" +
            "<br><br>" +
            "(B) '朴素的' 意味着没有装饰或不精致的；性格简单或普通的。" +
            "<br><br>" +
            "(D) '基本的' 意味着形成基本基础或起点的；基础的。"
    },
    {
        id: 5,
        question: "The restaurant was shut down due to __________ conditions in the kitchen, including dirty utensils and moldy food.",
        chinese_question: "由于厨房的 __________ 条件，包括脏的餐具和发霉的食物，这家餐馆被关闭了。",
        answers: [
            { option: "A", answer: "clean", chinese_answer: "干净的", chinese_romanization: "gānjìng de" },
            { option: "B", answer: "hygienic", chinese_answer: "卫生的", chinese_romanization: "wèishēng de" },
            { option: "C", answer: "unsanitary", chinese_answer: "不卫生的", chinese_romanization: "bù wèishēng de" },
            { option: "D", answer: "sterile", chinese_answer: "无菌的", chinese_romanization: "wújūn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unsanitary' means not clean or sterile; likely to cause disease." +
            "<br><br>" +
            "(A) 'clean' means free from dirt, marks, or stains." +
            "<br><br>" +
            "(B) 'hygienic' means conducive to maintaining health and preventing disease, especially by being clean." +
            "<br><br>" +
            "(D) 'sterile' means free from bacteria or other living microorganisms; totally clean.",
        chinese_explanation: "(C) '不卫生的' 意味着不干净或无菌；可能导致疾病的。" +
            "<br><br>" +
            "(A) '干净的' 意味着没有污垢、痕迹或污渍的。" +
            "<br><br>" +
            "(B) '卫生的' 意味着有助于保持健康和预防疾病的，特别是通过保持清洁。" +
            "<br><br>" +
            "(D) '无菌的' 意味着没有细菌或其他微生物的；完全干净的。",
    },
    {
        question: "Her __________ methods in the classroom made learning more engaging and effective for her students.",
        chinese_question: "她在课堂上的 __________ 方法使学习对学生更有吸引力和有效。",
        answers: [
            { option: "A", answer: "orthodox", chinese_answer: "正统的", chinese_romanization: "zhèngtǒng de" },
            { option: "B", answer: "standard", chinese_answer: "标准的", chinese_romanization: "biāozhǔn de" },
            { option: "C", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "D", answer: "unorthodox", chinese_answer: "非正统的", chinese_romanization: "fēi zhèngtǒng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unorthodox' means contrary to what is usual, traditional, or accepted; not orthodox." +
            "<br><br>" +
            "(A) 'orthodox' means conforming to what is generally or traditionally accepted as right or true; established and approved." +
            "<br><br>" +
            "(B) 'standard' means used or accepted as normal or average." +
            "<br><br>" +
            "(C) 'conventional' means based on or in accordance with what is generally done or believed.",
        chinese_explanation: "(D) '非正统的' 意味着与通常、传统或公认的相反；不正统的。" +
            "<br><br>" +
            "(A) '正统的' 意味着符合普遍或传统接受的正确或真实的；已建立和认可的。" +
            "<br><br>" +
            "(B) '标准的' 意味着被用作正常或平均的。" +
            "<br><br>" +
            "(C) '传统的' 意味着基于或符合普遍做法或信仰。"
    },
    {
        id: 7,
        question: "His __________ excuse for being late did not convince his boss, who expected a more valid reason.",
        chinese_question: "他 __________ 的迟到借口没有说服他的老板，老板期望一个更合理的理由。",
        answers: [
            { option: "A", answer: "compelling", chinese_answer: "令人信服的", chinese_romanization: "lìng rén xìnfú de" },
            { option: "B", answer: "feeble", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
            { option: "C", answer: "persuasive", chinese_answer: "有说服力的", chinese_romanization: "yǒu shuōfúlì de" },
            { option: "D", answer: "credible", chinese_answer: "可信的", chinese_romanization: "kěxìn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'feeble' means lacking strength of character or effectiveness." +
            "<br><br>" +
            "(A) 'compelling' means evoking interest, attention, or admiration in a powerfully irresistible way." +
            "<br><br>" +
            "(C) 'persuasive' means good at persuading someone to do or believe something through reasoning or the use of temptation." +
            "<br><br>" +
            "(D) 'credible' means able to be believed; convincing.",
        chinese_explanation: "(B) '无力的' 意味着缺乏性格力量或有效性。" +
            "<br><br>" +
            "(A) '令人信服的' 意味着以一种强烈不可抗拒的方式引起兴趣、注意或钦佩的。" +
            "<br><br>" +
            "(C) '有说服力的' 意味着通过推理或使用诱惑使某人做某事或相信某事的能力。" +
            "<br><br>" +
            "(D) '可信的' 意味着能够被相信的；令人信服的。"
    },
    {
        id: 8,
        question: "As the CEO's assistant, she was __________ to confidential information about the upcoming merger.",
        chinese_question: "作为首席执行官的助理，她 __________ 获悉有关即将到来的并购的机密信息。",
        answers: [
            { option: "A", answer: "unaware", chinese_answer: "不知情的", chinese_romanization: "bù zhī qíng de" },
            { option: "B", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wú zhī de" },
            { option: "C", answer: "privy", chinese_answer: "知情的", chinese_romanization: "zhī qíng de" },
            { option: "D", answer: "oblivious", chinese_answer: "茫然的", chinese_romanization: "mángrán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'privy' means sharing in the knowledge of something secret or private." +
            "<br><br>" +
            "(A) 'unaware' means having no knowledge of a situation or fact." +
            "<br><br>" +
            "(B) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
            "<br><br>" +
            "(D) 'oblivious' means not aware of or not concerned about what is happening around one.",
        chinese_explanation: "(C) '知情的' 意味着分享某些秘密或私人知识。" +
            "<br><br>" +
            "(A) '不知情的' 意味着不知道情况或事实。" +
            "<br><br>" +
            "(B) '无知的' 意味着缺乏一般知识或意识；未受教育的或不谙世事的。" +
            "<br><br>" +
            "(D) '茫然的' 意味着没有意识到或不关心周围发生的事情。"
    },
    {
        id: 9,
        question: "The __________ cat sat on the windowsill, enjoying the afternoon sun.",
        chinese_question: "那只 __________ 的猫坐在窗台上，享受着下午的阳光。",
        answers: [
            { option: "A", answer: "slender", chinese_answer: "苗条的", chinese_romanization: "miáotiáo de" },
            { option: "B", answer: "rotund", chinese_answer: "圆胖的", chinese_romanization: "yuánpàng de" },
            { option: "C", answer: "gaunt", chinese_answer: "消瘦的", chinese_romanization: "xiāoshòu de" },
            { option: "D", answer: "thin", chinese_answer: "瘦的", chinese_romanization: "shòu de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rotund' means plump or round in shape." +
            "<br><br>" +
            "(A) 'slender' means gracefully thin." +
            "<br><br>" +
            "(C) 'gaunt' means extremely thin and bony." +
            "<br><br>" +
            "(D) 'thin' means having little, or too little, flesh or fat on the body.",
        chinese_explanation: "(B) '圆胖的' 意味着丰满或圆形的。" +
            "<br><br>" +
            "(A) '苗条的' 意味着优美的瘦。" +
            "<br><br>" +
            "(C) '消瘦的' 意味着极瘦和骨瘦如柴的。" +
            "<br><br>" +
            "(D) '瘦的' 意味着身体上几乎没有或没有足够的肉或脂肪的。"
    },
    {
        id: 10,
        question: "The salad was full of __________ flavors that delighted her taste buds.",
        chinese_question: "沙拉充满了__________的味道，让她的味蕾感到愉悦。",
        answers: [
            { option: "A", answer: "bland", chinese_answer: "清淡的", chinese_romanization: "qīngdàn de" },
            { option: "B", answer: "zesty", chinese_answer: "开胃的", chinese_romanization: "kāiwèi de" },
            { option: "C", answer: "tasteless", chinese_answer: "无味的", chinese_romanization: "wúwèi de" },
            { option: "D", answer: "dull", chinese_answer: "无趣的", chinese_romanization: "wúqù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'zesty' means having a strong, pleasant, and somewhat spicy flavor." +
            "<br><br>" +
            "(A) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(C) 'tasteless' means lacking flavor." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(B) '开胃的'一词意味着具有强烈、令人愉悦且略带辛辣的味道。" +
            "<br><br>" +
            "(A) '清淡的' 意味着缺乏强烈特征或特点，因此不有趣的。" +
            "<br><br>" +
            "(C) '无味的' 意味着没有味道的。" +
            "<br><br>" +
            "(D) '无趣的' 意味着缺乏兴趣或兴奋的。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
