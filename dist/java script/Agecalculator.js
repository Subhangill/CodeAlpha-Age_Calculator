function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (ageMonths <  0) {
        ageYears--;
        ageMonths += 12;
    }
  
    document.getElementById('result').textContent = `You are ${ageDays} days, ${ageMonths} months, and ${ageYears} years old.`;
    
}
