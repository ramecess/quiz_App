let Nbrcorrects = document.getElementById("nbrcorrects");
console.log(Nbrcorrects);
console.log(Nbrcorrects.innerText)
let Nbrquestion = document.getElementsByClassName("nbrquestions");
let screenquestion=document.getElementById("question_sreen");
console.log(Nbrquestion)
function Quiz() {
    this.questions = [];
    this.nbrcorrects=0;


this.addQuestion = function (question) {
    this.questions.push(question);
}
this.showcurrentquestion=function(){
    
    this.questions[0].getmain();
    
}
 this.showResult=function(){
    let aff="Resultats:\n"+this.nbrcorrects+"sur"+this.question.lenght+"corrects";
 }
}
function Question(tittle,answers,answercorrect){
    this.tittle=tittle,
    this.answers=answers,
    this.answercorrect=answercorrect,
    this.getmain=function(){
        let nombre_question=document.createElement("h2");
        nombre_question.classList.add("number");
        nombre_question.innerText = "question 1/3";
        console.log(nombre_question);
        screenquestion.append(nombre_question);
    
        let titre=document.createElement("h3");
        titre.textContent=this.tittle;
        screenquestion.append(titre);
        this.answers.forEach((answer)=> {
            let questionAnswer=document.createElement("ul");
       
    
            let réponses=document.createElement("li");
            réponses.classList.add("Answers");
            réponses.textContent=answer;
            questionAnswer.append(réponses);
            screenquestion.append(questionAnswer);

            réponses.addEventListener("click",this.checkAnswers);
        });
    
       
    }
    this.checkAnswers=(a)=>{
        console.log(a.target);
        console.log(this.answercorrect);
    }

 this.addanswer = function (answer){
    this.answers.push(answer);
}
correctanswer=function(answerUser){

}
}
let quiz=new Quiz;
let question1 =new Question ("signification de HTML", ["HyperText and Links Markup Language ", "HyperText Markup Language", "HighText Machine Language"], 2);
quiz.addQuestion(question1);
console.log(quiz);
let question2 =new Question("Le rôle du HTML est de",["Créer des sites e-commerce","Mettre en forme du texte","Structurer le contenu"],3);
quiz.addQuestion(question2);
console.log(quiz);
let main1=question2.getmain;
console.log(main1);
let question3=new Question("La séquence correcte de balises HTML pour commencer une paqge",["Head,Title,HTML,Body","HTML,Head,Title,Body","HTML,Body,Title,Head"],2);
quiz.addQuestion(question3);
console.log(quiz);
let question4=new Question("comment créer une liste non ordonnée en HTML",["<ul>","<ol>","<li>"],1);
quiz.addQuestion(question4);
let question5= new Question("Pour definir un titre dans une page HTML,on utilise",["L'element tittle","L'element head","Un element h1,h2,...,h6"],3);
quiz.addQuestion(question5);
let question6=new Question("A quoi sert l'attribut alt de l'element img?"["A donner un lien alternatif vers l'image si le premier est cassé","A afficher une deuxiéme image si la  premier ne peut pas s'afficher ","Etre le plan de sauvegarde si le changement de l'image échoue"],3);
quiz.addQuestion(question6);
let question7=new Question("Parmi les éléments suivants lequel est responsable de la mise en gras du texte en HTML",["<pre>","<b>","<br>"],2);
quiz.addQuestion(question7);
let question8=new Question("Lorsque vous utilisez l'élément a vous devez obligatoirement preciser..",["Un attribut target","Un attribut href","Deux attributs href et target"],2);
quiz.addQuestion(question8);
let question9=new Question("parmi les tag suivants,lequel est utilisé pour insérer un saut de ligne en HTML",["<pre>","<br>","<b>"],3);
quiz.addQuestion(question9);
let question10=new Question("Quel est le caractére utiliser pour représenter la femerture d'une balise HTML?",["!","/","."],2);
quiz.addQuestion(question10);
console.log(quiz);
for(let i=0;i<Nbrquestion.length;i++){
    Nbrquestion[i].textContent=quiz.questions.length;
}
function Firsquestion(){
    let accueil =document.getElementById("accueil_screen");
    accueil.style.display="none";
    screenquestion.style.display ="block";
    quiz.showcurrentquestion();
}
let btn=document.getElementById('btns');
btn.addEventListener("click",Firsquestion);
