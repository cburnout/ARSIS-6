import { readable } from 'svelte/store';

type Astronaut = {
	name: string;
	oxygen: number;
	battery: number;
	co2: number;
	heartRate: number;
	temperature: number;
	location: string;
	fanSpeed: number;
};

export const numberofastronauts = 3;
function getastros() {
	let astronauts: Array<Astronaut> = [];
	for (let i = 0; i < numberofastronauts; i++) {
		astronauts.push({
			name: `EV-${i + 1}`,
			oxygen: Math.floor(Math.random() * 100),
			battery: Math.floor(Math.random() * 100),
			co2: Math.floor(Math.random() * 1000),
			heartRate: Math.floor(Math.random() * 100),
			temperature: Math.floor(Math.random() * 100),
			location: 'Mars',
			fanSpeed: Math.floor(Math.random() * 100)
		});
	}
	return astronauts;
}
export const biometrics = readable(getastros(), (set) => {
	const interval = setInterval(() => {
		set(getastros());
	}, 1000);

	return () => clearInterval(interval);
});
