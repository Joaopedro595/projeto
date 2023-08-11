function checkField(field) {
    if (!field.checkValidity()) {
    addError(field);
    } else {
    removeError(field);
    }
    }
    for (let button of form.answer) {
    button.addEventListener('click', function(e) {
    checkField(answer);
    });
    }
    
            
                 <label for="u1">yes</label> 
                 <input type="radio" id="u1">
                 <label for="u2">no</label>
                 <input type="radio" id="u2">
                 <input type="submit">