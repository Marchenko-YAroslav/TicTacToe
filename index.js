const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout

})

let matrix = [
    [['     '], ['     '], ['     ']],
    [['     '], ['     '], ['     ']],
    [['     '], ['     '], ['     ']]
]

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min;
}

function showMatrix(){
    console.log('     |     |     ')
    console.log(`${matrix.at(0).at(0)}|${matrix.at(0).at(1)}|${matrix.at(0).at(2)}`)
    console.log('     |     |     ')
    console.log('-----------------')
    console.log('     |     |     ')
    console.log(`${matrix.at(1).at(0)}|${matrix.at(1).at(1)}|${matrix.at(1).at(2)}`)
    console.log('     |     |     ')
    console.log('-----------------')
    console.log('     |     |     ')
    console.log(`${matrix.at(2).at(0)}|${matrix.at(2).at(1)}|${matrix.at(2).at(2)}`)
    console.log('     |     |     ')
}

rl.question('Оберіть режим гри: 2 гравці (Введіть 1) або з ботом (Введіть 2)', (answer) =>{
    if (answer === '1'){
        showMatrix()
        firstUser()
        
    }
    else if (answer === '2'){
        showMatrix()
        firstUser2()
    }
    else{
        console.log('Некоректний вибор! Будь ласка введіть 1 або 2');
    }
}
)




function firstUser(){
    rl.question('Оберіть стовпчик (вертикально)', (xwer) =>{
        xwer = Number(xwer) - 1;
        if (xwer < 0 || xwer > 3){
            console.log('Некоректе задання позиції, будь ласка введіть число від 1 до 3')
            firstUser()
        }
        else{
            rl.question('Оберіть стовпчик (горизонтально)', (xgor) =>{
                xgor = Number(xgor) - 1;
                if (xgor < 0 || xgor > 3){
                    console.log('Некоректе задання позиції, будь ласка введіть число від 1 до 3')
                    firstUser() 
                }else{
                    if (matrix.at(xwer).at(xgor) == 0){
                        matrix.at(xwer).at(xgor).splice(' ');
                        matrix.at(xwer).at(xgor).push('  x  ');
                        showMatrix()
                        if(matrix.at(0).at(0) == '  x  ' && matrix.at(0).at(1) == '  x  ' && matrix.at(0).at(2) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(1).at(0) == '  x  ' && matrix.at(1).at(1) == '  x  ' && matrix.at(1).at(2) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(2).at(0) == '  x  ' && matrix.at(2).at(1) == '  x  ' && matrix.at(2).at(2) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(0).at(0) == '  x  ' && matrix.at(1).at(0) == '  x  ' && matrix.at(2).at(0) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(0).at(1) == '  x  ' && matrix.at(1).at(1) == '  x  ' && matrix.at(2).at(1) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(0).at(2) == '  x  ' && matrix.at(1).at(2) == '  x  ' && matrix.at(2).at(2) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(0).at(0) == '  x  ' && matrix.at(1).at(1) == '  x  ' && matrix.at(2).at(2) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(0).at(2) == '  x  ' && matrix.at(1).at(1) == '  x  ' && matrix.at(2).at(0) == '  x  '){
                            winX()
                        }
                        else{
                            secondUser()
                        }
                    }
                    else{
                        console.log('Ця клітина зайнята, будь ласка, оберіть іншу')
                        firstUser();
                    }
            
            
                }
            });
        }
    });
}

function winX(){
    console.log('Перемога першого гравця!!!')
}

function secondUser(){
    console.log('ход другого гравця')
    rl.question('Оберіть стовпчик (вертикально)', (cell1)=> {
        rl.question('Оберіть стовпчик (горизонтально)', (cell2)=>{
            if (Number(cell1) >= 1 &&  Number(cell1) < 4 && Number(cell2) >= 1 &&  Number(cell2) < 4){
                cell1 = Number(cell1) - 1
                cell2 = Number(cell2) - 1
                if ( matrix.at(cell1).at(cell2) == 0){
                    matrix.at(cell1).at(cell2).splice(' ')
                    matrix.at(cell1).at(cell2).push('  O  ')
                    showMatrix()
                    if(matrix.at(0).at(0) == '  O  ' && matrix.at(0).at(1) == '  O  ' && matrix.at(0).at(2) == '  O  '){
                        win0()
                    }
                    else if(matrix.at(1).at(0) == '  O  ' && matrix.at(1).at(1) == '  O  ' && matrix.at(1).at(2) == '  O  '){
                        win0()
                    }
                    else if(matrix.at(2).at(0) == '  O  ' && matrix.at(2).at(1) == '  O  ' && matrix.at(2).at(2) == '  O  '){
                        win0()
                    }
                    else if(matrix.at(0).at(0) == '  O  ' && matrix.at(1).at(0) == '  O  ' && matrix.at(2).at(0) == '  O  '){
                        win0()
                    }
                    else if(matrix.at(0).at(1) == '  O  ' && matrix.at(1).at(1) == '  O  ' && matrix.at(2).at(1) == '  O  '){
                        win0()
                    }
                    else if(matrix.at(0).at(2) == '  O  ' && matrix.at(1).at(2) == '  O  ' && matrix.at(2).at(2) == '  O  '){
                        win0()
                    }
                    else if(matrix.at(0).at(0) == '  O  ' && matrix.at(1).at(1) == '  O  ' && matrix.at(2).at(2) == '  O  '){
                        win0()
                    }
                    else if(matrix.at(0).at(2) == '  O  ' && matrix.at(1).at(1) == '  O  ' && matrix.at(2).at(0) == '  O  '){
                        win0()
                    }
                    else{
                        firstUser()
                    }
                }else{
                console.log('Ця клітинка зайнята, оберіть іншу')
                secondUser()
                }
        }else{
            console.log('Немає такої клітинки , оберіть іншу')
            secondUser()
        }
        })  
    })

}

