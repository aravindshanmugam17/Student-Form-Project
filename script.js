let name = document.getElementById('name')
let age = document.getElementById('age')
let male = document.getElementById('male')
let female = document.getElementById('female')
let btn = document.getElementById('add')
let table = document.getElementById('table')
let email=document.getElementById('email')
let moblie =document.getElementById('moblie')
let gender

male.addEventListener('click',()=>{
    gender=male.value
})

female.addEventListener('click',()=>{
    gender=female.value
})

btn.addEventListener('click', () => {
    let template= `
            <tr>
                 <td>${name.value}</td>
                 <td>${age.value}</td>
                 <td>${email.value}</td>
                 <td>${moblie.value}</td>
                 <td>${gender}</td>
            </tr>
             `
                table.innerHTML+=template
})

function update(){
    alert("Submmitted Successfully")
}

