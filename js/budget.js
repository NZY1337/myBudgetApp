

////////////////////////////////////////////////////////////////////
/////////////// my budget App will be very nasty :O ///////////////
//////////////////////////////////////////////////////////////////



// get the present Month of the year
function presentMonth() {
    const month = new Array( "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" );
    let date = new Date();
    let actualMonth = month[date.getMonth()];
    let day = date.getDate();
    
    const getThePresentMonth = document.getElementById('presentMonth');
    getThePresentMonth.innerHTML = 
        `
        <h4 class="text-center "> Today is  </br> 
            <span class="bg-danger d-block p-2 mt-2">${day} ${actualMonth}</span> 
        </h4>
        `    
}
presentMonth();


// add your income FUNCTION

const del = document.getElementById('delete-sum');
const removeBlock = document.getElementById('sum-del');
let item = document.getElementById('item');
let sum = document.getElementById('your-income');
let fokus = document.getElementById('focus');

del.style.display = 'none';


function hasFokus() {
    fokus.classList.add('d-inline');    

    $(item).on('click', function(){
        if ($(this).is( ":focus" )) {
            fokus.innerHTML = 'only numbers';
        }
    });
}

hasFokus();


const form = document.getElementById('addForm');
// add ev listener to my form
form.addEventListener('submit', yourIncome);

let finalPrice;
function yourIncome(e) {
    e.preventDefault();
    fokus.classList.remove('d-inline');
    fokus.classList.add('d-none');
    
    // delete the price + button, reset sum
    if (sum) {  
        del.addEventListener('click', removeSum);
        function removeSum() {
            item.value = '';
            removeBlock.style.display = 'none';
        }
    }
    
    // if the input's value is empty
    if(item.value !== '') {
        sum.innerText = item.value + " RON";
        del.style.display = 'block';
        item.value = '';
        removeBlock.style.display = 'block';
    } 
    finalPrice = sum.innerHTML;
    
    
    
}









// take the value of the function




