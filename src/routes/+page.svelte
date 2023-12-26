<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ articles } = data);
</script>


<div class="card card-body mx-auto px-16 max-w-3xl min-w-fit">
	<h1 class="chat-header text-3xl mb-6">Sveltekit Prisma Simple Article CRUD app</h1>

<div class="flex justify-between">
	<!-- Existing Articles -->
	<div class="mb-8 w-5/6 gap-8 grid grid-cols-2">
		{#each articles as article}
			<article class=" py-4 px-8 rounded-lg shadow-md">
				<header class="text-xl font-semibold mb-2">{article.title}</header>
				<p class="text-gray-700">
					{article.content}
				</p>
				<div class="mt-4 flex justify-between items-center">
					<form action="?/deleteArticle&id={article.id}" method="POST">
						<button class="bg-red-500 text-white px-4 py-2 rounded" type="submit"
							>Delete Article</button
						>
					</form>
					<a href="/{article.id}" class="text-blue-500 hover:underline">Edit Article</a>
				</div>
			</article>
		{/each}
	</div>

	<!-- New Article Form -->

	<button class="btn" on:click={() => document.getElementById('my_modal_2').showModal()}
		>Add Article</button
	>
	<dialog id="my_modal_2" class="modal">
		<form
			class="border p-4 rounded-lg shadow-md w-96 relative bg-neutral-950"
			method="POST"
			action="?/createArticle"
		>
			<form
				method="dialog"
				class="modal-backdrop text-red-600 absolute right-4 cursor-pointer z-50"
			>
				<button class="cursor-pointer px-8">X</button>
			</form>
			<h3 class="text-2xl font-bold mb-4">New Article</h3>

			<div class="mb-4">
				<label for="title" class="block text-sm font-medium text-gray-600">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					class="textarea textarea-primary mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
				/>
			</div>

			<div class="mb-4">
				<label for="content" class="block text-sm font-medium text-gray-600">Content</label>
				<textarea
					id="content"
					name="content"
					class="textarea textarea-primary mt-1 p-2 border rounded w-full h-32 resize-none focus:outline-none focus:ring focus:border-blue-300"
				></textarea>
			</div>

			<button
				type="submit"
				class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
				>Add Article</button
			>
		</form>
	</dialog>
</div>
</div>
