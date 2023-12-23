import { ReactNode } from "react";
type LayoutProps = {
	children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
	return <section className="layout">{children}</section>;
};
export default Layout;
