window.onload = function(){

}


function index(){
    let url = '=====';
    ajax['get'](url, function(){

    });
}

function recruitment(){
    let url = '=====';
    ajax['get'](url, function(){

    });
}

function tutorInformation(){
    let url = '=====';
    ajax['get'](url, function(){

    });
}
function login(){
    let url = '=====';
    ajax['get'](url, function(){

    });
}

function register(){
    let url = '=====';
    ajax['get'](url, function(){

    });
}


var ajax = {
    get: function (url, fn) {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 | xhr.status == 304) {
                    console.log(xhr.responseText);
                    fn.call(this, xhr.responseText);
                } else {
                    console.log(xhr.status);
                }
            } else {
                console.log(xhr.readyState);
            }
        }
        xhr.send(null);
    },

    post: function (url, data, fn) {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 400) {
                if (xhr.status == 200 | xhr.status == 304) {
                    console.log(xhr.responseText);
                    fn.call(this, xhr.responseText);
                }
            }
        }
        xhr.send(data);
    }
}


function everything(){

}

function subjectMath(){

}

function subjectEnglish(){

}

function subjectChinese(){

}

function keySearch(){
    let keyWord = document.getElementById('keyWord');
    let data = 'keyWord?'+keyWord;
    let url = '';
    ajax['post'](url, data, function(){

    })
}

function lookInformation(data){
    let tutorTitle = document.getElementById('tutorTitle');
    let tutorTime = document.getElementById('tutorTime');
    let claim = document.getElementById('claim');
    let teacherNumber = document.getElementById('teacherNumber');
    let specific = document.getElementById('specific');
    let gender = document.getElementById('gender');
    let tutorFee = document.getElementById('tutorFee');

    tutorTitle.innerHTML = data.tutorTitle;
    tutorTime.innerHTML = data.tutorTime;
    claim.innerHTML = data.claim;
    teacherNumber.innerHTML = data.teacherNumber;
    specific.innerHTML = data.specific;
    gender.innerHTML = data.gender;
    tutorFee.innerHTML = data.tutorFee;
}

function apply(){
    alert('this is todo!');
}