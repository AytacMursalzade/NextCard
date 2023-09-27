import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./styles.module.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
