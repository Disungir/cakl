        // переменная, в которой хранится выбранное математическое действие
        var op;
        // функция расчета
        function func() {
            // переменная для результата
            var result;
            // получаем первое и второе число
            var num1 = Number(document.getElementById("num1").value);
            var num2 = Number(document.getElementById("num2").value);
            // смотрим, что было в перемнной с действием, и действуем исходя из этого 
            switch (op) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                      
            }
            document.getElementById("result").innerHTML = result;  
        }