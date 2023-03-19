import type { LayoutServerLoad } from './$types';
export const load = (async (event: { locals: { user: any; }; }) => {
	const user = event.locals.user;
	return { user };
}) satisfies LayoutServerLoad;