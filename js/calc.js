expStack = [];
operators = ['+', '-', '/', '*'];

function evaluate(curr) {
    if(curr !== "") {
        expStack.push(curr);
        evString = expStack.join(" ");
        ans = eval(evString);
        expStack = expStack.splice(0, 0);
        //expStack.push(ans.toString());
        return ans;
    }
    return "";
}

$(document).ready(function() {
    $(".my-btn").click(function() {
        $(this).animate({top: '+=3px'}, {duration: 50});
        $(this).animate({top: '-=3px'}, {duration: 50});
    });

    $(".num").click(function() {
        myNum = $(this).children("p").html();
        var val = $("#screen-text").html();
        val += myNum;
        $("#screen-text").html(val);
    });

    $("#dec").click(function() {
       var val = $("#screen-text").html();
       if(val.indexOf('.') === -1) {
        val += '.';
        $("#screen-text").html(val);
       } 
    });

    $(".bi-operator").click(function() {
        var val = $("#screen-text").html();
        if(operators.indexOf(expStack[expStack.length - 1]) !== -1 && val === '')
            expStack.pop();
        expStack.push(val);
        var operator = $(this).children("p").html();
        if(operator === 'x')
            operator = '*';
        if(operator === "\u00F7")
            operator = '/';
        expStack.push(operator);
        //console.log(expStack);
        $("#screen-text").html("");
    });

    $("#equals").click(function() {
        var val = $("#screen-text").html();
        $("#screen-text").html(evaluate(val));
    });

    $("#ce").click(function() {
        $("#screen-text").html('');
    });

    $("#ac").click(function() {
        expStack = expStack.splice(0, 0);
        $("#screen-text").html('');
    });
});