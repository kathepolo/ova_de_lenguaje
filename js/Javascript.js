function seleccionar1() {
        var opc1 = document.getElementById('opc1').value;
        opc1 = parseInt(opc1);
        var resultado = '';
        switch (opc1) {
                case 1: resultado = "Selecciona una respuesta válida para la pregunta 1";
                        document.getElementById("dm1").style.color = "Red"; break;
                case 2: resultado = 'La primera respuesta es incorrecta';
                        document.getElementById("dm1").style.color = "Red"; break;
                case 3: resultado = 'La primera respuesta es incorrecta';
                        document.getElementById("dm1").style.color = "Red"; break;
                case 4: resultado = 'La primera respuesta es incorrecta';
                        document.getElementById("dm1").style.color = "Red"; break;
                case 5: resultado = 'La primera respuesta es correcta';
                        document.getElementById("dm1").style.color = "#1607AE"; break;
        }
        document.getElementById('dm1').innerHTML = resultado;
}
function seleccionar2() {
        var opc2 = document.getElementById('opc2').value;
        opc2 = parseInt(opc2);
        var resultado = '';
        switch (opc2) {
                case 6: resultado = "Selecciona una respuesta válida para la pregunta 2";
                        document.getElementById("dm2").style.color = "Red"; break;
                case 7: resultado = 'La segunda respuesta es incorrecta';
                        document.getElementById("dm2").style.color = "Red"; break;
                case 8: resultado = 'La segunda respuesta es correcta';
                        document.getElementById("dm2").style.color = "#1607AE"; break;
                case 9: resultado = 'La segunda respuesta es incorrecta';
                        document.getElementById("dm2").style.color = "Red"; break;
                case 10: resultado = 'La segunda respuesta es incorrecta';
                        document.getElementById("dm2").style.color = "Red"; break;
        }
        document.getElementById('dm2').innerHTML = resultado;
}

function seleccionar3() {
        var opc3 = document.getElementById('opc3').value;
        opc3 = parseInt(opc3);
        var resultado = '';
        switch (opc3) {
                case 11: resultado = "Selecciona una respuesta válida para la pregunta 3";
                        document.getElementById("dm3").style.color = "Red"; break;
                case 12: resultado = 'La tercera respuesta es incorrecta';
                        document.getElementById("dm3").style.color = "Red"; break;
                case 13: resultado = 'La tercera respuesta es incorrecta';
                        document.getElementById("dm3").style.color = "red"; break;
                case 14: resultado = 'La tercera respuesta es correcta';
                        document.getElementById("dm3").style.color = "#1607AE"; break;
                case 15: resultado = 'La tercera respuesta es incorrecta';
                        document.getElementById("dm3").style.color = "Red"; break;
        }
        document.getElementById('dm3').innerHTML = resultado;
}

