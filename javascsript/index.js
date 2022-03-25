// Aplikasi Mini Discord Channel

// Kalo mau eksplor, silahkan, stepnya
// 1. Fork dulu ke github kalian
// 2. Edit dan ekspor index.js
// 3. Add dan commit
// 4. Push ke repo yang sudah di fork
// 5. Pull request => bisa melalui terminal ataupun langsung dari github

let channel = [];
let totalVoice = 350;

function createVoice(point) {
    for (let i = 1; i <= point; i++) {
        channel.push(i);
    }    
}

let displayVoice = point => {

    let userLimit = 5;

    let userRandom = () =>{
        const characters = 'ABCDEFGHIJKLMNOPQRASTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        let randomTemp = '';
        let charLength = characters.length;
        for (let i = 0; i < 15; i++) {
            randomTemp += characters.charAt(Math.floor(Math.random() * charLength));
        }
        return randomTemp;
    }

    let loopGroup = (condition, init, limit, user, index) => {
        if (channel[index] === condition) {
            // Loop Channel
            for (let l = init; l < limit; l++) {
                console.log(`   \n  Kelompok ${channel[l]} - ${userLimit} User`);
                // Loop User 
                for (let k = 1; k <= user; k++) {
                    console.log(`       ${k}.${userRandom()}`);
                }
            }
        }
    }

    // Execute
    for (let j = 0; j < point; j++) {
        
        console.log(`\nVOICE EXTENDED ${j+1}`);

        loopGroup(1, 0, 50, 5, j);
        loopGroup(2, 50, 100, 5, j);
        loopGroup(3, 100, 150, 5, j);
        loopGroup(4, 150, 200, 5, j);
        loopGroup(5, 200, 250,5, j);
        loopGroup(6, 250, 300,5, j);
        loopGroup(7, 300, 350, 5, j);            
    }

    return 0;
}

// Call Function
createVoice(totalVoice);
displayVoice(7);