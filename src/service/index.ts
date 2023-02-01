import { Country, Countries, CountryLanguages } from "@/types";
import { gql, request } from "graphql-request";

const graphqlAPI = "https://countries.trevorblades.com/";

export const getCountries: () => Promise<Country[]> = async () => {
	const query = gql`
		query {
			countries {
				code
				name
			}
		}
	`;

	const result: Countries = await request(`${graphqlAPI}`, query);

	return result.countries;
};

export const getCountryLanguages = async (code: string) => {
	const query = gql`
		query ($code: ID!) {
			country(code: $code) {
				languages {
					name
				}
			}
		}
	`;

	const result: CountryLanguages = await request(`${graphqlAPI}`, query, {
		code,
	});

	return result.country.languages;
};
