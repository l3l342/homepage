const directories = {
    education: [
        '',
        '<white>education</white>',

        '* <a href="https://en.wikipedia.org/wiki/Kielce_University_of_Technology">Kielce University of Technology</a> <yellow>"Computer Science"</yellow> 2002-2007 / 2011-2014',
        '* <a href="https://pl.wikipedia.org/wiki/Szko%C5%82a_policealna">Post-secondary</a> Electronic School <yellow>"Computer Systems"</yellow> 2000-2002',
        '* Electronic <a href="https://en.wikipedia.org/wiki/Technikum_(Polish_education)">Technikum</a> with major <yellow>"RTV"</yellow> 1995-2000',
        ''
    ],
    projects: [
        '',
        '<white>Open Source projects</white>',
        [
            ['jQuery Terminal',
             'https://terminal.jcubic.pl',
             'library that adds terminal interface to websites'
            ],
            ['LIPS Scheme',
             'https://lips.js.org',
             'Scheme implementation in JavaScript'
            ],
            ['Sysend.js',
             'https://jcu.bi/sysend',
             'Communication between open tabs'
            ],
            ['Wayne',
             'https://jcu.bi/wayne',
             'Pure in browser HTTP requests'
            ],
        ].map(([name, url, description = '']) => {
            return `* <a href="${url}">${name}</a> &mdash; <white>${description}</white>`;
        }),
        ''
    ].flat(),
    skills: [
        '',
        '<white>languages</white>',

        [
            'JavaScript',
            'TypeScript',
            'Python',
            'SQL',
            'PHP',
            'Bash'
        ].map(lang => `* <yellow>${lang}</yellow>`),
        '',
        '<white>libraries</white>',
        [
            'React.js',
            'Redux',
            'Jest',
        ].map(lib => `* <green>${lib}</green>`),
        '',
        '<white>tools</white>',
        [
            'Docker',
            'git',
            'GNU/Linux'
        ].map(lib => `* <blue>${lib}</blue>`),
        ''
    ].flat()
};

function prompt() {
    return (`ben@host:`);
}

const commands = {    
    help() {
        term.echo(`Available commands: ${help}`);

    }, 
    echo(...args) {
        term.echo(args.join(' '));
    }
};

const greetings ='                                      )\r\n                            )      ((     (\r\n                           (        ))     )\r\n                    )       )      \/\/     (\r\n               _   (        __    (     ~->>\r\n        ,-----\' |__,_~~___<\'__`)-~__--__-~->> <\r\n        | \/\/  : | -__   ~__ o)____)),__ - \'> >-  >\r\n        | \/\/  : |- \\_ \\ -\\_\\ -\\ \\ \\ ~\\_  \\ ->> - ,  >>\r\n        | \/\/  : |_~_\\ -\\__\\ \\~\'\\ \\ \\, \\__ . -<-  >>\r\n        `-----._| `  -__`-- - ~~ -- ` --~> >\r\n         _\/___\\_    \/\/)_`\/\/  | ||]\r\n   _____[_______]_[~~-_ (.L_\/  ||\r\n  [____________________]\' `\\_,\/\'\/\r\n    ||| \/          |||  ,___,\'.\/\r\n    ||| \\          |||,\'______|\r\n    ||| \/          \/|| I==||\r\n    ||| \\       __\/_||  __||__\r\n-----||-\/------`-._\/||-o--o---o---\r\n  ~~~~~\'';


const term = $('.term').terminal(commands, {
    greetings,
    checkArity: false,
    exit: false,
    completion: true,
    prompt
});


const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
  });

const command_list = ['clear'].concat(Object.keys(commands));
const help = formatter.format(command_list);

