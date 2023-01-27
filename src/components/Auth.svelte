<script>
	import { addTodo } from '../stores/todoStore.js';


	// import 'sweetalert2/src/sweetalert2.scss';
	import Swal from 'sweetalert2';

	// CommonJS
	// const Swal = require('sweetalert2')

	let iName = '';
	let iCompany = '';
	let iPhone = '';
	const handleSubmit = async () => {
		await addTodo(iName, iCompany, iPhone);
		Swal.fire('Success!', 'Please Wait for Good Stuff comes out!', 'success').then(() => {
			window.location.reload();
		});
		todo = '';
	};
</script>
<!-- a lot of the lines are just svg text, actual html is simple 
A sample contact us page form written with tailwind css
Illustration from undraw.co by the amazing Katerina Limpitsouni
-->
<body class="bg-gray-800 text-gray-100 px-8 py-5">
  <div class="flex items-center justify-center text-center w-full justify-center">
   
  </div>
  <div
    class="max-w-screen-xl mt-20  px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
    <div class="flex flex-col justify-between">
      <div>
        <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Keep it simple <br/>with</h2>
        <!-- <div class="text-gray-700 mt-8">
          Just fill the form.
        </div> -->
      </div>
      <div class="  text-center">
        <img src="https://staging.digas.id/logo.png" alt="logo" width="260" >
      </div>
    </div>
    <form class="form " on:submit|preventDefault={handleSubmit}>
    <div class="">
      <div>
        <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        name="name"
        bind:value={iName}
        required
        placeholder="John"
        type="text"
          >
      </div>
      <div class="mt-8">
        <span class="uppercase text-sm text-gray-600 font-bold">Company</span>
        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        name="company"
        required
        bind:value={iCompany}
        placeholder="Threego Indonesia">
      </div>
      <div class="mt-8">
        <span class="uppercase text-sm text-gray-600 font-bold">Phone Number</span>
        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        name="phone_no"
        required
        bind:value={iPhone}
        type="number"
        placeholder="Eg: 083213589">
      </div>
     
      <div class="mt-8">
        <button
          class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
          Get Free Sampling
        </button>
      </div>
    </div>
  </form>
  </div>
</body>