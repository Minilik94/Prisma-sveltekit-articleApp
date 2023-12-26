<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData

	$: ({ article } = data);
</script>

<div>

    <button class="btn btn-ghost px-8  mx-12 mt-6" on:click={
        () => {
            goto('/')
        }
    }>
        🔙
    </button>
    
    <h1 class="text-4xl text-center mt-6">Editing:  {article.title} 📝</h1>

<form
	class=" p-4 rounded-lg shadow-md w-full h-full mx-auto max-w-2xl mt-20"
	method="POST"
	action="?/updateArticle"
>
	<div class="mb-4">
		<label for="title" class="block text-sm font-medium text-gray-600">Title</label>
		<input
			type="text"
			id="title"
			name="title"
			class="textarea textarea-primary mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
			value={article.title}
		/>
	</div>

	<div class="mb-4">
		<label for="content" class="block text-sm font-medium text-gray-600">Content</label>
		<textarea
			id="content"
			name="content"
			class="textarea textarea-primary mt-1 p-2 border rounded w-full h-32 resize-none focus:outline-none focus:ring focus:border-blue-300"
			value={article.content}
		/>
	</div>

	<button
		type="submit"
		class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
		>Update Article</button
	>
</form>
</div>
