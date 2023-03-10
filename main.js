var config = {

    //le type, permet de définir la gestion du rendu. AUTO laisse le navigateur choisir. 
    type: Phaser.AUTO,

    //définie les dimmensions de la fenetre de jeu, 
    //la map peut faire la taille que vous souhaitez (bon y'a une limite mais je ne sais plus a combien elle est),
    width: 1600,
    height: 1600,


physics: {
        default: 'arcade',
        arcade: {
            //définie la gravité, son orientation et l'affichage du débug.
            gravity: { y: 300 },
            debug: true
        }
    },

//définie l'ordre de lecture des scènes
scene: {
        preload: preload,
        create: create,
        update: update
    }
};

//la variable game permet de lancé le jeu selon les paramètres de config
var game = new Phaser.Game(config);

    //déclaration variable 
    let player;
    let playerLife = 3;
    let playerDead = false;
    let monster;
    let deathMonster;
    let piques;
    let clef1 = false;
    let clef2 = false;
    let clef3 = false;
    let clef4 = false;
    let warp1;
    let warp2;
    let warp3;
    let warp4;
    let warp5;
    let warp6;
    let warp7;
    let warp8;
    let warp9;
    let warp10;


    function preload(){

        this.load.image('bd',"assets/background_test.png")
        this.load.spritesheet('player','asset/')


        //this.load.tilemapTiledJSON('temple','assets/temple.json')

    }

    function create(){

        this.add.image(800,800,'bg')

    }

    function update(){

    }