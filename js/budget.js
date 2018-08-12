

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

del.style.display = 'none';

function yourIncome() {
    const form = document.getElementById('addForm');
    let item = document.getElementById('item');
    let sum = document.getElementById('your-income');
    let fokus = document.getElementById('focus');

    fokus.classList.add('d-inline');
    $(item).on('click', function(){
        if ($(this).is( ":focus" )) {
            fokus.innerHTML = 'only numbers';
        }
    });
    
    // add ev listener to my form
    form.addEventListener('submit', yourIncome);
    
    function yourIncome(e) {
        e.preventDefault();
        fokus.classList.remove('d-inline');
        fokus.classList.add('d-none');
        
        if(item.value !== '') {
            sum.innerHTML = item.value + " RON";
            del.style.display = 'block';
            item.value = '';
            if (sum) {
                del.addEventListener('click', removeSum);
                    function removeSum() {
                        //del.parentNode.removeChild(sum); // aici e problema
                        item.value = '';
                        removeBlock.style.display = 'none';
                    }
            } 
            removeBlock.style.display = 'block';
            
        } 
    }
  
}

yourIncome();


