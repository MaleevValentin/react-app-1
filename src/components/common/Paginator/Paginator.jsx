import React from "react";
import styles from "../Paginator/Paginator.module.css";

export let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => {
            return <span className={currentPage === p ? styles.selectedPage : null}
                         key={p.id}
                         onClick={(event) => {
                             onPageChanged(p);
                         }}>{p}</span>
        })}
    </div>
}

export default Paginator;