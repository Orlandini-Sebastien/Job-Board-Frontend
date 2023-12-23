import { ReactElement } from "react";

type FooterProps = { foot: string };
const Footer = ({ foot }: FooterProps): ReactElement => {
	return <footer>{foot}</footer>;
};
export default Footer;
