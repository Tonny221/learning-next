"use client"
import React, { useEffect } from 'react'
import api from "../../services/api"
import MovieCard from '@/components/MovieCard'
import axios from 'axios'
type Props = {}

const page = (props: Props) => {
    useEffect(() => {
        getTitles()
    })

    const getTitles = async () => {
        await api.get("titles")
            .catch((response) => {
                console.log(response)
                console.log("gadsd")
            })
            .catch((error) => {
                console.log(error)
            })
        console.log("aaaaaaaaa")
        // axios.get('https://moviesdatabase.p.rapidapi.com/titles', {
        //     headers: {
        //         'X-RapidAPI-Key': '4bb7604d9amshb898be1d7913227p13ae2fjsn2e01ffb4801e',
        //         'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        //     }
        // }).then((res) => console.log(res))
    }

    return (
        <div>
            <h1>Movies</h1>

            <MovieCard />
        </div>
    )
}

export default page