var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
let pwd = false;
var commands = [];

// startup
setTimeout(function () {
    loopLines(start_sequence_1, "", 200);
    setTimeout(() => {
        loopLines(start_sequence_2, "", 200);
    }, "1000");
    setTimeout(() => {
        loopLines(start_sequence_3, "", 200);
    }, "2500");
    setTimeout(() => {
        // loopLines(start_sequence_4, "", 200);
        document.getElementById("terminal.style").innerHTML = "";
    }, "3000");
    setTimeout(() => {
        loopLines(banner, "", 80);
    }, "4000");
    textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 181) {
        document.location.reload(true);
    }
    if (e.keyCode == 13) {
        commands.push(command.innerHTML);
        git = commands.length;
        addLine("> " + command.innerHTML, "no-animation", 0);
        commander(command.innerHTML.toLowerCase());
        command.innerHTML = "";
        textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
        git -= 1;
        textarea.value = commands[git];
        command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
        git += 1;
        if (commands[git] === undefined) {
            textarea.value = "";
        } else {
            textarea.value = commands[git];
        }
        command.innerHTML = textarea.value;
    }
}

function commander(cmd) {
    switch (cmd.toLowerCase()) {
        case "help":
            loopLines(help, "index margin", 80);
            break;
        case "whois":
            loopLines(whois, "index margin", 80);
            break;
        case "whoami":
            loopLines(whoami, "index margin", 80);
            break;
        case "socials":
        case "social":
            loopLines(social, "index margin", 80);
            break;
        case "education":
            loopLines(education, "index margin", 80);
            break;
        case "experience":
            loopLines(experience, "index margin", 80);
            break;
        case "projects":
            loopLines(projects, "index margin", 80);
            break;
        case "awards":
        case "honors":
            loopLines(honors, "index margin", 80);
            break;
        case "admin":
        case "sudo":
        case "password":
            addLine('<br><span class="inherit"> You\'re gonna have to try harder than that!</span><br><br>', "error", 100);
            break;
        case "history":
            addLine("<br>", "", 0);
            loopLines(commands, "index", 80);
            addLine("<br>", "command", 80 * commands.length + 50);
            break;
        case "email":
            addLine('<br>Opening mailto:<a href="mailto:kyle.goetke@gmail.com"><span class="command">kyle.goetke@gmail.com</span></a>   ...<br><br>', "index", 80);
            newTab(email);
            break;
        case "cl":
        case "clear":
            setTimeout(function () {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            break;
        case "banner":
            loopLines(banner, "", 80);
            break;
        // socials
        case "linkedin":
            addLine("<br>Opening LinkedIn...<br><br>", "index", 0);
            newTab(linkedin);
            break;
        case "github":
            addLine("<br>Opening GitHub...<br><br>", "index", 0);
            newTab(github);
            break;
        case "mainsite":
            addLine('<br>Opening website...<br><br>', "index", 80);
            newTab(website);
            break;
        default:
            addLine('<br><span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span><br><br>', "error", 100);
            break;
    }
}

function newTab(link) {
    setTimeout(function () {
        window.open(link, "_blank");
    }, 500);
}

function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function () {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = "style";

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function (item, index) {
        addLine(item, style, index * time);
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}