import type { NextPage } from 'next'

import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

import { Layout } from '../components/layouts'
import { EntryList, NewEntry } from '../components/ui'

const HomePage: NextPage = () => {

    return (
        <Layout title='Home | Open Jira'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} >
                    <Card sx={{ height: 'calc(100vh - 90px)' }}>
                        <CardHeader title="Pendientes" />
                        <NewEntry />
                        <EntryList status='pending' />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="En Progreso" />
                        {/* Agregar nueva tarea */}
                        <EntryList status='in-progress' />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="Completadas" />
                        {/* Agregar nueva tarea */}
                        <EntryList status='finished' />
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default HomePage
