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
    about() {
        term.echo('\nHello my Name is Ben and im a Software Developer from Germany :)\nIm 19 years old and live near Hamburg, Germany. I like to see new places and learn new things.\n\nRecently i graduated from high school and in the moment i try to do \nthings that seem important to me. For example supporting my familie \nwith cooking or working to get some money to see the world. \n\nOn this page you will see almost only my it background, thatswhy i \nwill tell you now my interests besides It: \nI really like to play Video games (Valorant, Minecraft Csgo), i also \nreally like to cook (my family and friends also like :) ). Furthermore im a very social person. I like to have people around me and hang out\nyeah thats me 👍');
    },
    hello() {
        term.echo(greetings);
    },
    projects() {
        term.echo('\n My projects:\n +++ please check out my Github for all projects +++ \n\n 🔫 Better Buff 🔫 - https://github.com/l3l342/Better-Buff \n Better Buff is a Windows-App where you can compare csgo item prices\n on different websites. The websites buff, skinport and steam will be  compared. The application is written in python and uses the library\n of customtkinter. Feel free to download an try, but read carefull the instructions on github :) \n\n 📰 Newspage 📰 - https://github.com/l3l342/Newspage \n For a school project i created a Newspaper website for an imaginary\n publisher. It was one of my first projects, but theres very much work in it. https://l3l342.github.io/Newspage-master/ link to the website, but not all features work. (the project is really old !)' );

    },
    connect(){
        term.echo('\n Connect with me:\n 📧 E-mail: ben.drtt[a.t]protonmail.com or write "mail"📧 \n 👾 Github: https://github.com/l3l342/ 👾 \n 🎸 Soundcloud: https://on.soundcloud.com/TofwycUwUog5uSFD8 🎸\n');
    },
    mail(){
        const mail = "ben.drtt[at]protonamil.com".replace("[at]", "@");
        window.location.href = `mailto:${mail}?subject=Subject&body=message%20goes%20here`;;
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

