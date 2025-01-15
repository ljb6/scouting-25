import { json } from '@sveltejs/kit';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

import { PRIVATE_KEY, CLIENT_EMAIL } from '$env/static/private';

const SCOPES = [
	'https://www.googleapis.com/auth/spreadsheets',
	'https://www.googleapis.com/auth/drive.file'
];

const jwt = new JWT({
	email: CLIENT_EMAIL,
	key: PRIVATE_KEY,
	scopes: SCOPES
});

const doc = new GoogleSpreadsheet('1gZv_PPdWqnUHL3vysYP8IGss4Oh_3dtMRjev4x4UUis', jwt);

export async function POST({ request }) {
	try {
		const data = await request.json();

		console.log('Dados:', data);

		await doc.loadInfo();
		const brba = doc.sheetsByTitle['BRBA'];

		brba.addRows([
			{
				name: data.name,
				email: data.email,
				teamNumber: data.teamNumber,
				matchNumber: data.matchNumber,
				matchLevel: data.matchLevel,

				// auto
				autoL1Corals: data.autoL1Corals,
				autoL2Corals: data.autoL2Corals,
				autoL3Corals: data.autoL3Corals,
				autoL4Corals: data.autoL4Corals,
				autoProcessor: data.autoProcessor,
				autoNet: data.autoNet,
				autoLeft: data.autoLeft,

				// tele
				teleL1Corals: data.teleL1Corals,
				teleL2Corals: data.teleL2Corals,
				teleL3Corals: data.teleL3Corals,
				teleL4Corals: data.teleL4Corals,
				teleProcessor: data.teleProcessor,
				teleNet: data.teleNet,

				// end
				endPark: data.endPark,
				endClimbAttempt: data.endClimbAttempt,
				endClimbLevel: data.endClimbLevel,
				endClimbFailed: data.endClimbFailed,
				endDefense: data.endDefense,
				endRobotFailed: data.endRobotFailed,
				endFouls: data.endFouls,
				comments: data.comments
			}
		]);

		return json({ success: true, message: 'Data received with success.' });
	} catch (err) {
		console.log('Erro: ', err);
		return json({ success: false, message: 'Error with data processing.' }, { status: 500 });
	}
}
