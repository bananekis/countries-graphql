import { getCountries, getCountryLanguages } from "@/service";
import { Country, Language } from "@/types";
import { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

type Props = {
	posts: Country[];
};

const Home: NextPage<Props> = ({ posts }) => {
	const [languages, setLanguages] = useState<Language[]>([{ name: "" }]);

	return (
		<div className={styles.container}>
			<div>
				{posts.map((country) => (
					<div
						key={country.code}
						className={styles.pointer}
						onClick={() =>
							getCountryLanguages(country.code).then((res) => {
								setLanguages(res);
							})
						}
					>
						{country.name}
					</div>
				))}
			</div>
			<div className={styles.fixed}>
				<p>supported languages:</p>
				{languages.map((lan) => (
					<div>{lan.name}</div>
				))}
			</div>
		</div>
	);
};

export const getStaticProps = async () => {
	const posts = (await getCountries()) || [];

	return { props: { posts } };
};

export default Home;
