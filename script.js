// useable commands in termianl
const commands = {    
    help() {
        term.echo(`Available commands: ${help}`);

    }, 
    echo(...args) {
        term.echo(args.join(' '));
    }, 
    time () {
        term.echo('13:12 its always 13:12');
    },
    switch_modes() {
    },
    about() {
        term.echo('hello');
    },
    hello() {
        term.echo(greetings);
    },
    projects() {

    },
    connect(){
        $(document).ready(function() {
            $('.term').append('<a href="github.com">Github</a>');
        });
    }

};

//greeting slogan
const greetings='\r\n                            )      (      (\r\n                           (        ))     )\r\n                    )       )      \/\/     (\r\n               _   (        __    (     ~->>\r\n        ,-----\' |__,_~~___<\'__`)-~__--__-~->> <\r\n        | \/\/  : | -__   ~__ o)____)),__ - \'> >-  >\r\n        | \/\/  : |- \\_ \\ -\\_\\ -\\ \\ \\ ~\\_  \\ ->> - ,  >>\r\n        | \/\/  : |_~_\\ -\\__\\ \\~\'\\ \\ \\, \\__ . -<-  >>\r\n        `-----._| `  -__`-- - ~~ -- ` --~> >\r\n         _\/___\\_    \/\/)_`\/\/  | ||]\r\n   _____[_______]_[~~-_ (.L_\/  ||\r\n  [____________________]\' `\\_,\/\'\/\r\n    ||| \/          |||  ,___,\'.\/\r\n    ||| \\          |||,\'______|\r\n    ||| \/          \/|| I==||\r\n    ||| \\       __\/_||  __||__\r\n-----||-\/------`-._\/||-o--o---o---\r\n  ~~~~~\'\r\nFor help type \'help\' in the terminal :)'

function prompt() {
    return (`guest@127.0.0.1 ~ % `);
}

//initalize terminal and settings
const term = $('.term').terminal(commands, {
    greetings,
    checkArity: false,
    exit: false,
    completion: true,
    prompt
});

//command list after help
const help = '\n\n general:\n hello - welcome screen\n clear - clear terminal output\n echo - print whats after echo\n help - you know what this does\n time - the time\n\n personal\n about - few things about me :)\n projects - my projects\n contact - how to contact me\n'

// make the text clickable
document.getElementById('about').addEventListener("click", function() {
    const command = $(this).text().trim();
    term.exec(command, {typing:true})
});

document.getElementById('connect').addEventListener("click", function() {
    const command = $(this).text().trim();
    term.exec(command, {typing:true})
});

document.getElementById('help').addEventListener("click", function() {
    const command = $(this).text().trim();
    term.exec(command, {typing:true})
});

document.getElementById('projects').addEventListener("click", function() {
    const command = $(this).text().trim();
    term.exec(command, {typing:true})
});

