function initialize() {
    document.getElementById("output").innerHTML = "Hello! I'm Kyle. Welcome to my interactive web terminal!<br><br>Click to navigate on the left or use the console below. Enter 'help' for a list of available commands.";
}

function aboutfile() {
    resetindicators()
    document.getElementById("aboutindicator").innerHTML = "> FILE <";
    document.getElementById("output").innerHTML = "Hello! I'm Kyle.<br><br>I'm a student, a musician, and a computer hardware enthusiast. I got my first computer when I was twelve years old and fell in love with technology. Since then I've accumulated knowledge and hands-on experience in a range of technical roles.<br><br>I attend Drexel University, where I'm studying Computing and Security Technology. I enjoy playing the drums, assembling computers, exploring Philadelphia, and rolling d20s.";
}

function educationfile() {
    resetindicators();
    document.getElementById("educationindicator").innerHTML = "> FILE <";
    document.getElementById("output").innerHTML = "<b>B.S. Computing and Security Technology</b><br>Drexel University - Philadelphia, PA<br>Cumulative GPA: 3.92<br>Expected Graduation: 2025<br><br><b>High School Diploma</b><br>Union County Academy for Information Technology - Scotch Plains, NJ<br>Cumulative GPA: 3.89<br>Graduated 2020";
}

function honorsfile() {
    resetindicators();
    document.getElementById("honorsindicator").innerHTML = "> FILE <";
    document.getElementById("output").innerHTML = "<b>Dean's List</b><br>Drexel University - Philadelphia, PA<br>Fall 2020 - Present<br><br><b>Eagle Scout</b><br>Troop 63 - New Providence, NJ<br>November 2019";
}

function resumefile() {
    resetindicators();
    document.getElementById("resumeindicator").innerHTML = "> FILE <";
    document.getElementById("output").innerHTML = "Opening /files/resume.pdf.....";
    setTimeout(function () {
        window.open("resume.pdf");
    }, 1500);
}


function resetindicators() {
    list = ["about", "education", "honors", "resume"]
    experience_list = ["sec_analyst", "devops_engr", "it_intern", "asp_volunteer", "tech_asst"];
    list.forEach((element) => {
        newid = element + "indicator";
        document.getElementById(newid).innerHTML = "- FILE -";
    });
    if (document.getElementById("sec_analyst").innerHTML != "") {
        experience_list.forEach((element) => {
            newid = element + "indicator";
            document.getElementById(newid).innerHTML = "- FILE -";
        });
    }
}




function experiencefolder() {
    resetindicators();
    experience_list = ["sec_analyst", "devops_engr", "it_intern", "asp_volunteer", "tech_asst"];
    if (document.getElementById("sec_analyst").innerHTML == "") {
        experience_list.forEach((element) => {
            document.getElementById(element).className = "menutexthover";
            document.getElementById(element).innerHTML = `&nbsp;${element}.txt`;
            newid = element + "indicator"
            document.getElementById(newid).innerHTML = "- FILE -";
            document.getElementById(newid).className = "menuText";
        });
        document.getElementById("output").innerHTML = "opened directory: experience"
        document.getElementById("expindicator").innerHTML = ">FOLDER<";
    } else {
        experience_list.forEach((element) => {
            document.getElementById(element).className = "hiddenfile";
            document.getElementById(element).innerHTML = "";
            newid = element + "indicator";
            document.getElementById(newid).innerHTML = "";
            document.getElementById(newid).className = "hiddenfile";
        });
        document.getElementById("output").innerHTML = "closed directory: experience";
        document.getElementById("expindicator").innerHTML = "-FOLDER-";
    }
}











function sec_analyst() {
    resetindicators();
    document.getElementById("sec_analystindicator").innerHTML = "> FILE <";
    document.getElementById("output").innerHTML = "<b>Security Analyst</b><br>Susquehanna International Group - Bala Cynwyd, PA<br>September 2022 - March 2023<br>- Automated phishing email detection, preventing dozens of emails from reaching end users weekly<br>- Investigated and responded to staged incidents, active threats, and policy violations<br>- Designed and implemented a PowerShell solution to automate adjustments to SIEM rule attributes, removing this task from analysts' weekly responsibilities<br>- Carried out regular reviews of potentially malicious emails and analyzed IOCs to prevent attacks<br>- Onboarded and trained Drexel co-ops with a variety of technical backgrounds<br>";
}

