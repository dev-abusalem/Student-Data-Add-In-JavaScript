let result =  document.getElementById('result');
let name =  document.getElementById('name');
let fname =  document.getElementById('fname');
let roll =  document.getElementById('roll');
let sclass =  document.getElementById('sclass');
let error =  document.getElementById('error');
let success =  document.getElementById('success');
let erroTxt =  document.getElementById('erroTxt');
let erroTxts = document.getElementById('erroTxts');

let addBtn =  document.getElementById('addBtn');
addBtn.addEventListener('click', addStudent);

function addStudent(e) {
	e.preventDefault();




	if(name.value === "" && fname.value === "" && roll.value === "" && sclass.value === ""){

		error.classList.add('show');
		error.classList.remove('hide;');

		erroTxt.innerText = "All Field";
		
	}
	else if(name.value === ""){
		error.classList.add('show');
		error.classList.remove('hide;');

		erroTxt.innerText = "Full Name ";


	}else if (fname.value === "") {
		error.classList.add('show');
		error.classList.remove('hide;');

		erroTxt.innerText = "Father Name ";
	}
	else if (roll.value === "") {
		error.classList.add('show');
		error.classList.remove('hide;');

		erroTxt.innerText = "Roll No. ";
	}
	else if (roll.value < 1 || roll.value > 85) {
		error.classList.add('show');
		error.classList.remove('hide;');

		
		erroTxts.innerHTML = `<strong class="font-bold">Invalid Roll No. <small> Its Must Be Less Then 85 And More Then 0 </small> </strong>`;
	}
	else if (sclass.value === "") {
		error.classList.add('show');
		error.classList.remove('hide;');

		erroTxt.innerText = "Class Name ";
	}else{


	// Add Student Data For Create A Object For Send To Local Storage 

	const stuData = {
		name : name.value,
		fname : fname.value,
		roll : roll.value,
		sclass : sclass.value,
	}

    const studData = JSON.stringify(stuData);
	const StData = localStorage.setItem("StudentData", studData);

// Get Student Data For Create A Object For Send To Local Storage 

	const getSdata = localStorage.getItem("StudentData");
	const storeSdata = JSON.parse(getSdata);
	
		




	result.innerHTML += 

	`

	<tr id="tbData" class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
	          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>

              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${storeSdata.roll}</td>
              <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                ${storeSdata.name}
              </td>
              <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                ${storeSdata.fname}
              </td>
              <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                ${storeSdata.sclass}
              </td>
              <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
               

               <button class="m-0.125 hover:bg-transparent font-semibold bg-teal-500 text-white hover:text-teal-500 border border-teal-500 py-1 px-4 rounded ">Edit</button>
               
               <button onclick="deletefnc()"  class="m-0.125 hover:bg-transparent font-semibold bg-rose-500 text-white hover:text-rose-500 border border-rose-500 py-1 px-4 rounded ">Delete</button>
               


              </td>
            </tr>
           


	`

	success.classList.add('show');
	success.classList.remove('hide;');

	}


	emptyInput()

	setTimeout(()=>{
			
		error.classList.remove('show');
		success.classList.remove('show');
	}
 	, 5000 )



	// Remove row 
	




}

 function emptyInput(){
 	name.value = "";
 	fname.value = "";
 	roll.value = "";
 	sclass.value = "";
 	
 }





let closeMsg = document.getElementById('close')
	closeMsg.addEventListener('click' , closeMsgs);


	function closeMsgs(){
		error.classList.remove('show');
		
	}

let closeMsg1 = document.getElementById('close1')
	closeMsg1.addEventListener('click' , closeMsgs1);


	function closeMsgs1(){
		
		success.classList.remove('show');
	}


let tb_delte = document.getElementById('tb_delte');
// Sweet Alert delete button function
function deletefnc(){

Swal.fire({
  title: 'Are you sure to delete this data?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#f43f5e',
  cancelButtonColor: '#000',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
   function deleteConfirm(e){
  	
  	console.log(e.target)

  }
  deleteConfirm();
  }

})

}