function firstUser2(){
    rl.question('Оберіть стовпчик (вертикально)', (xwer) =>{
        xwer = Number(xwer) - 1;
        if (xwer < 0 || xwer > 3){
            console.log('Некоректе задання позиції, будь ласка введіть число від 1 до 3')
            firstUser2()
        }
        else{
            rl.question('Оберіть стовпчик (горизонтально)', (xgor) =>{
                xgor = Number(xgor) - 1;
                if (xgor < 0 || xgor > 3){
                    console.log('Некоректе задання позиції, будь ласка введіть число від 1 до 3')
                    firstUser2() 
                }else{
                    if (matrix.at(xwer).at(xgor) == 0){
                        matrix.at(xwer).at(xgor).splice(' ');
                        matrix.at(xwer).at(xgor).push('  x  ');
                        showMatrix()
                        if(matrix.at(0).at(0) == '  x  ' && matrix.at(0).at(1) == '  x  ' && matrix.at(0).at(2) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(1).at(0) == '  x  ' && matrix.at(1).at(1) == '  x  ' && matrix.at(1).at(2) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(2).at(0) == '  x  ' && matrix.at(2).at(1) == '  x  ' && matrix.at(2).at(2) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(0).at(0) == '  x  ' && matrix.at(1).at(0) == '  x  ' && matrix.at(2).at(0) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(0).at(1) == '  x  ' && matrix.at(1).at(1) == '  x  ' && matrix.at(2).at(1) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(0).at(2) == '  x  ' && matrix.at(1).at(2) == '  x  ' && matrix.at(2).at(2) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(0).at(0) == '  x  ' && matrix.at(1).at(1) == '  x  ' && matrix.at(2).at(2) == '  x  '){
                            winX()
                        }
                        else if(matrix.at(0).at(2) == '  x  ' && matrix.at(1).at(1) == '  x  ' && matrix.at(2).at(0) == '  x  '){
                            winX()
                        }
                        else{
                            bot()
                        }
                    }
                    else{
                        console.log('Ця клітина зайнята, будь ласка, оберіть іншу')
                        firstUser2();
                    }
            
            
                }
            });
        }
    });
}

function bot(){
    let item = matrix.at(getRandomInt(0,3)).at(getRandomInt(0,3))
    if (item == 0){
        item.splice(' ');
        item.push('  O  ');
        console.log('  ')
        showMatrix();
        if(matrix.at(0).at(0) == '  O  ' && matrix.at(0).at(1) == '  O  ' && matrix.at(0).at(2) == '  O  '){
            winBot()
        }
        else if(matrix.at(1).at(0) == '  O  ' && matrix.at(1).at(1) == '  O  ' && matrix.at(1).at(2) == '  O  '){
            winBot()
        }
        else if(matrix.at(2).at(0) == '  O  ' && matrix.at(2).at(1) == '  O  ' && matrix.at(2).at(2) == '  O  '){
            winBot()
        }
        else if(matrix.at(0).at(0) == '  O  ' && matrix.at(1).at(0) == '  O  ' && matrix.at(2).at(0) == '  O  '){
            winBot()
        }
        else if(matrix.at(0).at(1) == '  O  ' && matrix.at(1).at(1) == '  O  ' && matrix.at(2).at(1) == '  O  '){
            winBot()
        }
        else if(matrix.at(0).at(2) == '  O  ' && matrix.at(1).at(2) == '  O  ' && matrix.at(2).at(2) == '  O  '){
            winBot()
        }
        else if(matrix.at(0).at(0) == '  O  ' && matrix.at(1).at(1) == '  O  ' && matrix.at(2).at(2) == '  O  '){
            winBot()
        }
        else if(matrix.at(0).at(2) == '  O  ' && matrix.at(1).at(1) == '  O  ' && matrix.at(2).at(0) == '  O  '){
            winBot()
        }
        else{
            firstUser2()
        }
    }
    else{
        bot();
    }
}


function win0(){
    console.log('перемога другого гравця !!!')
}

function winBot(){
    console.log('перемога бота !!!')
}
