<script>
	import '../app.css';
	import { supabase } from '../supabase.js';
	import { user } from '../stores/authStore.js';
	import Auth from '../components/Auth.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { loadTodos } from '../stores/todoStore.js';

	user.set(supabase.auth.user());
</script>

<Auth />
