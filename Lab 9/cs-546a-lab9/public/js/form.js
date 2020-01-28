(function() {

    function isPrime(num) {
        if (!num) throw "No number provided";

        if (num === 2) return true;

        if (num < 2) return false;

        let count = 0;
        let n = 2;
        while(n < num){
          if(num%n === 0){
            count++;
          }
          n++; 
        }
        if(count > 0 ) return false;
        else return true;

      }
    
    
    const staticForm = document.getElementById("static-form");
  
    if (staticForm) {
      // We can store references to our elements; it's better to
      // store them once rather than re-query the DOM traversal each time
      // that the event runs.
      const numberElement = document.getElementById("number1");
  
      const errorContainer = document.getElementById("error-container");
      const errorTextElement = errorContainer.getElementsByClassName(
        "text-goes-here"
      )[0];
  
      const resultContainer = document.getElementById("result-container");
      const resultList = document.getElementById("attempts");
  
      // We can take advantage of functional scoping; our event listener has access to its outer functional scope
      // This means that these variables are accessible in our callback
      staticForm.addEventListener("submit", event => {
        event.preventDefault();
  
        try {
          // hide containers by default
          errorContainer.classList.add("hidden");
          resultContainer.classList.add("hidden");
  
          // Values come from inputs as strings, no matter what :(
          const numberValue = numberElement.value;
  
          const parsedValue = parseInt(numberValue);

          //numbers.push(parsedValue);
  
          const result = isPrime(parsedValue);

          var li = document.createElement("li");
          if(result){
            li.appendChild(document.createTextNode(parsedValue + " is a prime number"));
            li.classList.add("is-prime");
            resultList.appendChild(li);
          }
          else{
            li.appendChild(document.createTextNode(parsedValue + " is NOT a prime number"));
            li.classList.add("not-prime");
            resultList.appendChild(li);
          }
          
  
          resultContainer.classList.remove("hidden");
        } catch (e) {
          const message = typeof e === "string" ? e : e.message;
          errorTextElement.textContent = message;
          errorContainer.classList.remove("hidden");
        }
      });
    }
  })();
  