import React from "react";
import styles from "./MovieRow.module.css"

export default ({ title, items }) => {
    return (

        <div className={styles.movieRow}>
            {/* Aqui mostra os nomes das listas na tela */}
            <h2>{title}</h2>
            <div className={styles.movieRowListArea}>
                {/* Se tiver algum filme para mostrar na lista faça um .map */}
                <div className={styles.movieRowList}>{items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key} className={styles.movieRowItem}>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                    </div>
                    ))}
                </div>


            </div>
        </div>
    )

}