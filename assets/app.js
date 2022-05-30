const paper = document.getElementById('paper')
const rock = document.getElementById('rock')
const scissors = document.getElementById('scissors')
const komputerQerar = document.getElementById('komputer-secim')
const komputerNetice = document.getElementById('netice')
const siyahi = ["paper.png", "rock.png", "scissors.png"]
paper.onclick = seciminiet
rock.onclick = seciminiet
scissors.onclick = seciminiet

function seciminiet(){
    const menimQerarim = this.dataset.id
    const komputerinYekunQerari = randomSeciminiEt()
    let netice = ''
    if(menimQerarim==komputerinYekunQerari){
        netice = 'Try again'
    } 
    else if(menimQerarim==0 && komputerinYekunQerari==1){
        netice = 'You Win'
    }
    else if(menimQerarim==0 && komputerinYekunQerari==2){
        netice = 'You Lose'
    }
    else if(menimQerarim==1 && komputerinYekunQerari==0){
        netice = 'You Lose'
    }
    else if(menimQerarim==1 && komputerinYekunQerari==2){
        netice = 'You Win'
    }
    else if(menimQerarim==2 && komputerinYekunQerari==0){
        netice == 'You Win'
    }
    else if(menimQerarim==2 && komputerinYekunQerari==1){
        netice = 'You Lose'
    }
    else{
        netice = 'You win'

    }
    komputerNetice.innerText = netice
    
}

function randomSeciminiEt(){
    const say = Math.round(Math.random()*2)
    komputerQerar.src = `./image/${siyahi[say]}`
    return say
}