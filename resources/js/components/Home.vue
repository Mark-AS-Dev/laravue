<template>
    <v-app>
        <v-container>
            <v-row justify="center">
                <v-col cols="7">
                    <p class="text-xl-h1 text-h3 text-secondary text-center text--secondary">SIMPLE LARAVEL</p>
                    <p class="text-xl-h1 text-h3 text-secondary text-center text--secondary">VUE CRUD</p>
                    <p class="text-xl-h4 text-h5 text-secondary text-center text--disabled">For Beginner</p>
                    <p class="text-xl-h5 text-h5 text-secondary text-center text--secondary mt-12">Steps to use</p>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col col="12" sm="12" md="12" lg="7">
                        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                        <v-timeline-item color="red lighten-2" large>
                        <v-card class="elevation-2">
                            <v-card-title class="headline">Composer Install</v-card-title>
                        </v-card>
                        </v-timeline-item>
                        <v-timeline-item color="red lighten-2" large>
                            <v-card class="elevation-2">
                                <v-card-title class="headline">Npm Install</v-card-title>
                            </v-card>
                        </v-timeline-item>
                        <v-timeline-item color="red lighten-2" large>
                            <v-card class="elevation-2">
                                <v-card-title class="headline">Configure Database(env)</v-card-title>
                                <v-card-text>
                                    DB_CONNECTION<br>
                                    DB_HOST<br>
                                    DB_PORT<br>
                                    DB_DATABASE<br>
                                    DB_USERNAME<br>
                                    DB_PASSWORD<br>
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                        <v-timeline-item color="red lighten-2" large>
                            <v-card class="elevation-2">
                                <v-card-title class="headline">Run Laravel Migration</v-card-title>
                                <v-card-text>
                                    php artisan migrate
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                        <v-timeline-item color="red lighten-2" large>
                            <v-card class="elevation-2">
                                <v-card-title class="headline">Run Laravel Database Seeder</v-card-title>
                                <v-card-text>
                                    php artisan db:seed
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                        <v-timeline-item color="red lighten-2" large>
                            <v-card class="elevation-2">
                                <v-card-title class="headline">Login Credential</v-card-title>
                                <v-card-text>
                                    <p>Username: admin@laravue.com</p>
                                    <p>Password: admin123</p>
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                        <v-timeline-item color="red lighten-2" large>
                            <v-card class="elevation-2">
                                <v-card-title class="headline">Directories & Files to look for</v-card-title>
                                <v-treeview
                                    :items="directories"
                                ></v-treeview>
                            </v-card>
                        </v-timeline-item>
                        <v-timeline-item color="red lighten-2" large>
                            <v-card class="elevation-2">
                                <v-card-title class="headline">Dependency Used</v-card-title>
                                <v-card-text>
                                    <p>vue</p>
                                    <p>vue-router</p>
                                    <p>vuetify</p>
                                    <p>axios</p>
                                    <p>lodash</p>
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
export default {
    data: () => ({
        directories:[
            { id: 38, name: '.env' },
            { id: 39, name: 'webpack.mix.js' },
            {
                id: 1,
                name: 'Controller',
                children: [
                    { 
                        id: 2, 
                        name: 'App',
                        children:[
                            { 
                                id: 3,
                                name: 'Http',
                                children:[
                                    { 
                                        id: 4, 
                                        name: 'Controllers',
                                        children:[
                                            { id: 5, name: 'LoginController.php' },
                                            { id: 6, name: 'ContactController.php' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
            },
            {
                id: 7,
                name: 'Model',
                children: [
                    { 
                        id: 8, 
                        name: 'App',
                        children:[
                            { id: 3, name: 'User.php' },
                            { id: 3, name: 'Contact.php' }
                        ]
                    }
                ],
            },
            {
                id: 9,
                name: 'Request',
                children: [
                    { 
                        id: 10, 
                        name: 'App',
                        children:[
                            { 
                                id: 11,
                                name: 'Http',
                                children:[
                                    { 
                                        id: 12, 
                                        name: 'Requests',
                                        children:[
                                            { id: 13, name: 'LoginRequest.php' },
                                            { id: 14, name: 'UserRequest.php' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
            },
            {
                id: 15,
                name: 'Database',
                children: [
                    { 
                        id: 16, 
                        name: 'Migrations',
                        children:[
                            { id: 17, name: '2014_10_12_000000_create_users_table.php' },
                            { id: 18, name: '2020_08_06_154437_create_contacts_table.php' }
                        ]
                    },
                    { 
                        id: 19, 
                        name: 'Seeds',
                        children:[
                            { id: 20, name: 'DatabaseSeeder.php' },
                            { id: 21, name: 'UserSeeder.php' }
                        ]
                    }
                ],
            },
            {
                id: 22,
                name: 'Routes',
                children:[
                    { id: 23, name: 'web' }
                ]
            },
            {
                id: 24,
                name: 'Front',
                children: [
                    { 
                        id: 25, 
                        name: 'Resources',
                        children:[
                            { 
                                id: 26, 
                                name: 'js',
                                children:[
                                    { id: 27, name: 'app.js'},
                                    { id: 28, name: 'routes.js'},
                                    { id: 29, name: 'vuetify.js'},
                                    { 
                                        id: 30, 
                                        name: 'components',
                                        children:[
                                            { id: 31, name: 'Dashboard.vue' },
                                            { id: 32, name: 'Home.vue' },
                                            { id: 33, name: 'Login.vue' },
                                        ]
                                    
                                    },
                                    { 
                                        id: 34,
                                        name: 'views',
                                        children:[
                                            { id: 35, name: 'App.vue' }
                                        ]
                                    
                                    }
                                ]
                            
                            },
                            { 
                                id: 36,
                                name: 'views',
                                children:[
                                    { id: 37, name: 'app.blade.php' }
                                ]
                            
                            }
                        ]
                    }
                ],
            },
        ]
    })
}
</script>