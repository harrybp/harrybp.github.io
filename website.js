var website = {
    name: '<a onclick="toggleDarkMode()">^-^</a> harrycats',
    width: 700,
    padding: '|',
    pages: [

        {
            title: 'Projects',
            link: 'projects.html',
            tabs: [
                {
                    tabName: 'Games',
                    title: 'Game Projects',
                    content: [
                        'Various Games made by me over the last few years in my spare time. Made either in pure HTML5 with javascript and the canvas or in C++ and compiled to web assembly. All should run in the browser. Only a couple of them work with mobile devices.',
                        '<b>Cave Escape (2019 - Present)</b> \n Avoid the monsters and try to escape the vast cave system. Collect as many coins as possible. Created in C++ and compiled to web-assembly using emscripten. Still a work in progress.\n <a href="games/cave_escape.html">Click</a> to play',
                        '<b>Ocean Simulator (2018)</b> \n Play with fishes and fish-eating worms in this fun little sandbox. This is an implementation of boids written in javascript. \n <a href="games/ocean_simulator.html">Click</a> to play',
                        '<b>Bounce (2018)</b> \n Sort of like 2D single-player pong? Keep the ball from escaping! Created in javascript - works on mobile.\n <a href="games/bounce.html">Click</a> to play',
                        '<b>Zombie Run (2017)</b> \n A side scrolling run-and-shoot type game with randomly generated caves. See how far you can get! Created in javascript - works on mobile.\n <a href="games/zombie_run.html">Click</a> to play',
                        '<b>Meteor Shower (2017)</b> \n Dodge falling blocks and collect health cubes as you try to survive for as long as possible. Created in javascript. \n <a href="games/meteor_shower.html">Click</a> to play',
                        '<b>Endless Climb (2017)</b> \n Race against time as you jump upwards from block to block in this fun little concept game. Created in javascript. \n <a href="games/endless_climb.html">Click</a> to play',
                        'Check my <a href="https://github.com/harrybp">github</a> for more stuff'
                    ]
                },
                {
                    tabName: 'Other',
                    title: 'Other Projects',
                    content: [
                        '<b>Texture Generation using ML (2018)</b> \n Created as part of my final year project at uni, a demonstration of a few methods of synthesising unique textures using machine learning methods. \n See the <a href="https://harrybp.github.io/texture_generation_demo/">demo</a> or check it out on <a href="https://github.com/harrybp/TextureGeneration">github</a>',
                        '<b>This website (2017 - Present)</b> \n A text-only interactive website built using javascript with support for a navbar, tabs, pop-ups, pop-overs and columns of text. Hint: try clicking the cat face in the nav bar! \n Check it out on <a href="https://github.com/harrybp/asciiSite">github</a>'

                    ]
                }
            ],
            popups: [
                {
                    title: '<b>Cave Escape!</b> [coming soon]',
                    width: 35,
                    position: 3
                }

            ]
        },


        // Pages
        {
            title: 'About Me',
            link: 'aboutme.html',
            tabs: [
                {
                    tabName: 'Info',
                    title: 'Site Information',
                    content: [
                        'Hi I\'m Harry!',
                        'This website serves as an archive for all of the web projects I have worked on over the years. The stuff on here is all for fun - I have been trying to learn game development so a lot of the projects are little games. Feel free to check them out and contact me with any feedback.',
                        ''
                    ]
                },
                {
                    tabName: 'Contact',
                    title: 'Contact Information',
                    content: [
                        {
                            type: 'columns',
                            text1: 'email',
                            text2: ' - harrybp@me.com',
                            seperate: false
                        },
                        {
                            type: 'columns',
                            text1: 'github',
                            text2: ' -<a href="https://github.com/harrybp">harrybp</a>',
                            seperate: false
                        },
                        ''
                    ]
                },
            ],
            popovers: [
                {
                    key: 'uom',
                    content: 'The University of Manchester',
                    width: 15
                }
            ]
        }

    ]
}
