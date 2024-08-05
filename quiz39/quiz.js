// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He was the __________ survivor of the shipwreck, floating on a piece of debris until rescue arrived.",
        chinese_question: "他是沉船事故中唯一的 __________ 生还者，漂浮在一块残骸上直到救援到来。",
        answers: [
            { option: "A", answer: "sole", chinese_answer: "唯一", chinese_romanization: "wéiyī" },
            { option: "B", answer: "multiple", chinese_answer: "多个", chinese_romanization: "duōgè" },
            { option: "C", answer: "common", chinese_answer: "常见", chinese_romanization: "chángjiàn" },
            { option: "D", answer: "shared", chinese_answer: "共享", chinese_romanization: "gòngxiǎng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sole' means being the only one." +
            "<br><br>" +
            "(B) 'multiple' means having or involving several parts, elements, or members." +
            "<br><br>" +
            "(C) 'common' means occurring, found, or done often." +
            "<br><br>" +
            "(D) 'shared' means used or enjoyed by more than one person.",
        chinese_explanation: "(A) '唯一' 意味着是唯一的一个。" +
            "<br><br>" +
            "(B) '多个' 意味着有几个部分、元素或成员。" +
            "<br><br>" +
            "(C) '常见' 意味着经常发生、发现或完成的。" +
            "<br><br>" +
            "(D) '共享' 意味着由不止一个人使用或享受。"
    },
    {
        id: 2,
        question: "She became __________ in Spanish after studying it for five years and living in Spain for two.",
        chinese_question: "经过五年的学习和在西班牙两年的生活，她在西班牙语方面变得非常 __________。",
        answers: [
            { option: "A", answer: "inexperienced", chinese_answer: "缺乏经验的", chinese_romanization: "quēfá jīngyàn de" },
            { option: "B", answer: "proficient", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" },
            { option: "C", answer: "unskilled", chinese_answer: "不熟练的", chinese_romanization: "bù shúliàn de" },
            { option: "D", answer: "novice", chinese_answer: "新手的", chinese_romanization: "xīnshǒu de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'proficient' means competent or skilled in doing or using something." +
            "<br><br>" +
            "(A) 'inexperienced' means lacking experience; not having much knowledge or skill." +
            "<br><br>" +
            "(C) 'unskilled' means not having or requiring special skill or training." +
            "<br><br>" +
            "(D) 'novice' means a person new to or inexperienced in a field or situation.",
        chinese_explanation: "(B) '熟练的' 意味着在做某事或使用某物方面有能力或技能的。" +
            "<br><br>" +
            "(A) '缺乏经验的' 意味着缺乏经验的；没有太多知识或技能的。" +
            "<br><br>" +
            "(C) '不熟练的' 意味着没有或不需要特殊技能或培训的。" +
            "<br><br>" +
            "(D) '新手的' 意味着在某个领域或情况下新手或没有经验的人。"
    },
    {
        id: 3,
        question: "The __________ fox managed to escape the trap set by the hunters with its clever tactics.",
        chinese_question: "这只 __________ 的狐狸凭借其聪明的策略逃脱了猎人设下的陷阱。",
        answers: [
            { option: "A", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
            { option: "B", answer: "wily", chinese_answer: "狡猾的", chinese_romanization: "jiǎohuá de" },
            { option: "C", answer: "straightforward", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "D", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wily' means skilled at gaining an advantage, especially deceitfully." +
            "<br><br>" +
            "(A) 'naive' means showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'honest' means free of deceit and untruthfulness; sincere.",
        chinese_explanation: "(B) '狡猾的' 意味着擅长获得优势，尤其是通过欺骗手段。" +
            "<br><br>" +
            "(A) '天真的' 意味着缺乏经验、智慧或判断力的。" +
            "<br><br>" +
            "(C) '直率的' 意味着简单易懂的。" +
            "<br><br>" +
            "(D) '诚实的' 意味着没有欺骗和不诚实；真诚的。"
    },
    {
        id: 4,
        question: "The __________ melody of the song made it an instant hit.",
        chinese_question: "这首歌的__________旋律使它立刻成为热门。",
        answers: [
            { option: "A", answer: "discordant", chinese_answer: "不和谐的", chinese_romanization: "bù héxié de" },
            { option: "B", answer: "tuneful", chinese_answer: "悦耳的", chinese_romanization: "yuè'ěr de" },
            { option: "C", answer: "harsh", chinese_answer: "刺耳的", chinese_romanization: "cìěr de" },
            { option: "D", answer: "grating", chinese_answer: "刺耳的", chinese_romanization: "cìěr de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tuneful' means having a pleasing tune; melodious." +
            "<br><br>" +
            "(A) 'discordant' means disagreeing or incongruous." +
            "<br><br>" +
            "(C) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(D) 'grating' means sounding harsh and unpleasant.",
        chinese_explanation: "(B) '悦耳的'一词意味着有一个悦耳的曲调；旋律优美的。" +
            "<br><br>" +
            "(A) '不和谐的' 意味着不一致或不协调的。" +
            "<br><br>" +
            "(C) '刺耳的' 意味着使感官不愉快地粗糙或刺耳的。" +
            "<br><br>" +
            "(D) '刺耳的' 意味着声音刺耳和不愉快的。"
    },
    {
        id: 5,
        question: "Her __________ efforts in helping the community were recognized with an award.",
        chinese_question: "她为社区服务的 __________ 努力获得了表彰。",
        answers: [
            { option: "A", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "B", answer: "tireless", chinese_answer: "不知疲倦的", chinese_romanization: "bùzhī píjuàn de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "D", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tireless' means having or showing great effort or energy." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'sluggish' means slow-moving or inactive.",
        chinese_explanation: "(B) '不知疲倦的' 意味着表现出巨大努力或能量的。" +
            "<br><br>" +
            "(A) '懒惰的' 意味着不愿工作或使用精力的。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别兴趣或同情的。" +
            "<br><br>" +
            "(D) '迟缓的' 意味着行动缓慢或不活跃的。"
    },
    {
        id: 6,
        question: "Her __________ appearance at the gala, with a perfectly tailored dress and flawless makeup, drew everyone's attention.",
        chinese_question: "她在晚会上 __________ 的外表，穿着完美剪裁的礼服和无瑕的妆容，引起了所有人的注意。",
        answers: [
            { option: "A", answer: "shabby", chinese_answer: "破旧的", chinese_romanization: "pòjiù de" },
            { option: "B", answer: "sleek", chinese_answer: "光滑的", chinese_romanization: "guānghuá de" },
            { option: "C", answer: "disheveled", chinese_answer: "凌乱的", chinese_romanization: "língluàn de" },
            { option: "D", answer: "messy", chinese_answer: "混乱的", chinese_romanization: "hǔnluàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sleek' means smooth and glossy; having an elegant, streamlined shape, often used figuratively to mean polished and well-executed." +
            "<br><br>" +
            "(A) 'shabby' means in poor condition through long or hard use or lack of care." +
            "<br><br>" +
            "(C) 'disheveled' means (of a person's hair, clothes, or appearance) untidy; disordered." +
            "<br><br>" +
            "(D) 'messy' means untidy or dirty.",
        chinese_explanation: "(B) '光滑的' 意味着光滑和有光泽的；具有优雅的流线型外形，通常用作比喻意指精致和执行良好的。" +
            "<br><br>" +
            "(A) '破旧的' 意味着由于长时间或使用不当或缺乏保养而处于不良状态。" +
            "<br><br>" +
            "(C) '凌乱的' 意味着（一个人的头发、衣服或外表）不整洁的；混乱的。" +
            "<br><br>" +
            "(D) '混乱的' 意味着不整洁或肮脏的。"
    },
    {
        id: 7,
        question: "Her __________ efforts to help the community during the crisis were widely praised.",
        chinese_question: "她在危机期间帮助社区的 __________ 努力得到了广泛的赞誉。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "B", answer: "gallant", chinese_answer: "勇敢的", chinese_romanization: "yǒnggǎn de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "D", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gallant' means showing special courtesy or respect, often used figuratively to describe noble and selfless actions." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(B) '勇敢的' 意味着表现出特别的礼貌或尊重，通常用作比喻来描述高尚和无私的行为。" +
            "<br><br>" +
            "(A) '自私的' 意味着缺乏对他人的考虑；主要关心自己的利益或快乐。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着表现出或感受到没有兴趣、热情或关注的。"
    },
    {
        id: 8,
        question: "The situation became __________ when he realized he had forgotten her name.",
        chinese_question: "当他意识到自己忘记了她的名字时，情况变得很 __________。",
        answers: [
            { option: "A", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "B", answer: "smooth", chinese_answer: "平滑的", chinese_romanization: "pínghuá de" },
            { option: "C", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" },
            { option: "D", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'awkward' means causing difficulty; hard to deal with; uncomfortable." +
            "<br><br>" +
            "(A) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(B) 'smooth' means having an even and regular surface or consistency; free from perceptible projections, lumps, or indentations." +
            "<br><br>" +
            "(D) 'confident' means feeling or showing confidence in oneself; self-assured.",
        chinese_explanation: "(C) '尴尬的' 意味着造成困难；难以处理；不舒服的。" +
            "<br><br>" +
            "(A) '放松的' 意味着没有紧张和焦虑。" +
            "<br><br>" +
            "(B) '平滑的' 意味着具有平整和规则的表面或一致性；没有明显的凸起、疙瘩或凹痕。" +
            "<br><br>" +
            "(D) '自信的' 意味着对自己有信心或表现出自信；自信的。"
    },
    {
        id: 9,
        question: "The __________ response from the emergency services saved many lives during the crisis.",
        chinese_question: "紧急服务的 __________ 响应在危机期间挽救了许多生命。",
        answers: [
            { option: "A", answer: "instant", chinese_answer: "立即", chinese_romanization: "lìjí" },
            { option: "B", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "gradual", chinese_answer: "逐渐", chinese_romanization: "zhújiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'instant' means happening or coming immediately." +
            "<br><br>" +
            "(B) 'delayed' means postponed or slowed down." +
            "<br><br>" +
            "(C) 'hesitant' means unsure or slow in acting or speaking." +
            "<br><br>" +
            "(D) 'gradual' means taking place or progressing slowly or by degrees.",
        chinese_explanation: "(A) '立即' 意味着立即发生或来到。" +
            "<br><br>" +
            "(B) '延迟' 意味着推迟或减慢。" +
            "<br><br>" +
            "(C) '犹豫' 意味着行动或说话不确定或缓慢。" +
            "<br><br>" +
            "(D) '逐渐' 意味着缓慢或逐步发生或进展。"
    },
    {
        id: 10,
        question: "The ecosystem in the rainforest is quite __________ and can be disrupted by small changes.",
        chinese_question: "雨林中的生态系统非常 __________ ，可能会因小的变化而被破坏。",
        answers: [
            { option: "A", answer: "fragile", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
            { option: "B", answer: "resilient", chinese_answer: "有韧性", chinese_romanization: "yǒu rènxìng" },
            { option: "C", answer: "robust", chinese_answer: "强壮", chinese_romanization: "qiángzhuàng" },
            { option: "D", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(B) 'resilient' means able to withstand or recover quickly from difficult conditions." +
            "<br><br>" +
            "(C) 'robust' means strong and healthy; vigorous." +
            "<br><br>" +
            "(D) 'stable' means not likely to give way or overturn; firmly fixed.",
        chinese_explanation: "(A) '脆弱' 意味着容易破碎或损坏。" +
            "<br><br>" +
            "(B) '有韧性' 意味着能够承受或迅速从困境中恢复。" +
            "<br><br>" +
            "(C) '强壮' 意味着强壮和健康；有活力。" +
            "<br><br>" +
            "(D) '稳定' 意味着不容易倒塌或翻倒；牢固固定。"
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
