import { error } from '@sveltejs/kit';

export const load = async () => {
	try {
		const ReadMeFile = await import('$posts/README.md');
		const ReadMe = ReadMeFile.default;

		return {
			ReadMe: ReadMeFile.default,
			metadata: ReadMeFile.metadata || {}
		};
	} catch (err) {
		error(500, err);
	}
};
