# **Step 3: JavaScript Interactivity**

## **Objective**

Add interactivity to the quiz game so that clicking an answer shows correct/incorrect feedback.

## **Instructions**

1.  Create a JavaScript file named `script.js`.
    
2.  Add the following code:
    

`const buttons = document.querySelectorAll(".answer-btn"); const feedback = document.getElementById("feedback");  buttons.forEach(button => {   button.addEventListener("click", () => {     if(button.textContent === "Paris") {       feedback.textContent = "Correct! 🎉";       feedback.style.color = "green";     } else {       feedback.textContent = "Incorrect. ❌ Try again!";       feedback.style.color = "red";     }   }); });`

## **Tasks**

-   Implement the **click event** for all answer buttons.
    
-   Display feedback in the `#feedback` paragraph.
    
-   Keep **HTML and CSS unchanged**.
    

## **Outcome**

-   Students will have a **fully functional interactive quiz**.
    
-   All three steps together create a simple but complete web project.
    

## **Submission**

-   Upload your project to your **`web140` GitHub repository or folder**.
    
-   Ensure **GitHub Pages** is enabled for your `username.github.io` repository.
    
-   Submit the **live GitHub Pages link** for your project:
    

`https://yourusername.github.io/web140/`
