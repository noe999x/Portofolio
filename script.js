document.addEventListener('DOMContentLoaded', function() {
    var terminal = document.querySelector('.terminal');
    var terminalBody = document.querySelector('.terminal-body');
    var commandInput = document.querySelector('#command-input');
    var currentTheme = 'default';

    commandInput.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            var command = commandInput.value;
            executeCommand(command);
            commandInput.value = '';
        }
    });

    function executeCommand(command) {
        var output = '';

        if (command === '--help') {
            output = '• Command usage : -command<br>' + '• Available commands : <br>' +
                     '-about: Show information about me <br>' +
                     '-skills: Show my skills <br>' +
                     '-projects: Show my projects <br>' +
                     '-contact: Show my contact information <br>' + '-clear: Clear terminal history <br>' +
                     '-theme <color>: Change the terminal theme<br>• Available theme colors<br>--red<br>--blue<br>     --green<br>--pink<br>--transparent<br>--default<br>     command usage : -theme --color';
        } else if (command === '-about') {
            output = 'Jelaskan dirimu secara singkat, padat, bangs*t.';
        } else if (command === '-skills') {
            output = 'My skills include: <br>' +
                     '- HTML <br>' +
                     '- CSS <br>' +
                     '- JavaScript <br>' +
                     '- Responsive Web Design <br>' +
                     '- UI/UX Design';
        } else if (command === '-projects') {
            output = 'Here are some of my projects: <br>' +
                     '- Project 1: Description of project 1 <br>' +
                     '- Project 2: Description of project 2 <br>' +
                     '- Project 3: Description of project 3';
        } else if (command === '-contact') {
            output = 'You can reach me at: <br>' +
                     '- Email: example@example.com <br>' +
                     '- Phone: 123-456-7890 <br>' +
                     '- LinkedIn: linkedin.com/example <br>' +
                     '- GitHub: github.com/example';
        } else if (command.startsWith('-theme')) {
            var theme = command.split(' ')[1];
            if (theme === '--green' || theme === '--blue' || theme === '--red' || theme === '--pink' || theme === '--transparent' || theme === '--default') {
                setTheme(theme);
                output = 'theme set to ' + theme;
            } else {
                output = '<p><span class="error">ERROR' + '</span>: invalid theme. -theme --colors or --help</p>';
            }
        } else if (command === '-clear') {
        // Menghapus semua elemen anak dari .terminal-body, kecuali elemen dengan class .output
          var commandElements = document.querySelectorAll('.terminal-body > p:not(.output)');
          commandElements.forEach(function(element) {
            element.remove();
            });
            return; // Menghentikan eksekusi perintah selanjutnya
        } else {
            output = '<p><span class="error">ERROR' + '</span>: command "' + command + '" not found.</p>';
        }
        terminalBody.innerHTML += '<p><span class="command">' + command + '</span></p>';
        terminalBody.innerHTML += '<p>' + output + '</p>';
    }

    function setTheme(theme) {
        if (theme === '--green') {
            terminal.classList.remove('theme-blue', 'theme-red', 'theme-transparent', 'theme-pink', 'theme-default');
            terminal.classList.add('theme-green');
        } else if (theme === '--blue') {
            terminal.classList.remove('theme-green', 'theme-red', 'theme-pink', 'theme-transparent', 'theme-default');
            terminal.classList.add('theme-blue');
        } else if (theme === '--red') {
            terminal.classList.remove('theme-green', 'theme-blue', 'theme-pink', 'theme-transparent', 'theme-default');
            terminal.classList.add('theme-red');
        } else if (theme === '--pink') {
            terminal.classList.remove('theme-green', 'theme-blue', 'theme-red', 'theme-transparent', 'theme-default');
            terminal.classList.add('theme-pink');
        } else if (theme === '--transparent') {
            terminal.classList.remove('theme-green', 'theme-blue', 'theme-red', 'theme-pink', 'theme-default');
            terminal.classList.add('theme-transparent');
        } else if (theme === '--default') {
            terminal.classList.remove('theme-green', 'theme-blue', 'theme-red', 'theme-transparent', 'theme-pink');
            terminal.classList.add('theme-default');
        } else {
            terminal.classList.remove('theme-green', 'theme-blue', 'theme-red', 'theme-pink', 'theme-transparent', 'theme-default');
        }
        currentTheme = theme;
    }
});

    function openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
       document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
    
    function toggleNav() {
      var navbarOptions = document.getElementById('navbarOptions');
      navbarOptions.style.display = (navbarOptions.style.display === 'block') ? 'none' : 'block';
    }
