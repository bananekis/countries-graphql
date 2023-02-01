export interface Country {
	code: string;
	name: string;
}
export interface Countries {
	countries: Country[];
}
export interface CountryLanguages {
	country: {
		languages: Language[];
	};
}
export interface Language {
	name: string;
}
