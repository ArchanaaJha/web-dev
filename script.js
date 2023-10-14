function displayRelated(type) {
    const selectElement = document.getElementById(`${type}-select`);
    const selectedValue = selectElement.value;
    const displayRelatedDiv = document.getElementById('display-related');
    displayRelatedDiv.innerHTML = '';
  
    if (type === 'teacher') {
      displayRelatedDiv.innerHTML = `<h3>Students for ${selectedValue}:</h3><ul>
                                        <li>Student 1</li>
                                        <li>Student 2</li>
                                     </ul>`;
    } else if (type === 'student') {
      displayRelatedDiv.innerHTML = `<h3>Teachers for ${selectedValue}:</h3><ul>
                                        <li>Teacher 1</li>
                                        <li>Teacher 2</li>
                                     </ul>`;
    }
  }//   Level 2 - Generate Certificate for Teacher and Student Pair
//  For simplicity, let's generate a certificate with the teacher and student names:
function generateCertificate() {
    const teacher = document.getElementById('teacher-select').value;
    const student = document.getElementById('student-select').value;
  
    const certificateText = `Certificate of Achievement
      This is to certify that ${student} has successfully completed the course under the guidance of ${teacher}.`;
  
    alert(certificateText);
  }
//   You can call this function when you want to generate a certificate.
// Level 3 - Verify Certificate using JWT Token (Basic Example)
function verifyCertificate() {
    const certificateToken = 'example_jwt_token'; // Replace with your actual JWT token
  
    // Here you would verify the token using your backend server
  
    if (certificateToken) {
      alert('Certificate verified successfully.');
    } else {
      alert('Certificate verification failed.');
    }
  }
  
  