function devops_engr() {
    resetindicators();
    document.getElementById("devops_engrindicator").innerHTML = "> FILE <";
    document.getElementById("output").innerHTML = "<b>Associate DevOps Engineer</b><br>Health Union - Philadelphia, PA<br>September 2021 - March 2022<br>- Utilized Amazon Web Services and Docker to construct a CI/CD service and automate IaC deployment<br>- Led the development of a comprehensive guide for company-wide use, tailored to non-technical users<br>- Adhered to Agile Scrum development practices to guide development and task completion<br>- Managed infrastructure for over forty websites using Terraform, resulting in increased reliability and consistency in deployment<br>";
}

function it_intern() {
    resetindicators();
    document.getElementById("it_internindicator").innerHTML = "> FILE <";
    document.getElementById("output").innerHTML = "<b>IT Intern</b><br>Union County Vocational-Technical Schools - Scotch Plains, NJ<br>June 2019 - June 2021<br>- Resolved issues across a campus-wide network including hardware repair and software configuration<br>- Trained eight new interns to prepare them for success in the role throughout the following year<br>- Collaborated with faculty to find solutions for issues with productivity and connectivity<br>";
}

function asp_volunteer() {
    resetindicators();
    document.getElementById("asp_volunteerindicator").innerHTML = "> FILE <";
    document.getElementById("output").innerHTML = "<b>Volunteer</b><br>Appalachia Service Project - Virginia & West Virginia<br>July 2017 & July 2019<br>- Helped repair homes and improve living conditions for low-income families<br>- Cooperated with group members to achieve our goal in a limited time frame";
}

function tech_asst() {
    resetindicators();
    document.getElementById("tech_asstindicator").innerHTML = "> FILE <";
    document.getElementById("output").innerHTML = "<b>Technology Assistant</b><br>New Providence School District - New Providence, NJ<br>June 2016 - September 2018<br>- Responsible for organizing and installing new hardware and software<br>- Cooperated with team members to integrate new and existing technology systems<br>- Assisted faculty and staff with resolving technology issues";
}






function projectsfolder() {
    projects_list = ["x", "x", "x"];
    if (document.getElementById("projects1left").innerHTML == "") {
        // projects_list.forEach((element) => {
        //     document.getElementById(element).className = "menutexthover";
        //     document.getElementById(element).innerHTML = `&nbsp;${element}.txt`;
        // });
        document.getElementById("projects1left").innerHTML = "&nbsp;projectone.txt";
        document.getElementById("projects2left").innerHTML = "&nbsp;projecttwo.txt";
        document.getElementById("projects1right").innerHTML = "- FILE -";
        document.getElementById("projects2right").innerHTML = "- FILE -";
        document.getElementById("projects1left").className = "menutexthover";
        document.getElementById("projects2left").className = "menutexthover";
        document.getElementById("projects1right").className = "menutexthover";
        document.getElementById("projects2right").className = "menutexthover";
        document.getElementById("output").innerHTML = "opened directory: projects";
        document.getElementById("projectsindicator").innerHTML = ">FOLDER<";
    } else {
        // projects_list.forEach((element) => {
        //     document.getElementById(element).className = "hiddenfile";
        //     document.getElementById(element).innerHTML = "";
        // });
        document.getElementById("projects1left").innerHTML = "";
        document.getElementById("projects2left").innerHTML = "";
        document.getElementById("projects1right").innerHTML = "";
        document.getElementById("projects2right").innerHTML = "";
        document.getElementById("projects1left").className = "hiddenfile";
        document.getElementById("projects2left").className = "hiddenfile";
        document.getElementById("projects1right").className = "hiddenfile";
        document.getElementById("projects2right").className = "hiddenfile";
        document.getElementById("output").innerHTML = "closed directory: projects";
        document.getElementById("projectsindicator").innerHTML = "-FOLDER-";
    }
}


function project1() {
    document.getElementById("output").innerHTML = "project 1";
}

function project2() {
    document.getElementById("output").innerHTML = "project 2";
}
