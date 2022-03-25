// Aplikasi Mini Discord Channel

// Kalo mau eksplor, silahkan, stepnya
// 1. Fork dulu ke github kalian
// 2. Edit dan ekspor index.js
// 3. Add dan commit
// 4. Push ke repo yang sudah di fork
// 5. Pull request => bisa melalui terminal ataupun langsung dari github

package main

import (
	"fmt"
	"math/rand"
)

var channel []int
var userLimit int = 5;
var totalVoice int = 350;

func main() {
	createVoice(totalVoice)
	displayVoice(7);
}

func createVoice(point int) {
	for i := 1; i <= point; i++ {
		channel = append(channel, i)
	}
}

// Catch Random User
func userRandom(temp string) string {
	characters := []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")
	strRandom := make([]rune, 15)

	for i := range strRandom {
		strRandom[i] = characters[rand.Intn(len(characters))]
	};

	return string(strRandom)
}

// Loop All
func loopGroup(condition, init, limit, user, index int)  {
	if channel[index] == condition {
		// Loop Channel
		for i := init; i < limit; i++ {
			fmt.Println("	Kelompok ",channel[i], " - ", userLimit, " User")
			// Loop User
			for j := 1; j <= user; j++ {
				fmt.Println("		",j, ".", userRandom(""));
			}
		}
	}
}

func displayVoice(point int) {

	for j := 0; j < point; j++ {
		fmt.Println("VOICE EXTENDED",j+1)

		loopGroup(1, 0, 50, 5, j);
        loopGroup(2, 50, 100, 5, j);
        loopGroup(3, 100, 150, 5, j);
        loopGroup(4, 150, 200, 5, j);
        loopGroup(5, 200, 250,5, j);
        loopGroup(6, 250, 300,5, j);
        loopGroup(7, 300, 350, 5, j);            
	}
}