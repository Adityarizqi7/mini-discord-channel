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

    let lengthChannel = channel.length;
    let userLimit = 05;

    for (let j = 0; j < point; j++) {
        
        console.log(`\n VOICE EXTENDED ${j+1}`);

        if (channel[j] === 1) {
            for (let l = 0; l < 50; l++) {
                console.log(`   Kelompok ${channel[l]} - ${userLimit} User`);
            }
        }
        if (channel[j] === 2) {
            for (let l = 50; l < 100; l++) {
                console.log(`   Kelompok ${channel[l]} - ${userLimit} User`);
            }
        }
        if (channel[j] === 3) {
            for (let l = 100; l < 150; l++) {
                console.log(`   Kelompok ${channel[l]} - ${userLimit} User`);
            }
        }
        if (channel[j] === 4) {
            for (let l = 150; l < 200; l++) {
                console.log(`   Kelompok ${channel[l]} - ${userLimit} User`);
            }
        }
        if (channel[j] === 5) {
            for (let l = 200; l < 250; l++) {
                console.log(`   Kelompok ${channel[l]} - ${userLimit} User`);
            }
        }
        if (channel[j] === 6) {
            for (let l = 250; l < 300; l++) {
                console.log(`   Kelompok ${channel[l]} - ${userLimit} User`);
            }
        }
        if (channel[j] === 7) {
            for (let l = 300; l < 350; l++) {
                console.log(`   Kelompok ${channel[l]} - ${userLimit} User`);
            }
        }
            
    }

    return 0;
}

createVoice(totalVoice);
displayVoice(7);