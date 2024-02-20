



//   let form = document.forms
//         let course = document.getElementById('course-name');
//         let startDate = document.getElementById('start-date');
//         let duration = document.getElementById('duration');
//         let indexNumber = document.getElementById('index-number');
//         let addBtn = document.getElementById('addBtn');
//         let removeBtn = document.getElementById('remBtn');
//         let updateBtn = document.getElementById('updBtn');
//         let deleteBtn = document.getElementById('delBtn');

  function save(){

        

        database.ref('course/' + course).set({
            index : indexNumber,
            course : course,
            startDate : startDate,
            duration  : duration

        })

        alert("Saved")
  }

  function get(){}

  function update(){}

  function remove(){}
