// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ headquarters of the multinational company is located in New York City, housing thousands of employees.",
        chinese_question: "这家跨国公司的 __________ 总部位于纽约市，拥有数千名员工。",
        answers: [
            { option: "A", answer: "individual", chinese_answer: "个人的", chinese_romanization: "gèrén de" },
            { option: "B", answer: "local", chinese_answer: "当地的", chinese_romanization: "dāngdì de" },
            { option: "C", answer: "corporate", chinese_answer: "公司的", chinese_romanization: "gōngsī de" },
            { option: "D", answer: "private", chinese_answer: "私人的", chinese_romanization: "sīrén de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'corporate' means relating to a large company or group." +
            "<br><br>" +
            "(A) 'individual' means single; separate." +
            "<br><br>" +
            "(B) 'local' means relating or restricted to a particular area or one's neighborhood." +
            "<br><br>" +
            "(D) 'private' means belonging to or for the use of one particular person or group of people only.",
        chinese_explanation: "(C) '公司的' 意味着与大公司或集团有关的。" +
            "<br><br>" +
            "(A) '个人的' 意味着单个的；分开的。" +
            "<br><br>" +
            "(B) '当地的' 意味着与特定区域或一个人的社区有关的。" +
            "<br><br>" +
            "(D) '私人的' 意味着属于或仅供一个特定的人或人群使用的。",
    },
    {
        id: 2,
        question: "His __________ tone during the debate, dripping with cynicism, made it clear that he did not take his opponent seriously.",
        chinese_question: "他在辩论中的 __________ 语气充满了愤世嫉俗，表明他并不认真对待他的对手。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
            { option: "B", answer: "sardonic", chinese_answer: "讽刺的", chinese_romanization: "fèngcì de" },
            { option: "C", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "D", answer: "earnest", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sardonic' means grimly mocking or cynical." +
            "<br><br>" +
            "(A) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(C) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
            "<br><br>" +
            "(D) 'earnest' means resulting from or showing sincere and intense conviction.",
        chinese_explanation: "(B) '讽刺的' 意味着冷嘲的或愤世嫉俗的。" +
            "<br><br>" +
            "(A) '尊敬的' 意味着感到或表现出敬意和尊重的。" +
            "<br><br>" +
            "(C) '真诚的' 意味着没有伪装或欺骗的；出于真诚的感情的。" +
            "<br><br>" +
            "(D) '认真的' 意味着由于或表现出真诚和强烈的信念。"
    },
    {
        id: 3,
        question: "Not deterred by the harsh weather or the steep terrain, the climbers were __________ in their efforts to reach the summit and achieve their goal.",
        chinese_question: "没有被恶劣的天气或陡峭的地形吓倒，登山者在努力到达顶峰并实现他们的目标时表现得非常__________。",
        answers: [
            { option: "A", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "B", answer: "tenacious", chinese_answer: "顽强的", chinese_romanization: "wánqiáng de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "D", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tenacious' means tending to keep a firm hold of something; clinging or adhering closely." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(B) '顽强的'一词意味着倾向于牢牢抓住某物；紧紧附着或坚持的。" +
            "<br><br>" +
            "(A) '懒惰的' 意味着不愿工作或使用能量的。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情；漠不关心的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心。"
    },
    {
        id: 4,
        question: "The chef prepared a __________ meal using fresh vegetables, lean proteins, and whole grains to ensure everyone received the necessary vitamins and minerals.",
        chinese_question: "厨师用新鲜蔬菜、瘦肉蛋白和全谷物准备了一顿 __________ 的饭菜，以确保每个人都能摄取必要的维生素和矿物质。",
        answers: [
            { option: "A", answer: "unhealthy", chinese_answer: "不健康的", chinese_romanization: "bù jiànkāng de" },
            { option: "B", answer: "nutritious", chinese_answer: "有营养的", chinese_romanization: "yǒu yíngyǎng de" },
            { option: "C", answer: "tasteless", chinese_answer: "无味的", chinese_romanization: "wúwèi de" },
            { option: "D", answer: "fatty", chinese_answer: "高脂肪的", chinese_romanization: "gāo zhīfáng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nutritious' means providing the substances needed for growth, health, and good condition." +
            "<br><br>" +
            "(A) 'unhealthy' means not conducive to good health." +
            "<br><br>" +
            "(C) 'tasteless' means lacking flavor or taste." +
            "<br><br>" +
            "(D) 'fatty' means containing a large amount of fat.",
        chinese_explanation: "(B) '有营养的' 意味着提供生长、健康和良好状态所需的物质。" +
            "<br><br>" +
            "(A) '不健康的' 意味着不利于健康的。" +
            "<br><br>" +
            "(C) '无味的' 意味着缺乏味道的。" +
            "<br><br>" +
            "(D) '高脂肪的' 意味着含有大量脂肪的。"
    },
    {
        id: 5,
        question: "His __________ smile indicated that he found the situation both amusing and slightly annoying.",
        chinese_question: "他那 __________ 的笑容表明他觉得这种情况既有趣又有点恼人。",
        answers: [
            { option: "A", answer: "wry", chinese_answer: "嘲讽的", chinese_romanization: "cháofèng de" },
            { option: "B", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "C", answer: "joyful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'wry' means using or expressing dry, especially mocking, humor." +
            "<br><br>" +
            "(B) 'sincere' means free from pretense or deceit; genuine." +
            "<br><br>" +
            "(C) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(A) '嘲讽的' 意味着使用或表达干涩的，特别是嘲弄的幽默。" +
            "<br><br>" +
            "(B) '真诚的' 意味着没有虚伪或欺骗；真实的。" +
            "<br><br>" +
            "(C) '快乐的' 意味着感到、表达或引起极大的快乐和幸福。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心。"
    },
    {
        id: 6,
        question: "Clear and to the point, the teacher's __________ instructions clearly outlined the task and left no room for questions.",
        chinese_question: "清晰且直截了当，老师的 __________ 指示清楚地说明了任务，不留任何疑问。",
        answers: [
            { option: "A", answer: "rambling", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "B", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎng kě de" },
            { option: "C", answer: "convoluted", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "D", answer: "terse", chinese_answer: "简短的", chinese_romanization: "jiǎnduǎn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'terse' means sparing in the use of words; abrupt." +
            "<br><br>" +
            "(A) 'rambling' means lengthy and confused or inconsequential." +
            "<br><br>" +
            "(B) 'ambiguous' means open to more than one interpretation; not having one obvious meaning." +
            "<br><br>" +
            "(C) 'convoluted' means (especially of an argument, story, or sentence) extremely complex and difficult to follow.",
        chinese_explanation: "(D) '简短的' 意味着用词节省；突然的。" +
            "<br><br>" +
            "(A) '冗长的' 意味着冗长而混乱或无关紧要的。" +
            "<br><br>" +
            "(B) '模棱两可的' 意味着有多种解释的；没有一个明显的意义的。" +
            "<br><br>" +
            "(C) '复杂的' 意味着（尤其是指争论、故事或句子）极其复杂且难以理解的。"
    },
    {
        id: 7,
        question: "His __________ behavior at the meeting raised a few eyebrows and left people wondering what was going on.",
        chinese_question: "他在会议上的 __________ 行为引起了几个人的注意，让人们猜测发生了什么事。",
        answers: [
            { option: "A", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "B", answer: "standard", chinese_answer: "标准的", chinese_romanization: "biāozhǔn de" },
            { option: "C", answer: "usual", chinese_answer: "通常的", chinese_romanization: "tōngcháng de" },
            { option: "D", answer: "peculiar", chinese_answer: "奇特的", chinese_romanization: "qítè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'peculiar' means strange or odd; unusual." +
            "<br><br>" +
            "(A) 'typical' means having the distinctive qualities of a particular type of person or thing." +
            "<br><br>" +
            "(B) 'standard' means used or accepted as normal or average." +
            "<br><br>" +
            "(C) 'usual' means habitually or typically occurring or done; customary.",
        chinese_explanation: "(D) '奇特的' 意味着奇怪的或古怪的；不寻常的。" +
            "<br><br>" +
            "(A) '典型的' 意味着具有某种类型的人的或事物的独特品质的。" +
            "<br><br>" +
            "(B) '标准的' 意味着被用作或接受为正常或平均的。" +
            "<br><br>" +
            "(C) '通常的' 意味着习惯性地或典型地发生或完成的；惯常的。"
    },
    {
        id: 8,
        question: "The politician's __________ behaviour, including accepting bribes and engaging in illegal activities, shocked the public and led to his resignation.",
        chinese_question: "这位政治家的 __________ 行为，包括收受贿赂和参与非法活动，震惊了公众，导致他辞职。",
        answers: [
            { option: "A", answer: "scandalous", chinese_answer: "丑闻的", chinese_romanization: "chǒuwén de" },
            { option: "B", answer: "honorable", chinese_answer: "光荣的", chinese_romanization: "guāngróng de" },
            { option: "C", answer: "respectable", chinese_answer: "体面的", chinese_romanization: "tǐmiàn de" },
            { option: "D", answer: "praiseworthy", chinese_answer: "值得称赞的", chinese_romanization: "zhídé chēngzàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'scandalous' means causing general public outrage by a perceived offense against morality or law." +
            "<br><br>" +
            "(B) 'honorable' means bringing or worthy of honor." +
            "<br><br>" +
            "(C) 'respectable' means regarded by society to be good, proper, or correct." +
            "<br><br>" +
            "(D) 'praiseworthy' means deserving approval and admiration.",
        chinese_explanation: "(A) '丑闻的' 意味着因对道德或法律的冒犯而引起公众的愤慨。" +
            "<br><br>" +
            "(B) '光荣的' 意味着带来或值得荣誉的。" +
            "<br><br>" +
            "(C) '体面的' 意味着被社会认为是好的、适当的或正确的。" +
            "<br><br>" +
            "(D) '值得称赞的' 意味着值得认可和钦佩的。"
    },
    {
        id: 9,
        question: "She was very __________ about the books she chose to read, only picking those with excellent reviews.",
        chinese_question: "她对选择阅读的书籍非常__________，只挑选那些评价极好的书。",
        answers: [
            { option: "A", answer: "indiscriminate", chinese_answer: "不加选择的", chinese_romanization: "bù jiā xuǎnzé de" },
            { option: "B", answer: "selective", chinese_answer: "精选的", chinese_romanization: "jīngxuǎn de" },
            { option: "C", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" },
            { option: "D", answer: "haphazard", chinese_answer: "杂乱无章的", chinese_romanization: "záluàn wúzhāng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'selective' means relating to or involving the selection of the most suitable or best qualified." +
            "<br><br>" +
            "(A) 'indiscriminate' means done at random or without careful judgment." +
            "<br><br>" +
            "(C) 'random' means made, done, happening, or chosen without method or conscious decision." +
            "<br><br>" +
            "(D) 'haphazard' means lacking any obvious principle of organization.",
        chinese_explanation: "(B) '精选的'一词意味着与选择最合适或最有资格的相关或涉及的。" +
            "<br><br>" +
            "(A) '不加选择的' 意味着随机的或没有仔细判断的。" +
            "<br><br>" +
            "(C) '随机的' 意味着没有方法或有意识决定的。" +
            "<br><br>" +
            "(D) '杂乱无章的' 意味着缺乏任何明显的组织原则的。"
    },
    {
        id: 10,
        question: "The diplomat's __________ negotiation skills were displayed through his careful listening, persuasive arguments, and ability to reach a peaceful agreement.",
        chinese_question: "外交官的 __________ 谈判技巧通过他细心的倾听、有说服力的论点和达成和平协议的能力得以展示。",
        answers: [
            { option: "A", answer: "inept", chinese_answer: "无能的", chinese_romanization: "wúnéng de" },
            { option: "B", answer: "unskilled", chinese_answer: "不熟练的", chinese_romanization: "bù shúliàn de" },
            { option: "C", answer: "incompetent", chinese_answer: "无能力的", chinese_romanization: "wúlì de" },
            { option: "D", answer: "consummate", chinese_answer: "完美的", chinese_romanization: "wánměi de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'consummate' means showing a high degree of skill and flair; complete or perfect." +
            "<br><br>" +
            "(A) 'inept' means having or showing no skill; clumsy." +
            "<br><br>" +
            "(B) 'unskilled' means lacking training or experience." +
            "<br><br>" +
            "(C) 'incompetent' means not having the necessary skills to do something successfully.",
        chinese_explanation: "(D) '完美的' 意味着表现出高超的技艺和风格；完整或完美。" +
            "<br><br>" +
            "(A) '无能的' 意味着没有或表现出没有技能；笨拙。" +
            "<br><br>" +
            "(B) '不熟练的' 意味着缺乏培训或经验。" +
            "<br><br>" +
            "(C) '无能力的' 意味着没有必要的技能来成功地完成某事。"
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
