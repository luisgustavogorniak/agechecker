function check(){
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.getElementById('res')
    if (fyear.value== 0 || fyear.value>year) {
        window.alert('[ERROR]Check data and try again!')
    }else{
        var fgender = document.getElementsByName('radgen')
        var age = year - fyear.value
        var gender = ''
        var img = document.querySelector('div#img')
        if(fgender[0].checked){
            gender = 'man'
            if(age>=0&&age<10){ 
                img.innerHTML= '<img src="images/childman.png" width="400">'
            }else if (age< 30){
                img.innerHTML= '<img src="images/youngman.png" width="400">'
            }else if (age<50){
                img.innerHTML= '<img src="images/middleman.png" width="400">'
            }else{
                img.innerHTML= '<img src="images/elderman.png" width="400">'
            }
        }else if (fgender[1].checked){
            gender = 'woman'
            if(age>=0&&age<10){
                img.innerHTML= '<img src="images/childwoman.png" width="400">'
            }else if (age< 30){
                img.innerHTML= '<img src="images/younggirl.png" width="400">'
            }else if (age<50){
                img.innerHTML= '<img src="images/middlewoman.png" width="400">'
            }else{
                img.innerHTML= '<img src="images/elderwoman.png" width="400">'
            }
        }else if(fgender[2].checked)
            gender = 'trans'
        res.innerHTML=`${age} years old ${gender}.`
        

    }
}

