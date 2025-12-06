// import { error } from '@sveltejs/kit';

// export const load = async () => {
// 	try {
// 		const ReadMeFile = await import('$lib/main/README.md');
// 		const ReadMe = ReadMeFile.default;

// 		return {
// 			ReadMe: ReadMeFile.default,
// 			metadata: ReadMeFile.metadata || {}
// 		};
// 	} catch (err) {
// 		error(500, err);
// 	}
// };
