import {notFound} from "next/navigation"
import React from "react";
import Image from "next/image";
import styles from "../[]/styles.module.css"

async function getPosts(id) {
    try{
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
    return response.json();
    }catch(err){
        throw new Error(err);
    }
}

export default async function Page({params}){

    const {id , title , body} = await getPosts(params.id);

    if (! title) {
        return notFound();
    }
    
    return (
        <div className={styles.blogContainer}>
            <div className={styles.cardImage}>
                <Image
                    src={`https://picsum.photos/200/3007random=${id}`}
                    alt="Blog Card Image"
                    width={96}
                    height={96}
                />
                  
            </div>
            <h1 className={styles.title}>{title}</h1>
            <p>{body}</p>
        </div>   
    );
}