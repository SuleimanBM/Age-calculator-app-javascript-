const submit = document.getElementById('check')

  
submit.addEventListener('click', (event) => {
    event.preventDefault()
  
const dyear = document.getElementById('dyears')
const dmonth = document.getElementById('dmonths')
const dday = document.getElementById('ddays')
const dayvalue = document.getElementById('day').value
const monthvalue = document.getElementById('month').value
const yearvalue = document.getElementById('year').value
const daybox = document.getElementById('day')
const monthbox = document.getElementById('month')
const yearbox = document.getElementById('year')
const dayerror = document.getElementById('dayerror')
const montherror = document.getElementById('montherror')
const yearerror = document.getElementById('yearerror')
const monthvaluenum = Number(monthvalue)
const dayvaluenum = Number(dayvalue)
const yearvaluenum = Number(yearvalue)
const date = new Date()
const currentyear = date.getFullYear()
const currentmonth = date.getMonth() +1
const currentday = date.getDate()
var day = true;
var month = true;
var year = true;
 
    if(dayvaluenum >31 || dayvaluenum < 1){
                dayerror.innerHTML ="invalid day"
                dayerror.style.color ="red"
                daybox.style.border = "1px solid red"
                daybox.style.color = "red"
                day = false
    }else if([4, 6, 9, 11].includes(monthvaluenum)){
            if(dayvaluenum > 30 || dayvaluenum < 1){
                dayerror.innerHTML ="invalid day"
                dayerror.style.color ="red"
                daybox.style.border = "1px solid red"
                daybox.style.color = "red"
                day = false
            }
    }else if([1, 3, 5, 7, 8, 10, 12].includes(monthvaluenum)) {
            if(dayvaluenum > 31 || dayvaluenum < 1){
                dayerror.innerHTML ="invalid day"
                dayerror.style.color ="red"
                daybox.style.border = "1px solid red"
                daybox.style.color = "red"
                day = false
            }  
    }else if([2].includes(monthvaluenum)) {
           if(yearvaluenum % 4 === 0){
            if(dayvaluenum > 29 || dayvaluenum < 1){
                dayerror.innerHTML ="invalid day"
                dayerror.style.color ="red"
                daybox.style.border = "1px solid red"
                daybox.style.color = "red"
                day = false
            }
        }else {
            if(dayvaluenum > 28 || dayvaluenum < 1){
                dayerror.innerHTML ="invalid day"
                dayerror.style.color ="red"
                daybox.style.border = "1px solid red"
                daybox.style.color = "red"
                day = false
            } 
            }
        }
        
    if(monthvaluenum > 12 || monthvaluenum < 1){
            montherror.innerHTML ="invalid month"
            montherror.style.color ="red"
            monthbox.style.border = "1px solid red"
            monthbox.style.color = "red"
            month = false
        }
if(yearvaluenum > currentyear){
            yearerror.innerHTML ="invalid year"
            yearerror.style.color ="red"
            yearbox.style.border = "1px solid red"
            yearbox.style.color = "red"
            year = false
        }

    daybox.addEventListener('input',() => {
            dayerror.innerHTML = '';
            daybox.style.border = '';
            daybox.style.color = "";
            monthbox.style.border = "";
            monthbox.style.color = "";
            yearbox.style.border = ""
            yearbox.style.color = ""
        });
        
    monthbox.addEventListener('input', () => {
            montherror.innerHTML = "";
            monthbox.style.border = "";
            monthbox.style.color = "";
            daybox.style.border = '';
            daybox.style.color = "";
            yearbox.style.border = ""
            yearbox.style.color = ""
        });
        
    yearbox.addEventListener('input',() => {
            yearerror.innerHTML = "";
            yearbox.style.border = ""
            yearbox.style.color = ""
            monthbox.style.border = "";
            monthbox.style.color = "";
            daybox.style.border = '';
            daybox.style.color = "";
         
        });
        if((currentyear == yearvaluenum) && (monthvaluenum > currentmonth)){
            if(dayvaluenum > currentday){
                 // montherror.innerHTML ="invalid month"
            montherror.style.color ="red"
            monthbox.style.border = "1px solid red"
            monthbox.style.color = "red"
            //yearerror.innerHTML ="invalid year"
            //yearerror.style.color ="red"
            //yearbox.style.border = "1px solid red"
            //yearbox.style.color = "red"
            //dayerror.innerHTML ="invalid day"
            dayerror.style.color ="red"
            daybox.style.border = "1px solid red"
            daybox.style.color = "red"
            alert("The date you entered is in the future!")
            }else{
                alert('The month is in the future')
                montherror.style.color ="red"
                monthbox.style.border = "1px solid red"
                monthbox.style.color = "red"
            }
          
        }else if((currentyear == yearvaluenum) && (monthvaluenum == currentmonth) && (dayvaluenum > currentday)){
           montherror.style.color ="red"
           monthbox.style.border = "1px solid red"
           monthbox.style.color = "red"
           //yearerror.innerHTML ="invalid year"
           //yearerror.style.color ="red"
           //yearbox.style.border = "1px solid red"
           //yearbox.style.color = "red"
           //dayerror.innerHTML ="invalid day"
           dayerror.style.color ="red"
           daybox.style.border = "1px solid red"
           daybox.style.color = "red"
           alert("The date you entered is in the future!")
        } else{
            if((year == true) && (month == true) && (day == true)){
                let years = currentyear - yearvaluenum
                let months = currentmonth - monthvaluenum
                let days = currentday -dayvaluenum
                if(currentday >= dayvaluenum){
                    if(currentmonth >= monthvaluenum){
                        if(days >= 30){
                            dyear.innerHTML = years
                            dmonth.innerHTML = months + 1
                            dday.innerHTML = 0
                        }else{
                            dyear.innerHTML = years
                            dmonth.innerHTML = months
                            dday.innerHTML = days
                        }
                    }else {
                        days = currentday - dayvaluenum
                        if(days >= 30){
                            dyear.innerHTML = years-1
                            dmonth.innerHTML = ((12 - monthvaluenum) + currentmonth) + 1
                            dday.innerHTML = 0
                        }else{
                            dyear.innerHTML = years - 1
                            dmonth.innerHTML = (12 - monthvaluenum) + currentmonth
                            dday.innerHTML = currentday - dayvaluenum
                        }
                       
                    }
                }else{
                    function getDaysInMonth(month, year) {
                        return new Date(year, month, 0).getDate();
                      }
                      
                    const themonth = getDaysInMonth((currentmonth - 1), yearvaluenum)
                    if(currentmonth >= monthvaluenum){
                        days = (themonth - dayvaluenum) + currentday
                        if(days >= 30){
                            dyear.innerHTML = years
                            dmonth.innerHTML = ((currentmonth - monthvalue) - 1) + 1
                            dday.innerHTML = 0
                        }else{
                            dyear.innerHTML = years
                        dmonth.innerHTML = (currentmonth - monthvalue) - 1
                        dday.innerHTML = (themonth - dayvaluenum) + currentday
                        }
                    }else {
                        if(currentmonth >= monthvaluenum){
                            days = (themonth - dayvaluenum) + currentday
                            if(days >= 30){
                                dyear.innerHTML = years-1
                                dmonth.innerHTML = (((12 - monthvaluenum) + currentmonth) -1) + 1
                                dday.innerHTML = 0
                            }else{
                                dyear.innerHTML = years - 1
                                dmonth.innerHTML = ((12 - monthvaluenum) + currentmonth) -1
                                dday.innerHTML = (themonth - dayvaluenum) + currentday
                            }
                     
                    }
                }
            } }else{
                dyear.innerHTML = '--'
                dmonth.innerHTML = '--'
                dday.innerHTML = '--'
               }
        }
})


