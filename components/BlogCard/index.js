import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../BlogCard/styles.module.css"


function BlogCard({title , body , id}){
    return(
        <Link href={`/${id}`} className={styles.card}>
            <div>
                <Image
                    src={`https://picsum.photos/200/3007random=${id}`}
                    alt="Blog Card Image"
                    width={96}
                    height={96}
                />
                  
            </div>
            <div className={styles.cardBody}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div> 
        </Link>
    );
}


export default BlogCard;