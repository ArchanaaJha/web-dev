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
  }
  