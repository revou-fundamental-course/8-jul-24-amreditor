document.getElementById('bmi-form').addEventListener('submit', function (event) {
    event.preventDefault();

  
    const gender = document.getElementById('gender').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    
    if (!gender || height <= 0 || weight <= 0) {
        alert("Please fill in all fields with valid values.");
        return;
    }

  
    const bmi = weight / ((height / 100) ** 2);
    let bmiCategory = "";

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi < 24.9) {
        bmiCategory = "Normal weight";
    } else if (bmi < 29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese";
    }


    document.getElementById('genderResult').textContent = `Gender: ${gender.charAt(0).toUpperCase() + gender.slice(1)}`;
    document.getElementById('bmiResult').textContent = `BMI: ${bmi.toFixed(2)}`;
    document.getElementById('categoryResult').textContent = `Category: ${bmiCategory}`;
    document.querySelector('.result').style.display = 'block'; // Show the result section
});