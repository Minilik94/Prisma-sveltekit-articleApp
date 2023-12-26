import { error, fail } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { articleId } = params;
	const getArticle = async () => {
		{
			const article = prisma.article.findUnique({
				where: {
					id: Number(articleId)
				}
			});

			if (!article) {
				throw error(404, 'Article not found');
			}

			return article;
		}
	};

	return {
		article: await getArticle()
	};
};

export const actions: Actions = {
	updateArticle: async ({ request, params }) => {
		const { title, content } = Object.fromEntries(
			(await request.formData()) as {
				title: string;
				content: string;
			}
		);

		try {
			const article = await prisma.article.update({
				where: {
					id: Number(params.articleId)
				},
				data: {
					title,
					content
				}
			});
		} catch (error) {
			console.error(error);
			return fail(500, {
				message: 'Could not update an article'
			});
		}

		return {
			status: 200
		};
	}
};