function seleccionar4() {
        var opc4 = document.getElementById('opc4').value;
        opc4 = parseInt(opc4);
        var resultado = '';
        switch (opc4) {
                case 16: resultado = "Selecciona una respuesta válida para la pregunta 4";
                        document.getElementById("dm4").style.color = "Red"; break;
                case 17: resultado = 'La cuarta respuesta es correcta';
                        document.getElementById("dm4").style.color = "#1607AE"; break;
                case 18: resultado = 'La cuarta respuesta es incorrecta';
                        document.getElementById("dm4").style.color = "Red"; break;
                case 19: resultado = 'La cuarta respuesta es incorrecta';
                        document.getElementById("dm4").style.color = "Red"; break;
                case 20: resultado = 'La cuarta respuesta es incorrecta';
                        document.getElementById("dm4").style.color = "Red"; break;
        }
        document.getElementById('dm4').innerHTML = resultado;
}
function seleccionar5() {
        var opc5 = document.getElementById('opc5').value;
        opc5 = parseInt(opc5);
        var resultado = '';
        switch (opc5) {
                case 21: resultado = "Selecciona una respuesta válida para la pregunta 5";
                        document.getElementById("dm5").style.color = "Red"; break;
                case 22: resultado = 'La quinta respuesta es incorrecta';
                        document.getElementById("dm5").style.color = "Red"; break;
                case 23: resultado = 'La quinta respuesta es incorrecta';
                        document.getElementById("dm5").style.color = "Red"; break;
                case 24: resultado = 'La quinta respuesta es incorrecta';
                        document.getElementById("dm5").style.color = "Red"; break;
                case 25: resultado = 'La quinta respuesta es correcta';
                        document.getElementById("dm5").style.color = "#1607AE"; break;
        }
        document.getElementById('dm5').innerHTML = resultado;
}
function seleccionar6() {
        var opc6 = document.getElementById('opc6').value;
        opc6 = parseInt(opc6);
        var resultado = '';
        switch (opc6) {
                case 26: resultado = "Selecciona una respuesta válida para la pregunta 6";
                        document.getElementById("dm6").style.color = "Red"; break;
                case 27: resultado = 'La sexta respuesta es incorrecta';
                        document.getElementById("dm6").style.color = "Red"; break;
                case 28: resultado = 'La sexta respuesta es correcta';
                        document.getElementById("dm6").style.color = "#1607AE"; break;
                case 29: resultado = 'La sexta respuesta es incorrecta';
                        document.getElementById("dm6").style.color = "Red"; break;
                case 30: resultado = 'La sexta respuesta es incorrecta';
                        document.getElementById("dm6").style.color = "Red"; break;
        }
        document.getElementById('dm6').innerHTML = resultado;
}
function seleccionar7() {
        var opc7 = document.getElementById('opc7').value;
        opc7 = parseInt(opc7);
        var resultado = '';
        switch (opc7) {
                case 31: resultado = "Selecciona una respuesta válida para la pregunta 7";
                        document.getElementById("dm7").style.color = "Red"; break;
                case 32: resultado = 'La séptima respuesta es incorrecta';
                        document.getElementById("dm7").style.color = "Red"; break;
                case 33: resultado = 'La séptima respuesta es incorrecta';
                        document.getElementById("dm7").style.color = "Red"; break;
                case 34: resultado = 'La séptima respuesta es correcta';
                        document.getElementById("dm7").style.color = "#1607AE"; break;
                case 35: resultado = 'La séptima respuesta es incorrecta';
                        document.getElementById("dm7").style.color = "Red"; break;
        }
        document.getElementById('dm7').innerHTML = resultado;
}
function seleccionar8() {
        var opc8 = document.getElementById('opc8').value;
        opc8 = parseInt(opc8);
        var resultado = '';
        switch (opc8) {
                case 36: resultado = "Selecciona una respuesta válida para la pregunta 8";
                        document.getElementById("dm8").style.color = "Red"; break;
                case 37: resultado = 'La octava respuesta es correcta';
                        document.getElementById("dm8").style.color = "#1607AE"; break;
                case 38: resultado = 'La octava respuesta es incorrecta';
                        document.getElementById("dm8").style.color = "Red"; break;
                case 39: resultado = 'La octava respuesta es incorrecta';
                        document.getElementById("dm8").style.color = "Red"; break;
                case 40: resultado = 'La octava respuesta es incorrecta';
                        document.getElementById("dm8").style.color = "Red"; break;
        }
        document.getElementById('dm8').innerHTML = resultado;
}
function seleccionar9() {
        var opc9 = document.getElementById('opc9').value;
        opc9 = parseInt(opc9);
        var resultado = '';
        switch (opc9) {
                case 41: resultado = "Selecciona una respuesta válida para la pregunta 9";
                        document.getElementById("dm9").style.color = "Red"; break;
                case 42: resultado = 'La novena respuesta es incorrecta';
                        document.getElementById("dm9").style.color = "Red"; break;
                case 43: resultado = 'La novena respuesta es incorrecta';
                        document.getElementById("dm9").style.color = "Red"; break;
                case 44: resultado = 'La novena respuesta es incorrecta';
                        document.getElementById("dm9").style.color = "Red"; break;
                case 45: resultado = 'La novena respuesta es correcta';
                        document.getElementById("dm9").style.color = "#1607AE"; break;
        }
        document.getElementById('dm9').innerHTML = resultado;
}
function seleccionar10() {
        var opc10 = document.getElementById('opc10').value;
        opc10 = parseInt(opc10);
        var resultado = '';
        switch (opc10) {
                case 46: resultado = "Selecciona una respuesta válida para la pregunta 10";
                        document.getElementById("dm10").style.color = "Red"; break;
                case 47: resultado = 'La décima respuesta es incorrecta';
                        document.getElementById("dm10").style.color = "Red"; break;
                case 48: resultado = 'La décima respuesta es incorrecta';
                        document.getElementById("dm10").style.color = "Red"; break;
                case 49: resultado = 'La décima respuesta es incorrecta';
                        document.getElementById("dm10").style.color = "Red"; break;
                case 50: resultado = 'La décima respuesta es correcta';
                        document.getElementById("dm10").style.color = "#1607AE"; break;
        }
        document.getElementById('dm10').innerHTML = resultado; alert('La evaluación ha terminado')

}