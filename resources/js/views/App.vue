<template>
    <v-app>

        <v-app-bar app>
            <v-toolbar-title>Laravel Vue CRUD</v-toolbar-title>
            <v-spacer></v-spacer>
            <template v-if="isLoaded">
                <router-link to="/" class="text-decoration-none" style="color:rgba(0, 0, 0, 0.87)"><v-icon class="mr-2" size="20">mdi-home</v-icon>Home</router-link>
                <router-link to="/login" v-if="!isLoggedIn" class="ml-4 text-decoration-none" style="color:rgba(0, 0, 0, 0.87)"><v-icon class="mr-2" size="20">mdi-login</v-icon>Login</router-link>
                <template v-else>
                    
                    <router-link to="/dashboard" class="ml-4 text-decoration-none" style="color:rgba(0, 0, 0, 0.87)"><v-icon class="mr-2" size="20">mdi-view-dashboard</v-icon>Dashboard</router-link>
                    <v-menu left bottom>
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-list-item-title><v-icon class="mr-2" size="20">mdi-account</v-icon> {{ user ? user.name : '' }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title @click="doLogout" style="cursor:pointer"><v-icon class="mr-2" size="20">mdi-export</v-icon> Logout</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </template>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <router-view @getLoginResult="getLoginResult" @getLoginDetail="getLoginDetail"></router-view>
            </v-container>
        </v-main>
         <v-footer dark padless>
            <v-card
            class="flex"
            flat
            tile
            >
            <v-card-title class="dark">
                <strong class="subheading">Mark Angelo Sila - Web Developer</strong>

                <v-spacer></v-spacer>

                <v-btn class="mx-4" dark icon href="https://www.facebook.com/GeloSila" target="_blank">
                    <v-icon size="24px">mdi-facebook</v-icon>
                </v-btn>
                <v-btn class="mx-4" dark icon href="https://github.com/Mark-AS-Dev" target="_blank">
                    <v-icon size="24px">mdi-github</v-icon>
                </v-btn>
            </v-card-title>
            </v-card>
        </v-footer>
    </v-app>
</template>
<script>
export default {
    data: () => ({
        isLoaded: false,
        isLoggedIn: false,
        user:null,
    }),
    methods:{
        getLoginResult(data){
            this.isLoggedIn = data
        },
        getLoginDetail(data){
            this.user = data
        },
        getUser(){
            var self = this
            axios.get('/user')
                .then(function (response) {
                    self.isLoaded = true
                    self.isLoggedIn = response.data.id ? response.data.id : false
                    self.user = response.data 
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
        doLogout(){
            var self = this
            axios.post('/logout')
                .then(function (response) {
                    if(response.data.status == 'success'){
                        localStorage.removeItem('jwt')
                        self.isLoggedIn = false
                        self.$router.push({ name: 'login' })
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
    },
    created(){
        this.getUser()
    }
}
</script>