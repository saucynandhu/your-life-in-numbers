 document.getElementById("output1").style.display = "none";
 document.getElementById("output2").style.display = "none";
 document.getElementById("output25").style.display = "none";
 document.getElementById("output3").style.display = "none";
 document.getElementById("output4").style.display = "none";
 document.getElementById("output5").style.display = "none";
 document.getElementById("output6").style.display = "none";
 document.getElementById("output7").style.display = "none";

function getStats() {
    // Get current date
    let now = new Date();
    
    // Get DOB input
    let dobInput = document.getElementById("dob").value;
    if (!dobInput) {
        alert("Please enter a date of birth!");
        return;
    }
    
    // Convert to Date object
    let dob = new Date(dobInput);
    if (isNaN(dob.getTime())) {
        alert("Invalid date format! Please use YYYY-MM-DD");
        return;
    }
    if (dob > now) {
        alert("Date of birth cannot be in the future!");
        return;
    }
    
    // Calculate total time alive in milliseconds
    let diff = now - dob;


    
    // Convert to all time units
    let secondsAlive = Math.floor(diff / 1000);
    let minutesAlive = Math.floor(secondsAlive / 60);
    let hoursAlive = Math.floor(minutesAlive / 60);
    let daysAlive = Math.floor(hoursAlive / 24);
    let weeksAlive = Math.floor(daysAlive / 7);
    let monthsAlive = Math.floor(daysAlive / 30.44); // Avg month length
    let yearsAlive = Math.floor(daysAlive / 365.25); // Leap-year adjusted

    


    
  
    const taylorSwiftSongHours = Math.floor(hoursAlive / 0.166); 
    document.getElementById("output1").innerHTML = `You've been alive for <strong>${taylorSwiftSongHours}</strong> hours of "All Too Well (10 Minute Version)"!`;
    
    document.getElementById("output2").innerHTML = `You've outlived <strong>${daysAlive}</strong> mayflies. Congrats! 🎉`;
    
    
    const pizzaDeliveries = Math.floor(hoursAlive * 2); 
    document.getElementById("output25").innerHTML = 
        `You've been alive for <strong>${pizzaDeliveries}</strong> pizza deliveries. 🍕`;

    const plutoYears = (yearsAlive / 248).toFixed(2);
    document.getElementById("output3").innerHTML = 
        `You're <strong>${plutoYears}</strong> Pluto years old. 👽`;
    
   
    const tiktokTrends = Math.floor(monthsAlive / 3);
    document.getElementById("output4").innerHTML = 
        `You've survived <strong>${tiktokTrends}</strong> TikTok trends. 💀`;
    
 
    const presidentialTerms = Math.floor(yearsAlive / 4);
    document.getElementById("output5").innerHTML = 
        `You've endured <strong>${presidentialTerms}</strong> presidential terms. 🏛️`;
    
    const skyrimPlaythroughs = Math.floor(hoursAlive / 30);
    document.getElementById("output6").innerHTML = 
        `You could've beaten Skyrim <strong>${skyrimPlaythroughs}</strong> times. ⚔️`;
    
  
    const rickrolls = Math.floor(minutesAlive / 3.5);
    document.getElementById("output7").innerHTML = 
        `You've been alive for <strong>${rickrolls}</strong> Rick Astley rickrolls. 🎤`;
    
   
    document.getElementById("output").innerHTML = 
        `You've been alive for <strong>${daysAlive}</strong> days!`;


        document.getElementById("output1").style.display = "block";
        document.getElementById("output2").style.display = "block";
        document.getElementById("output25").style.display = "block";
        document.getElementById("output3").style.display = "block";
        document.getElementById("output4").style.display = "block";
        document.getElementById("output5").style.display = "block";
        document.getElementById("output6").style.display = "block";
        document.getElementById("output7").style.display = "block";


    const avgLife = 75;
    const percentLived = yearsAlive/avgLife * 100;
    const percent = Math.min(percentLived, 100);

    document.getElementById("progressBar").style.width = percent + "%";
   
}