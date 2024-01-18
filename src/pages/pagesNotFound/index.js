
import Header from "../../components/Header";
import erro404 from "./erro404.png";
import styles from "./pagesNotFound.module.css";
import Footer from "../../components/Footer";



function PageNotFound(){
    return (
        <>
        <Header />
        <section className={styles.container}>
            <h2>Ops! Conteúdo não localizado!</h2>
            <img src={erro404} alt="Logo de Páginas Não Localizada" />
        </section>
        <Footer />
        </>
    );
}

export default PageNotFound;