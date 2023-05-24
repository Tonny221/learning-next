"use client"
import React, { useEffect } from 'react'
import api from "@/services/api"
import axios from 'axios'
import TeamCard from '@/components/TeamCard'
type Props = {}

const page = (props: Props) => {
    useEffect(() => {
        api.get("teams", {
            
        })
            .catch((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <h1>TEAMS</h1>

            <TeamCard />
        </div>
    )
}

export default page